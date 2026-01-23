import { api } from "@/lib/api";
import { UserRole } from "@/lib/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/getErrorMessage";

interface ManageClassTeachersModalProps {
  isOpen: boolean;
  onClose: () => void;
  classId: string;
}

export function ManageClassTeachersModal({
  isOpen,
  onClose,
  classId
}: ManageClassTeachersModalProps) {
  const [teachers, setTeachers] = useState<UserRole[]>([]);
  const [currentTeacher, setCurrentTeacher] = useState<UserRole | null>(null);
  const [selectedTeacherId, setSelectedTeacherId] = useState<string>("");

	useEffect(() => {
    const loadData = async (classId: string) => {
      const token = localStorage.getItem('token');

      if (!token) return;

      const teachers = await api.getTeachers(token)
      setTeachers(teachers)

      const classData = await api.getClassById(token, classId)

      if(classData?.teacher)
        setCurrentTeacher(classData.teacher)

    }

    setSelectedTeacherId("")
    loadData(classId)

  },[classId,isOpen])

  if (!isOpen) return;

  const handleSave = async () => {
    if(!selectedTeacherId) {
      toast.error('Nenhum professor selecionado');
      return
    }

    try {
      const token = localStorage.getItem('token');

      await api.updateClassTeacher(token!,classId,selectedTeacherId)

      toast.success("Professor atualizado com sucesso")

      onClose();
    } catch (error: unknown) {
      toast.error(getErrorMessage(error))
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        {/* Header */}
        <h2 className="mb-4 text-xl font-bold text-primary">
          Professor da Turma
        </h2>

        <h3 className="mb-2 text-sm font-semibold text-green-800">
          Professor Atual
        </h3>
        
        <ul className="mb-4 space-y-2 text-sm font-medium">
          {!currentTeacher && (
            <li className="rounded-lg border border-[var(--color-border)] bg-white p-3 text-center text-[#78716C]">
              Nenhum professor vinculado
            </li>
          )}

          {currentTeacher && (
            <li
              key={currentTeacher.id}
              className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-white p-3"
            >
              <span className="text-[#57534E]">{currentTeacher.name}</span>

            </li>
          )}
        </ul>

        {/* Adicionar professor */}
        <div className="mb-6">
          <h3 className="mb-2 text-sm font-semibold text-emerald-600">
            Novo Professor
          </h3>

          <select
            value={selectedTeacherId}
            onChange={(e) => setSelectedTeacherId(e.target.value)}
            className="w-full rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--safari-green)]"
          >
            <option value="">Selecione um professor</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name}
              </option>
            ))}
          </select>

        </div>

        {/* Ações */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-lg bg-[#E7E5E4] px-4 py-2 text-sm font-medium text-[#44403C] hover:bg-[#D6D3D1] transition"
          >
            Cancelar
          </button>

          <button
            onClick={handleSave}
            className="rounded-lg bg-[var(--safari-green)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
