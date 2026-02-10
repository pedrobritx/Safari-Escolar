import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";
import { getDayRange } from "../utils/dateUtils";
import { ok, fail } from "../utils/response";
import { assertClassAccess } from "../utils/authz";

export const createClass = async (req: AuthRequest, res: Response) => {
	try {
		const { name, schoolId } = req.body;
		const teacherId = req.user!.id;

		if (!name || !schoolId) {
			return fail(res, "Name and schoolId are required", 400);
		}

		const newClass = await prisma.class.create({
			data: {
				name,
				schoolId,
				teacherId,
			},
			include: {
				school: true,
				teacher: {
					select: { id: true, name: true, email: true },
				},
			},
		});

		ok(res, newClass, 201);
	} catch (error) {
		console.error("Create class error:", error);
		fail(res, "Internal server error", 500);
	}
};

export const getClasses = async (req: AuthRequest, res: Response) => {
	try {
		const userRole = req.user!.role;
		const userId = req.user!.id;
		const dateQuery = req.query.date as string;

		const { start: targetDateStart, end: targetDateEnd } =
			getDayRange(dateQuery);

		let classes;

		const includeOptions = {
			school: true,
			teacher: {
				select: { id: true, name: true, email: true },
			},
			students: {
				include: {
					attendances: {
						where: {
							date: {
								gte: targetDateStart,
								lte: targetDateEnd,
							},
						},
					},
					feedbackEvents: {
						where: {
							date: {
								gte: targetDateStart,
								lte: targetDateEnd,
							},
						},
					},
				},
			},
		};

		if (userRole === "ADMIN") {
			classes = await prisma.class.findMany({
				include: includeOptions,
			});
		} else if (userRole === "COORDINATOR") {
			const school = await prisma.school.findUnique({
				where: { coordinatorId: userId },
			});

			if (!school) {
				return fail(res, "School not found", 404);
			}

			classes = await prisma.class.findMany({
				where: { schoolId: school.id },
				include: includeOptions,
			});
		} else if (userRole === "TEACHER") {
			classes = await prisma.class.findMany({
				where: { teacherId: userId },
				include: includeOptions,
			});
		} else {
			return fail(res, "Not authorized", 403);
		}

		// Process classes to attach 'todayStatus' simplified field for frontend
		const classesWithStatus = classes.map((cls) => ({
			...cls,
			students: cls.students.map((student) => {
				const attendance = student.attendances[0]; // Should be only 1 or 0 due to date filter

				// Calculate todayScore from fetched feedbackEvents
				const positives = student.feedbackEvents.filter(
					(e) => e.type === "POSITIVE",
				).length;
				const negatives = student.feedbackEvents.filter(
					(e) => e.type === "NEGATIVE",
				).length;
				const todayScore = positives - negatives;

				return {
					...student,
					todayStatus: attendance ? attendance.status : null,
					todayScore,
				};
			}),
		}));

		ok(res, classesWithStatus);
	} catch (error) {
		console.error("Get classes error:", error);
		fail(res, "Internal server error", 500);
	}
};

export const getClass = async (req: AuthRequest, res: Response) => {
	try {
		const { id } = req.params;

		await assertClassAccess(req.user!, id as string);

		const classData = await prisma.class.findUnique({
			where: { id: id as string },
			include: {
				school: true,
				teacher: {
					select: { id: true, name: true, email: true },
				},
				students: {
					include: {
						attendances: {
							orderBy: { date: "desc" },
							take: 30,
						},
						feedbackEvents: {
							orderBy: { date: "desc" },
							take: 10,
						},
					},
				},
			},
		});

		if (!classData) {
			return fail(res, "Class not found", 404);
		}

		ok(res, classData);
	} catch (error) {
		console.error("Get class error:", error);
		fail(res, "Internal server error", 500);
	}
};

export const updateClassTeacher = async (req: AuthRequest, res: Response) => {
	try {
		const { classId, teacherId } = req.params;

		const classData = await prisma.class.findUnique({
			where: { id: classId as string },
			include: { school: true },
		});

		if (!classData) {
			return fail(res, "Turma não encontrada", 400);
		}

		if (req.user?.role === "COORDINATOR") {
			if (classData.school?.coordinatorId !== req.user.id) {
				return fail(res, "Not authorized to change this class", 403);
			}
		}

		const teacherData = await prisma.user.findUnique({
			where: { id: teacherId as string, role: "TEACHER" },
		});

		if (!teacherData) {
			return fail(res, "Professor não encontrado", 400);
		}

		const updatedClass = await prisma.class.update({
			where: { id: classData.id },
			data: {
				teacherId: teacherData.id,
			},
		});

		ok(res, updatedClass);
	} catch (error) {
		console.error("Get class error:", error);
		fail(res, "Internal server error", 500);
	}
};
