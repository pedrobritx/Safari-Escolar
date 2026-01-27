import prisma from "../utils/prisma";

async function debug() {
	try {
		const now = new Date();
		// Use the logic from classController
		const targetDateStart = new Date(
			Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0),
		);
		const targetDateEnd = new Date(
			Date.UTC(
				now.getFullYear(),
				now.getMonth(),
				now.getDate(),
				23,
				59,
				59,
				999,
			),
		);

		console.log("--- DEBUG INFO ---");
		console.log("Target Date Start (UTC):", targetDateStart.toISOString());
		console.log("Target Date End (UTC):", targetDateEnd.toISOString());

		const students = await prisma.student.findMany({
			include: {
				feedbackEvents: {
					where: {
						date: {
							gte: targetDateStart,
							lte: targetDateEnd,
						},
					},
				},
			},
		});

		console.log(`Found ${students.length} students.`);

		students.forEach((s) => {
			const positives = s.feedbackEvents.filter(
				(e) => e.type === "POSITIVE",
			).length;
			const negatives = s.feedbackEvents.filter(
				(e) => e.type === "NEGATIVE",
			).length;
			const score = positives - negatives;
			if (s.feedbackEvents.length > 0) {
				console.log(
					`Student: ${s.name} | Events: ${s.feedbackEvents.length} | Score: ${score}`,
				);
				s.feedbackEvents.forEach((e) => {
					console.log(
						`  - Event: ${e.description} (${e.type}) Date: ${e.date}`,
					);
				});
			}
		});

		// Also check raw events for verify
		const allEvents = await prisma.feedbackEvent.findMany({
			take: 5,
			orderBy: { date: "desc" },
		});
		console.log("--- LATEST 5 RAW EVENTS ---");
		allEvents.forEach((e) =>
			console.log(`  ${e.description} (${e.type}) - ${e.date}`),
		);
	} catch (e) {
		console.error(e);
	} finally {
		await prisma.$disconnect();
	}
}

debug();
