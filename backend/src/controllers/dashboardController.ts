import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import prisma from '../utils/prisma';
import { getDayRange } from '../utils/dateUtils';

export const getDashboard = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const userRole = req.user!.role;

    if (userRole !== 'TEACHER') {
      return res.status(403).json({ error: 'Only teachers can access dashboard' });
    }



    const { date } = req.query;
    const { start: targetDateStart, end: targetDateEnd } = getDayRange(date as string | undefined);

    const classes = await prisma.class.findMany({
      where: { teacherId: userId },
      include: {
        students: {
          include: {
            attendances: {
              where: {
                date: {
                  gte: targetDateStart,
                  lte: targetDateEnd,
                }
              },
            },
            feedbackEvents: {
              where: {
                date: {
                  gte: targetDateStart,
                  lte: targetDateEnd,
                }
              },
            },
          },
        },
      },
    });

    const dashboardData = classes.map((cls) => {
      const totalStudents = cls.students.length;
      
      // Since we filtered in DB, just counting the array length is sufficient for today's events/attendance
      const todayAttendance = cls.students.filter((student) =>
        student.attendances.some(
          (att) => att.status === 'PRESENT' || att.status === 'LATE'
        )
      ).length;

      const todayLate = cls.students.filter((student) =>
        student.attendances.some((att) => att.status === 'LATE')
      ).length;

      const todayFeedbackEvents = cls.students.flatMap((student) => student.feedbackEvents);

      return {
        classId: cls.id,
        className: cls.name,
        totalStudents,
        todayAttendance,
        todayLate,
        attendanceRate: totalStudents > 0 ? (todayAttendance / totalStudents) * 100 : 0,
        todayPositiveEvents: todayFeedbackEvents.filter((e) => e.type === 'positive').length,
        todayNegativeEvents: todayFeedbackEvents.filter((e) => e.type === 'negative').length,
      };
    });

    res.json(dashboardData);
  } catch (error) {
    console.error('Get dashboard error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const resetDay = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const { date, classId } = req.query;

    if (!date) {
      return res.status(400).json({ error: 'Date requirement' });
    }

    const { start: targetDateStart, end: targetDateEnd } = getDayRange(date as string);

    // Find classes for this teacher (or strict to specific classId if provided)
    const whereClass: any = { teacherId: userId };
    if (classId) {
        whereClass.id = classId as string;
    }

    const classes = await prisma.class.findMany({
        where: whereClass,
        select: { id: true }
    });

    const classIds = classes.map(c => c.id);

    if (classIds.length === 0) {
        return res.json({ message: 'No classes found to reset' });
    }

    // Delete attendance
    const deleteAttendance = await prisma.attendance.deleteMany({
        where: {
            date: {
                gte: targetDateStart,
                lte: targetDateEnd
            },
            student: {
                classId: { in: classIds }
            }
        }
    });

    // Delete behavior/feedback
    const deleteFeedback = await prisma.feedbackEvent.deleteMany({
        where: {
             date: {
                gte: targetDateStart,
                lte: targetDateEnd
            },
            student: {
                classId: { in: classIds }
            }
        }
    });

    res.json({ 
        message: 'Day reset successfully', 
        attendanceCount: deleteAttendance.count,
        feedbackCount: deleteFeedback.count 
    });

  } catch (error) {
    console.error('Reset day error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
