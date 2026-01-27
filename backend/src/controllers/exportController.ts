import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import prisma from "../utils/prisma";

/**
 * Escape CSV field - wrap in quotes if contains comma, quote, or newline
 */
function escapeCSV(value: string | number | null | undefined): string {
	if (value === null || value === undefined) return "";
	const str = String(value);
	if (str.includes(",") || str.includes('"') || str.includes("\n")) {
		return `"${str.replace(/"/g, '""')}"`;
	}
	return str;
}

/**
 * Export student roster with summary statistics
 */
export const exportStudents = async (req: AuthRequest, res: Response) => {
	try {
		const userId = req.user!.id;
		const userRole = req.user!.role;

		if (userRole !== "TEACHER") {
			return res.status(403).json({ error: "Only teachers can export data" });
		}

		const classes = await prisma.class.findMany({
			where: { teacherId: userId },
			include: {
				students: {
					include: {
						attendances: true,
						feedbackEvents: true,
					},
				},
			},
		});

		// CSV Header
		const headers = [
			"Nome",
			"Turma",
			"Avatar",
			"Total Presenças",
			"Total Faltas",
			"Total Atrasos",
			"Taxa Presença (%)",
			"Feedback Positivo",
			"Feedback Negativo",
			"Score Total",
		];
		const rows: string[] = [headers.join(",")];

		for (const cls of classes) {
			for (const student of cls.students) {
				const present = student.attendances.filter(
					(a) => a.status === "PRESENT",
				).length;
				const absent = student.attendances.filter(
					(a) => a.status === "ABSENT",
				).length;
				const late = student.attendances.filter(
					(a) => a.status === "LATE",
				).length;
				const total = student.attendances.length;
				const rate =
					total > 0 ? (((present + late) / total) * 100).toFixed(1) : "0";

				const positive = student.feedbackEvents.filter(
					(e) => e.type === "POSITIVE",
				).length;
				const negative = student.feedbackEvents.filter(
					(e) => e.type === "NEGATIVE",
				).length;
				const score = positive - negative;

				const row = [
					escapeCSV(student.name),
					escapeCSV(cls.name),
					escapeCSV(student.animalAvatar),
					present,
					absent,
					late,
					rate,
					positive,
					negative,
					score,
				];
				rows.push(row.join(","));
			}
		}

		const csv = rows.join("\n");
		const filename = `alunos_${new Date().toISOString().split("T")[0]}.csv`;

		res.setHeader("Content-Type", "text/csv; charset=utf-8");
		res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
		res.send("\uFEFF" + csv); // BOM for Excel UTF-8 compatibility
	} catch (error) {
		console.error("Export students error:", error);
		res.status(500).json({ error: "Failed to export students" });
	}
};

/**
 * Export detailed history (attendance + feedback by date)
 */
export const exportHistory = async (req: AuthRequest, res: Response) => {
	try {
		const userId = req.user!.id;
		const userRole = req.user!.role;

		if (userRole !== "TEACHER") {
			return res.status(403).json({ error: "Only teachers can export data" });
		}

		const classes = await prisma.class.findMany({
			where: { teacherId: userId },
			include: {
				students: {
					include: {
						attendances: {
							orderBy: { date: "desc" },
						},
						feedbackEvents: {
							orderBy: { date: "desc" },
						},
					},
				},
			},
		});

		// CSV Header
		const headers = ["Data", "Aluno", "Turma", "Tipo", "Valor"];
		const rows: string[] = [headers.join(",")];

		for (const cls of classes) {
			for (const student of cls.students) {
				// Add attendance records
				for (const att of student.attendances) {
					const dateStr = att.date.toISOString().split("T")[0];
					const statusMap: Record<string, string> = {
						PRESENT: "Presente",
						ABSENT: "Ausente",
						LATE: "Atrasado",
					};
					const row = [
						dateStr,
						escapeCSV(student.name),
						escapeCSV(cls.name),
						"Presença",
						statusMap[att.status] || att.status,
					];
					rows.push(row.join(","));
				}

				// Add feedback records
				for (const fb of student.feedbackEvents) {
					const dateStr = fb.date.toISOString().split("T")[0];
					const typeLabel =
						fb.type === "POSITIVE"
							? "Feedback Positivo"
							: "Feedback Construtivo";
					const row = [
						dateStr,
						escapeCSV(student.name),
						escapeCSV(cls.name),
						typeLabel,
						escapeCSV(fb.description),
					];
					rows.push(row.join(","));
				}
			}
		}

		const csv = rows.join("\n");
		const filename = `historico_${new Date().toISOString().split("T")[0]}.csv`;

		res.setHeader("Content-Type", "text/csv; charset=utf-8");
		res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
		res.send("\uFEFF" + csv); // BOM for Excel UTF-8 compatibility
	} catch (error) {
		console.error("Export history error:", error);
		res.status(500).json({ error: "Failed to export history" });
	}
};
