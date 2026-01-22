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
  Users,
  GraduationCap
} from "lucide-react";

interface Classroom {
  id: string;
  name: string;
  grade_level: string;
  teacher_name: string;
  student_count: number;
}

export function TurmasManagementTab() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchClassrooms = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/classrooms/", { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        setClassrooms(data.map((c: any) => ({
          id: c.id,
          name: c.name,
          grade_level: c.grade_level || "-",
          teacher_name: c.teacher_name || "Sem professor",
          student_count: c.student_count || 0,
        })));
      }
    } catch (error) {
      console.error("Failed to fetch classrooms:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClassrooms();
  }, []);

  const filtered = classrooms.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.teacher_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div className="text-center py-12 text-slate-400">Carregando turmas...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-100">Gerenciamento de Turmas</h2>
          <p className="text-sm text-slate-400">
            {classrooms.length} turmas cadastradas
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" className="gap-2 text-slate-300 hover:text-white hover:bg-slate-700">
            <Upload size={16} />
            Importar
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 text-slate-300 hover:text-white hover:bg-slate-700">
            <Download size={16} />
            Exportar
          </Button>
          <Button size="sm" className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0">
            <Plus size={16} />
            Nova Turma
          </Button>
        </div>
      </div>

      <div className="relative w-full sm:max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
        <Input
          placeholder="Buscar turma ou professor..."
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
                <th className="p-4">Turma</th>
                <th className="p-4">Série</th>
                <th className="p-4">Professor</th>
                <th className="p-4 text-center">Alunos</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-400">
                    Nenhuma turma encontrada
                  </td>
                </tr>
              ) : (
                filtered.map((classroom) => (
                  <tr key={classroom.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                          <GraduationCap size={18} className="text-white" />
                        </div>
                        <p className="font-semibold text-slate-100">{classroom.name}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-md bg-slate-700 text-slate-300 text-sm">
                        {classroom.grade_level}
                      </span>
                    </td>
                    <td className="p-4 text-slate-300">
                      {classroom.teacher_name}
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-1 text-slate-300">
                        <Users size={14} />
                        <span>{classroom.student_count}</span>
                      </div>
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
