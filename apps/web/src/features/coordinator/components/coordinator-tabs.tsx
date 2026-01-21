"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, GraduationCap, UserRound } from "lucide-react";

export type CoordinatorTab = "dashboard" | "turmas" | "teachers" | "students";

interface TabItem {
  id: CoordinatorTab;
  label: string;
  icon: React.ReactNode;
}

const TABS: TabItem[] = [
  { id: "dashboard", label: "Painel", icon: <LayoutDashboard size={18} /> },
  { id: "turmas", label: "Turmas", icon: <Users size={18} /> },
  { id: "teachers", label: "Professores", icon: <GraduationCap size={18} /> },
  { id: "students", label: "Alunos", icon: <UserRound size={18} /> },
];

interface CoordinatorTabsProps {
  activeTab: CoordinatorTab;
  onTabChange: (tab: CoordinatorTab) => void;
}

export function CoordinatorTabs({ activeTab, onTabChange }: CoordinatorTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 p-1 rounded-[var(--radius-lg)] bg-[var(--surface-glass)] border border-[var(--border)] backdrop-blur-md">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-[var(--radius-md)] text-sm font-semibold transition-all duration-200",
            activeTab === tab.id
              ? "bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] text-white shadow-lg"
              : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface)]"
          )}
        >
          {tab.icon}
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
