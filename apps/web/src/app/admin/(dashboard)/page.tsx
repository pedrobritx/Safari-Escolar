"use client";

import { MetricCard } from "@/components/ui/metric-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  ClipboardList,
  Download,
  GraduationCap,
  PlusCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

const METRICS = [
  {
    title: "Escolas ativas",
    value: "3",
    subtitle: "Campos Alto • Horizonte • Anchieta",
    trendLabel: "+1 adicionada este mês",
    trendDirection: "up" as const,
    accent: "primary" as const,
    icon: <Building2 size={18} />,
  },
  {
    title: "Professores",
    value: "48",
    subtitle: "32 acessaram hoje",
    trendLabel: "+4 convites pendentes",
    trendDirection: "flat" as const,
    accent: "secondary" as const,
    icon: <Users size={18} />,
  },
  {
    title: "Turmas",
    value: "18",
    subtitle: "Ano letivo 2024",
    trendLabel: "2 turmas sem professor",
    trendDirection: "down" as const,
    accent: "accent" as const,
    icon: <GraduationCap size={18} />,
  },
];

const PROVISION_ACTIONS = [
  {
    title: "Cadastrar usuário",
    description: "Criar professor, coordenador ou responsável.",
    action: "Novo usuário",
  },
  {
    title: "Criar turma",
    description: "Defina série, horário e vincule um professor.",
    action: "Nova turma",
  },
  {
    title: "Importar estudantes",
    description: "Envie um CSV com alunos e responsáveis.",
    action: "Importar CSV",
  },
];

const RECENT_ACTIVITY = [
  { title: "Turma 5ºA criada", actor: "Ana Paula", time: "Hoje • 08:10", status: "Concluído" },
  { title: "Convite enviado: coord@safari.br", actor: "Você", time: "Ontem • 19:20", status: "Pendente" },
  { title: "Aluno importado (CSV)", actor: "Equipe API", time: "Ontem • 16:00", status: "Concluído" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6 pb-20">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text)]">
            Painel Admin
          </h1>
          <p className="text-[var(--text-muted)]">
            Provisionamento de escolas, turmas e contas.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="gap-2">
            <Download size={16} />
            Exportar
          </Button>
          <Button variant="primary" size="sm" className="gap-2">
            <PlusCircle size={16} />
            Nova escola
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {METRICS.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <Card className="space-y-3 bg-[var(--surface)] shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-bold">Ações rápidas</h2>
            <p className="text-sm text-[var(--text-muted)]">
              Provisionamento seguro e rastreável.
            </p>
          </div>
          <ShieldCheck className="text-[var(--primary)]" size={20} />
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {PROVISION_ACTIONS.map((action) => (
            <div
              key={action.title}
              className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-glass)] p-3"
            >
              <div>
                <p className="text-sm font-bold text-[var(--text)]">
                  {action.title}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  {action.description}
                </p>
              </div>
              <Button size="sm" variant="secondary">
                {action.action}
              </Button>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-[2fr,1fr]">
        <Card className="space-y-3 bg-[var(--surface)] shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Atividade recente</h2>
            <span className="text-xs font-semibold text-[var(--text-muted)]">
              Auditoria básica
            </span>
          </div>
          <div className="space-y-2">
            {RECENT_ACTIVITY.map((item) => (
              <div
                key={item.title + item.time}
                className="flex flex-wrap items-center justify-between gap-2 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-glass)] px-3 py-2"
              >
                <div>
                  <p className="text-sm font-semibold text-[var(--text)]">
                    {item.title}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {item.actor} — {item.time}
                  </p>
                </div>
                <span className="text-xs font-bold text-[var(--secondary)]">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="space-y-3 bg-[var(--surface)] shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Pendências</h2>
            <ClipboardList size={18} className="text-[var(--text-muted)]" />
          </div>
          <div className="space-y-2 text-sm">
            <TaskItem text="Vincular professor às turmas 5ºC e 6ºA" />
            <TaskItem text="Conferir convites não aceitos há 7 dias" />
            <TaskItem text="Revisar perfis de responsáveis importados" />
          </div>
        </Card>
      </div>
    </div>
  );
}

function TaskItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-glass)] px-3 py-2">
      <div className="h-2 w-2 rounded-full bg-[var(--primary)]" />
      <span className="text-[var(--text)]">{text}</span>
    </div>
  );
}
