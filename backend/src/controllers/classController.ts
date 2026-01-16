import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import prisma from '../utils/prisma';

export const createClass = async (req: AuthRequest, res: Response) => {
  try {
    const { name, schoolId } = req.body;
    const teacherId = req.user!.id;

    if (!name || !schoolId) {
      return res.status(400).json({ error: 'Name and schoolId are required' });
    }

    const newClass = await prisma.class.create({
      data: {
        name,
        schoolId,
        teacherId,
      },
      include: {
        school: true,
        teacher: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    res.status(201).json(newClass);
  } catch (error) {
    console.error('Create class error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getClasses = async (req: AuthRequest, res: Response) => {
  try {
    const userRole = req.user!.role;
    const userId = req.user!.id;
    const dateQuery = req.query.date as string;

    // Use provided date or default to start of today in UTC to match how we store/search
    // For simplicity, we'll assume the date passed is YYYY-MM-DD or use simple JS date matching
    // Ideally use a library like date-fns, but native JS works for simple cases
    let targetDateStart: Date;
    let targetDateEnd: Date;

    if (dateQuery) {
      const d = new Date(dateQuery);
      // Construct UTC date range for the query date
      targetDateStart = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 0, 0, 0));
      targetDateEnd = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), 23, 59, 59, 999));
    } else {
      const now = new Date();
      // Construct UTC date range for today
      targetDateStart = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0));
      targetDateEnd = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999));
    }

    let classes;

    const includeOptions = {
      school: true,
      teacher: {
        select: { id: true, name: true, email: true },
      },
      students: {
        include: {
          attendances: {
            where: {
              date: {
                gte: targetDateStart,
                lte: targetDateEnd,
              },
            },
          },
          behaviorEvents: {
            where: {
              date: {
                gte: targetDateStart,
                lte: targetDateEnd,
              },
            },
          },
        },
      },
    };

    if (userRole === 'ADMIN') {
      classes = await prisma.class.findMany({
        include: includeOptions,
      });
    } else if (userRole === 'COORDINATOR') {
      const school = await prisma.school.findUnique({
        where: { coordinatorId: userId },
      });

      if (!school) {
        return res.status(404).json({ error: 'School not found' });
      }

      classes = await prisma.class.findMany({
        where: { schoolId: school.id },
        include: includeOptions,
      });
    } else if (userRole === 'TEACHER') {
      classes = await prisma.class.findMany({
        where: { teacherId: userId },
        include: includeOptions,
      });
    } else {
      return res.status(403).json({ error: 'Not authorized' });
    }

    // Process classes to attach 'todayStatus' simplified field for frontend
    const classesWithStatus = classes.map((cls: any) => ({
      ...cls,
      students: cls.students.map((student: any) => {
        const attendance = student.attendances[0]; // Should be only 1 or 0 due to date filter
        
        // Calculate todayScore from fetched behaviorEvents
        const positives = student.behaviorEvents.filter((e: any) => e.type === 'positive').length;
        const negatives = student.behaviorEvents.filter((e: any) => e.type === 'negative').length;
        const todayScore = positives - negatives;

        return {

          ...student,
          todayStatus: attendance ? attendance.status : null,
          todayScore,
        };
      }),
    }));

    res.json(classesWithStatus);
  } catch (error) {
    console.error('Get classes error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getClass = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const classData = await prisma.class.findUnique({
      where: { id: id as string },
      include: {
        school: true,
        teacher: {
          select: { id: true, name: true, email: true },
        },
        students: {
          include: {
            attendances: {
              orderBy: { date: 'desc' },
              take: 30,
            },
            behaviorEvents: {
              orderBy: { date: 'desc' },
              take: 10,
            },
          },
        },
      },
    });

    if (!classData) {
      return res.status(404).json({ error: 'Class not found' });
    }

    res.json(classData);
  } catch (error) {
    console.error('Get class error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
