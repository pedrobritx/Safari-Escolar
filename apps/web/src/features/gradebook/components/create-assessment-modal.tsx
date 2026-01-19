"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GradeCategory, GradeItem } from "../types";

interface CreateAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: GradeCategory[];
  onSave: (item: Partial<GradeItem>) => void;
}

export function CreateAssessmentModal({ 
  isOpen, 
  onClose, 
  categories, 
  onSave 
}: CreateAssessmentModalProps) {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState<string>("");
  const [maxScore, setMaxScore] = useState("10");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSave = () => {
    onSave({
      title,
      category: categoryId,
      max_score: parseFloat(maxScore),
      graded_at: date
    });
    onClose();
    // Reset form
    setTitle("");
    setCategoryId("");
    setMaxScore("10");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Nova Avaliação</DialogTitle>
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
            <div className="col-span-3">
               <select
                id="category"
                className="flex h-11 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm ring-offset-[var(--bg)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-[var(--text)] transition-colors appearance-none"
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
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button onClick={handleSave} disabled={!title || !categoryId}>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
