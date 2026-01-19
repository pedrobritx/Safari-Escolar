"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DashboardStatCard } from "@/features/teacher/components/dashboard-stat-card";
import { BookOpen, Calendar, AlertCircle, Clock } from "lucide-react"; // Assuming lucide-react is available now

export default function TeacherDashboard() {
  return (
    <div className="flex flex-col gap-6 pb-24">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-[var(--text)]">Bom dia, Carlos! 🦁</h2>
        <p className="text-[var(--text-muted)]">Segunda-feira, 19 de Janeiro</p>
      </div>

      {/* Highlights Section (Horizontal Scroll on mobile) */}
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
        <DashboardStatCard 
            title="Turmas Hoje" 
            value="4" 
            icon={<BookOpen size={20} className="text-[var(--primary)]" />}
            href="/teacher/classroom"
            variant="default"
        />
        <DashboardStatCard 
            title="Tarefas" 
            value="12" 
            subtitle="Entregas pendentes"
            icon={<Clock size={20} className="text-[var(--secondary)]" />}
            variant="info"
        />
        <DashboardStatCard 
            title="Provas" 
            value="2" 
            subtitle="Próxima semana"
            icon={<Calendar size={20} className="text-[var(--text)]" />}
            href="/teacher/gradebook"
        />
        <DashboardStatCard 
            title="Avisos" 
            value="3" 
            icon={<AlertCircle size={20} className="text-[var(--accent)]" />}
            href="/teacher"
            variant="warning"
        />
      </div>

      {/* Next Class Widget (Hero) */}
      <div>
        <h3 className="text-lg font-bold mb-3">Próxima Aula</h3>
        <Card variant="glass" className="border-[var(--secondary)] bg-[var(--green-50)]/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-[10rem] leading-none select-none pointer-events-none">
                🦁
            </div>
            
            <div className="p-4 relative z-10 flex flex-col gap-4">
                <div className="flex justify-between items-end">
                    <div>
                        <span className="inline-block px-2 py-1 rounded-full bg-white/80 text-[var(--secondary)] text-xs font-bold mb-2 shadow-sm">
                            EM ANDAMENTO
                        </span>
                        <h2 className="text-3xl font-bold text-[var(--text)]">Matemática 2B</h2>
                        <p className="text-[var(--text-muted)] font-medium">Sala 104 • 24 Alunos</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-[var(--text)]">08:00</p>
                        <p className="text-xs text-[var(--text-muted)]">até 09:30</p>
                    </div>
                </div>

                <div className="flex gap-3 mt-2">
                    <Link href="/teacher/classroom/1" className="flex-1">
                        <Button className="w-full text-base font-bold shadow-md" variant="primary" size="lg">
                            Iniciar Chamada
                        </Button>
                    </Link>
                    <Link href="/teacher/gradebook">
                        <Button variant="secondary" size="lg" className="aspect-square p-0 w-14 flex items-center justify-center shadow-sm">
                            📝
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <div>
         <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold">Atividades Recentes</h3>
            <Button variant="ghost" size="sm" className="text-[var(--primary)] h-8">Ver todas</Button>
         </div>
         
         <div className="flex flex-col gap-3">
             {[
                 { title: "Prova de Matemática", subtitle: "Turma 2B • Correção pendente", time: "Há 2h", icon: "📝", bg: "bg-blue-100" },
                 { title: "Bernardo (2B) faltou", subtitle: "Justificativa anexada", time: "Há 4h", icon: "👤", bg: "bg-orange-100" },
                 { title: "Reunião de Pais", subtitle: "Sexta-feira • 18:00", time: "Ontem", icon: "📅", bg: "bg-purple-100" },
             ].map((item, i) => (
                 <Card key={i} className="flex items-center gap-4 p-3 hover:bg-[var(--surface-hover)] transition-colors cursor-pointer border-transparent shadow-none hover:shadow-sm">
                    <div className={`h-10 w-10 rounded-full ${item.bg} flex items-center justify-center text-lg`}>
                        {item.icon}
                    </div>
                    <div className="flex-1">
                        <p className="font-bold text-sm text-[var(--text)]">{item.title}</p>
                        <p className="text-xs text-[var(--text-muted)]">{item.subtitle}</p>
                    </div>
                    <span className="text-xs font-medium text-[var(--text-muted)]">{item.time}</span>
                 </Card>
             ))}
         </div>
      </div>
    </div>
  );
}
