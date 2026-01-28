/**
 * Formats a date object to YYYY-MM-DD string using local time.
 * This prevents timezone shifts that occur with toISOString() (which uses UTC).
 *
 * Example:
 * If local time is "2023-01-27 23:00" (GMT-3), toISOString() might return "2023-01-28..."
 * This function will correctly return "2023-01-27"
 */
export function formatDateForAPI(date: Date): string {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}
