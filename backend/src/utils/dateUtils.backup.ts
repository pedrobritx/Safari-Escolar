
export function parseDateString(dateStr: string): Date {
	const parts = dateStr.split("-");
	if (parts.length !== 3) {
		const now = new Date();
		return new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
			0,
			0,
			0,
			0,
		);
	}

	const year = parseInt(parts[0]);
	const month = parseInt(parts[1]) - 1;
	const day = parseInt(parts[2]);

	const date = new Date(year, month, day, 0, 0, 0, 0);

	if (isNaN(date.getTime())) {
		const now = new Date();
		return new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
			0,
			0,
			0,
			0,
		);
	}

	return date;
}

export function getDayRange(dateStr?: string): { start: Date; end: Date } {
	let targetDate: Date;

	if (dateStr) {
		targetDate = parseDateString(dateStr);
	} else {
		const now = new Date();
		targetDate = new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate(),
			0,
			0,
			0,
			0,
		);
	}

	const start = new Date(targetDate);
	const end = new Date(targetDate);
	end.setHours(23, 59, 59, 999);

	return { start, end };
}