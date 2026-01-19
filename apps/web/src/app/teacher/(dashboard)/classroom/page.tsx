"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CreateClassroomModal } from "@/features/teacher/components/create-classroom-modal";

const INITIAL_CLASSES = [
  { id: 1, name: "Matemática 2B", time: "08:00 - 09:30", students: 24, room: "104" },
  { id: 2, name: "Matemática 3A", time: "10:00 - 11:30", students: 28, room: "105" },
  { id: 3, name: "Reforço Geom.", time: "13:00 - 14:00", students: 12, room: "Biblio" },
];

export default function ClassroomList() {
  const [classes, setClasses] = useState(INITIAL_CLASSES);

  const handleClassCreated = () => {
    // Determine new ID (mock logic)
    const newId = Math.max(...classes.map(c => c.id)) + 1;
    const newClass = {
        id: newId,
        name: `Nova Turma ${newId}`, // Ideally passed from modal, but for now we reload or refetch. 
        // The modal should probably return the created class data to us, but the interface is () => void.
        // Let's assume we fetch or just mock-add for now. 
        time: "08:00", 
        students: 0, 
        room: "TBD" 
    };
    // Since the modal handles the "creation" api call, normally we would fetch here.
    // For this prototype, I'll cheat and just add a dummy. 
    // Wait, I can update the modal prop to pass data back.
    setClasses([...classes, newClass]);
  };

  return (
    <div className="flex flex-col gap-6 pt-2 pb-24">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--primary)]">Minhas Turmas</h1>
        <div className="flex gap-2">
            <Button variant="ghost" size="sm">Filtros 🔽</Button>
            <CreateClassroomModal onClassroomCreated={handleClassCreated} />
        </div>
      </div>

      <div className="grid gap-4">
        {classes.map((cls) => (
          <Link key={cls.id} href={`/teacher/classroom/${cls.id}`}>
             <Card className="hover:border-[var(--primary)] transition-colors cursor-pointer active:scale-[0.99] flex flex-col gap-3">
               <div className="flex justify-between items-start">
                 <div>
                   <h3 className="font-bold text-lg">{cls.name}</h3>
                   <span className="text-xs font-medium text-[var(--text-muted)] bg-[var(--surface-glass-strong)] px-2 py-1 rounded-md">
                     Sala {cls.room}
                   </span>
                 </div>
                 <div className="text-right">
                   <p className="font-bold text-[var(--secondary)]">{cls.time}</p>
                   <p className="text-xs text-[var(--text-muted)]">{cls.students} alunos</p>
                 </div>
               </div>
               <div className="h-1 bg-[var(--border)] rounded-full w-full overflow-hidden mt-1">
                 <div className="h-full bg-[var(--primary)] w-3/4" />
               </div>
               <p className="text-xs text-[var(--text-muted)] mt-0">75% de frequência média</p>
             </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
