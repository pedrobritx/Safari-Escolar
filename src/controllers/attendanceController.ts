import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import prisma from '../utils/prisma';

export const markAttendance = async (req: AuthRequest, res: Response) => {
  try {
    const { studentId, present, date } = req.body;

    if (!studentId || present === undefined) {
      return res.status(400).json({ error: 'studentId and present are required' });
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
        present,
      },
      create: {
        studentId,
        present,
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
        },
      },
    });

    res.json(students);
  } catch (error) {
    console.error('Get today attendance error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
