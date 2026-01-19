"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StudentTile } from "@/features/teacher/components/student-tile";
import { StudentDetailModal } from "@/features/teacher/components/student-detail-modal";
import { StudentFormModal } from "@/features/teacher/components/student-form-modal";
import { Plus } from "lucide-react";

interface Student {
  id: string;
  display_name: string;
  preferred_name?: string;
  classroom: string;
  classroom_name?: string;
  color_hex?: string;
  status?: string;
}

interface Classroom {
  id: string;
  name: string;
}

// Generate avatar from color
function getAvatarFromColor(color?: string): string {
  const emojis = ["🦁", "🦒", "🦓", "🐘", "🐒", "🦜", "🐊", "🦩", "🦋", "🐢"];
  if (!color) return emojis[0];
  const index = parseInt(color.replace("#", "").slice(0, 2), 16) % emojis.length;
  return emojis[index];
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Detail modal state
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Form modal state
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const fetchStudents = async () => {
    try {
      const res = await fetch("/api/students/", { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        setStudents(data);
      }
    } catch (error) {
      console.error("Failed to fetch students:", error);
    }
  };

  const fetchClassrooms = async () => {
    try {
      const res = await fetch("/api/classrooms/", { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        setClassrooms(data);
      }
    } catch (error) {
      console.error("Failed to fetch classrooms:", error);
    }
  };

  useEffect(() => {
    Promise.all([fetchStudents(), fetchClassrooms()]).finally(() => {
      setIsLoading(false);
    });
  }, []);

  const filtered = students.filter((s) =>
    s.display_name.toLowerCase().includes(term.toLowerCase())
  );

  const handleStudentClick = (student: Student) => {
    // Convert to format expected by detail modal
    setSelectedStudent({
      id: student.id,
      name: student.display_name,
      avatar: getAvatarFromColor(student.color_hex),
      class: student.classroom_name || "",
    });
    setIsDetailModalOpen(true);
  };

  const handleEditClick = (student: Student) => {
    setEditingStudent(student);
    setIsFormModalOpen(true);
  };

  const handleCreateClick = () => {
    setEditingStudent(null);
    setIsFormModalOpen(true);
  };

  const handleCloseFormModal = () => {
    setIsFormModalOpen(false);
    setEditingStudent(null);
  };

  const handleSaveStudent = async (studentData: {
    id?: string;
    display_name: string;
    preferred_name?: string;
    classroom: string;
    color_hex: string;
  }) => {
    try {
      if (studentData.id) {
        // Update existing student
        const res = await fetch(`/api/students/${studentData.id}/`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            display_name: studentData.display_name,
            preferred_name: studentData.preferred_name,
            classroom: studentData.classroom,
            color_hex: studentData.color_hex,
          }),
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to update student");
      } else {
        // Create new student
        const res = await fetch("/api/students/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            display_name: studentData.display_name,
            preferred_name: studentData.preferred_name,
            classroom: studentData.classroom,
            color_hex: studentData.color_hex,
          }),
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to create student");
      }
      await fetchStudents();
    } catch (error) {
      console.error("Error saving student:", error);
      throw error;
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6 pt-2 pb-24">
        <h1 className="text-2xl font-bold text-[var(--primary)]">Alunos</h1>
        <div className="text-center py-8 text-[var(--text-muted)]">
          Carregando alunos...
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 pt-2 pb-24">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[var(--primary)]">Alunos</h1>
          <Button onClick={handleCreateClick} className="gap-2">
            <Plus size={18} />
            Novo Aluno
          </Button>
        </div>
        <Input
          placeholder="Buscar aluno..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="bg-[var(--surface-glass)]"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-[var(--border)] rounded-xl">
          <p className="text-[var(--text-muted)] mb-4">
            {students.length === 0
              ? "Nenhum aluno cadastrado"
              : "Nenhum aluno encontrado"}
          </p>
          {students.length === 0 && (
            <Button onClick={handleCreateClick} variant="secondary">
              Adicionar primeiro aluno
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {filtered.map((s) => (
            <StudentTile
              key={s.id}
              name={s.display_name}
              avatar={getAvatarFromColor(s.color_hex)}
              points={0}
              onClick={() => handleStudentClick(s)}
              onLongPress={() => handleEditClick(s)}
            />
          ))}
        </div>
      )}

      {/* Student Detail Modal (read-only view) */}
      <StudentDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        student={selectedStudent}
      />

      {/* Student Form Modal (create/edit) */}
      <StudentFormModal
        isOpen={isFormModalOpen}
        onClose={handleCloseFormModal}
        onSave={handleSaveStudent}
        editStudent={editingStudent ? {
          id: editingStudent.id,
          display_name: editingStudent.display_name,
          preferred_name: editingStudent.preferred_name,
          classroom: editingStudent.classroom,
          color_hex: editingStudent.color_hex || "#FF6B6B",
        } : null}
        classrooms={classrooms}
      />
    </div>
  );
}
