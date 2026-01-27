import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function verify() {
	try {
		console.log("🔍 Starting verification...");

		// 1. Get a student
		const student = await prisma.student.findFirst();
		if (!student) {
			throw new Error("❌ No students found in DB. Seed might have failed.");
		}
		console.log(`✅ Found student: ${student.name} (${student.id})`);

		// 2. Try to mark attendance using Prisma directly (simulating controller logic)
		const date = new Date();
		date.setHours(0, 0, 0, 0);

		console.log(
			`Attempting to mark attendance for date: ${date.toISOString()}`,
		);

		const attendance = await prisma.attendance.upsert({
			where: {
				studentId_date: {
					studentId: student.id,
					date: date,
				},
			},
			update: {
				status: "PRESENT",
			},
			create: {
				studentId: student.id,
				status: "PRESENT",
				date: date,
			},
		});

		console.log("✅ Successfully upserted attendance record:", attendance);
		console.log(
			"🎉 VERIFICATION SUCCESSFUL: Database constraints and schema are correct.",
		);
	} catch (error) {
		console.error("❌ Verification FAILED:", error);
	} finally {
		await prisma.$disconnect();
	}
}

verify();
