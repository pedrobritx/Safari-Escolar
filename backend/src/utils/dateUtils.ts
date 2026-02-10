/**
 * Date utilities for Safari Escolar backend
 * Centralizes date parsing logic to prevent timezone issues and code duplication
 */

/**
 * Parse a YYYY-MM-DD date string to a UTC Date at midnight.
 * Falls back to today's date if invalid.
 */
export function parseDateString(dateStr: string): Date {
	const parts = dateStr.split("-");
	if (parts.length !== 3) {
		return normalizeDateToUTC();
	}

	const year = parseInt(parts[0], 10);
	const month = parseInt(parts[1], 10) - 1;
	const day = parseInt(parts[2], 10);

	const date = new Date(Date.UTC(year, month, day, 0, 0, 0, 0));

	if (isNaN(date.getTime())) {
		return normalizeDateToUTC();
	}
	return date;
}

/**
 * Normalize a given date string or Date to UTC midnight.
 */
export function normalizeDateToUTC(dateInput?: string | Date): Date {
	if (dateInput instanceof Date) {
		return new Date(Date.UTC(dateInput.getUTCFullYear(), dateInput.getUTCMonth(), dateInput.getUTCDate(), 0, 0, 0, 0));
	}

	if (typeof dateInput === "string") {
		return parseDateString(dateInput);
	}

	const now = new Date();
	return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0));
}

/**
 * Get the UTC start and end of a day for database queries.
 * If no date string is provided, uses current date (UTC day).
 */
export function getDayRange(dateStr?: string): { start: Date; end: Date } {
	const start = normalizeDateToUTC(dateStr);
	const end = new Date(start);
	end.setUTCHours(23, 59, 59, 999);
	return { start, end };
}
