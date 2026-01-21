"use client";

import { useState, useEffect } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import { GradebookGrid } from "@/features/gradebook/components/gradebook-grid";
import { AssessmentModal } from "@/features/gradebook/components/create-assessment-modal";
import { GradeCategory, GradeItem, GradeEntry } from "@/features/gradebook/types";
import { getCookie } from "@/lib/utils";
import { Student } from "@/features/teacher/types";

import { ManageCategoriesModal } from "@/features/gradebook/components/manage-categories-modal";

export default function GradebookPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryManagerOpen, setIsCategoryManagerOpen] = useState(false);
  const [categories, setCategories] = useState<GradeCategory[]>([]);
  const [items, setItems] = useState<GradeItem[]>([]);
  const [entries, setEntries] = useState<GradeEntry[]>([]); 
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<GradeItem | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const getActiveClassroomId = () => students[0]?.classroom;

  const loadGradebook = async (classId: string) => {
    const resGrid = await fetch(`/api/grades/gradebook/grid?classroom_id=${classId}`, { credentials: "include" });
    if (!resGrid.ok) {
      const message = await resGrid.text();
      throw new Error(message || "Failed to load gradebook data");
    }
    const gridData = await resGrid.json();
    setCategories(gridData.categories || []);
    setItems(gridData.items || []);
    setEntries(gridData.entries || []);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resStudents = await fetch("/api/students", { credentials: "include" });
      if (!resStudents.ok) throw new Error("Failed to fetch students");
      const studentsData: (Student & { animal_id?: string })[] = await resStudents.json();
      
      const mappedStudents = studentsData.map((s) => ({
          ...s,
          name: s.display_name || s.name || "",
          avatar: s.animal_id,
      }));
      setStudents(mappedStudents);

      const classId = mappedStudents[0]?.classroom;
      if (classId) {
        await loadGradebook(classId);
      } else {
        setCategories([]);
        setItems([]);
        setEntries([]);
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
    const classId = getActiveClassroomId();
    if (!classId) return;

    try {
      const res = await fetch("/api/grades/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken") || ""
        },
        credentials: "include",
        body: JSON.stringify({
            name,
            weight,
            classroom: classId
        })
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Erro ao criar categoria");
      }

      await loadGradebook(classId);
    } catch (error: any) {
      console.error("Failed to create category:", error);
      alert(`Erro ao criar categoria: ${error.message}`);
    }
  };

  const handleDeleteCategory = async (id: string) => {
    try {
        const res = await fetch(`/api/grades/categories/${id}`, {
            method: "DELETE",
            headers: {
                "X-CSRFToken": getCookie("csrftoken") || ""
            },
            credentials: "include"
        });

        if (res.ok) {
             const classId = getActiveClassroomId();
             if (classId) {
                 await loadGradebook(classId);
             } else {
                 setCategories(prev => prev.filter(c => c.id !== id));
             }
        } else {
             alert("Erro ao excluir categoria (pode estar em uso)");
        }
    } catch (error) {
        console.error("Failed to delete category", error);
    }
  };


  const handleSaveAssessment = async (newItem: Partial<GradeItem>) => {
    const csrfToken = getCookie("csrftoken") || "";
    const classId = getActiveClassroomId();
    if (!classId) throw new Error("No classroom found");
    
    try {
        if (newItem.id && !newItem.id.startsWith("item-")) {
            // Edit existing item
            const res = await fetch(`/api/grades/items/${newItem.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken
                },
                credentials: "include",
                body: JSON.stringify(newItem)
            });
            
            if (!res.ok) throw new Error("Failed to update assessment");
            await loadGradebook(classId);
        } else {
            // Create new item
            const res = await fetch("/api/grades/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken
                },
                credentials: "include",
                body: JSON.stringify({
                    ...newItem,
                    classroom: classId
                })
            });

            if (!res.ok) {
                const err = await res.text();
                throw new Error(`Failed to create assessment: ${err}`);
            }
            await loadGradebook(classId);
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

  const handleDeleteAssessment = async (item: GradeItem) => {
    if (!window.confirm(`Tem certeza que deseja excluir a avaliação "${item.title}"? Esta ação não pode ser desfeita.`)) {
        return;
    }

    const classId = getActiveClassroomId();
    try {
        const res = await fetch(`/api/grades/items/${item.id}`, {
            method: "DELETE",
            headers: {
                "X-CSRFToken": getCookie("csrftoken") || ""
            },
            credentials: "include"
        });

        if (!res.ok) {
            const message = await res.text();
            throw new Error(message || "Erro ao excluir avaliação");
        }

        if (classId) {
            await loadGradebook(classId);
        } else {
            setItems(prev => prev.filter(i => i.id !== item.id));
            setEntries(prev => prev.filter(e => e.grade_item !== item.id));
        }
    } catch (error: any) {
        console.error("Failed to delete assessment", error);
        alert(error.message);
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
    const classId = getActiveClassroomId();
    if (!entry || !classId) return;

    try {
        const payload = [{
            student: studentId,
            grade_item: itemId,
            score: entry.score
        }];

        const res = await fetch("/api/grades/entries/bulk_update_grades", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken") || ""
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
             const errText = await res.text();
             throw new Error(`Failed to save grade: ${res.status} ${res.statusText}\n${errText}`);
        }
        
        await loadGradebook(classId);
    } catch (error: any) {
        console.error("Error saving grade:", error);
        alert(`Erro ao salvar nota: ${error.message}`);
    }
  };

  const handleExport = async () => {
    const classId = getActiveClassroomId();
    if (!classId) {
        alert("Nenhuma turma ativa para exportar.");
        return;
    }

    setIsExporting(true);
    try {
        const res = await fetch(`/api/grades/gradebook/export?classroom_id=${classId}`, {
            credentials: "include"
        });

        if (!res.ok) {
            const errText = await res.text();
            throw new Error(errText || "Falha ao exportar dados");
        }

        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `gradebook-${classId}.csv`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
    } catch (error: any) {
        console.error("Export error:", error);
        alert(`Erro ao exportar: ${error.message}`);
    } finally {
        setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6 pb-24">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-2xl font-bold">Diário de Classe</h1>
           <p className="text-[var(--text-muted)]">Gerencie notas e avaliações</p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            onClick={handleExport}
            className="gap-2"
            disabled={isExporting}
          >
            <Download size={16} />
            {isExporting ? "Exportando..." : "Exportar"}
          </Button>
          <Button onClick={handleOpenCreateModal} className="gap-2">
              <Plus size={18} />
              Nova Avaliação
          </Button>
        </div>
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
