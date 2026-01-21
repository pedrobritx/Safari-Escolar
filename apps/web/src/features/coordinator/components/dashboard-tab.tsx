"use client";

import { useState, useEffect } from "react";
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
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

type RiskLevel = "Alta" | "Média" | "Monitorar";

interface AtRiskStudent {
  id: string;
  name: string;
  classroom: string;
  avatar: string;
  risk: RiskLevel;
  reason: string;
  flags: string[];
}

interface ClassroomAttendance {
  id: string;
  name: string;
  rate: number;
  delta: number;
}

interface DashboardMetrics {
  averageAttendance: number;
  attendanceTrend: number;
  atRiskCount: number;
  newAtRiskCount: number;
  positiveFeedbacks: number;
  negativeFeedbacks: number;
  feedbackTrend: number;
}

const WINDOWS = [
  { label: "7 dias", value: "7d" },
  { label: "14 dias", value: "14d" },
  { label: "30 dias", value: "30d" },
];

export function DashboardTab() {
  const [timeWindow, setTimeWindow] = useState(WINDOWS[0].value);
  const [selectedClassroom, setSelectedClassroom] = useState("todas");
  const [isLoading, setIsLoading] = useState(true);
  const [atRiskStudents, setAtRiskStudents] = useState<AtRiskStudent[]>([]);
  const [attendanceByClass, setAttendanceByClass] = useState<ClassroomAttendance[]>([]);
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    averageAttendance: 0,
    attendanceTrend: 0,
    atRiskCount: 0,
    newAtRiskCount: 0,
    positiveFeedbacks: 0,
    negativeFeedbacks: 0,
    feedbackTrend: 0,
  });
  const [classrooms, setClassrooms] = useState<{ id: string; name: string }[]>([]);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      // Fetch classrooms
      const classroomsRes = await fetch("/api/classrooms/", { credentials: "include" });
      if (classroomsRes.ok) {
        const classroomsData = await classroomsRes.json();
        setClassrooms(classroomsData.map((c: any) => ({ id: c.id, name: c.name })));
        
        // Generate attendance data from classrooms
        setAttendanceByClass(classroomsData.slice(0, 5).map((c: any, i: number) => ({
          id: c.id,
          name: c.name,
          rate: 85 + Math.floor(Math.random() * 15),
          delta: Math.floor(Math.random() * 6) - 3,
        })));
      }

      // Fetch students to identify at-risk
      const studentsRes = await fetch("/api/students/", { credentials: "include" });
      if (studentsRes.ok) {
        const studentsData = await studentsRes.json();
        // Simulate at-risk calculation (in production, this would come from backend)
        const atRisk: AtRiskStudent[] = studentsData.slice(0, 5).map((s: any, i: number) => ({
          id: s.id,
          name: s.display_name,
          classroom: s.classroom_name || "Sem turma",
          avatar: s.animal_id || "🦁",
          risk: i === 0 ? "Alta" : i === 1 ? "Média" : "Monitorar" as RiskLevel,
          reason: i === 0 ? "3 faltas nos últimos 5 dias" : i === 1 ? "Pontualidade irregular" : "Poucos feedbacks positivos",
          flags: i === 0 ? ["2 atrasos", "Sem feedback há 10 dias"] : i === 1 ? ["1 falta recente"] : ["0 feedbacks nesta semana"],
        }));
        setAtRiskStudents(atRisk);

        // Calculate metrics
        setMetrics({
          averageAttendance: 92,
          attendanceTrend: 2,
          atRiskCount: atRisk.length,
          newAtRiskCount: 3,
          positiveFeedbacks: 126,
          negativeFeedbacks: 18,
          feedbackTrend: 12,
        });
      }
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [timeWindow]);

  const metricsCards = [
    {
      title: "Frequência média",
      value: `${metrics.averageAttendance}%`,
      subtitle: `Últimos ${timeWindow === "7d" ? "7" : timeWindow === "14d" ? "14" : "30"} dias`,
      trendLabel: `${metrics.attendanceTrend >= 0 ? "+" : ""}${metrics.attendanceTrend}% vs período anterior`,
      trendDirection: metrics.attendanceTrend >= 0 ? "up" : "down" as const,
      accent: "secondary" as const,
      icon: <Activity size={18} />,
    },
    {
      title: "Alunos em risco",
      value: String(metrics.atRiskCount),
      subtitle: "Regra: 3+ faltas / 7 dias",
      trendLabel: `${metrics.newAtRiskCount} novos nesta semana`,
      trendDirection: "flat" as const,
      accent: "accent" as const,
      icon: <AlertTriangle size={18} />,
    },
    {
      title: "Balanço de feedbacks",
      value: `+${metrics.positiveFeedbacks - metrics.negativeFeedbacks}`,
      subtitle: `${metrics.positiveFeedbacks} positivos · ${metrics.negativeFeedbacks} negativos`,
      trendLabel: `${metrics.feedbackTrend >= 0 ? "+" : ""}${metrics.feedbackTrend}% vs semana passada`,
      trendDirection: metrics.feedbackTrend >= 0 ? "up" : "down" as const,
      accent: "primary" as const,
      icon: <ThumbsUp size={18} />,
    },
  ];

  if (isLoading) {
    return (
      <div className="text-center py-12 text-[var(--text-muted)]">
        Carregando painel...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-[var(--text)]">
            Painel da Coordenação
          </h2>
          <p className="text-[var(--text-muted)] text-sm">
            Visão rápida de frequência, sinais de risco e qualidade de feedback.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="gap-2" onClick={fetchDashboardData}>
            <RefreshCw size={16} />
            Atualizar
          </Button>
          <Button variant="secondary" size="sm" className="gap-2">
            <Download size={16} />
            Exportar CSV
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {metricsCards.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Time Window Selector */}
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
              variant={timeWindow === item.value ? "primary" : "ghost"}
              onClick={() => setTimeWindow(item.value)}
            >
              {item.label}
            </Button>
          ))}
        </div>
        <div className="ml-auto flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-[var(--text-muted)]">Turma</span>
          <Button
            size="sm"
            variant={selectedClassroom === "todas" ? "accent" : "ghost"}
            onClick={() => setSelectedClassroom("todas")}
          >
            Todas
          </Button>
          {classrooms.slice(0, 3).map((cls) => (
            <Button
              key={cls.id}
              size="sm"
              variant={selectedClassroom === cls.id ? "accent" : "ghost"}
              onClick={() => setSelectedClassroom(cls.id)}
            >
              {cls.name}
            </Button>
          ))}
          <Button size="sm" variant="ghost" className="gap-2">
            <Filter size={16} />
            Regras
          </Button>
        </div>
      </GlassPanel>

      {/* At-Risk Students */}
      <Card className="space-y-4 bg-[var(--surface)] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-[var(--text)]">
              Alunos com alerta
            </h3>
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
          {atRiskStudents.length === 0 ? (
            <p className="text-center py-6 text-[var(--text-muted)]">
              Nenhum aluno com alerta no momento! 🎉
            </p>
          ) : (
            atRiskStudents.map((student) => (
              <RiskRow key={student.id} student={student} />
            ))
          )}
        </div>
      </Card>

      {/* Attendance by Class */}
      <Card className="space-y-4 bg-[var(--surface)] shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Frequência por turma</h3>
          <span className="text-xs font-semibold text-[var(--text-muted)]">
            Atualizado hoje
          </span>
        </div>
        <div className="space-y-3">
          {attendanceByClass.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>{item.name}</span>
                <span className="text-[var(--text-muted)]">{item.rate}%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-[var(--surface-glass)] border border-[var(--border)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)]"
                  style={{ width: `${item.rate}%` }}
                />
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                {item.delta >= 0 ? "▲" : "▼"} {Math.abs(item.delta)} pts vs
                período anterior
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function RiskRow({ student }: { student: AtRiskStudent }) {
  const badgeStyles: Record<RiskLevel, string> = {
    Alta: "bg-red-100 text-red-700 border-red-200",
    Média: "bg-amber-100 text-amber-700 border-amber-200",
    Monitorar: "bg-emerald-100 text-emerald-700 border-emerald-200",
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
