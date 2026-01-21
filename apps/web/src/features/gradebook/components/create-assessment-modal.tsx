import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GradeCategory, GradeItem } from "../types";
import { Settings } from "lucide-react";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: GradeCategory[];
  onSave: (item: Partial<GradeItem>) => void;
  onDelete?: (item: GradeItem) => void;
  editItem?: GradeItem | null;
  onManageCategories?: () => void;
}

export function AssessmentModal({ 
  isOpen, 
  onClose, 
  categories, 
  onSave,
  onDelete,
  editItem,
  onManageCategories
}: AssessmentModalProps) {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [maxScore, setMaxScore] = useState("10");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const isEditMode = !!editItem;

  // Pre-fill form when editing
  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setCategoryId(editItem.category);
      setMaxScore(String(editItem.max_score));
      setDate(editItem.graded_at);
    } else {
      // Reset form for create mode
      setTitle("");
      setCategoryId("");
      setMaxScore("10");
      setDate(new Date().toISOString().split('T')[0]);
    }
  }, [editItem, isOpen]);

  const handleSave = () => {
    onSave({
      id: editItem?.id, // Include id when editing
      title,
      category: categoryId,
      max_score: parseFloat(maxScore),
      graded_at: date
    });
    onClose();
  };

  const handleDelete = () => {
    if (onDelete && editItem) {
        onDelete(editItem);
        onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditMode ? "Editar Avaliação" : "Nova Avaliação"}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">Título</Label>
            <Input 
              id="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="col-span-3"
              placeholder="Ex: Prova de Matemática" 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">Categoria</Label>
            <div className="col-span-3 flex gap-2">
               <select
                id="category"
                className="flex h-11 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm ring-offset-[var(--bg)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-[var(--text)] transition-colors appearance-none flex-1"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option value="" disabled>Selecione...</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              {onManageCategories && (
                  <Button 
                    type="button"
                    variant="outline" 
                    size="icon" 
                    onClick={onManageCategories}
                    title="Gerenciar Categorias"
                    className="h-11 w-11 shrink-0"
                  >
                    <Settings size={18} className="text-[var(--text-muted)]" />
                  </Button>
              )}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="score" className="text-right">Valor Max.</Label>
            <Input 
              id="score" 
              type="number" 
              value={maxScore} 
              onChange={(e) => setMaxScore(e.target.value)} 
              className="col-span-3" 
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">Data</Label>
            <Input 
              id="date" 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              className="col-span-3" 
            />
          </div>
        </div>
        <DialogFooter className={isEditMode ? "sm:justify-between" : ""}>
          {isEditMode && (
            <Button variant="destructive" onClick={handleDelete} className="mr-auto">
                Excluir
            </Button>
          )}
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>Cancelar</Button>
            <Button onClick={handleSave} disabled={!title || !categoryId}>Salvar</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
