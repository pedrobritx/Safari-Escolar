"use client";

import { cn } from "@/lib/utils";
import { 
  Activity, 
  Users, 
  GraduationCap, 
  UserRound, 
  Users2,
  ScrollText
} from "lucide-react";

export type AdminTab = "dashboard" | "users" | "turmas" | "students" | "families" | "logs";

interface TabItem {
  id: AdminTab;
  label: string;
  icon: React.ReactNode;
}

const TABS: TabItem[] = [
  { id: "dashboard", label: "Dashboard", icon: <Activity size={18} /> },
  { id: "users", label: "Usuários", icon: <Users size={18} /> },
  { id: "turmas", label: "Turmas", icon: <GraduationCap size={18} /> },
  { id: "students", label: "Alunos", icon: <UserRound size={18} /> },
  { id: "families", label: "Famílias", icon: <Users2 size={18} /> },
  { id: "logs", label: "Logs", icon: <ScrollText size={18} /> },
];

interface AdminTabsProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
}

export function AdminTabs({ activeTab, onTabChange }: AdminTabsProps) {
  return (
    <div className="flex flex-wrap gap-1 p-1 rounded-xl bg-slate-800/60 border border-slate-700 backdrop-blur-md">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
            activeTab === tab.id
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
              : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
          )}
        >
          {tab.icon}
          <span className="hidden sm:inline">{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
