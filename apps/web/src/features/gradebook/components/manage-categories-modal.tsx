"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GradeCategory } from "../types";
import { Trash2, Plus, Settings2 } from "lucide-react";
import { GlassPanel } from "@/components/ui/glass-panel";

interface ManageCategoriesModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: GradeCategory[];
  onCreate: (name: string, weight: number) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export function ManageCategoriesModal({
  isOpen,
  onClose,
  categories,
  onCreate,
  onDelete
}: ManageCategoriesModalProps) {
  const [newCatName, setNewCatName] = useState("");
  const [newCatWeight, setNewCatWeight] = useState("10"); // Default weight
  const [isCreating, setIsCreating] = useState(false);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  const handleCreate = async () => {
    if (!newCatName) return;
    setIsCreating(true);
    try {
      await onCreate(newCatName, parseFloat(newCatWeight) || 0);
      setNewCatName("");
      setNewCatWeight("10");
    } finally {
      setIsCreating(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta categoria?")) return;
    setIsDeleting(id);
    try {
      await onDelete(id);
    } finally {
      setIsDeleting(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings2 size={20} />
            Gerenciar Categorias
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Create New */}
          <GlassPanel className="p-4 bg-[var(--surface-active)]/50">
            <h4 className="text-sm font-medium mb-3">Nova Categoria</h4>
            <div className="flex gap-2 items-end">
              <div className="flex-1 space-y-1">
                <Label htmlFor="cat-name" className="text-xs text-[var(--text-muted)]">Nome</Label>
                <Input 
                  id="cat-name"
                  placeholder="Ex: Trabalhos"
                  value={newCatName}
                  onChange={e => setNewCatName(e.target.value)}
                  className="h-9"
                />
              </div>
              <div className="w-20 space-y-1">
                <Label htmlFor="cat-weight" className="text-xs text-[var(--text-muted)]">Peso (%)</Label>
                <Input 
                  id="cat-weight"
                  type="number"
                  value={newCatWeight}
                  onChange={e => setNewCatWeight(e.target.value)}
                  className="h-9 text-center"
                />
              </div>
              <Button 
                onClick={handleCreate} 
                disabled={!newCatName || isCreating}
                size="sm"
                className="h-9"
              >
                {isCreating ? <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"/> : <Plus size={16} />}
              </Button>
            </div>
          </GlassPanel>

          {/* List */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-[var(--text-muted)] px-1">Categorias Existentes</h4>
            {categories.length === 0 ? (
              <div className="text-center py-6 text-[var(--text-muted)] border rounded-lg border-dashed">
                Nenhuma categoria criada.
              </div>
            ) : (
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                {categories.map(cat => (
                  <div key={cat.id} className="flex items-center justify-between p-3 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">{cat.name}</span>
                      <span className="text-xs text-[var(--text-muted)]">Peso: {cat.weight}%</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(cat.id)}
                      disabled={isDeleting === cat.id}
                      className="text-[var(--text-muted)] hover:text-red-500 hover:bg-red-500/10 h-8 w-8"
                    >
                      {isDeleting === cat.id ? (
                        <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-current"/>
                      ) : (
                        <Trash2 size={14} />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
