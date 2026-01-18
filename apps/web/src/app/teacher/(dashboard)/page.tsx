import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TeacherDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-[var(--text)]">Olá, Carlos! 👋</h2>
        <p className="text-[var(--text-muted)]">Aqui está o resumo do seu dia.</p>
      </div>

      {/* Next Class Widget */}
      <Card variant="glass" className="border-[var(--secondary)] bg-[var(--green-50)]/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">🦁</div>
        <div className="flex flex-col gap-4 relative z-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--secondary)]">Próxima Aula</span>
            <span className="text-sm font-medium bg-[var(--surface)] px-2 py-1 rounded-full text-[var(--text-muted)]">08:00 - 09:30</span>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-[var(--text)]">Matemática 2B</h3>
            <p className="text-[var(--text-muted)]">Sala 104 • 24 Alunos</p>
          </div>
          <div className="flex gap-3 mt-2">
             <Link href="/teacher/classroom/1" className="flex-1">
                <Button className="w-full" variant="primary">Iniciar Chamada</Button>
             </Link>
             <Button variant="secondary" className="w-auto aspect-square p-0 flex items-center justify-center">
               📝
             </Button>
          </div>
        </div>
      </Card>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="flex flex-col gap-2 items-center justify-center py-6">
          <span className="text-3xl">📅</span>
          <span className="font-bold text-lg">Agenda</span>
        </Card>
        <Card className="flex flex-col gap-2 items-center justify-center py-6">
          <span className="text-3xl">💬</span>
          <span className="font-bold text-lg">Avisos</span>
          <span className="text-xs bg-[var(--accent)] text-white px-1.5 rounded-full absolute top-3 right-3">2</span>
        </Card>
      </div>

      {/* Recent Activity / Timeline Placeholder */}
       <div className="flex flex-col gap-4">
         <h3 className="font-bold text-lg">Atividades Recentes</h3>
         <Card className="flex items-center gap-4 p-4">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">📝</div>
            <div className="flex-1">
                <p className="font-medium text-sm">Nota lançada: Geografia</p>
                <p className="text-xs text-[var(--text-muted)]">Turma 3A • Há 2 horas</p>
            </div>
         </Card>
         <Card className="flex items-center gap-4 p-4">
            <div className="h-10 w-10 rounded-full bg-[var(--orange-100)] flex items-center justify-center text-[var(--accent)]">⚠️</div>
            <div className="flex-1">
                <p className="font-medium text-sm">Feedback Pendente</p>
                <p className="text-xs text-[var(--text-muted)]">Maria Silva (2B) • Ontem</p>
            </div>
         </Card>
       </div>
    </div>
  );
}
