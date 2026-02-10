import { describe, it, expect, vi } from "vitest";
import { ok, fail } from "./response";

const mockRes = () => {
	const res: any = {};
	res.status = vi.fn().mockReturnValue(res);
	res.json = vi.fn().mockReturnValue(res);
	return res;
};

describe("response helpers", () => {
	it("returns success wrapper", () => {
		const res = mockRes();
		ok(res as any, { foo: "bar" }, 201);
		expect(res.status).toHaveBeenCalledWith(201);
		expect(res.json).toHaveBeenCalledWith({ success: true, data: { foo: "bar" } });
	});

	it("returns failure wrapper", () => {
		const res = mockRes();
		fail(res as any, "Bad", 400, { field: "x" });
		expect(res.status).toHaveBeenCalledWith(400);
		expect(res.json).toHaveBeenCalledWith({
			success: false,
			error: "Bad",
			details: { field: "x" },
		});
	});
});
