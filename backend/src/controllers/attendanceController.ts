import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";
import { normalizeDateToUTC } from "../utils/dateUtils";
import { assertClassAccess, assertStudentAccess } from "../utils/authz";
import { ok, fail } from "../utils/response";
import { HttpError } from "../utils/errors";

export const markAttendance = async (req: AuthRequest, res: Response) => {
	try {
		const { studentId, status, date } = req.body;

		// Verify student exists before marking attendance
		const student = await prisma.student.findUnique({
			where: { id: studentId },
		});
		if (!student) {
			return fail(res, "Student not found", 404);
		}

		await assertStudentAccess(req.user!, student.id);

		const attendanceDate = normalizeDateToUTC(date);

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
			return ok(res, { message: "Attendance cleared" });
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

		ok(res, attendance);
	} catch (error) {
		console.error("Mark attendance error:", error);
		if (error instanceof HttpError) {
			return fail(res, error.message, error.status, error.details);
		}
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error";
		fail(res, "Internal server error", 500, errorMessage);
	}
};

export const getTodayAttendance = async (req: AuthRequest, res: Response) => {
	try {
		const { classId } = req.params;

		await assertClassAccess(req.user!, classId as string);

		const today = normalizeDateToUTC();

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

		ok(res, studentsWithAttendance);
	} catch (error) {
		console.error("Get today attendance error:", error);
		if (error instanceof HttpError) {
			return fail(res, error.message, error.status, error.details);
		}
		fail(res, "Internal server error", 500);
	}
};
