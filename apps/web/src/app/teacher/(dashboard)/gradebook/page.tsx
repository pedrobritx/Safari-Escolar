"use client";

import { useState } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { GradebookGrid } from "@/features/gradebook/components/gradebook-grid";
import { CreateAssessmentModal } from "@/features/gradebook/components/create-assessment-modal";
import { GradeCategory, GradeItem, GradeEntry } from "@/features/gradebook/types";

// Mock Data matching the new schema
const MOCK_CATEGORIES: GradeCategory[] = [
  { id: "cat-1", name: "Provas", classroom_id: "class-1", weight: 60 },
  { id: "cat-2", name: "Trabalhos", classroom_id: "class-1", weight: 40 },
];

const MOCK_ITEMS: GradeItem[] = [
  { id: "item-1", category: "cat-1", title: "Prova 1", max_score: 10, graded_at: "2026-02-15" },
  { id: "item-2", category: "cat-2", title: "Trabalho em Grupo", max_score: 10, graded_at: "2026-02-20" },
];

const MOCK_STUDENTS = [
  { id: "1", name: "Ana Clara" },
  { id: "2", name: "Bernardo" },
  { id: "3", name: "Carla" },
];

const MOCK_ENTRIES: GradeEntry[] = [
  { id: "entry-1", grade_item: "item-1", student: "1", score: 9.5 },
  { id: "entry-2", grade_item: "item-1", student: "2", score: 8.0 },
];

export default function GradebookPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<GradeItem[]>(MOCK_ITEMS);
  const [entries, setEntries] = useState<GradeEntry[]>(MOCK_ENTRIES);

  const handleCreateAssessment = (newItem: Partial<GradeItem>) => {
    const item: GradeItem = {
      id: `item-${Date.now()}`,
      category: newItem.category!,
      title: newItem.title!,
      max_score: newItem.max_score!,
      graded_at: newItem.graded_at!,
    };
    setItems([...items, item]);
  };

  const handleUpdateGrade = (studentId: string, itemId: string, score: number) => {
    setEntries(prev => {
        const existing = prev.find(e => e.student === studentId && e.grade_item === itemId);
        if (existing) {
            return prev.map(e => e.id === existing.id ? { ...e, score } : e);
        }
        return [...prev, {
            id: `entry-${Date.now()}`,
            grade_item: itemId,
            student: studentId,
            score
        }];
    });
  };

  return (
    <div className="space-y-6 pb-24">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-2xl font-bold">Diário de Classe</h1>
           <p className="text-[var(--text-muted)]">Gerencie notas e avaliações</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="gap-2">
            <Plus size={18} />
            Nova Avaliação
        </Button>
      </div>

      <GlassPanel className="p-4 rounded-[var(--radius-xl)]">
        <GradebookGrid
            students={MOCK_STUDENTS}
            categories={MOCK_CATEGORIES}
            items={items}
            entries={entries}
            onUpdateGrade={handleUpdateGrade}
        />
      </GlassPanel>

      <CreateAssessmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categories={MOCK_CATEGORIES}
        onSave={handleCreateAssessment}
      />
    </div>
  );
}
