import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";
import { ok, fail } from "../utils/response";

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

    ok(res, usersData);
  } catch (error) {
    console.error('Get class error:', error);
    fail(res, 'Internal server error', 500);
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

		ok(res, usersData);
	} catch (error) {
		console.error('Get class error:', error);
		fail(res, 'Internal server error', 500);
	}
}
