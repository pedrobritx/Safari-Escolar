"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Classroom {
  id: string;
  name: string;
}

interface StudentFormData {
  id?: string;
  display_name: string;
  preferred_name?: string;
  classroom: string;
  color_hex: string;
  animal_id?: string;
}

interface StudentFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (student: StudentFormData) => void;
  editStudent?: StudentFormData | null;
  classrooms: Classroom[];
}

const COLOR_PRESETS = [
  "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", 
  "#FFEAA7", "#DDA0DD", "#98D8C8", "#F7DC6F",
];

// Safari animal emojis
const ANIMAL_EMOJIS = ["🦁", "🦒", "🦓", "🐘", "🐒", "🦜", "🐊", "🦩", "🦋", "🐢"];

export function StudentFormModal({
  isOpen,
  onClose,
  onSave,
  editStudent,
  classrooms,
}: StudentFormModalProps) {
  const [displayName, setDisplayName] = useState("");
  const [preferredName, setPreferredName] = useState("");
  const [classroomId, setClassroomId] = useState("");
  const [colorHex, setColorHex] = useState(COLOR_PRESETS[0]);
  const [animalId, setAnimalId] = useState(ANIMAL_EMOJIS[0]);
  const [isLoading, setIsLoading] = useState(false);

  const isEditMode = !!editStudent;

  useEffect(() => {
    if (editStudent) {
      setDisplayName(editStudent.display_name);
      setPreferredName(editStudent.preferred_name || "");
      setClassroomId(editStudent.classroom);
      setColorHex(editStudent.color_hex || COLOR_PRESETS[0]);
      setAnimalId(editStudent.animal_id || ANIMAL_EMOJIS[0]);
    } else {
      setDisplayName("");
      setPreferredName("");
      setClassroomId(classrooms[0]?.id || "");
      setColorHex(COLOR_PRESETS[0]);
      setAnimalId(ANIMAL_EMOJIS[0]);
    }
  }, [editStudent, isOpen, classrooms]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await onSave({
        id: editStudent?.id,
        display_name: displayName,
        preferred_name: preferredName || undefined,
        classroom: classroomId,
        color_hex: colorHex,
        animal_id: animalId,
      });
      onClose();
    } catch (error) {
      console.error("Failed to save student:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isEditMode ? "Editar Aluno" : "Novo Aluno"}
          </DialogTitle>
          <p className="text-sm text-[var(--text-muted)]">
            {isEditMode
              ? "Atualize as informações do aluno."
              : "Adicione um novo aluno à turma."}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {/* Display Name */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="displayName" className="text-right">
                Nome
              </Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Nome completo"
                className="col-span-3"
                required
              />
            </div>

            {/* Preferred Name */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="preferredName" className="text-right">
                Apelido
              </Label>
              <Input
                id="preferredName"
                value={preferredName}
                onChange={(e) => setPreferredName(e.target.value)}
                placeholder="Como prefere ser chamado"
                className="col-span-3"
              />
            </div>

            {/* Classroom */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="classroom" className="text-right">
                Turma
              </Label>
              <div className="col-span-3">
                <select
                  id="classroom"
                  className="flex h-11 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm ring-offset-[var(--bg)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-[var(--text)] transition-colors appearance-none"
                  value={classroomId}
                  onChange={(e) => setClassroomId(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Selecione uma turma...
                  </option>
                  {classrooms.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Color */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Cor</Label>
              <div className="col-span-3 flex gap-2 flex-wrap">
                {COLOR_PRESETS.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`w-8 h-8 rounded-full transition-all ${
                      colorHex === color
                        ? "ring-2 ring-offset-2 ring-[var(--primary)] scale-110"
                        : "hover:scale-105"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setColorHex(color)}
                  />
                ))}
              </div>
            </div>

            {/* Animal Emoji */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Animal</Label>
              <div className="col-span-3 flex gap-2 flex-wrap">
                {ANIMAL_EMOJIS.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    className={`w-10 h-10 rounded-lg text-xl flex items-center justify-center transition-all bg-[var(--surface-glass)] border-2 ${
                      animalId === emoji
                        ? "border-[var(--primary)] ring-2 ring-offset-1 ring-[var(--primary)] scale-110"
                        : "border-transparent hover:scale-105 hover:bg-[var(--surface)]"
                    }`}
                    onClick={() => setAnimalId(emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading || !displayName || !classroomId}>
              {isLoading ? "Salvando..." : isEditMode ? "Salvar" : "Criar Aluno"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
