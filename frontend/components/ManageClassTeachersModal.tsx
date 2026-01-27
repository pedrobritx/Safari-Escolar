import { api } from "@/lib/api";
import { UserRole } from "@/lib/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { Select } from "./ui/Select";

interface ManageClassTeachersModalProps {
	isOpen: boolean;
	onClose: () => void;
	classId: string;
}

export function ManageClassTeachersModal({
	isOpen,
	onClose,
	classId,
}: ManageClassTeachersModalProps) {
	const [teachers, setTeachers] = useState<UserRole[]>([]);
	const [currentTeacher, setCurrentTeacher] = useState<UserRole | null>(null);
	const [selectedTeacherId, setSelectedTeacherId] = useState<string>("");

	useEffect(() => {
		const loadData = async (classId: string) => {
			const token = localStorage.getItem("token");

			if (!token) return;

			const teachers = await api.getTeachers(token);
			setTeachers(teachers);

			const classData = await api.getClassById(token, classId);

			if (classData?.teacher) setCurrentTeacher(classData.teacher);
		};

		setSelectedTeacherId("");
		if (isOpen) {
			loadData(classId);
		}
	}, [classId, isOpen]);

	const handleSave = async () => {
		if (!selectedTeacherId) {
			toast.error("Nenhum professor selecionado");
			return;
		}

		try {
			const token = localStorage.getItem("token");

			await api.updateClassTeacher(token!, classId, selectedTeacherId);

			toast.success("Professor atualizado com sucesso");

			onClose();
		} catch (error: unknown) {
			toast.error(getErrorMessage(error));
		}
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title="Professor da Turma"
			maxWidth="md"
		>
			<div className="p-6">
				<h3 className="mb-2 text-sm font-bold text-[var(--text-primary)]">
					Professor Atual
				</h3>

				<ul className="mb-6 space-y-2 text-sm font-medium">
					{!currentTeacher && (
						<li className="list-item min-h-[50px] justify-center text-[var(--text-muted)] italic">
							Nenhum professor vinculado
						</li>
					)}

					{currentTeacher && (
						<li key={currentTeacher.id} className="list-card">
							<span className="text-[var(--text-primary)] font-bold">
								{currentTeacher.name}
							</span>
						</li>
					)}
				</ul>

				{/* Adicionar professor */}
				<div className="mb-8">
					<h3 className="mb-2 text-sm font-bold text-[var(--safari-green)]">
						Novo Professor
					</h3>

					<Select
						value={selectedTeacherId}
						onChange={setSelectedTeacherId}
						options={[
							{ value: "", label: "Selecione um professor..." },
							...teachers.map((t) => ({ value: t.id, label: t.name })),
						]}
					/>
				</div>

				{/* Ações */}
				<div className="flex justify-end gap-3 pt-2 border-t border-[var(--safari-stone-200)]">
					<Button variant="ghost" onClick={onClose}>
						Cancelar
					</Button>

					<Button variant="primary" onClick={handleSave}>
						Salvar
					</Button>
				</div>
			</div>
		</Modal>
	);
}
