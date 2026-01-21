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
  animal_id?: string;
  status?: string;
}

interface Classroom {
  id: string;
  name: string;
}

import { ANIMAL_EMOJIS } from "@/features/teacher/constants";

// Safari animal emojis
// const ANIMAL_EMOJIS = ["🦁", "🦒", "🦓", "🐘", "🐒", "🦜", "🐊", "🦩", "🦋", "🐢"];

// Get avatar - use stored emoji or fallback to color-based
function getAvatar(student: Student): string {
  if (student.animal_id) return student.animal_id;
  const emojis = ANIMAL_EMOJIS;
  if (!student.color_hex) return emojis[0];
  const index = parseInt(student.color_hex.replace("#", "").slice(0, 2), 16) % emojis.length;
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
      avatar: getAvatar(student),
      class: student.classroom_name || "",
      classId: student.classroom, // Pass the ID for fetching data
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
    animal_id?: string;
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
            animal_id: studentData.animal_id,
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
            animal_id: studentData.animal_id,
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
              avatar={getAvatar(s)}
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
        onUpdate={(updates) => {
             // If we're just updating the avatar/animal_id
             if (updates.animal_id && selectedStudent) {
                const updatedStudent = { ...selectedStudent, ...updates, avatar: updates.animal_id };
                setSelectedStudent(updatedStudent);
                
                // Also update the main list
                setStudents(prev => prev.map(s => 
                    s.id === selectedStudent.id 
                    ? { ...s, animal_id: updates.animal_id! } 
                    : s
                ));

                // Persist
                // We need to find the full student object from the 'students' list to save correctly.
                const fullStudent = students.find(s => s.id === selectedStudent.id);
                if (fullStudent) {
                    handleSaveStudent({
                        id: selectedStudent.id,
                        display_name: selectedStudent.name,
                        classroom: fullStudent.classroom, // Use ID from fullStudent
                        color_hex: fullStudent.color_hex || "", // Use original values
                        animal_id: updates.animal_id
                    }).catch(console.error);
                }
             }
        }}
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
          animal_id: editingStudent.animal_id || "🦁",
        } : null}
        classrooms={classrooms}
      />
    </div>
  );
}
