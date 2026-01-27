import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";

export const getFamilyView = async (req: AuthRequest, res: Response) => {
	try {
		const userId = req.user!.id;
		const userRole = req.user!.role;

		if (userRole !== "FAMILY") {
			return res
				.status(403)
				.json({ error: "Only family members can access this view" });
		}

		const family = await prisma.family.findUnique({
			where: { userId },
			include: {
				students: {
					include: {
						class: {
							include: {
								teacher: {
									select: { name: true },
								},
							},
						},
						attendances: {
							orderBy: { date: "desc" },
							take: 30,
						},
						feedbackEvents: {
							orderBy: { date: "desc" },
							take: 20,
						},
					},
				},
			},
		});

		if (!family) {
			return res.status(404).json({ error: "Family not found" });
		}

		const studentsData = family.students.map((student) => {
			const recentAttendances = student.attendances.slice(0, 30);
			const presentCount = recentAttendances.filter(
				(att) => att.status === "PRESENT",
			).length;
			const attendanceRate =
				recentAttendances.length > 0
					? (presentCount / recentAttendances.length) * 100
					: 0;

			const positiveEvents = student.feedbackEvents.filter(
				(e) => e.type === "POSITIVE",
			).length;
			const negativeEvents = student.feedbackEvents.filter(
				(e) => e.type === "NEGATIVE",
			).length;

			return {
				id: student.id,
				name: student.name,
				animalAvatar: student.animalAvatar,
				className: student.class.name,
				teacherName: student.class.teacher.name,
				attendanceRate,
				positiveEvents,
				negativeEvents,
				recentAttendances: recentAttendances.map((att) => ({
					date: att.date,
					status: att.status,
				})),
				recentFeedbackEvents: student.feedbackEvents.map((event) => ({
					id: event.id,
					type: event.type,
					description: event.description,
					date: event.date,
				})),
			};
		});

		res.json({ students: studentsData });
	} catch (error) {
		console.error("Get family view error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};
