"use client";

import { use, useState } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";

// Mock Data
const STUDENT_DATA = {
  id: 1,
  name: "Ana Clara",
  avatar: "🦒",
  class: "2B",
  age: 7,
  parents: ["Maria", "João"],
  attendance: "92%",
};

export default function StudentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  // In a real app, fetch student by id
  
  return (
    <div className="flex flex-col gap-6 pt-4">
      <GlassPanel className="flex flex-col items-center p-6 gap-4">
        <div className="text-6xl filter drop-shadow-md">{STUDENT_DATA.avatar}</div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">{STUDENT_DATA.name}</h1>
          <p className="text-[var(--text-muted)]">Turma {STUDENT_DATA.class}</p>
        </div>
        <div className="flex gap-2 mt-2">
           <Button variant="secondary" size="sm">Histórico</Button>
           <Button variant="ghost" size="sm">Editar</Button>
        </div>
      </GlassPanel>

      <div className="grid grid-cols-2 gap-4">
        <GlassPanel className="p-4 flex flex-col gap-2">
           <span className="text-xs font-bold uppercase text-[var(--text-muted)]">Frequência</span>
           <span className="text-2xl font-bold text-[var(--secondary)]">{STUDENT_DATA.attendance}</span>
        </GlassPanel>
        <GlassPanel className="p-4 flex flex-col gap-2">
           <span className="text-xs font-bold uppercase text-[var(--text-muted)]">Responsáveis</span>
           <span className="text-sm font-medium">{STUDENT_DATA.parents.join(", ")}</span>
        </GlassPanel>
      </div>
    </div>
  );
}
