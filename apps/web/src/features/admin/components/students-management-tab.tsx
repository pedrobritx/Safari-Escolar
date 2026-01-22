"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Plus, 
  Download, 
  Upload, 
  Edit, 
  Trash2,
  UserRound
} from "lucide-react";
import { ANIMAL_EMOJIS } from "@/features/teacher/constants";

interface Student {
  id: string;
  display_name: string;
  classroom_name?: string;
  animal_id?: string;
  color_hex?: string;
}

function getAvatar(student: Student): string {
  if (student.animal_id) return student.animal_id;
  if (!student.color_hex) return ANIMAL_EMOJIS[0];
  const index = parseInt(student.color_hex.replace("#", "").slice(0, 2), 16) % ANIMAL_EMOJIS.length;
  return ANIMAL_EMOJIS[index];
}

export function StudentsManagementTab() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchStudents = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/students/", { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        setStudents(data);
      }
    } catch (error) {
      console.error("Failed to fetch students:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const filtered = students.filter((s) =>
    s.display_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div className="text-center py-12 text-slate-400">Carregando alunos...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-100">Gerenciamento de Alunos</h2>
          <p className="text-sm text-slate-400">
            {students.length} alunos cadastrados
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="gap-2 text-slate-300 hover:text-white hover:bg-slate-700">
            <Upload size={16} />
            Importar CSV
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 text-slate-300 hover:text-white hover:bg-slate-700">
            <Download size={16} />
            Exportar
          </Button>
          <Button size="sm" className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
            <Plus size={16} />
            Novo Aluno
          </Button>
        </div>
      </div>

      <div className="relative w-full sm:max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
        <Input
          placeholder="Buscar aluno..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-500"
        />
      </div>

      <Card className="bg-slate-800/60 border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 text-left text-sm text-slate-400">
                <th className="p-4">Aluno</th>
                <th className="p-4">Turma</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={3} className="p-8 text-center text-slate-400">
                    Nenhum aluno encontrado
                  </td>
                </tr>
              ) : (
                filtered.map((student) => (
                  <tr key={student.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-xl">
                          {getAvatar(student)}
                        </div>
                        <p className="font-semibold text-slate-100">{student.display_name}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-md bg-slate-700 text-slate-300 text-sm">
                        {student.classroom_name || "Sem turma"}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                          <Edit size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-red-400">
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
