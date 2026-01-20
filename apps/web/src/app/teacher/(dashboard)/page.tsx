"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DashboardStatCard } from "@/features/teacher/components/dashboard-stat-card";
import { BookOpen, Calendar, AlertCircle, Clock } from "lucide-react";

interface Classroom {
  id: string;
  name: string;
  grade_level?: string;
  student_count?: number;
}

interface Student {
  id: string;
  display_name: string;
  classroom: string;
}

export default function TeacherDashboard() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const [classroomsRes, studentsRes] = await Promise.all([
          fetch("/api/classrooms/", { credentials: "include" }),
          fetch("/api/students/", { credentials: "include" }),
        ]);

        if (!classroomsRes.ok) throw new Error("Falha ao carregar turmas");
        if (!studentsRes.ok) throw new Error("Falha ao carregar alunos");

        const classroomsData = await classroomsRes.json();
        const studentsData = await studentsRes.json();
        
        setClassrooms(classroomsData);
        setStudents(studentsData);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        setError("Não foi possível carregar os dados. Verifique sua conexão.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get student count for a classroom
  const getStudentCount = (classroomId: string) => {
    return students.filter((s) => s.classroom === classroomId).length;
  };

  if (error) {
    return (
      <div className="flex flex-col gap-6 pb-24 text-center pt-10">
        <div className="p-6 bg-red-50 text-red-600 rounded-lg border border-red-200 inline-block mx-auto">
          <AlertCircle size={48} className="mx-auto mb-2" />
          <p className="font-bold">{error}</p>
          <Button variant="outline" className="mt-4 border-red-200 hover:bg-red-100" onClick={() => window.location.reload()}>
            Tentar Novamente
          </Button>
        </div>
      </div>
    );
  }


  // Get the next/current class (first classroom for now)
  const nextClass = classrooms[0];

  // Get current date formatted in Portuguese
  const today = new Date();
  const dayNames = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const formattedDate = `${dayNames[today.getDay()]}, ${today.getDate()} de ${monthNames[today.getMonth()]}`;

  // Greeting based on time of day
  const hour = today.getHours();
  const greeting = hour < 12 ? "Bom dia" : hour < 18 ? "Boa tarde" : "Boa noite";

  return (
    <div className="flex flex-col gap-6 pb-24">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-[var(--text)]">{greeting}, Professor! 🦁</h2>
        <p className="text-[var(--text-muted)]">{formattedDate}</p>
      </div>

      {/* Highlights Section (Horizontal Scroll on mobile) */}
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
        <DashboardStatCard 
            title="Turmas" 
            value={isLoading ? "..." : String(classrooms.length)} 
            icon={<BookOpen size={20} className="text-[var(--primary)]" />}
            href="/teacher/classroom"
            variant="default"
        />
        <DashboardStatCard 
            title="Alunos" 
            value={isLoading ? "..." : String(students.length)} 
            subtitle="Total cadastrados"
            icon={<Clock size={20} className="text-[var(--secondary)]" />}
            href="/teacher/students"
            variant="info"
        />
        <DashboardStatCard 
            title="Provas" 
            value="0" 
            subtitle="Próxima semana"
            icon={<Calendar size={20} className="text-[var(--text)]" />}
            href="/teacher/gradebook"
        />
        <DashboardStatCard 
            title="Avisos" 
            value="0" 
            icon={<AlertCircle size={20} className="text-[var(--accent)]" />}
            href="/teacher"
            variant="warning"
        />
      </div>

      {/* Next Class Widget (Hero) */}
      <div>
        <h3 className="text-lg font-bold mb-3">Próxima Aula</h3>
        {isLoading ? (
          <Card variant="glass" className="p-6 text-center">
            <p className="text-[var(--text-muted)]">Carregando...</p>
          </Card>
        ) : nextClass ? (
          <Card variant="glass" className="border-[var(--secondary)] bg-[var(--green-50)]/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 text-[10rem] leading-none select-none pointer-events-none">
                  🦁
              </div>
              
              <div className="p-4 relative z-10 flex flex-col gap-4">
                  <div className="flex justify-between items-end">
                      <div>
                          <span className="inline-block px-2 py-1 rounded-full bg-white/80 text-[var(--secondary)] text-xs font-bold mb-2 shadow-sm">
                              PRÓXIMA
                          </span>
                          <h2 className="text-3xl font-bold text-[var(--text)]">{nextClass.name}</h2>
                          <p className="text-[var(--text-muted)] font-medium">
                            {nextClass.grade_level || "Turma"} • {getStudentCount(nextClass.id)} Alunos
                          </p>
                      </div>
                      <div className="text-right">
                          <p className="text-lg font-bold text-[var(--text)]">📚</p>
                      </div>
                  </div>

                  <div className="flex gap-3 mt-2">
                      <Link href={`/teacher/classroom/${nextClass.id}`} className="flex-1">
                          <Button className="w-full text-base font-bold shadow-md" variant="primary" size="lg">
                              Ver Turma
                          </Button>
                      </Link>
                      <Link href="/teacher/students">
                          <Button variant="secondary" size="lg" className="aspect-square p-0 w-14 flex items-center justify-center shadow-sm">
                              👥
                          </Button>
                      </Link>
                  </div>
              </div>
          </Card>
        ) : (
          <Card variant="glass" className="p-6 text-center border-dashed border-2 border-[var(--border)]">
            <p className="text-[var(--text-muted)] mb-4">Nenhuma turma cadastrada</p>
            <Link href="/teacher/classroom">
              <Button variant="secondary">Criar primeira turma</Button>
            </Link>
          </Card>
        )}
      </div>

      {/* Recent Activity */}
      <div>
         <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold">Suas Turmas</h3>
            <Link href="/teacher/classroom">
              <Button variant="ghost" size="sm" className="text-[var(--primary)] h-8">Ver todas</Button>
            </Link>
         </div>
         
         {classrooms.length === 0 ? (
           <p className="text-[var(--text-muted)] text-center py-4">Nenhuma turma cadastrada ainda.</p>
         ) : (
           <div className="flex flex-col gap-3">
               {classrooms.slice(0, 3).map((classroom) => (
                   <Link key={classroom.id} href={`/teacher/classroom/${classroom.id}`}>
                     <Card className="flex items-center gap-4 p-3 hover:bg-[var(--surface-hover)] transition-colors cursor-pointer border-transparent shadow-none hover:shadow-sm">
                        <div className="h-10 w-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-lg">
                            📚
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-sm text-[var(--text)]">{classroom.name}</p>
                            <p className="text-xs text-[var(--text-muted)]">
                              {classroom.grade_level || "Turma"} • {getStudentCount(classroom.id)} alunos
                            </p>
                        </div>
                        <span className="text-xs font-medium text-[var(--primary)]">→</span>
                     </Card>
                   </Link>
               ))}
           </div>
         )}
      </div>
    </div>
  );
}

