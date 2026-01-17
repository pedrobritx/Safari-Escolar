import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import prisma from '../utils/prisma';

export const createFeedbackEvent = async (req: AuthRequest, res: Response) => {
  try {
    const { studentId, type, description, date } = req.body;

    // Enhanced validation
    if (!studentId || typeof studentId !== 'string') {
      return res.status(400).json({ success: false, error: 'studentId is required and must be a string' });
    }

    if (!type || (type !== 'positive' && type !== 'negative')) {
      return res.status(400).json({ success: false, error: 'Type must be "positive" or "negative"' });
    }

    if (!description || typeof description !== 'string' || description.trim().length === 0) {
      return res.status(400).json({ success: false, error: 'Description is required and must be non-empty' });
    }

    // Verify student exists before creating event
    const student = await prisma.student.findUnique({ where: { id: studentId } });
    if (!student) {
      return res.status(404).json({ success: false, error: 'Student not found' });
    }

    let eventDate: Date | undefined;
    if (date) {
        // Parse YYYY-MM-DD manually to prevent UTC shift
        const parts = date.split('-');
        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]) - 1;
        const day = parseInt(parts[2]);
        eventDate = new Date(year, month, day, 0, 0, 0, 0);
    }

    const feedbackEvent = await prisma.feedbackEvent.create({
      data: {
        studentId,
        type,
        description: description.trim(),
        date: eventDate,
      },
      include: {
        student: true,
      },
    });

    console.log(`[Feedback] Created ${type} feedback for student ${studentId}: "${description}"`);

    res.status(201).json({ 
      success: true, 
      data: feedbackEvent,
      message: 'Feedback event created successfully'
    });
  } catch (error) {
    console.error('Create feedback event error:', error);
    res.status(500).json({ success: false, error: 'Failed to create feedback event' });
  }
};


export const getFeedbackEvents = async (req: AuthRequest, res: Response) => {
  try {
    const studentId = req.params.studentId as string;

    const feedbackEvents = await prisma.feedbackEvent.findMany({
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
    console.log(`Attempting to delete feedback event with ID: ${id}`);

    await prisma.feedbackEvent.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Delete feedback event error:', error);
    res.status(500).json({ error: 'Failed to delete feedback event' });
  }
};
