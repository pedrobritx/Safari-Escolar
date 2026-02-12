import { useState, useEffect } from "react";
import { Student } from "@/lib/types";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { ChevronLeft, ChevronRight, Check, Clock, X } from "lucide-react";
import { getAnimalAvatar } from "@/utils/getAnimalAvatar";

interface RollCallModalProps {
	isOpen: boolean;
	onClose: () => void;
	students: Student[];
	onMarkAttendance: (
		studentId: string,
		status: "PRESENT" | "ABSENT" | "LATE" | "CLEARED",
	) => void;
}

export default function RollCallModal({
	isOpen,
	onClose,
	students,
	onMarkAttendance,
}: RollCallModalProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [autoAdvance, setAutoAdvance] = useState(true);

	useEffect(() => {
		if (isOpen) {
			setCurrentIndex(0);
		}
	}, [isOpen]);

	const currentStudent = students[currentIndex];
	const progress = ((currentIndex + 1) / students.length) * 100;

	if (!isOpen || !currentStudent) return null;

	const handleStatus = (status: "PRESENT" | "ABSENT" | "LATE") => {
		onMarkAttendance(currentStudent.id, status);
		if (autoAdvance && currentIndex < students.length - 1) {
			setTimeout(() => {
				setCurrentIndex((prev) => prev + 1);
			}, 300); // Small delay for visual feedback
		} else if (autoAdvance && currentIndex === students.length - 1) {
			setTimeout(() => {
				onClose();
			}, 500);
		}
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title="Chamada"
			maxWidth="md"
			className="overflow-hidden"
		>
			<div className="flex flex-col h-[500px]">
				{/* Progress Bar */}
				<div className="h-2 w-full bg-[var(--safari-stone-200)]">
					<div
						className="h-full bg-[var(--safari-green)] transition-all duration-300"
						style={{ width: `${progress}%` }}
					></div>
				</div>

				<div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
					<div className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest mb-4">
						Aluno {currentIndex + 1} de {students.length}
					</div>

					<div className="mb-8 relative group">
						<div
							className="w-40 h-40 rounded-full border-4 border-white shadow-[var(--shadow-floating)] flex items-center justify-center text-7xl mb-4 transition-transform transform group-hover:scale-105"
							style={{
								backgroundColor: currentStudent.avatarColor || "#FFFFFF",
							}}
						>
							{getAnimalAvatar(currentStudent.animalAvatar)}
						</div>
					</div>

					<h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
						{currentStudent.name}
					</h2>
					<p className="text-[var(--text-muted)] mb-8">
						{currentStudent.todayStatus
							? `Status atual: ${
									currentStudent.todayStatus === "PRESENT"
										? "Presente"
										: currentStudent.todayStatus === "LATE"
											? "Atrasado"
											: "Ausente"
								}`
							: "Ainda não verificado"}
					</p>

					<div className="grid grid-cols-3 gap-4 w-full max-w-sm">
						<button
							onClick={() => handleStatus("PRESENT")}
							className="liquid-control flex flex-col items-center justify-center gap-2 p-6 rounded-[var(--radius-outer)] bg-[var(--safari-green-light)] text-[var(--safari-green)] hover:bg-[var(--safari-green)] hover:text-white transition-all shadow-[var(--shadow-hardware)] active:scale-95"
						>
							<Check size={32} strokeWidth={3} />
							<span className="font-bold">Presente</span>
						</button>

						<button
							onClick={() => handleStatus("LATE")}
							className="liquid-control flex flex-col items-center justify-center gap-2 p-6 rounded-[var(--radius-outer)] bg-[var(--safari-yellow-light)] text-[var(--safari-yellow-dark)] hover:bg-[var(--safari-yellow)] hover:text-white transition-all shadow-[var(--shadow-hardware)] active:scale-95"
						>
							<Clock size={32} strokeWidth={3} />
							<span className="font-bold">Atraso</span>
						</button>

						<button
							onClick={() => handleStatus("ABSENT")}
							className="liquid-control flex flex-col items-center justify-center gap-2 p-6 rounded-[var(--radius-outer)] bg-[var(--safari-orange-light)] text-[var(--safari-orange)] hover:bg-[var(--safari-orange)] hover:text-white transition-all shadow-[var(--shadow-hardware)] active:scale-95"
						>
							<X size={32} strokeWidth={3} />
							<span className="font-bold">Ausente</span>
						</button>
					</div>
				</div>

				<div className="p-4 bg-[var(--surface-raised)] border-t border-[var(--safari-stone-200)] flex items-center justify-between">
					<Button
						variant="ghost"
						onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
						disabled={currentIndex === 0}
					>
						<ChevronLeft className="mr-2" size={20} /> Anterior
					</Button>

					<div className="flex items-center gap-2">
						<input
							type="checkbox"
							id="auto-advance"
							checked={autoAdvance}
							onChange={(e) => setAutoAdvance(e.target.checked)}
							className="rounded border-gray-300 text-[var(--safari-green)] focus:ring-[var(--safari-green)]"
						/>
						<label
							htmlFor="auto-advance"
							className="text-sm font-medium text-[var(--text-secondary)] cursor-pointer"
						>
							Avanço Automático
						</label>
					</div>

					<Button
						variant="ghost"
						onClick={() =>
							setCurrentIndex((prev) => Math.min(students.length - 1, prev + 1))
						}
						disabled={currentIndex === students.length - 1}
					>
						Próximo <ChevronRight className="ml-2" size={20} />
					</Button>
				</div>
			</div>
		</Modal>
	);
}
