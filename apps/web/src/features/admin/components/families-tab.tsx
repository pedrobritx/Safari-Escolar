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
  Users2,
  Mail,
  Phone,
  Link2
} from "lucide-react";

interface Family {
  id: string;
  name: string;
  email: string;
  phone?: string;
  linkedStudents: string[];
}

export function FamiliesTab() {
  const [families, setFamilies] = useState<Family[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Mock data - would come from API
    setFamilies([
      { id: "1", name: "Família Silva", email: "silva@email.com", phone: "(11) 99999-0001", linkedStudents: ["João", "Maria"] },
      { id: "2", name: "Família Santos", email: "santos@email.com", phone: "(11) 99999-0002", linkedStudents: ["Pedro"] },
      { id: "3", name: "Família Oliveira", email: "oliveira@email.com", linkedStudents: ["Ana", "Lucas", "Julia"] },
      { id: "4", name: "Família Costa", email: "costa@email.com", phone: "(11) 99999-0004", linkedStudents: ["Bruno"] },
    ]);
    setIsLoading(false);
  }, []);

  const filtered = families.filter((f) =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <div className="text-center py-12 text-slate-400">Carregando famílias...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-100">Gerenciamento de Famílias</h2>
          <p className="text-sm text-slate-400">
            {families.length} famílias/responsáveis cadastrados
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
            Nova Família
          </Button>
        </div>
      </div>

      <div className="relative w-full sm:max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
        <Input
          placeholder="Buscar família ou email..."
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
                <th className="p-4">Família</th>
                <th className="p-4">Contato</th>
                <th className="p-4">Alunos Vinculados</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-400">
                    Nenhuma família encontrada
                  </td>
                </tr>
              ) : (
                filtered.map((family) => (
                  <tr key={family.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                          <Users2 size={18} className="text-white" />
                        </div>
                        <p className="font-semibold text-slate-100">{family.name}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <Mail size={12} />
                          {family.email}
                        </div>
                        {family.phone && (
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <Phone size={12} />
                            {family.phone}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Link2 size={14} className="text-slate-500" />
                        <span className="text-slate-300">
                          {family.linkedStudents.join(", ")}
                        </span>
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
