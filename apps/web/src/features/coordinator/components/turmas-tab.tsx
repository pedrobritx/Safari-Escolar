"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users, GraduationCap, TrendingUp } from "lucide-react";

interface Classroom {
  id: string;
  name: string;
  grade_level?: string;
  student_count: number;
  teacher_name?: string;
  attendance_rate?: number;
}

export function TurmasTab() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchClassrooms = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/classrooms/", { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        const mapped = data.map((c: any) => ({
          id: c.id,
          name: c.name,
          grade_level: c.grade_level || "-",
          student_count: c.student_count || 0,
          teacher_name: c.teacher_name || "Sem professor",
          attendance_rate: 80 + Math.floor(Math.random() * 20), // Simulated
        }));
        setClassrooms(mapped);
      }
    } catch (error) {
      console.error("Failed to fetch classrooms:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClassrooms();
  }, []);

  const filtered = classrooms.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.teacher_name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="text-center py-12 text-[var(--text-muted)]">
        Carregando turmas...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-[var(--text)]">Todas as Turmas</h2>
          <p className="text-sm text-[var(--text-muted)]">
            {classrooms.length} turmas cadastradas
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
          <Input
            placeholder="Buscar por turma ou professor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-[var(--surface-glass)]"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-[var(--border)] rounded-xl">
          <p className="text-[var(--text-muted)]">
            {classrooms.length === 0
              ? "Nenhuma turma cadastrada"
              : "Nenhuma turma encontrada para essa busca"}
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((classroom) => (
            <Card
              key={classroom.id}
              className="hover:border-[var(--primary)] transition-all duration-200 cursor-pointer hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg text-[var(--text)]">{classroom.name}</h3>
                  <span className="text-xs font-medium text-[var(--text-muted)] bg-[var(--surface-glass)] px-2 py-1 rounded-md">
                    {classroom.grade_level}
                  </span>
                </div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                  <Users size={18} className="text-white" />
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <GraduationCap size={14} />
                  <span>{classroom.teacher_name}</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <Users size={14} />
                  <span>{classroom.student_count} alunos</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border)]">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--text-muted)]">Frequência</span>
                  <span className="font-bold text-[var(--secondary)]">
                    {classroom.attendance_rate}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--surface-glass)] border border-[var(--border)] mt-1">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"
                    style={{ width: `${classroom.attendance_rate}%` }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
