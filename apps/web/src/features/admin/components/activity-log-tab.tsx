"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Download, 
  Filter,
  ChevronDown,
  ScrollText,
  RefreshCw,
  Calendar
} from "lucide-react";

interface AuditEvent {
  id: string;
  action: string;
  actor: string;
  entity_type: string;
  entity_id: string;
  occurred_at: string;
  metadata?: Record<string, any>;
}

const ACTION_COLORS: Record<string, string> = {
  CREATE: "bg-emerald-500/20 text-emerald-400",
  UPDATE: "bg-blue-500/20 text-blue-400",
  DELETE: "bg-red-500/20 text-red-400",
  LOGIN: "bg-cyan-500/20 text-cyan-400",
  LOGOUT: "bg-slate-500/20 text-slate-400",
  IMPORT: "bg-violet-500/20 text-violet-400",
  EXPORT: "bg-amber-500/20 text-amber-400",
};

export function ActivityLogTab() {
  const [events, setEvents] = useState<AuditEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [actionFilter, setActionFilter] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const fetchEvents = async () => {
    setIsLoading(true);
    try {
      // Try to fetch from audit API
      const res = await fetch("/api/audit/", { credentials: "include" });
      if (res.ok) {
        const data = await res.json();
        setEvents(Array.isArray(data) ? data : data.results || []);
      } else {
        // Fallback to mock data
        setEvents([
          { id: "1", action: "LOGIN", actor: "admin@safari.com", entity_type: "Auth", entity_id: "session-1", occurred_at: new Date().toISOString() },
          { id: "2", action: "CREATE", actor: "coord@safari.com", entity_type: "Classroom", entity_id: "cls-5a", occurred_at: new Date(Date.now() - 300000).toISOString() },
          { id: "3", action: "UPDATE", actor: "prof@safari.com", entity_type: "Grade", entity_id: "grade-123", occurred_at: new Date(Date.now() - 720000).toISOString() },
          { id: "4", action: "CREATE", actor: "admin@safari.com", entity_type: "Student", entity_id: "std-456", occurred_at: new Date(Date.now() - 3600000).toISOString() },
          { id: "5", action: "IMPORT", actor: "admin@safari.com", entity_type: "Students", entity_id: "batch-1", occurred_at: new Date(Date.now() - 7200000).toISOString() },
          { id: "6", action: "DELETE", actor: "coord@safari.com", entity_type: "Feedback", entity_id: "fb-789", occurred_at: new Date(Date.now() - 86400000).toISOString() },
          { id: "7", action: "UPDATE", actor: "prof@safari.com", entity_type: "Attendance", entity_id: "att-101", occurred_at: new Date(Date.now() - 86400000 * 2).toISOString() },
        ]);
      }
    } catch (error) {
      console.error("Failed to fetch audit events:", error);
      // Use mock data on error
      setEvents([
        { id: "1", action: "LOGIN", actor: "admin@safari.com", entity_type: "Auth", entity_id: "session-1", occurred_at: new Date().toISOString() },
        { id: "2", action: "CREATE", actor: "coord@safari.com", entity_type: "Classroom", entity_id: "cls-5a", occurred_at: new Date(Date.now() - 300000).toISOString() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Agora";
    if (diffMins < 60) return `${diffMins} min atrás`;
    if (diffHours < 24) return `${diffHours}h atrás`;
    if (diffDays < 7) return `${diffDays}d atrás`;
    return date.toLocaleDateString("pt-BR");
  };

  const uniqueActions = Array.from(new Set(events.map((e) => e.action)));

  const filtered = events.filter((e) => {
    const matchesSearch = 
      e.actor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.entity_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.action.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAction = actionFilter === "all" || e.action === actionFilter;
    return matchesSearch && matchesAction;
  });

  if (isLoading) {
    return <div className="text-center py-12 text-slate-400">Carregando logs...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-100">Log de Atividades</h2>
          <p className="text-sm text-slate-400">
            {events.length} eventos registrados
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="gap-2 text-slate-300 hover:text-white hover:bg-slate-700"
            onClick={fetchEvents}
          >
            <RefreshCw size={16} />
            Atualizar
          </Button>
          <Button variant="ghost" size="sm" className="gap-2 text-slate-300 hover:text-white hover:bg-slate-700">
            <Download size={16} />
            Exportar Logs
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <Input
            placeholder="Buscar por usuário, entidade..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-500"
          />
        </div>
        
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="gap-2 text-slate-300 hover:text-white hover:bg-slate-700"
          >
            <Filter size={16} />
            {actionFilter === "all" ? "Todas as ações" : actionFilter}
            <ChevronDown size={14} />
          </Button>
          
          {isFilterOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-10">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors"
                onClick={() => { setActionFilter("all"); setIsFilterOpen(false); }}
              >
                Todas as ações
              </button>
              {uniqueActions.map((action) => (
                <button
                  key={action}
                  className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors"
                  onClick={() => { setActionFilter(action); setIsFilterOpen(false); }}
                >
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Events Table */}
      <Card className="bg-slate-800/60 border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 text-left text-sm text-slate-400">
                <th className="p-4">Timestamp</th>
                <th className="p-4">Ação</th>
                <th className="p-4">Usuário</th>
                <th className="p-4">Entidade</th>
                <th className="p-4">ID</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-400">
                    Nenhum evento encontrado
                  </td>
                </tr>
              ) : (
                filtered.map((event) => (
                  <tr key={event.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Calendar size={14} />
                        {formatDate(event.occurred_at)}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${ACTION_COLORS[event.action] || "bg-slate-500/20 text-slate-400"}`}>
                        {event.action}
                      </span>
                    </td>
                    <td className="p-4 text-slate-300 text-sm">
                      {event.actor}
                    </td>
                    <td className="p-4 text-slate-300 text-sm">
                      {event.entity_type}
                    </td>
                    <td className="p-4">
                      <code className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded">
                        {event.entity_id.substring(0, 12)}...
                      </code>
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
