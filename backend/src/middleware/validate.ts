import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";
import { fail } from "../utils/response";

export const validate =
	(schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
		try {
			schema.parse({
				body: req.body,
				query: req.query,
				params: req.params,
			});
			return next();
		} catch (err) {
			if (err instanceof ZodError) {
				return fail(
					res,
					"Validation error",
					400,
					err.errors.map((e) => ({ path: e.path, message: e.message })),
				);
			}
			return fail(res, "Validation error", 400);
		}
	};
