import { describe, it, expect } from "vitest";
import { getDayRange, normalizeDateToUTC, parseDateString } from "./dateUtils";

describe("dateUtils", () => {
	it("normalizes date string to UTC midnight", () => {
		const d = normalizeDateToUTC("2024-12-31");
		expect(d.getUTCHours()).toBe(0);
		expect(d.toISOString().startsWith("2024-12-31")).toBe(true);
	});

	it("parses invalid date as today normalized", () => {
		const d = parseDateString("invalid");
		const now = new Date();
		expect(d.getUTCFullYear()).toBe(now.getUTCFullYear());
	});

	it("returns day range covering full UTC day", () => {
		const { start, end } = getDayRange("2024-01-01");
		expect(start.getUTCHours()).toBe(0);
		expect(end.getUTCHours()).toBe(23);
		expect(end.getUTCMinutes()).toBe(59);
	});
});