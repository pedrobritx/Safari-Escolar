"use client";

import { useState } from "react";
import { MetricCard } from "@/components/ui/metric-card";
import { Card } from "@/components/ui/card";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Download,
  Filter,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";

type RiskLevel = "Alta" | "Média" | "Monitorar";

const METRICS = [
  {
    title: "Frequência média",
    value: "92%",
    subtitle: "Últimos 7 dias",
    trendLabel: "+2% vs semana anterior",
    trendDirection: "up" as const,
    accent: "secondary" as const,
    icon: <Activity size={18} />,
  },
  {
    title: "Alunos em risco",
    value: "8",
    subtitle: "Regra: 3+ faltas / 7 dias",
    trendLabel: "3 novos nesta semana",
    trendDirection: "flat" as const,
    accent: "accent" as const,
    icon: <AlertTriangle size={18} />,
  },
  {
    title: "Feedbacks positivos",
    value: "126",
    subtitle: "Semana atual",
    trendLabel: "+12% vs semana passada",
    trendDirection: "up" as const,
    accent: "primary" as const,
    icon: <Users size={18} />,
  },
];

const AT_RISK_STUDENTS = [
  {
    name: "Ana Clara",
    classroom: "5ºA",
    avatar: "🦒",
    risk: "Alta" as RiskLevel,
    reason: "3 faltas nos últimos 5 dias",
    flags: ["2 atrasos", "Sem feedback há 10 dias"],
  },
  {
    name: "João Pedro",
    classroom: "4ºB",
    avatar: "🦊",
    risk: "Média" as RiskLevel,
    reason: "Pontualidade irregular",
    flags: ["1 falta recente", "Notas abaixo da média"],
  },
  {
    name: "Beatriz",
    classroom: "6ºA",
    avatar: "🐘",
    risk: "Monitorar" as RiskLevel,
    reason: "Poucos feedbacks positivos",
    flags: ["0 feedbacks nesta semana"],
  },
];

const ATTENDANCE_BY_CLASS = [
  { name: "5ºA", rate: 88, delta: -4 },
  { name: "4ºB", rate: 93, delta: 1 },
  { name: "6ºA", rate: 96, delta: 2 },
];

const WINDOWS = [
  { label: "7 dias", value: "7d" },
  { label: "14 dias", value: "14d" },
  { label: "30 dias", value: "30d" },
];

export default function CoordinatorDashboard() {
  const [window, setWindow] = useState(WINDOWS[0].value);
  const [selectedClassroom, setSelectedClassroom] = useState("todas");

  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text)]">
            Painel da Coordenação
          </h1>
          <p className="text-[var(--text-muted)]">
            Visão rápida de frequência, sinais de risco e qualidade de feedback.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="gap-2">
            <RefreshCw size={16} />
            Atualizar
          </Button>
          <Button variant="secondary" size="sm" className="gap-2">
            <Download size={16} />
            Exportar CSV
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {METRICS.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <GlassPanel className="flex flex-wrap items-center gap-3 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-muted)]">
          <BarChart3 size={16} />
          Janela de análise
        </div>
        <div className="flex gap-2">
          {WINDOWS.map((item) => (
            <Button
              key={item.value}
              size="sm"
              variant={window === item.value ? "primary" : "ghost"}
              onClick={() => setWindow(item.value)}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <div className="ml-auto flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-[var(--text-muted)]">Turma</span>
          {["todas", "5ºA", "4ºB", "6ºA"].map((cls) => (
            <Button
              key={cls}
              size="sm"
              variant={selectedClassroom === cls ? "accent" : "ghost"}
              onClick={() => setSelectedClassroom(cls)}
            >
              {cls === "todas" ? "Todas" : cls}
            </Button>
          ))}
          <Button size="sm" variant="ghost" className="gap-2">
            <Filter size={16} />
            Regras
          </Button>
        </div>
      </GlassPanel>

      <Card className="space-y-4 bg-[var(--surface)] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-bold text-[var(--text)]">
              Alunos com alerta
            </h2>
            <p className="text-sm text-[var(--text-muted)]">
              Sinais baseados em frequência, atrasos e feedback.
            </p>
          </div>
          <Button variant="ghost" size="sm" className="gap-2">
            <ShieldCheck size={16} />
            Ver auditoria
          </Button>
        </div>
        <div className="space-y-3">
          {AT_RISK_STUDENTS.map((student) => (
            <RiskRow key={student.name} student={student} />
          ))}
        </div>
      </Card>

      <Card className="space-y-4 bg-[var(--surface)] shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Frequência por turma</h2>
          <span className="text-xs font-semibold text-[var(--text-muted)]">
            Atualizado nesta manhã
          </span>
        </div>
        <div className="space-y-3">
          {ATTENDANCE_BY_CLASS.map((item) => (
            <div key={item.name} className="space-y-1">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>{item.name}</span>
                <span className="text-[var(--text-muted)]">{item.rate}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-[var(--surface-glass)] border border-[var(--border)]">
                <div
                  className="h-full rounded-full bg-[var(--secondary)]"
                  style={{ width: `${item.rate}%` }}
                />
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                {item.delta >= 0 ? "▲" : "▼"} {Math.abs(item.delta)} pts vs
                semana passada
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function RiskRow({
  student,
}: {
  student: {
    name: string;
    classroom: string;
    avatar: string;
    risk: RiskLevel;
    reason: string;
    flags: string[];
  };
}) {
  const badgeStyles: Record<RiskLevel, string> = {
    Alta: "bg-[var(--color-orange-50)] text-[var(--accent)] border-[var(--border)]",
    Média: "bg-[var(--color-khaki-50)] text-[var(--primary)] border-[var(--border)]",
    Monitorar: "bg-[var(--color-green-50)] text-[var(--secondary)] border-[var(--border)]",
  };

  return (
    <div className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-glass)] p-3 md:flex-row md:items-center">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface)] text-2xl">
          {student.avatar}
        </div>
        <div>
          <p className="text-sm font-bold text-[var(--text)]">{student.name}</p>
          <p className="text-xs font-semibold text-[var(--text-muted)]">
            {student.classroom}
          </p>
        </div>
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-semibold text-[var(--text)]">
          {student.reason}
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-[var(--text-muted)]">
          {student.flags.map((flag) => (
            <span
              key={flag}
              className="rounded-full bg-[var(--surface)] px-3 py-1 font-medium"
            >
              {flag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span
          className={`rounded-full border px-3 py-1 text-xs font-bold ${badgeStyles[student.risk]}`}
        >
          {student.risk}
        </span>
        <Button variant="ghost" size="sm" className="hidden md:inline-flex">
          Detalhes
        </Button>
      </div>
    </div>
  );
}
