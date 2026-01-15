import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import prisma from '../utils/prisma';

export const getDashboard = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!.id;
    const userRole = req.user!.role;

    if (userRole !== 'TEACHER') {
      return res.status(403).json({ error: 'Only teachers can access dashboard' });
    }

    const classes = await prisma.class.findMany({
      where: { teacherId: userId },
      include: {
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

    // Use date from query or default to today
    const { date } = req.query;
    const targetDate = date ? new Date(date as string) : new Date();
    // Reset time part to avoid timezone issues, aligning with how we store dates (usually midnight UTC or similar)
    // Ideally use a consistent normalization.
    // However, since we compare toDateString(), time doesn't matter much as long as it's the right day.
    // But let's keep the existing logic of midnight reset just in case.
    targetDate.setHours(0, 0, 0, 0);

    const dashboardData = classes.map((cls) => {
      const totalStudents = cls.students.length;
      const todayAttendance = cls.students.filter((student) =>
        student.attendances.some(
          (att) => att.date.toDateString() === targetDate.toDateString() && (att.status === 'PRESENT' || att.status === 'LATE')
        )
      ).length;

      const todayLate = cls.students.filter((student) =>
        student.attendances.some(
          (att) => att.date.toDateString() === targetDate.toDateString() && att.status === 'LATE'
        )
      ).length;

      const todayBehaviorEvents = cls.students.flatMap((student) =>
        student.behaviorEvents.filter(
          (event) => event.date.toDateString() === targetDate.toDateString()
        )
      );

      return {
        classId: cls.id,
        className: cls.name,
        totalStudents,
        todayAttendance,
        todayLate,
        attendanceRate: totalStudents > 0 ? (todayAttendance / totalStudents) * 100 : 0,
        todayPositiveEvents: todayBehaviorEvents.filter((e) => e.type === 'positive').length,
        todayNegativeEvents: todayBehaviorEvents.filter((e) => e.type === 'negative').length,
      };
    });

    res.json(dashboardData);
  } catch (error) {
    console.error('Get dashboard error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
