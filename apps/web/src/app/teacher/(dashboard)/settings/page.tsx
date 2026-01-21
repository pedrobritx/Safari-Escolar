"use client";

import Link from "next/link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { Bell, LogOut, Settings, ShieldCheck, UserRound } from "lucide-react";

export default function TeacherSettingsPage() {
  const profile = {
    name: "Prof. Carlos",
    email: "carlos@safariescolar.com",
    phone: "(11) 99999-0000",
  };

  return (
    <div className="space-y-4 pb-16">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <p className="text-sm text-[var(--text-muted)]">Área pessoal do professor</p>
          <h1 className="text-2xl font-bold">Configurações</h1>
        </div>
        <Link href="/teacher">
          <Button variant="ghost" size="sm">Voltar ao painel</Button>
        </Link>
      </div>

      <GlassPanel className="p-4 space-y-4">
        <div className="flex items-start gap-3">
          <div className="h-12 w-12 rounded-full bg-[var(--primary)]/15 flex items-center justify-center text-xl">🦁</div>
          <div className="flex-1">
            <div className="text-base font-semibold text-[var(--text)]">{profile.name}</div>
            <div className="text-sm text-[var(--text-muted)]">{profile.email}</div>
            <div className="mt-1 text-xs text-[var(--text-muted)]">Dados pessoais e preferências do docente</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]/70 p-3 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
              <UserRound size={16} />
              Dados pessoais
            </div>
            <div className="mt-2 text-xs text-[var(--text-muted)] space-y-1">
              <div>Nome: {profile.name}</div>
              <div>Email: {profile.email}</div>
              <div>Telefone: {profile.phone}</div>
            </div>
            <Button variant="outline" size="sm" className="mt-3 w-full justify-start gap-2">
              <Settings size={14} />
              Editar dados
            </Button>
          </div>

          <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]/70 p-3 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text)]">
              <ShieldCheck size={16} />
              Preferências rápidas
            </div>
            <div className="mt-2 text-xs text-[var(--text-muted)] space-y-1">
              <div className="flex items-center justify-between">
                <span>Notificações por e-mail</span>
                <span className="text-[var(--secondary)] font-semibold">Ativas</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Visibilidade do perfil</span>
                <span className="text-[var(--text)] font-semibold">Somente turmas</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Idioma</span>
                <span className="text-[var(--text)] font-semibold">Português (BR)</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="mt-3 w-full justify-start gap-2">
              <Bell size={14} />
              Ajustar notificações
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] pt-3">
          <div className="text-sm text-[var(--text-muted)]">
            Para sair do painel do professor, encerre a sessão com segurança.
          </div>
          <Link href="/teacher/login">
            <Button variant="destructive" className="gap-2">
              <LogOut size={16} />
              Sair para login
            </Button>
          </Link>
        </div>
      </GlassPanel>
    </div>
  );
}
