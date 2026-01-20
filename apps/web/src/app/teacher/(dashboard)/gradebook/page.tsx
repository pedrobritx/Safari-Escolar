"use client";

import { useState, useEffect } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { GradebookGrid } from "@/features/gradebook/components/gradebook-grid";
import { AssessmentModal } from "@/features/gradebook/components/create-assessment-modal";
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
  const [entries, setEntries] = useState<GradeEntry[]>([]); // Start empty
  const [students, setStudents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<GradeItem | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("/api/students/", { credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          // Map to format expected by grid: { id, name, avatar? }
          const mapped = data.map((s: any) => ({
            id: s.id,
            name: s.display_name,
            avatar: s.animal_id
          }));
          setStudents(mapped);
        }
      } catch (error) {
        console.error("Failed to fetch students", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const handleSaveAssessment = (newItem: Partial<GradeItem>) => {
    if (newItem.id) {
      // Editing existing item
      setItems(prev => prev.map(item => 
        item.id === newItem.id 
          ? { ...item, ...newItem } as GradeItem
          : item
      ));
    } else {
      // Creating new item
      const item: GradeItem = {
        id: `item-${Date.now()}`,
        category: newItem.category!,
        title: newItem.title!,
        max_score: newItem.max_score!,
        graded_at: newItem.graded_at!,
      };
      setItems([...items, item]);
    }
    setEditingItem(null);
  };

  const handleEditItem = (item: GradeItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleOpenCreateModal = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
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
        <Button onClick={handleOpenCreateModal} className="gap-2">
            <Plus size={18} />
            Nova Avaliação
        </Button>
      </div>

      <GlassPanel className="p-4 rounded-[var(--radius-xl)]">
        {isLoading ? (
            <div className="text-center py-8 text-[var(--text-muted)]">Carregando alunos...</div>
        ) : (
            <GradebookGrid
                students={students}
                categories={MOCK_CATEGORIES}
                items={items}
                entries={entries}
                onUpdateGrade={handleUpdateGrade}
                onEditItem={handleEditItem}
            />
        )}
      </GlassPanel>

      <AssessmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        categories={MOCK_CATEGORIES}
        onSave={handleSaveAssessment}
        editItem={editingItem}
      />
    </div>
  );
}
