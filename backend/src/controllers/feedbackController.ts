import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";
import { parseDateString } from "../utils/dateUtils";

export const createFeedbackEvent = async (req: AuthRequest, res: Response) => {
	try {
		const { studentId, type, description, date } = req.body;

		// Enhanced validation
		if (!studentId || typeof studentId !== "string") {
			return res.status(400).json({
				success: false,
				error: "studentId is required and must be a string",
			});
		}

		if (!type || (type !== "positive" && type !== "negative")) {
			return res.status(400).json({
				success: false,
				error: 'Type must be "positive" or "negative"',
			});
		}

		if (
			!description ||
			typeof description !== "string" ||
			description.trim().length === 0
		) {
			return res.status(400).json({
				success: false,
				error: "Description is required and must be non-empty",
			});
		}

		// Verify student exists before creating event
		const student = await prisma.student.findUnique({
			where: { id: studentId },
		});
		if (!student) {
			return res
				.status(404)
				.json({ success: false, error: "Student not found" });
		}

		const eventDate = date ? parseDateString(date) : undefined;

		const feedbackEvent = await prisma.feedbackEvent.create({
			data: {
				studentId,
				type: type.toUpperCase() as any,
				description: description.trim(),
				date: eventDate,
			},
			include: {
				student: true,
			},
		});

		res.status(201).json({
			success: true,
			data: feedbackEvent,
			message: "Feedback event created successfully",
		});
	} catch (error) {
		console.error("Create feedback event error:", error);
		res
			.status(500)
			.json({ success: false, error: "Failed to create feedback event" });
	}
};

export const getFeedbackEvents = async (req: AuthRequest, res: Response) => {
	try {
		const studentId = req.params.studentId as string;

		const feedbackEvents = await prisma.feedbackEvent.findMany({
			where: { studentId },
			include: {
				student: true,
			},
			orderBy: { date: "desc" },
		});

		res.json(feedbackEvents);
	} catch (error) {
		console.error("Get feedback events error:", error);
		res.status(500).json({ error: "Failed to fetch feedback events" });
	}
};

export const deleteFeedbackEvent = async (req: AuthRequest, res: Response) => {
	try {
		const id = req.params.id as string;
		const user = req.user;

		console.log("[Delete Feedback] Request received:", {
			feedbackId: id,
			userId: user?.id,
			userRole: user?.role,
			userEmail: user?.email,
		});

		// Validate ID format
		if (!id || id === "undefined" || id === "null") {
			console.error("[Delete Feedback] Invalid ID received:", id);
			return res.status(400).json({ error: `Invalid feedback ID: ${id}` });
		}

		// Check if feedback exists before deleting
		const existingFeedback = await prisma.feedbackEvent.findUnique({
			where: { id },
			include: { student: true },
		});

		console.log("[Delete Feedback] Existing feedback:", existingFeedback);

		if (!existingFeedback) {
			console.error("[Delete Feedback] Feedback not found with ID:", id);
			return res
				.status(404)
				.json({ error: `Feedback not found with ID: ${id}` });
		}

		// Perform deletion
		await prisma.feedbackEvent.delete({
			where: { id },
		});

		console.log("[Delete Feedback] Successfully deleted feedback:", id);
		res.status(204).send();
	} catch (error: any) {
		console.error("[Delete Feedback] Error:", {
			message: error.message,
			code: error.code,
			meta: error.meta,
			stack: error.stack,
		});

		if (error.code === "P2025") {
			return res.status(404).json({ error: "Feedback not found (P2025)" });
		}

		res.status(500).json({
			error: `Failed to delete feedback: ${error.message}`,
			code: error.code,
		});
	}
};
