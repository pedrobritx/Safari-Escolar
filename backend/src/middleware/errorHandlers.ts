import { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils/errors";

export const notFoundHandler = (req: Request, res: Response) => {
	res.status(404).json({ success: false, error: "Not found" });
};

export const errorHandler = (
	err: unknown,
	_req: Request,
	res: Response,
	_next: NextFunction,
) => {
	if (err instanceof HttpError) {
		return res
			.status(err.status)
			.json({ success: false, error: err.message, details: err.details });
	}

	console.error("Unhandled error:", err);
	return res
		.status(500)
		.json({ success: false, error: "Internal server error" });
};