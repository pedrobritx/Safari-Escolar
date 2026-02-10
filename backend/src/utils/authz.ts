import prisma from "./prisma";
import { HttpError } from "./errors";

export async function assertClassAccess(
	user: { id: string; role: string },
	classId: string,
) {
	if (user.role === "ADMIN") return;

	const cls = await prisma.class.findUnique({
		where: { id: classId },
		include: {
			school: true,
		},
	});

	if (!cls) {
		throw new HttpError(404, "Class not found");
	}

	const isTeacher = user.role === "TEACHER" && cls.teacherId === user.id;
	const isCoordinator =
		user.role === "COORDINATOR" && cls.school?.coordinatorId === user.id;

	if (!isTeacher && !isCoordinator) {
		throw new HttpError(403, "Not authorized to access this class");
	}
}

export async function assertStudentAccess(
	user: { id: string; role: string },
	studentId: string,
) {
	const student = await prisma.student.findUnique({
		where: { id: studentId },
		select: { classId: true },
	});

	if (!student) throw new HttpError(404, "Student not found");

	await assertClassAccess(user, student.classId);
}
