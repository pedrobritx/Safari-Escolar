import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import prisma from '../utils/prisma';

export const markAttendance = async (req: AuthRequest, res: Response) => {
  try {
    const { studentId, status, date } = req.body;

    if (!studentId || !status) {
      return res.status(400).json({ error: 'studentId and status are required' });
    }

    const attendanceDate = date ? new Date(date) : new Date();
    attendanceDate.setHours(0, 0, 0, 0);

    const attendance = await prisma.attendance.upsert({
      where: {
        studentId_date: {
          studentId,
          date: attendanceDate,
        },
      },
      update: {
        status,
      },
      create: {
        studentId,
        status,
        date: attendanceDate,
      },
    });

    res.json(attendance);
  } catch (error) {
    console.error('Mark attendance error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTodayAttendance = async (req: AuthRequest, res: Response) => {
  try {
    const { classId } = req.params;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const students = await prisma.student.findMany({
      where: { classId: classId as string },
      include: {
        attendances: {
          where: { date: today },
          select: { status: true }
        },
      },
    });

    // Validating types with current schema
    const studentsWithAttendance = students.map(s => ({
      ...s,
      todayStatus: s.attendances[0]?.status || null,
      animalAvatar: s.animalAvatar
    }));

    res.json(studentsWithAttendance);
  } catch (error) {
    console.error('Get today attendance error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
