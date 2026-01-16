import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import prisma from '../utils/prisma';

export const createBehaviorEvent = async (req: AuthRequest, res: Response) => {
  try {
    const { studentId, type, description, date } = req.body;

    if (!studentId || !type || !description) {
      return res.status(400).json({ error: 'studentId, type, and description are required' });
    }

    if (type !== 'positive' && type !== 'negative') {
      return res.status(400).json({ error: 'Type must be "positive" or "negative"' });
    }

    const event = await prisma.behaviorEvent.create({
      data: {
        studentId,
        type,
        description,
        date: date ? new Date(date) : undefined,
      },
      include: {
        student: true,
      },
    });

    res.status(201).json(event);
  } catch (error) {
    console.error('Create behavior event error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getBehaviorEvents = async (req: AuthRequest, res: Response) => {
  try {
    const { studentId } = req.query;

    const where: any = {};
    if (studentId) {
      where.studentId = studentId as string;
    }

    const events = await prisma.behaviorEvent.findMany({
      where,
      include: {
        student: true,
      },
      orderBy: { date: 'desc' },
    });

    res.json(events);
  } catch (error) {
    console.error('Get behavior events error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteBehaviorEvent = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.behaviorEvent.delete({
      where: { id: id as string },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Delete behavior event error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
