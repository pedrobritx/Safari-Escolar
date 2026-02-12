import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";
import { Prisma } from "@prisma/client";
import { assertClassAccess, assertStudentAccess } from "../utils/authz";
import { ok, fail } from "../utils/response";
import { HttpError } from "../utils/errors";

const ANIMAL_AVATARS = [
	"Leão",
	"Tigre",
	"Elefante",
	"Girafa",
	"Zebra",
	"Macaco",
	"Urso",
	"Lobo",
	"Raposa",
	"Coelho",
	"Panda",
	"Koala",
	"Golfinho",
	"Pinguim",
	"Águia",
	"Coruja",
	"Papagaio",
	"Flamingo",
];

export const createStudent = async (req: AuthRequest, res: Response) => {
  try {
    const { name, classId, animalAvatar, avatarColor } = req.body;

	await assertClassAccess(req.user!, classId);

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

    ok(res, student, 201);
  } catch (error) {
    console.error('Create student error:', error);
	if (error instanceof HttpError) {
		return fail(res, error.message, error.status, error.details);
	}
    fail(res, 'Internal server error', 500);
  }
};

export const getStudents = async (req: AuthRequest, res: Response) => {
  try {
    const { classId } = req.query;

    const where: Prisma.StudentWhereInput = {};
    if (classId) {
      where.classId = classId as string;
	  if (req.user?.role !== 'ADMIN') {
		await assertClassAccess(req.user!, classId as string);
	  }
    }

    const students = await prisma.student.findMany({
      where,
      orderBy: { name: 'asc' },
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

    ok(res, students);
  } catch (error) {
    console.error('Get students error:', error);
	if (error instanceof HttpError) {
		return fail(res, error.message, error.status, error.details);
	}
    fail(res, 'Internal server error', 500);
  }
};

export const updateStudent = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { name, animalAvatar, avatarColor } = req.body;

	await assertStudentAccess(req.user!, id as string);

    const data: Prisma.StudentUpdateInput = {};
    if (name) data.name = name;
    if (animalAvatar) data.animalAvatar = animalAvatar;
    if (avatarColor) data.avatarColor = avatarColor;
    if (req.body.whatsapp !== undefined) data.whatsapp = req.body.whatsapp;
    if (req.body.email !== undefined) data.email = req.body.email;
    if (req.body.birthday !== undefined) data.birthday = req.body.birthday;

    const student = await prisma.student.update({
      where: { id: id as string },
      data,
    });

    ok(res, student);
  } catch (error) {
    console.error('Update student error:', error);
	if (error instanceof HttpError) {
		return fail(res, error.message, error.status, error.details);
	}
    fail(res, 'Internal server error', 500);
  }
};

export const deleteStudent = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

	await assertStudentAccess(req.user!, id as string);

    await prisma.student.delete({ where: { id: id as string } });

    res.status(204).send();
  } catch (error) {
    console.error('Delete student error:', error);
	if (error instanceof HttpError) {
		return fail(res, error.message, error.status, error.details);
	}
    fail(res, 'Error deleting student', 500);
  }
};