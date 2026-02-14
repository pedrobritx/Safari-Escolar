import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { fail } from "../utils/response";
import prisma from "../utils/prisma";

export interface AuthRequest extends Request {
	user?: {
		id: string;
		email: string;
		role: string;
	};
}

export const authenticate = async (
	req: AuthRequest,
	res: Response,
	next: NextFunction,
) => {
	try {
		const authHeader = req.headers.authorization;
		const token = authHeader?.replace("Bearer ", "");

		if (!token) {
			return fail(res, "No token provided", 401);
		}

		const jwtSecret = process.env.JWT_SECRET;
		if (!jwtSecret) {
			console.error("[Auth] JWT_SECRET is not defined");
			throw new Error("JWT_SECRET is not defined");
		}

		const decoded = jwt.verify(token, jwtSecret) as {
			id: string;
			email: string;
			role: string;
		};

		// Verify user still exists in database
		const user = await prisma.user.findUnique({
			where: { id: decoded.id },
		});

		if (!user) {
			console.warn(`[Auth] User ID ${decoded.id} not found in database`);
			return fail(res, "User no longer exists. Please log in again.", 401);
		}

		req.user = decoded;
		next();
	} catch (error) {
		const errorMsg = error instanceof Error ? error.message : "Unknown error";
		return fail(res, "Invalid token", 401, errorMsg);
	}
};

export const authorize = (...roles: string[]) => {
	return (req: AuthRequest, res: Response, next: NextFunction) => {
		if (!req.user) {
			return fail(res, "Not authenticated", 401);
		}

		if (!roles.includes(req.user.role) && req.user.role !== "ADMIN") {
			return fail(res, "Not authorized", 403);
		}

		next();
	};
};
