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

    let classes;

    if (userRole === 'ADMIN') {
      classes = await prisma.class.findMany({
        include: {
          school: true,
          teacher: {
            select: { id: true, name: true, email: true },
          },
          students: true,
        },
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
        include: {
          school: true,
          teacher: {
            select: { id: true, name: true, email: true },
          },
          students: true,
        },
      });
    } else if (userRole === 'TEACHER') {
      classes = await prisma.class.findMany({
        where: { teacherId: userId },
        include: {
          school: true,
          teacher: {
            select: { id: true, name: true, email: true },
          },
          students: true,
        },
      });
    } else {
      return res.status(403).json({ error: 'Not authorized' });
    }

    res.json(classes);
  } catch (error) {
    console.error('Get classes error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getClass = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const classData = await prisma.class.findUnique({
      where: { id },
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
