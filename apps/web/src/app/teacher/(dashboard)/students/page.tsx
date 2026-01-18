"use client";

import { useState } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Input } from "@/components/ui/input";
import { StudentTile } from "@/features/teacher/components/student-tile";

const STUDENTS = [
  { id: 1, name: "Ana Clara", avatar: "🦒", class: "2B" },
  { id: 2, name: "Bernardo", avatar: "🦁", class: "2B" },
  { id: 3, name: "Carla", avatar: "🦓", class: "3A" },
  { id: 4, name: "Daniel", avatar: "🐘", class: "2B" },
  { id: 5, name: "Eduardo", avatar: "🐒", class: "3A" },
  { id: 6, name: "Fernanda", avatar: "🦜", class: "2B" },
  { id: 7, name: "Gabriel", avatar: "🐊", class: "3A" },
];

export default function StudentsPage() {
  const [term, setTerm] = useState("");

  const filtered = STUDENTS.filter(s => s.name.toLowerCase().includes(term.toLowerCase()));

  return (
    <div className="flex flex-col gap-6 pt-2">
       <div className="flex flex-col gap-4">
         <h1 className="text-2xl font-bold text-[var(--primary)]">Alunos</h1>
         <Input 
           placeholder="Buscar aluno..." 
           value={term}
           onChange={e => setTerm(e.target.value)}
           className="bg-[var(--surface-glass)]"
         />
       </div>

       <div className="grid grid-cols-3 gap-3">
          {filtered.map(s => (
            <StudentTile
              key={s.id}
              name={s.name}
              avatar={s.avatar}
              // No status for directory view
              onClick={() => {}} 
            />
          ))}
       </div>
    </div>
  );
}
