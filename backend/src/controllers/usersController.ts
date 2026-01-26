import { Response } from 'express';
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";

export const getTeachers = async (req: AuthRequest, res: Response) => {
  try {
    const usersData = await prisma.user.findMany({
      where: { role: 'TEACHER' },
      select: {
        id: true,
        email: true,
        name: true
      }
    });

    res.json(usersData);
  } catch (error) {
    console.error('Get class error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getCoordinators = async (req: AuthRequest, res: Response) => {
	try {
		const usersData = await prisma.user.findMany({
      where: { role: 'COORDINATOR' },
      select: {
        id: true,
        email: true,
        name: true
      }
		});

		res.json(usersData);
	} catch (error) {
		console.error('Get class error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}
