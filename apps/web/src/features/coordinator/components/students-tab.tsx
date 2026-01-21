"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StudentDetailModal } from "@/features/teacher/components/student-detail-modal";
import { 
  Search, 
  Filter, 
  ChevronDown,
  ThumbsUp,
  ThumbsDown,
  Calendar
} from "lucide-react";
import { ANIMAL_EMOJIS } from "@/features/teacher/constants";

interface Student {
  id: string;
  display_name: string;
  preferred_name?: string;
  classroom: string;
  classroom_name?: string;
  animal_id?: string;
  color_hex?: string;
  attendance_rate?: number;
  last_feedback_date?: string;
  average_grade?: number;
  positive_feedbacks?: number;
  negative_feedbacks?: number;
}

interface Classroom {
  id: string;
  name: string;
}

function getAvatar(student: Student): string {
  if (student.animal_id) return student.animal_id;
  if (!student.color_hex) return ANIMAL_EMOJIS[0];
  const index = parseInt(student.color_hex.replace("#", "").slice(0, 2), 16) % ANIMAL_EMOJIS.length;
  return ANIMAL_EMOJIS[index];
}

export function StudentsTab() {
  const [students, setStudents] = useState<Student[]>([]);
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClassroom, setSelectedClassroom] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Detail modal state
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [studentsRes, classroomsRes] = await Promise.all([
        fetch("/api/students/", { credentials: "include" }),
        fetch("/api/classrooms/", { credentials: "include" }),
      ]);

      if (studentsRes.ok) {
        const studentsData = await studentsRes.json();
        // Enrich with simulated data
        const enriched = studentsData.map((s: any) => ({
          ...s,
          attendance_rate: 70 + Math.floor(Math.random() * 30),
          last_feedback_date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
          average_grade: 6 + Math.random() * 4,
          positive_feedbacks: Math.floor(Math.random() * 20),
          negative_feedbacks: Math.floor(Math.random() * 5),
        }));
        setStudents(enriched);
      }

      if (classroomsRes.ok) {
        const classroomsData = await classroomsRes.json();
        setClassrooms(classroomsData.map((c: any) => ({ id: c.id, name: c.name })));
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filtered = students.filter((s) => {
    const matchesSearch = s.display_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClassroom = selectedClassroom === "all" || s.classroom === selectedClassroom;
    return matchesSearch && matchesClassroom;
  });

  const handleStudentClick = (student: Student) => {
    setSelectedStudent({
      id: student.id,
      name: student.display_name,
      avatar: getAvatar(student),
      class: student.classroom_name || "",
      classId: student.classroom,
    });
    setIsDetailModalOpen(true);
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Hoje";
    if (diffDays === 1) return "Ontem";
    return `${diffDays} dias atrás`;
  };

  if (isLoading) {
    return (
      <div className="text-center py-12 text-[var(--text-muted)]">
        Carregando alunos...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[var(--text)]">Todos os Alunos</h2>
          <p className="text-sm text-[var(--text-muted)]">
            {students.length} alunos cadastrados
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
          <Input
            placeholder="Buscar por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[var(--surface-glass)]"
          />
        </div>
        
        <div className="relative">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="gap-2"
          >
            <Filter size={16} />
            {selectedClassroom === "all" 
              ? "Todas as turmas" 
              : classrooms.find(c => c.id === selectedClassroom)?.name || "Turma"}
            <ChevronDown size={14} />
          </Button>
          
          {isFilterOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-[var(--surface)] border border-[var(--border)] rounded-lg shadow-xl z-10 max-h-64 overflow-auto">
              <button
                className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--surface-glass)] transition-colors"
                onClick={() => {
                  setSelectedClassroom("all");
                  setIsFilterOpen(false);
                }}
              >
                Todas as turmas
              </button>
              {classrooms.map((classroom) => (
                <button
                  key={classroom.id}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--surface-glass)] transition-colors"
                  onClick={() => {
                    setSelectedClassroom(classroom.id);
                    setIsFilterOpen(false);
                  }}
                >
                  {classroom.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Students Table */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-[var(--border)] rounded-xl">
          <p className="text-[var(--text-muted)]">
            {students.length === 0
              ? "Nenhum aluno cadastrado"
              : "Nenhum aluno encontrado para essa busca"}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)] text-left text-sm text-[var(--text-muted)]">
                <th className="pb-3 pr-4">Aluno</th>
                <th className="pb-3 px-4">Turma</th>
                <th className="pb-3 px-4 text-center">Frequência</th>
                <th className="pb-3 px-4 text-center">Feedbacks</th>
                <th className="pb-3 px-4 text-center">Média</th>
                <th className="pb-3 pl-4">Último Feedback</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
                <tr 
                  key={student.id} 
                  className="border-b border-[var(--border)] hover:bg-[var(--surface-glass)] transition-colors cursor-pointer"
                  onClick={() => handleStudentClick(student)}
                >
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[var(--surface)] flex items-center justify-center text-xl">
                        {getAvatar(student)}
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--text)]">{student.display_name}</p>
                        {student.preferred_name && (
                          <p className="text-xs text-[var(--text-muted)]">{student.preferred_name}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="px-2 py-1 rounded-md bg-[var(--surface-glass)] text-sm font-medium">
                      {student.classroom_name || "-"}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`inline-block px-2 py-1 rounded-full text-sm font-semibold ${
                      (student.attendance_rate || 0) >= 90 
                        ? "bg-emerald-100 text-emerald-700"
                        : (student.attendance_rate || 0) >= 75
                          ? "bg-amber-100 text-amber-700"
                          : "bg-red-100 text-red-700"
                    }`}>
                      {student.attendance_rate || 0}%
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="flex items-center gap-1 text-emerald-600 text-sm">
                        <ThumbsUp size={12} /> {student.positive_feedbacks || 0}
                      </span>
                      <span className="flex items-center gap-1 text-red-500 text-sm">
                        <ThumbsDown size={12} /> {student.negative_feedbacks || 0}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-bold ${
                      (student.average_grade || 0) >= 7 
                        ? "text-emerald-600"
                        : (student.average_grade || 0) >= 5
                          ? "text-amber-600"
                          : "text-red-600"
                    }`}>
                      {(student.average_grade || 0).toFixed(1)}
                    </span>
                  </td>
                  <td className="py-4 pl-4">
                    <div className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
                      <Calendar size={14} />
                      {formatDate(student.last_feedback_date)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Student Detail Modal */}
      <StudentDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        student={selectedStudent}
        onUpdate={() => {}}
      />
    </div>
  );
}
