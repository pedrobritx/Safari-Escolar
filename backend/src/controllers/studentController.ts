import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import prisma from '../utils/prisma';

const ANIMAL_AVATARS = [
  'Leão', 'Tigre', 'Elefante', 'Girafa', 'Zebra', 'Macaco',
  'Urso', 'Lobo', 'Raposa', 'Coelho', 'Panda', 'Koala',
  'Golfinho', 'Pinguim', 'Águia', 'Coruja', 'Papagaio', 'Flamingo',
];

export const createStudent = async (req: AuthRequest, res: Response) => {
  try {
    const { name, classId, animalAvatar, avatarColor } = req.body;

    if (!name || !classId) {
      return res.status(400).json({ error: 'Name and classId are required' });
    }

    const avatar = animalAvatar || ANIMAL_AVATARS[Math.floor(Math.random() * ANIMAL_AVATARS.length)];

    const student = await prisma.student.create({
      data: {
        name,
        classId,
        animalAvatar: avatar,
        avatarColor: avatarColor || '#FFFFFF',
      },
      include: {
        class: true,
      },
    });

    res.status(201).json(student);
  } catch (error) {
    console.error('Create student error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getStudents = async (req: AuthRequest, res: Response) => {
  try {
    const { classId } = req.query;

    const where: any = {};
    if (classId) {
      where.classId = classId as string;
    }

    const students = await prisma.student.findMany({
      where,
      orderBy: { name: 'asc' }, // Default sort
      include: {
        class: true,
        family: {
          include: {
            user: {
              select: { id: true, name: true, email: true },
            },
          },
        },
      },
    });

    res.json(students);
  } catch (error) {
    console.error('Get students error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateStudent = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { name, animalAvatar, avatarColor } = req.body;

    const data: any = {};
    if (name) data.name = name;
    if (animalAvatar) data.animalAvatar = animalAvatar;
    if (avatarColor) data.avatarColor = avatarColor;

    const student = await prisma.student.update({
      where: { id: id as string },
      data,
    });

    res.json(student);
  } catch (error) {
    console.error('Update student error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteStudent = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    // Delete related data first (optional if using cascade, but safe here)
    // Prisma usually handles simple relations, but Attendances/Events might need cascade delete in Schema
    // For now assuming schema handles it or we just delete student
    
    // Note: If you don't have Cascade Delete in schema, this might fail if there are records.
    // Let's assume we proceed. Ideally check schema.
    
    await prisma.student.delete({
      where: { id: id as string },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Delete student error:', error);
    res.status(500).json({ error: 'Error deleting student' });
  }
};
