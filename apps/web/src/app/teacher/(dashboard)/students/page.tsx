"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { StudentTile } from "@/features/teacher/components/student-tile";
import { StudentDetailModal } from "@/features/teacher/components/student-detail-modal";

interface Student {
  id: number;
  name: string;
  avatar: string;
  class: string;
}

const STUDENTS: Student[] = [
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
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = STUDENTS.filter(s => s.name.toLowerCase().includes(term.toLowerCase()));

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

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
              onClick={() => handleStudentClick(s)} 
            />
          ))}
       </div>

       {/* Student Detail Modal */}
       <StudentDetailModal
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         student={selectedStudent}
       />
    </div>
  );
}

