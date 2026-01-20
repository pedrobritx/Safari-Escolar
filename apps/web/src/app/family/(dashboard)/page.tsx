"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  MessageSquare,
  Sparkles,
} from "lucide-react";

type TimelineItem = {
  icon: ReactNode;
  title: string;
  detail: string;
  when: string;
};

type ChildProfile = {
  id: string;
  name: string;
  avatar: string;
  grade: string;
  attendanceToday: "Presente" | "Atraso" | "Falta";
  attendanceRate: string;
  homeworkDue: number;
  feedback: { positive: number; growth: number };
  teacher: string;
  assignments: { title: string; due: string; status: string }[];
  timeline: TimelineItem[];
};

const CHILDREN: ChildProfile[] = [
  {
    id: "ana",
    name: "Ana Clara",
    avatar: "🦒",
    grade: "2ºB",
    attendanceToday: "Presente",
    attendanceRate: "92%",
    homeworkDue: 2,
    feedback: { positive: 3, growth: 1 },
    teacher: "Prof. Carlos",
    assignments: [
      { title: "Leitura: Capítulo 3", due: "Sexta • 18/04", status: "Em andamento" },
      { title: "Matemática: Frações", due: "Segunda • 21/04", status: "Próximo" },
    ],
    timeline: [
      { icon: <CheckCircle2 size={16} />, title: "Presença registrada", detail: "Entrada às 07:55", when: "Hoje" },
      { icon: <Sparkles size={16} />, title: "Feedback positivo: Colaboração", detail: "Prof. Carlos", when: "Hoje" },
      { icon: <BookOpen size={16} />, title: "Tarefa de Matemática para sexta", detail: "Prazo em 2 dias", when: "Ontem" },
    ],
  },
  {
    id: "bruno",
    name: "Bruno",
    avatar: "🐢",
    grade: "4ºA",
    attendanceToday: "Atraso",
    attendanceRate: "89%",
    homeworkDue: 1,
    feedback: { positive: 1, growth: 2 },
    teacher: "Profa. Joana",
    assignments: [
      { title: "Ciências: ciclo da água", due: "Quinta • 17/04", status: "Hoje" },
    ],
    timeline: [
      { icon: <Clock3 size={16} />, title: "Chegada tardia", detail: "Registrado às 08:10", when: "Hoje" },
      { icon: <Sparkles size={16} />, title: "Feedback: Foco melhorou", detail: "Profa. Joana", when: "Ontem" },
      { icon: <BookOpen size={16} />, title: "Lição de Casa enviada", detail: "Prazo amanhã", when: "Ontem" },
    ],
  },
];

export default function FamilyDashboard() {
  const [activeChild, setActiveChild] = useState(CHILDREN[0].id);
  const child = useMemo(
    () => CHILDREN.find((c) => c.id === activeChild) ?? CHILDREN[0],
    [activeChild]
  );

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Área da Família</h1>
          <p className="text-[var(--text-muted)]">
            Acompanhe presença, recados e tarefas do seu filho.
          </p>
        </div>
        <Button variant="secondary" size="sm" className="gap-2">
          <MessageSquare size={16} />
          Mensagens
        </Button>
      </div>

      <GlassPanel className="flex flex-col gap-3 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[var(--text-muted)]">
            Escolha o estudante
          </span>
          {CHILDREN.map((kid) => (
            <Button
              key={kid.id}
              size="sm"
              variant={kid.id === activeChild ? "primary" : "ghost"}
              onClick={() => setActiveChild(kid.id)}
              className="flex items-center gap-2"
            >
              <span className="text-lg">{kid.avatar}</span>
              {kid.name}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
          <span className="font-semibold text-[var(--text)]">{child.name}</span>
          <span className="rounded-full bg-[var(--surface)] px-3 py-1 font-semibold">
            {child.grade}
          </span>
          <span className="rounded-full bg-[var(--surface)] px-3 py-1">
            Professor(a): {child.teacher}
          </span>
        </div>
      </GlassPanel>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="space-y-2 bg-[var(--surface)] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[var(--text-muted)]">
              Hoje
            </span>
            <Calendar size={16} className="text-[var(--text-muted)]" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--text-muted)]">
                Presença
              </p>
              <p className="text-xl font-bold text-[var(--text)]">
                {child.attendanceToday}
              </p>
            </div>
            <StatusPill status={child.attendanceToday} />
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            Frequência geral: {child.attendanceRate}
          </p>
        </Card>

        <Card className="space-y-2 bg-[var(--surface)] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[var(--text-muted)]">
              Feedbacks da semana
            </span>
            <Sparkles size={16} className="text-[var(--secondary)]" />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-[var(--text)]">
              Positivos: {child.feedback.positive}
            </div>
            <div className="text-sm font-semibold text-[var(--text)]">
              Desenvolvimento: {child.feedback.growth}
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)]">
            Toque em mensagens para ver detalhes enviados pelo professor.
          </p>
        </Card>

        <Card className="space-y-2 bg-[var(--surface)] shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-[var(--text-muted)]">
              Tarefas pendentes
            </span>
            <BookOpen size={16} className="text-[var(--primary)]" />
          </div>
          <p className="text-3xl font-bold">{child.homeworkDue}</p>
          <p className="text-xs text-[var(--text-muted)]">
            Prazo mais próximo: {child.assignments[0]?.due ?? "Nenhum"}
          </p>
        </Card>
      </div>

      <Card className="space-y-3 bg-[var(--surface)] shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Próximos trabalhos</h2>
          <span className="text-xs font-semibold text-[var(--text-muted)]">
            Organize-se para os prazos
          </span>
        </div>
        {child.assignments.map((assignment) => (
          <div
            key={assignment.title}
            className="flex flex-wrap items-center justify-between gap-2 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-glass)] px-3 py-2"
          >
            <div>
              <p className="text-sm font-bold text-[var(--text)]">
                {assignment.title}
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                {assignment.due}
              </p>
            </div>
            <span className="text-xs font-semibold text-[var(--secondary)]">
              {assignment.status}
            </span>
          </div>
        ))}
        {child.assignments.length === 0 && (
          <p className="text-sm text-[var(--text-muted)]">
            Nenhuma tarefa pendente.
          </p>
        )}
      </Card>

      <GlassPanel className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Linha do tempo</h2>
          <span className="text-xs font-semibold text-[var(--text-muted)]">
            Atualizado hoje
          </span>
        </div>
        <div className="space-y-3">
          {child.timeline.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--surface-glass)] text-[var(--secondary)]">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--text)]">
                  {item.title}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  {item.detail}
                </p>
              </div>
              <span className="text-xs font-semibold text-[var(--text-muted)]">
                {item.when}
              </span>
            </div>
          ))}
        </div>
      </GlassPanel>

      <Card className="flex flex-col gap-3 bg-[var(--surface)] shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <HeartHandshake className="text-[var(--primary)]" />
          <div>
            <p className="text-sm font-semibold text-[var(--text)]">
              Precisa falar com o professor?
            </p>
            <p className="text-xs text-[var(--text-muted)]">
              Mensagens são sempre privadas e focadas no aluno selecionado.
            </p>
          </div>
        </div>
        <Button className="w-full md:w-auto" variant="accent">
          Abrir mensagens
        </Button>
      </Card>
    </div>
  );
}

function StatusPill({ status }: { status: ChildProfile["attendanceToday"] }) {
  const styleMap: Record<ChildProfile["attendanceToday"], string> = {
    Presente: "bg-[var(--color-green-50)] text-[var(--secondary)] border-[var(--border)]",
    Atraso: "bg-[var(--color-orange-50)] text-[var(--accent)] border-[var(--border)]",
    Falta: "bg-[var(--color-orange-50)] text-[var(--accent)] border-[var(--border)]",
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-bold ${styleMap[status]}`}
    >
      {status}
    </span>
  );
}
