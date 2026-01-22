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
  UserPlus,
  ShieldCheck,
  GraduationCap,
  UserRound
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "coordinator" | "teacher";
  lastLogin?: string;
  status: "active" | "pending" | "inactive";
}

const ROLE_LABELS: Record<User["role"], string> = {
  admin: "Administrador",
  coordinator: "Coordenador",
  teacher: "Professor",
};

const ROLE_ICONS: Record<User["role"], React.ReactNode> = {
  admin: <ShieldCheck size={14} />,
  coordinator: <UserRound size={14} />,
  teacher: <GraduationCap size={14} />,
};

const ROLE_COLORS: Record<User["role"], string> = {
  admin: "bg-cyan-500/20 text-cyan-400",
  coordinator: "bg-violet-500/20 text-violet-400",
  teacher: "bg-emerald-500/20 text-emerald-400",
};

export function UsersTab() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState<User["role"] | "all">("all");

  useEffect(() => {
    // Mock users data - would come from API
    setUsers([
      { id: "1", name: "Admin TI", email: "ti@safariescolar.com", role: "admin", lastLogin: "Agora", status: "active" },
      { id: "2", name: "Maria Coord", email: "maria@safariescolar.com", role: "coordinator", lastLogin: "Hoje", status: "active" },
      { id: "3", name: "Prof. Carlos", email: "carlos@safariescolar.com", role: "teacher", lastLogin: "Ontem", status: "active" },
      { id: "4", name: "Prof. Ana", email: "ana@safariescolar.com", role: "teacher", lastLogin: "3 dias", status: "active" },
      { id: "5", name: "Novo Coord", email: "novo@safariescolar.com", role: "coordinator", status: "pending" },
    ]);
    setIsLoading(false);
  }, []);

  const filtered = users.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         u.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || u.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  if (isLoading) {
    return <div className="text-center py-12 text-slate-400">Carregando usuários...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-100">Gerenciamento de Usuários</h2>
          <p className="text-sm text-slate-400">
            {users.length} usuários cadastrados
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
            <UserPlus size={16} />
            Novo Usuário
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <Input
            placeholder="Buscar por nome ou email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-500"
          />
        </div>
        <div className="flex gap-2">
          {(["all", "admin", "coordinator", "teacher"] as const).map((role) => (
            <Button
              key={role}
              size="sm"
              variant="ghost"
              onClick={() => setRoleFilter(role)}
              className={`${roleFilter === role 
                ? "bg-slate-700 text-white" 
                : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              {role === "all" ? "Todos" : ROLE_LABELS[role]}
            </Button>
          ))}
        </div>
      </div>

      {/* Users Table */}
      <Card className="bg-slate-800/60 border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 text-left text-sm text-slate-400">
                <th className="p-4">Usuário</th>
                <th className="p-4">Função</th>
                <th className="p-4 text-center">Último acesso</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 text-sm font-bold">
                        {user.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-100">{user.name}</p>
                        <p className="text-xs text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${ROLE_COLORS[user.role]}`}>
                      {ROLE_ICONS[user.role]}
                      {ROLE_LABELS[user.role]}
                    </span>
                  </td>
                  <td className="p-4 text-center text-sm text-slate-400">
                    {user.lastLogin || "-"}
                  </td>
                  <td className="p-4 text-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      user.status === "active" 
                        ? "bg-emerald-500/20 text-emerald-400"
                        : user.status === "pending"
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-slate-500/20 text-slate-400"
                    }`}>
                      {user.status === "active" ? "Ativo" : user.status === "pending" ? "Pendente" : "Inativo"}
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
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
