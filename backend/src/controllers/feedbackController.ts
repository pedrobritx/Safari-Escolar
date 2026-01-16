import { Response, Request } from 'express';
import { AuthRequest } from '../middleware/auth';
import prisma from '../utils/prisma';

export const createFeedbackEvent = async (req: AuthRequest, res: Response) => {
  try {
    const { studentId, type, description, date } = req.body;

    if (!studentId || !type || !description) {
      return res.status(400).json({ error: 'studentId, type, and description are required' });
    }

    if (type !== 'positive' && type !== 'negative') {
      return res.status(400).json({ error: 'Type must be "positive" or "negative"' });
    }

    const feedbackEvent = await prisma.behaviorEvent.create({
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

    res.status(201).json(feedbackEvent);
  } catch (error) {
    console.error('Create feedback event error:', error);
    res.status(500).json({ error: 'Failed to create feedback event' });
  }
};

export const getFeedbackEvents = async (req: AuthRequest, res: Response) => {
  try {
    const studentId = req.params.studentId as string;

    const feedbackEvents = await prisma.behaviorEvent.findMany({
      where: { studentId },
      include: {
        student: true,
      },
      orderBy: { date: 'desc' },
    });

    res.json(feedbackEvents);
  } catch (error) {
    console.error('Get feedback events error:', error);
    res.status(500).json({ error: 'Failed to fetch feedback events' });
  }
};

export const deleteFeedbackEvent = async (req: AuthRequest, res: Response) => {
  try {
    const id = req.params.id as string;

    await prisma.behaviorEvent.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Delete feedback event error:', error);
    res.status(500).json({ error: 'Failed to delete feedback event' });
  }
};
