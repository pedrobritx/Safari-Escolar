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

    // Use a data da query ou o padrão para hoje
    const { date } = req.query;
    const targetDate = date ? new Date(date as string) : new Date();
    // Redefinir a parte da hora para evitar problemas de fuso horário, alinhando com como armazenamos datas (geralmente meia-noite UTC ou similar)
    // Idealmente usar uma normalização consistente.
    // No entanto, como comparamos toDateString(), a hora não importa muito, desde que seja o dia certo.
    // Mas vamos manter a lógica existente de redefinição para meia-noite apenas por precaução.
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
