import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import prisma from '../utils/prisma';

export const markAttendance = async (req: AuthRequest, res: Response) => {
  try {
    const { studentId, status, date } = req.body;

    console.log(`[Attendance] Marking attendance for student ${studentId} with status ${status} on ${date || 'today'}`);

    if (!studentId || !status) {
      return res.status(400).json({ error: 'studentId and status are required' });
    }

    let attendanceDate = new Date();
    if (date) {
        // Parse YYYY-MM-DD manually to prevent UTC shift
        const parts = date.split('-');
        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1;
        const day = parseInt(parts[2]);
        attendanceDate = new Date(year, month, day, 0, 0, 0, 0);
    } else {
        attendanceDate.setHours(0, 0, 0, 0);
    }

    if (status === 'CLEARED') {
      await prisma.attendance.delete({
        where: {
          studentId_date: {
            studentId,
            date: attendanceDate,
          },
        },
      }).catch((e) => {
        // Ignore specific error if record not found, otherwise rethrow
        if (e.code !== 'P2025') throw e;
      });
      return res.json({ message: 'Attendance cleared' });
    }

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
