import React from "react";
import { Button } from "@/components/ui/Button";
import { Student } from "@/lib/types";
import { Pencil, Check } from "lucide-react";
import { getAnimalAvatar } from "@/utils/getAnimalAvatar";

interface StudentCardProps {
	student: Student;
	viewMode: "grid" | "list";
	onEdit: (student: Student) => void;
	onAttendanceChange: (
		studentId: string,
		status: "PRESENT" | "ABSENT" | "LATE" | "CLEARED",
	) => void;
	onOpenFeedback: (studentId: string, studentName: string) => void;
	isSelectMode?: boolean;
	isSelected?: boolean;
	onToggleSelect?: (studentId: string) => void;
}

export const StudentCard: React.FC<StudentCardProps> = ({
	student,
	viewMode,
	onEdit,
	onAttendanceChange,
	onOpenFeedback,
	isSelectMode = false,
	isSelected = false,
	onToggleSelect,
}) => {
	const getStatusConfig = (status?: string | null) => {
		switch (status) {
			case "PRESENT":
				return {
					label: "✅ Presente",
					bg: "bg-[var(--safari-green-light)]",
					text: "text-[var(--safari-green)]",
					border: "border-[var(--safari-green)]",
				};
			case "LATE":
				return {
					label: "⏰ Atrasado",
					bg: "bg-[var(--safari-yellow-light)]",
					text: "text-[var(--safari-yellow-dark)]",
					border: "border-[var(--safari-yellow)]",
				};
			case "ABSENT":
				return {
					label: "🚫 Ausente",
					bg: "bg-[var(--safari-orange-light)]",
					text: "text-[var(--safari-orange)]",
					border: "border-[var(--safari-orange)]",
				};
			default:
				return {
					label: "Marcar Presença",
					bg: "bg-[var(--control-surface-off)]",
					text: "text-[var(--text-muted)]",
					border: "border-[var(--safari-stone-200)]",
				};
		}
	};

	const currentConfig = getStatusConfig(student.todayStatus);

	const handleStatusCycle = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (isSelectMode) return; // Disable status cycle in select mode if needed

		const current = student.todayStatus;
		let next: "PRESENT" | "LATE" | "ABSENT" | "CLEARED";

		if (!current) next = "PRESENT";
		else if (current === "PRESENT") next = "LATE";
		else if (current === "LATE") next = "ABSENT";
		else next = "CLEARED"; // ABSENT -> CLEARED

		onAttendanceChange(student.id, next);
	};

	const handleCardClick = () => {
		if (isSelectMode && onToggleSelect) {
			onToggleSelect(student.id);
		}
	};

	return (
		<div
			onClick={handleCardClick}
			className={`
				${
					viewMode === "list"
						? "list-card"
						: "card-interactive p-4 flex flex-col items-center text-center relative group"
				}
				${isSelectMode ? "cursor-pointer" : ""}
				${isSelected ? "ring-2 ring-[var(--safari-green)] bg-[var(--safari-green-light)]/20" : ""}
			`}
		>
			{/* Selection Indicator */}
			{isSelectMode && (
				<div
					className={`absolute top-2 right-2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
						isSelected
							? "bg-[var(--safari-green)] border-[var(--safari-green)]"
							: "bg-white border-[var(--safari-stone-300)]"
					}`}
				>
					{isSelected && <Check size={14} className="text-white" />}
				</div>
			)}

			<div
				className={
					viewMode === "list"
						? "flex flex-col sm:flex-row items-center justify-between gap-4 w-full"
						: "w-full"
				}
			>
				<div
					className={
						viewMode === "list"
							? "flex items-center space-x-4"
							: "flex flex-col items-center gap-2 mb-4 relative"
					}
				>
					<div className="relative group/avatar">
						<div
							className={`flex items-center justify-center border-2 border-white/50 rounded-full shadow-inner ${viewMode === "list" ? "w-12 h-12 text-2xl" : "w-24 h-24 text-5xl mb-1"}`}
							style={{ backgroundColor: student.avatarColor || "#FFFFFF" }}
						>
							{getAnimalAvatar(student.animalAvatar)}
						</div>

						{/* Edit Overlay - Only show if NOT in select mode */}
						{!isSelectMode && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									onEdit(student);
								}}
								className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity"
							>
								<div className="bg-white text-primary text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
									<Pencil size={12} /> Detalhar
								</div>
							</button>
						)}

						{/* Pontuação Badge */}
						{(student.todayScore || 0) !== 0 && (
							<div
								className={`score-badge ${
									(student.todayScore || 0) >= 0
										? "score-badge-positive"
										: "score-badge-negative"
								}`}
							>
								{student.todayScore}
							</div>
						)}
					</div>

					<span
						className={`font-bold text-[var(--safari-green)] ${viewMode === "list" ? "text-lg" : "text-xl"}`}
					>
						{student.name}
					</span>
				</div>

				<div
					className={
						viewMode === "list"
							? "flex items-center gap-2"
							: "flex flex-col gap-2 w-full"
					}
				>
					<div
						className={viewMode === "list" ? "w-auto min-w-[160px]" : "w-full"}
					>
						<button
							onClick={handleStatusCycle}
							disabled={isSelectMode}
							className={`liquid-control w-full font-bold rounded-[var(--radius-inner)] border text-sm text-center shadow-[var(--shadow-hardware)] py-2 px-3 whitespace-nowrap transition-all active:scale-95
                  ${currentConfig.bg} ${currentConfig.border} ${currentConfig.text}
                  ${isSelectMode ? "opacity-50 grayscale cursor-not-allowed" : "hover:brightness-95"}
                `}
						>
							{currentConfig.label}
						</button>
					</div>
					<div className={viewMode === "list" ? "" : "w-full mt-1"}>
						<Button
							variant="primary"
							disabled={isSelectMode}
							onClick={(e) => {
								e.stopPropagation();
								onOpenFeedback(student.id, student.name);
							}}
							className={`flex items-center justify-center gap-2 ${viewMode === "list" ? "px-3 py-1.5 text-sm min-w-[90px]" : "py-2 text-xs w-full"} ${isSelectMode ? "opacity-50" : ""}`}
						>
							Feedback
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
