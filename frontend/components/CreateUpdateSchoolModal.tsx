import { useEffect, useState } from "react";
import { Input } from "./ui/Input";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";
import { Save } from "lucide-react";
import { SchoolWithCoordinator, UserRole } from "@/lib/types";
import { api } from "@/lib/api";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/getErrorMessage";

interface CreateUpdateSchoolProps {
  school: SchoolWithCoordinator | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (school: SchoolWithCoordinator) => void;
  mode: 'create' | 'edit';
}

export function CreateUpdateSchoolModal({isOpen, onClose, mode, school, onSave}: CreateUpdateSchoolProps) {
  const [cordinators, setCoordinators] = useState<UserRole[]>([]);
  const [selectedCoordinatorId,setSelectedCoordinatorId] = useState<string>("")
  const [name,setName] = useState<string>("")

  useEffect(() => {
    const loadData = async () => {
      const token = localStorage.getItem('token');

      if (!token) return;
      
      const coordinators = await api.getCoordinators(token)
      setCoordinators(coordinators)
    }
    
    loadData()
  },[])

  useEffect(() => {
    if(!school) {
      setSelectedCoordinatorId("")
      setName("")
    } else {
      setName(school.name)
      setSelectedCoordinatorId(school.coordinatorId)
    }
  },[school,mode])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const token = localStorage.getItem('token');

    if (!token) return;

    try {
      const createdSchool = await api.saveSchool(token,{id: school?.id, name, coordinatorId: selectedCoordinatorId})
      toast.success(`Escola ${name} ${mode === 'create' ? 'criada' : 'atualizada'} com sucesso`)
      onSave(createdSchool)
      onClose()

    } catch (error) {
      toast.error(getErrorMessage(error))
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'create' ? '🏫 Adicionar Escola' : '✏️ Editar Escola'}
      maxWidth="md"
    >
      <form className="p-6 space-y-6" onSubmit={handleSubmit}>
        <Input
          label="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Escola João Silva"
          autoFocus
          required
        />

        <div className="mb-6">
          <h3 className="block text-sm font-bold text-[var(--color-primary)] mb-2">
            Coordenador
          </h3>

          <select
            value={selectedCoordinatorId}
            onChange={(e) => setSelectedCoordinatorId(e.target.value)}
            className="w-full rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--safari-green)]"
          >
            <option value="">Selecione um Coordenador</option>
            {cordinators.map((cordinator) => (
              <option key={cordinator.id} value={cordinator.id}>
                {cordinator.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            type="submit"
            variant="primary"
            className="flex-1 px-6 py-3"
          >
          <Save size={20} />
            {mode === 'create' ? 'Adicionar' : 'Salvar Alterações'}
          </Button>
        </div>

      </form>
    </Modal>
  )
}
