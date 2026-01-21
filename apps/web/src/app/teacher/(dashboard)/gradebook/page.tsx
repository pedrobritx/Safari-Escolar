"use client";

import { useState, useEffect } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { GradebookGrid } from "@/features/gradebook/components/gradebook-grid";
import { AssessmentModal } from "@/features/gradebook/components/create-assessment-modal";
import { GradeCategory, GradeItem, GradeEntry } from "@/features/gradebook/types";
import { getCookie } from "@/lib/utils";

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

import { ManageCategoriesModal } from "@/features/gradebook/components/manage-categories-modal";

export default function GradebookPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryManagerOpen, setIsCategoryManagerOpen] = useState(false);
  const [categories, setCategories] = useState<GradeCategory[]>([]);
  const [items, setItems] = useState<GradeItem[]>([]);
  const [entries, setEntries] = useState<GradeEntry[]>([]); 
  const [students, setStudents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<GradeItem | null>(null);

  const fetchData = async () => {
    try {
      // 1. Fetch Students
      const resStudents = await fetch("/api/students", { credentials: "include" });
      if (!resStudents.ok) throw new Error("Failed to fetch students");
      const studentsData = await resStudents.json();
      
      // Map students
      const mappedStudents = studentsData.map((s: any) => ({
          id: s.id,
          name: s.display_name,
          avatar: s.animal_id,
          classroom: s.classroom
      }));
      setStudents(mappedStudents);

      // 2. Fetch Gradebook Grid Data (using the first student's class for now)
      const classId = mappedStudents[0]?.classroom;
      
      if (classId) {
          const resGrid = await fetch(`/api/grades/gradebook/grid?classroom_id=${classId}`, { credentials: "include" });
          if (resGrid.ok) {
              const gridData = await resGrid.json();
              setCategories(gridData.categories || []);
              setItems(gridData.items || []);
              setEntries(gridData.entries || []);
          }
      }
    } catch (error) {
      console.error("Failed to load gradebook data", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateCategory = async (name: string, weight: number) => {
    const classId = students[0]?.classroom;
    if (!classId) return;

    try {
        const csrfToken = getCookie("csrftoken") || "";
        console.log("CSRF Token found:", csrfToken ? "Yes (hidden)" : "No");

        const res = await fetch("/api/grades/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken
            },
            body: JSON.stringify({
                name,
                weight,
                classroom: classId
            })
        });

        if (res.ok) {
            // Reload data to reflect changes
             const resGrid = await fetch(`/api/grades/gradebook/grid?classroom_id=${classId}`);
             if (resGrid.ok) {
                 const gridData = await resGrid.json();
                 setCategories(gridData.categories || []);
             }
        } else {
             let errorMessage = "Erro desconhecido";
             try {
                 const text = await res.text();
                 try {
                     const errorData = JSON.parse(text);
                     console.error("Server JSON error:", errorData);
                     errorMessage = JSON.stringify(errorData);
                 } catch (e) {
                     console.error("Server Text error:", text);
                     errorMessage = text || res.statusText;
                 }
             } catch (e: any) {
                 errorMessage = e.message;
             }
             alert(`Erro ao criar categoria: ${errorMessage}`);
        }
    } catch (error: any) {
        console.error("Failed to create category (catch):", error);
        alert(`Erro de conexão/rede: ${error.message}`);
    }
  };

  const handleDeleteCategory = async (id: string) => {
    try {
        const res = await fetch(`/api/grades/categories/${id}`, {
            method: "DELETE",
            headers: {
                "X-CSRFToken": getCookie("csrftoken") || ""
            }
        });

        if (res.ok) {
             setCategories(prev => prev.filter(c => c.id !== id));
        } else {
             alert("Erro ao excluir categoria (pode estar em uso)");
        }
    } catch (error) {
        console.error("Failed to delete category", error);
    }
  };


  const handleSaveAssessment = async (newItem: Partial<GradeItem>) => {
    const csrfToken = getCookie("csrftoken") || "";
    
    try {
        if (newItem.id && !newItem.id.startsWith("item-")) {
            // Edit existing item
            const res = await fetch(`/api/grades/items/${newItem.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken
                },
                body: JSON.stringify(newItem)
            });
            
            if (!res.ok) throw new Error("Failed to update assessment");
            const updated: GradeItem = await res.json();
            
            setItems(prev => prev.map(item => 
                item.id === updated.id ? updated : item
            ));
        } else {
            // Create new item
            // We need to ensure classroom is set.
            const classId = students[0]?.classroom;
            if (!classId) throw new Error("No classroom found");

            const res = await fetch("/api/grades/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken
                },
                body: JSON.stringify({
                    ...newItem,
                    classroom: classId
                })
            });

            if (!res.ok) {
                const err = await res.text();
                throw new Error(`Failed to create assessment: ${err}`);
            }
            const created: GradeItem = await res.json();
            setItems(prev => [...prev, created]);
        }
        setEditingItem(null);
        setIsModalOpen(false);
    } catch (error: any) {
        console.error("Save assessment error:", error);
        alert(error.message);
    }
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

  const handleDeleteAssessment = (item: GradeItem) => {
    if (window.confirm(`Tem certeza que deseja excluir a avaliação "${item.title}"? Esta ação não pode ser desfeita.`)) {
        setItems(prev => prev.filter(i => i.id !== item.id));
        setEntries(prev => prev.filter(e => e.grade_item !== item.id));
    }
  };

  const handleUpdateGrade = (studentId: string, itemId: string, score: number) => {
    setEntries(prev => {
        const existing = prev.find(e => e.student === studentId && e.grade_item === itemId);
        if (existing) {
            return prev.map(e => e.id === existing.id ? { ...e, score } : e);
        }
        return [...prev, {
            id: `temp-${Date.now()}`, // Temporary ID until saved
            grade_item: itemId,
            student: studentId,
            score
        }];
    });
  };

  const handleSaveGrade = async (studentId: string, itemId: string) => {
    const entry = entries.find(e => e.student === studentId && e.grade_item === itemId);
    if (!entry) return;

    try {
        const payload = [{
            student: studentId,
            grade_item: itemId,
            score: entry.score
        }];

        const res = await fetch("/api/grades/entries/bulk_update_grades/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken") || ""
            },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
             const errText = await res.text();
             throw new Error(`Failed to save grade: ${res.status} ${res.statusText}\n${errText}`);
        }
        
        // Success
    } catch (error: any) {
        console.error("Error saving grade:", error);
        alert(`Erro ao salvar nota: ${error.message}`);
    }
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
            <div className="flex justify-center py-12">
               <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)]"></div>
            </div>
        ) : items.length === 0 ? (
             <div className="text-center py-12 text-[var(--text-muted)]">
                <p>Nenhuma avaliação cadastrada para esta turma.</p>
                <Button variant="ghost" onClick={handleOpenCreateModal}>Criar primeira avaliação</Button>
             </div>
        ) : (
            <GradebookGrid
                students={students}
                categories={categories}
                items={items}
                entries={entries}
                onUpdateGrade={handleUpdateGrade}
                onEditItem={handleEditItem}
                onSaveGrade={handleSaveGrade}
            />
        )}
      </GlassPanel>

      <AssessmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        categories={categories}
        onSave={handleSaveAssessment}
        onDelete={handleDeleteAssessment}
        editItem={editingItem}
        onManageCategories={() => setIsCategoryManagerOpen(true)}
      />

      <ManageCategoriesModal
        isOpen={isCategoryManagerOpen}
        onClose={() => setIsCategoryManagerOpen(false)}
        categories={categories}
        onCreate={handleCreateCategory}
        onDelete={handleDeleteCategory}
      />
    </div>
  );
}
