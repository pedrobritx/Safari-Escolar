import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Student } from "@/lib/types";
import { Pencil, ChevronDown } from "lucide-react";
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
}

export const StudentCard: React.FC<StudentCardProps> = ({
	student,
	viewMode,
	onEdit,
	onAttendanceChange,
	onOpenFeedback,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

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
					bg: "bg-yellow-100",
					text: "text-yellow-700",
					border: "border-yellow-500",
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

	return (
		<div
			className={
				viewMode === "list"
					? "list-card"
					: `card-interactive p-4 flex flex-col items-center text-center relative group ${isOpen ? "z-50" : "z-0"}`
			}
		>
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
							className={`flex items-center justify-center border-2 border-white/50 rounded-full shadow-inner cursor-pointer ${viewMode === "list" ? "w-12 h-12 text-2xl" : "w-24 h-24 text-5xl mb-1"}`}
							style={{ backgroundColor: student.avatarColor || "#FFFFFF" }}
						>
							{getAnimalAvatar(student.animalAvatar)}
						</div>

						{/* Edit Overlay */}
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
						<div ref={dropdownRef} className="relative">
							<button
								onClick={(e) => {
									e.stopPropagation();
									setIsOpen(!isOpen);
								}}
								className={`w-full font-bold rounded-[var(--radius-inner)] border transition-all text-sm text-center shadow-inner py-2 flex items-center justify-between px-3 whitespace-nowrap
                  ${currentConfig.bg} ${currentConfig.border} ${currentConfig.text}
                `}
							>
								<span className="flex-1 text-center">
									{currentConfig.label}
								</span>
								<ChevronDown size={14} strokeWidth={3} className="opacity-50" />
							</button>

							{isOpen && (
								<div className="absolute top-full left-0 right-0 mt-1 z-50 flex flex-col gap-1 p-1 bg-white/80 backdrop-blur-xl rounded-2xl border border-[var(--border-glass)] shadow-[var(--shadow-glass)] animate-in fade-in zoom-in-95 duration-200 origin-top">
									<button
										onClick={(e) => {
											e.stopPropagation();
											onAttendanceChange(student.id, "PRESENT");
											setIsOpen(false);
										}}
										className="w-full text-left px-3 py-2 rounded-[calc(var(--radius-inner)-4px)] font-bold text-sm hover:bg-[var(--safari-green-light)] hover:text-[var(--safari-green)] transition-all flex items-center gap-2"
									>
										✅ Presente
									</button>
									<button
										onClick={(e) => {
											e.stopPropagation();
											onAttendanceChange(student.id, "LATE");
											setIsOpen(false);
										}}
										className="w-full text-left px-3 py-2 rounded-[calc(var(--radius-inner)-4px)] font-bold text-sm hover:bg-yellow-100 hover:text-yellow-700 transition-all flex items-center gap-2"
									>
										⏰ Atrasado
									</button>
									<button
										onClick={(e) => {
											e.stopPropagation();
											onAttendanceChange(student.id, "ABSENT");
											setIsOpen(false);
										}}
										className="w-full text-left px-3 py-2 rounded-[calc(var(--radius-inner)-4px)] font-bold text-sm hover:bg-[var(--safari-orange-light)] hover:text-[var(--safari-orange)] transition-all flex items-center gap-2"
									>
										🚫 Ausente
									</button>
									<div className="h-px bg-[var(--safari-stone-200)] mx-2 my-1" />
									<button
										onClick={(e) => {
											e.stopPropagation();
											onAttendanceChange(student.id, "CLEARED");
											setIsOpen(false);
										}}
										className="w-full text-left px-3 py-2 rounded-[calc(var(--radius-inner)-4px)] font-medium text-sm text-[var(--text-muted)] hover:bg-[var(--safari-stone-100)] hover:text-[var(--text-primary)] transition-all flex items-center gap-2"
									>
										🗑️ Limpar
									</button>
								</div>
							)}
						</div>
					</div>
					<div className={viewMode === "list" ? "" : "w-full mt-1"}>
						<Button
							variant="primary"
							onClick={(e) => {
								e.stopPropagation();
								onOpenFeedback(student.id, student.name);
							}}
							className={`flex items-center justify-center gap-2 ${viewMode === "list" ? "px-3 py-1.5 text-sm min-w-[90px]" : "py-2 text-xs w-full"}`}
						>
							Feedback
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
