import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.findFirst({
		where: { role: "TEACHER" },
	});
	const classObj = await prisma.class.findFirst();

	console.log("USER_ID:", user?.id);
	console.log("USER_EMAIL:", user?.email);
	console.log("CLASS_ID:", classObj?.id);

	await prisma.$disconnect();
}

main();
