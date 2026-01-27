import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";
import { getDayRange } from "../utils/dateUtils";

export const createClass = async (req: AuthRequest, res: Response) => {
	try {
		const { name, schoolId } = req.body;
		const teacherId = req.user!.id;

		if (!name || !schoolId) {
			return res.status(400).json({ error: "Name and schoolId are required" });
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

		res.status(201).json(newClass);
	} catch (error) {
		console.error("Create class error:", error);
		res.status(500).json({ error: "Internal server error" });
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
				return res.status(404).json({ error: "School not found" });
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
			return res.status(403).json({ error: "Not authorized" });
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

		res.json(classesWithStatus);
	} catch (error) {
		console.error("Get classes error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getClass = async (req: AuthRequest, res: Response) => {
	try {
		const { id } = req.params;

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
			return res.status(404).json({ error: "Class not found" });
		}

		res.json(classData);
	} catch (error) {
		console.error("Get class error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const updateClassTeacher = async (req: AuthRequest, res: Response) => {
	try {
		const { classId, teacherId } = req.params;

		const classData = await prisma.class.findUnique({
			where: { id: classId as string },
		});

		if (!classData) {
			return res.status(400).json({ error: "Turma não encontrada" });
		}

		const teacherData = await prisma.user.findUnique({
			where: { id: teacherId as string, role: "TEACHER" },
		});

		if (!teacherData) {
			return res.status(400).json({ error: "Professor não encontrado" });
		}

		const updatedClass = await prisma.class.update({
			where: { id: classData.id },
			data: {
				teacherId: teacherData.id,
			},
		});

		res.json(updatedClass);
	} catch (error) {
		console.error("Get class error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};
