"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CreateClassroomModal } from "@/features/teacher/components/create-classroom-modal";

export default function ClassroomList() {
  const router = useRouter();
  const [classes, setClasses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const fetchClasses = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch("/api/classrooms/", {
        credentials: "include",
      });
      
      if (res.status === 401 || res.status === 403) {
        router.push("/teacher/login");
        return;
      }

      if (res.ok) {
        const data = await res.json();
        const mapped = data.map((c: any) => ({
          id: c.id,
          name: c.name,
          time: "08:00 - 09:30", // Placeholder
          students: c.student_count || 0,
          room: c.grade_level || "101", // Use grade as room or placeholder
        }));
        setClasses(mapped);
      } else {
        throw new Error("Failed to fetch");
      }
    } catch (error) {
      console.error("Failed to fetch classes", error);
      setError("Falha ao carregar turmas. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleClassCreated = () => {
    fetchClasses();
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6 pt-2 pb-24">
         <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[var(--primary)]">Minhas Turmas</h1>
         </div>
         <div className="p-8 text-center text-[var(--text-muted)]">Carregando turmas...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-6 pt-2 pb-24">
         <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-[var(--primary)]">Minhas Turmas</h1>
         </div>
         <div className="p-8 text-center text-red-500 bg-red-50 rounded-lg border border-red-200">
           <p className="font-bold mb-2">{error}</p>
           <Button onClick={fetchClasses} variant="outline" className="border-red-200">Tentar novamente</Button>
         </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 pt-2 pb-24">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--primary)]">Minhas Turmas</h1>
        <div className="flex gap-2 relative">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              Filtros 🔽
            </Button>
            {isFilterOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-[var(--surface)] border border-[var(--border)] rounded-md shadow-lg z-10 backdrop-blur-sm">
                <div className="py-1">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--surface-hover)] transition-colors"
                    onClick={() => {
                      setSortOrder('asc');
                      setIsFilterOpen(false);
                    }}
                  >
                    Ordem Alfabética (A-Z)
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--surface-hover)] transition-colors"
                    onClick={() => {
                      setSortOrder('desc');
                      setIsFilterOpen(false);
                    }}
                  >
                    Ordem Alfabética (Z-A)
                  </button>
                </div>
              </div>
            )}
            <CreateClassroomModal onClassroomCreated={handleClassCreated} />
        </div>
      </div>

      {classes.length === 0 ? (
        <div className="text-center py-12 border-2 border-dashed border-[var(--border)] rounded-xl">
          <p className="text-[var(--text-muted)] mb-4">Nenhuma turma encontrada</p>
          <p className="text-sm text-[var(--text-muted)]">Crie sua primeira turma para começar</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {[...classes]
            .sort((a, b) => {
              if (sortOrder === 'asc') {
                return a.name.localeCompare(b.name);
              } else if (sortOrder === 'desc') {
                return b.name.localeCompare(a.name);
              }
              return 0;
            })
            .map((cls) => (
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
      )}
    </div>
  );
}
