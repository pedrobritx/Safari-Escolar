import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";
import { parseDateString } from "../utils/dateUtils";

export const markAttendance = async (req: AuthRequest, res: Response) => {
	try {
		const { studentId, status, date } = req.body;

		// Enhanced validation
		if (!studentId || typeof studentId !== "string") {
			return res.status(400).json({
				success: false,
				error: "studentId is required and must be a string",
			});
		}

		if (!status) {
			return res
				.status(400)
				.json({ success: false, error: "status is required" });
		}

		const validStatuses = ["PRESENT", "ABSENT", "LATE", "CLEARED"];
		if (!validStatuses.includes(status)) {
			return res.status(400).json({
				success: false,
				error: "Invalid status. Must be PRESENT, ABSENT, LATE, or CLEARED",
			});
		}

		// Verify student exists before marking attendance
		const student = await prisma.student.findUnique({
			where: { id: studentId },
		});
		if (!student) {
			return res
				.status(404)
				.json({ success: false, error: "Student not found" });
		}

		let attendanceDate = date ? parseDateString(date) : new Date();
		if (!date) attendanceDate.setHours(0, 0, 0, 0);

		if (status === "CLEARED") {
			await prisma.attendance
				.delete({
					where: {
						studentId_date: {
							studentId,
							date: attendanceDate,
						},
					},
				})
				.catch((e) => {
					// Ignore specific error if record not found, otherwise rethrow
					if (e.code !== "P2025") throw e;
				});
			return res.json({ success: true, message: "Attendance cleared" });
		}

		const attendance = await prisma.attendance.upsert({
			where: {
				studentId_date: {
					studentId,
					date: attendanceDate,
				},
			},
			update: {
				status,
			},
			create: {
				studentId,
				status,
				date: attendanceDate,
			},
		});

		res.json({ success: true, data: attendance });
	} catch (error) {
		console.error("Mark attendance error:", error);
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error";
		res.status(500).json({
			success: false,
			error: "Internal server error",
			details: errorMessage,
		});
	}
};

export const getTodayAttendance = async (req: AuthRequest, res: Response) => {
	try {
		const { classId } = req.params;

		const today = new Date();
		today.setHours(0, 0, 0, 0);

		const students = await prisma.student.findMany({
			where: { classId: classId as string },
			include: {
				attendances: {
					where: { date: today },
					select: { status: true },
				},
			},
		});

		// Validating types with current schema
		const studentsWithAttendance = students.map((s) => ({
			...s,
			todayStatus: s.attendances[0]?.status || null,
			animalAvatar: s.animalAvatar,
		}));

		res.json(studentsWithAttendance);
	} catch (error) {
		console.error("Get today attendance error:", error);
		res.status(500).json({ error: "Internal server error" });
	}
};
