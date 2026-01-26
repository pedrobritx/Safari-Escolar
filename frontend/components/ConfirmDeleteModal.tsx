import { X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { api } from "@/lib/api";
import { SchoolWithCoordinator } from "@/lib/types";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/getErrorMessage";

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (deletedSchool: SchoolWithCoordinator) => void;
  school: SchoolWithCoordinator | null;
}

export function ConfirmDeleteModal({
  isOpen,
  onClose,
  onConfirm,
  school
}: ConfirmDeleteModalProps) {
  if (!isOpen) return null;

	const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token || !school) return;

      await api.deleteSchool(token, school.id)

      toast.success(`Escola ${school.name} removida com sucesso`)
      onConfirm(school)
      onClose()

    } catch (error) {
      toast.error(getErrorMessage(error))
    }
	}


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 animate-scaleIn">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Confirmar Exclusão
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="text-sm text-gray-600 mb-6">
          Tem certeza que deseja excluir{" "}
          <span className="font-semibold text-gray-900">
            {school?.name && ''}
          </span>
          ?
          <br />
          <span className="text-red-600 font-medium">
            Essa ação não poderá ser desfeita.
          </span>
        </div>

        {/* Ações */}
        <div className="flex justify-end gap-3">
          <Button
            variant="ghost"
            onClick={onClose}
            className="border"
          >
            Cancelar
          </Button>

          <Button
            variant="anger"
            onClick={handleDelete}
            className="flex items-center gap-2"
          >
            <Trash2 size={18} />
            Excluir
          </Button>
        </div>
      </div>
    </div>
  );
}
