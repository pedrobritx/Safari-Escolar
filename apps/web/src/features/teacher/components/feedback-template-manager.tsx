import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FeedbackCategory, FeedbackTemplate } from "../types/feedback-types";

interface FeedbackTemplateManagerProps {
  isOpen: boolean;
  onClose: () => void;
  templates: FeedbackTemplate[];
  onAdd: (template: Omit<FeedbackTemplate, "id">) => void;
  onEdit: (id: string, updates: Partial<FeedbackTemplate>) => void;
  onDelete: (id: string) => void;
}

export function FeedbackTemplateManager({
  isOpen,
  onClose,
  templates,
  onAdd,
  onEdit,
  onDelete,
}: FeedbackTemplateManagerProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<FeedbackTemplate>>({
    label: "",
    icon: "",
    points: 1,
    category: "positive",
  });

  const resetForm = () => {
    setEditingId(null);
    setFormData({ label: "", icon: "", points: 1, category: "positive" });
  };

  const handleStartEdit = (template: FeedbackTemplate) => {
    setEditingId(template.id);
    setFormData(template);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.label || !formData.icon) return; // Simple validation

    if (editingId) {
      onEdit(editingId, formData);
    } else {
      onAdd(formData as Omit<FeedbackTemplate, "id">);
    }
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Gerenciar Templates</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-6 py-4">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-semibold text-sm text-[var(--text-muted)]">
              {editingId ? "Editar Template" : "Novo Template"}
            </h3>
            <div className="flex gap-2">
                <Input
                placeholder="Emoji/Ícone"
                className="w-16 text-center text-xl"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                maxLength={2}
                />
                <Input
                placeholder="Nome do feedback"
                className="flex-1"
                value={formData.label}
                onChange={(e) => setFormData({ ...formData, label: e.target.value })}
                />
            </div>
            <div className="flex gap-2">
                <select 
                    className="flex-1 rounded-md border border-input p-2 text-sm"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as FeedbackCategory })}
                >
                    <option value="positive">Positivo</option>
                    <option value="improvement">Melhoria</option>
                </select>
                <Input
                    type="number"
                    placeholder="Pontos"
                    className="w-20"
                    value={formData.points}
                    onChange={(e) => setFormData({ ...formData, points: parseInt(e.target.value) || 0 })}
                />
            </div>
            <div className="flex justify-end gap-2 pt-2">
                {editingId && (
                    <Button type="button" variant="ghost" size="sm" onClick={resetForm}>Cancelar Edição</Button>
                )}
                <Button type="submit" size="sm">{editingId ? "Salvar" : "Adicionar"}</Button>
            </div>
          </form>

          {/* List */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-sm">Templates Existentes</h3>
            {templates.map((t) => (
                <div key={t.id} className="flex items-center justify-between p-2 rounded border bg-white">
                    <div className="flex items-center gap-2">
                        <span className="text-xl">{t.icon}</span>
                        <div className="flex flex-col">
                            <span className="font-medium text-sm">{t.label}</span>
                            <span className="text-xs text-[var(--text-muted)]">
                                {t.category === 'positive' ? 'Positivo' : 'Melhoria'} • {t.points > 0 ? '+' : ''}{t.points} pts
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <Button variant="ghost" size="sm" onClick={() => handleStartEdit(t)}>✏️</Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600" onClick={() => onDelete(t.id)}>🗑️</Button>
                    </div>
                </div>
            ))}
          </div>
        </div>
        
        <DialogFooter>
            <Button variant="ghost" onClick={onClose}>Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
