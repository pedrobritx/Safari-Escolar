"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  ThumbsUp,
  ThumbsDown,
  BookOpen,
  ChevronUp,
  ChevronDown
} from "lucide-react";

interface TeacherPerformance {
  id: string;
  name: string;
  email: string;
  classroomCount: number;
  studentCount: number;
  averageAttendance: number;
  positiveFeedbacks: number;
  negativeFeedbacks: number;
  gradeEntryRate: number;
  needsSupport: boolean;
  supportReason?: string;
}

type SortField = "name" | "attendance" | "feedbacks" | "students";
type SortDirection = "asc" | "desc";

export function TeachersTab() {
  const [teachers, setTeachers] = useState<TeacherPerformance[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [showOnlyNeedsSupport, setShowOnlyNeedsSupport] = useState(false);

  const fetchTeachers = async () => {
    setIsLoading(true);
    try {
      // Fetch classrooms to derive teacher data
      const res = await fetch("/api/classrooms/", { credentials: "include" });
      if (res.ok) {
        const classrooms = await res.json();
        
        // Aggregate by teacher (simulated - in production would come from backend)
        const teacherMap = new Map<string, TeacherPerformance>();
        
        classrooms.forEach((c: any, index: number) => {
          const teacherId = c.teacher_id || `teacher-${index}`;
          const teacherName = c.teacher_name || `Professor ${index + 1}`;
          
          if (!teacherMap.has(teacherId)) {
            const avgAttendance = 70 + Math.floor(Math.random() * 30);
            const positiveFeedbacks = Math.floor(Math.random() * 50);
            const negativeFeedbacks = Math.floor(Math.random() * 15);
            const needsSupport = avgAttendance < 80 || negativeFeedbacks > positiveFeedbacks * 0.3;
            
            teacherMap.set(teacherId, {
              id: teacherId,
              name: teacherName,
              email: `${teacherName.toLowerCase().replace(/\s+/g, ".")}@escola.com`,
              classroomCount: 0,
              studentCount: 0,
              averageAttendance: avgAttendance,
              positiveFeedbacks,
              negativeFeedbacks,
              gradeEntryRate: 60 + Math.floor(Math.random() * 40),
              needsSupport,
              supportReason: needsSupport 
                ? avgAttendance < 80 
                  ? "Baixa frequência nas turmas"
                  : "Alto índice de feedbacks negativos"
                : undefined,
            });
          }
          
          const teacher = teacherMap.get(teacherId)!;
          teacher.classroomCount += 1;
          teacher.studentCount += c.student_count || 0;
        });
        
        setTeachers(Array.from(teacherMap.values()));
      }
    } catch (error) {
      console.error("Failed to fetch teachers:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filtered = teachers
    .filter((t) => 
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!showOnlyNeedsSupport || t.needsSupport)
    )
    .sort((a, b) => {
      let comparison = 0;
      switch (sortField) {
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
        case "attendance":
          comparison = a.averageAttendance - b.averageAttendance;
          break;
        case "feedbacks":
          comparison = (a.positiveFeedbacks - a.negativeFeedbacks) - (b.positiveFeedbacks - b.negativeFeedbacks);
          break;
        case "students":
          comparison = a.studentCount - b.studentCount;
          break;
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />;
  };

  if (isLoading) {
    return (
      <div className="text-center py-12 text-[var(--text-muted)]">
        Carregando professores...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[var(--text)]">Desempenho dos Professores</h2>
          <p className="text-sm text-[var(--text-muted)]">
            {teachers.length} professores · {teachers.filter(t => t.needsSupport).length} precisam de atenção
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant={showOnlyNeedsSupport ? "accent" : "ghost"}
            size="sm"
            onClick={() => setShowOnlyNeedsSupport(!showOnlyNeedsSupport)}
            className="gap-2"
          >
            <AlertTriangle size={16} />
            Precisam de apoio
          </Button>
        </div>
      </div>

      <div className="relative w-full sm:w-72">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
        <Input
          placeholder="Buscar professor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-[var(--surface-glass)]"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-[var(--border)] rounded-xl">
          <p className="text-[var(--text-muted)]">
            Nenhum professor encontrado
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)] text-left text-sm text-[var(--text-muted)]">
                <th className="pb-3 pr-4">
                  <button 
                    onClick={() => handleSort("name")} 
                    className="flex items-center gap-1 hover:text-[var(--text)]"
                  >
                    Professor <SortIcon field="name" />
                  </button>
                </th>
                <th className="pb-3 px-4 text-center">
                  <button 
                    onClick={() => handleSort("students")} 
                    className="flex items-center gap-1 hover:text-[var(--text)]"
                  >
                    Alunos <SortIcon field="students" />
                  </button>
                </th>
                <th className="pb-3 px-4 text-center">
                  <button 
                    onClick={() => handleSort("attendance")} 
                    className="flex items-center gap-1 hover:text-[var(--text)]"
                  >
                    Frequência <SortIcon field="attendance" />
                  </button>
                </th>
                <th className="pb-3 px-4 text-center">
                  <button 
                    onClick={() => handleSort("feedbacks")} 
                    className="flex items-center gap-1 hover:text-[var(--text)]"
                  >
                    Feedbacks <SortIcon field="feedbacks" />
                  </button>
                </th>
                <th className="pb-3 px-4 text-center">Notas</th>
                <th className="pb-3 pl-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((teacher) => (
                <tr 
                  key={teacher.id} 
                  className="border-b border-[var(--border)] hover:bg-[var(--surface-glass)] transition-colors"
                >
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white text-sm font-bold">
                        {teacher.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-semibold text-[var(--text)]">{teacher.name}</p>
                        <p className="text-xs text-[var(--text-muted)]">
                          {teacher.classroomCount} turma{teacher.classroomCount !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Users size={14} className="text-[var(--text-muted)]" />
                      <span className="font-semibold">{teacher.studentCount}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm font-semibold ${
                      teacher.averageAttendance >= 90 
                        ? "bg-emerald-100 text-emerald-700"
                        : teacher.averageAttendance >= 80
                          ? "bg-amber-100 text-amber-700"
                          : "bg-red-100 text-red-700"
                    }`}>
                      {teacher.averageAttendance >= 90 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                      {teacher.averageAttendance}%
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="flex items-center gap-1 text-emerald-600">
                        <ThumbsUp size={14} /> {teacher.positiveFeedbacks}
                      </span>
                      <span className="flex items-center gap-1 text-red-500">
                        <ThumbsDown size={14} /> {teacher.negativeFeedbacks}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <BookOpen size={14} className="text-[var(--text-muted)]" />
                      <span className="font-semibold">{teacher.gradeEntryRate}%</span>
                    </div>
                  </td>
                  <td className="py-4 pl-4">
                    {teacher.needsSupport ? (
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">
                          <AlertTriangle size={12} />
                          Atenção
                        </span>
                      </div>
                    ) : (
                      <span className="px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                        OK
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
