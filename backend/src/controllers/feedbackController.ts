import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";
import { normalizeDateToUTC } from "../utils/dateUtils";
import { assertStudentAccess } from "../utils/authz";
import { ok, fail } from "../utils/response";
import { HttpError } from "../utils/errors";

export const createFeedbackEvent = async (req: AuthRequest, res: Response) => {
	try {
		const { studentId, type, description, date } = req.body;

		if (!studentId || typeof studentId !== "string") {
			return res.status(400).json({
				success: false,
				error: "studentId is required and must be a string",
			});
		}

		await assertStudentAccess(req.user!, studentId);

		const eventDate = date ? normalizeDateToUTC(date) : normalizeDateToUTC();

		const feedbackEvent = await prisma.feedbackEvent.create({
			data: {
				studentId,
				type: type.toUpperCase() as any,
				description: description.trim(),
				comment: req.body.comment?.trim(),
				date: eventDate,
			},
			include: {
				student: true,
			},
		});

		ok(res, {
			...feedbackEvent,
			type: feedbackEvent.type.toLowerCase(),
		});
	} catch (error) {
		console.error("Create feedback event error:", error);
		if (error instanceof HttpError) {
			return fail(res, error.message, error.status, error.details);
		}
		fail(res, "Failed to create feedback event", 500);
	}
};

export const getFeedbackEvents = async (req: AuthRequest, res: Response) => {
	try {
		const studentId = req.params.studentId as string;

		await assertStudentAccess(req.user!, studentId);

		const feedbackEvents = await prisma.feedbackEvent.findMany({
			where: { studentId },
			include: {
				student: true,
			},
			orderBy: { date: "desc" },
		});

		ok(
			res,
			feedbackEvents.map((e) => ({ ...e, type: e.type.toLowerCase() })),
		);
	} catch (error) {
		console.error("Get feedback events error:", error);
		if (error instanceof HttpError) {
			return fail(res, error.message, error.status, error.details);
		}
		fail(res, "Failed to fetch feedback events", 500);
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

		await assertStudentAccess(req.user!, existingFeedback.studentId);

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

		if (error instanceof HttpError) {
			return fail(res, error.message, error.status, error.details);
		}

		fail(res, `Failed to delete feedback: ${error.message}`, 500, error.code);
	}
};