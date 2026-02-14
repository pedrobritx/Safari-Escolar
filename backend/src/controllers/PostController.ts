import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";
import { ok, fail } from "../utils/response";
import { HttpError } from "../utils/errors";

export const createPost = async (req: AuthRequest, res: Response) => {
	try {
		const { content, classId, studentId } = req.body;
		const teacherId = req.user!.id;

		console.log("[CreatePost] Request body:", {
			content,
			classId,
			studentId,
			teacherId,
		});

		if (!content || !classId) {
			return res.status(400).json({
				success: false,
				error: "Content and classId are required",
			});
		}

		const hasAccess = await prisma.class.findFirst({
			where: {
				id: classId,
				teacherId: teacherId,
			},
		});

		if (
			!hasAccess &&
			req.user!.role !== "ADMIN" &&
			req.user!.role !== "COORDINATOR"
		) {
			console.warn("[CreatePost] Access denied for user:", teacherId);
			return fail(res, "You do not have permission to post to this class", 403);
		}

		const post = await prisma.post.create({
			data: {
				content,
				classId,
				studentId: studentId || null,
				teacherId,
			},
			include: {
				teacher: {
					select: {
						id: true,
						name: true,
						role: true,
					},
				},
				student: {
					select: {
						id: true,
						name: true,
					},
				},
			},
		});

		ok(res, post);
	} catch (error) {
		console.error("Create post error details:", error);
		fail(res, "Failed to create post", 500, error);
	}
};

export const getClassPosts = async (req: AuthRequest, res: Response) => {
	try {
		const { classId } = req.params as { classId: string };

		const posts = await prisma.post.findMany({
			where: {
				classId,
				studentId: null,
			},
			orderBy: {
				createdAt: "desc",
			},
			include: {
				teacher: {
					select: {
						id: true,
						name: true,
					},
				},
			},
		});

		ok(res, posts);
	} catch (error) {
		console.error("Get class posts error:", error);
		fail(res, "Failed to get class posts", 500);
	}
};

export const getStudentPosts = async (req: AuthRequest, res: Response) => {
	try {
		const { studentId } = req.params as { studentId: string };

		const posts = await prisma.post.findMany({
			where: {
				studentId,
			},
			orderBy: {
				createdAt: "desc",
			},
			include: {
				teacher: {
					select: {
						id: true,
						name: true,
					},
				},
			},
		});

		ok(res, posts);
	} catch (error) {
		console.error("Get student posts error:", error);
		fail(res, "Failed to get student posts", 500);
	}
};

export const deletePost = async (req: AuthRequest, res: Response) => {
	try {
		const { id } = req.params as { id: string };
		const userId = req.user!.id;
		const userRole = req.user!.role;

		const post = await prisma.post.findUnique({
			where: { id },
		});

		if (!post) {
			return fail(res, "Post not found", 404);
		}

		if (
			post.teacherId !== userId &&
			userRole !== "ADMIN" &&
			userRole !== "COORDINATOR"
		) {
			return fail(res, "You do not have permission to delete this post", 403);
		}

		await prisma.post.delete({
			where: { id },
		});

		res.status(204).send();
	} catch (error) {
		console.error("Delete post error:", error);
		fail(res, "Failed to delete post", 500);
	}
};