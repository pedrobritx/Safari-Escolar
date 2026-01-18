import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ClassroomList() {
  const classes = [
    { id: 1, name: "Matemática 2B", time: "08:00 - 09:30", students: 24, room: "104" },
    { id: 2, name: "Matemática 3A", time: "10:00 - 11:30", students: 28, room: "105" },
    { id: 3, name: "Reforço Geom.", time: "13:00 - 14:00", students: 12, room: "Biblio" },
  ];

  return (
    <div className="flex flex-col gap-6 pt-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[var(--primary)]">Minhas Turmas</h1>
        <Button variant="ghost" size="sm">Filtros 🔽</Button>
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
