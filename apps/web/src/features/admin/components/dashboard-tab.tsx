"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Activity,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RefreshCw,
  Server,
  Database,
  Users,
  GraduationCap,
  UserRound,
  Clock
} from "lucide-react";

interface ApiEndpoint {
  name: string;
  url: string;
  status: "online" | "offline" | "checking";
  responseTime?: number;
}

interface SystemStats {
  totalUsers: number;
  totalTeachers: number;
  totalStudents: number;
  totalClassrooms: number;
  lastSync: string;
}

const ENDPOINTS: Omit<ApiEndpoint, "status" | "responseTime">[] = [
  { name: "Autenticação", url: "/api/auth/status/" },
  { name: "Alunos", url: "/api/students/" },
  { name: "Turmas", url: "/api/classrooms/" },
  { name: "Notas", url: "/api/grades/" },
  { name: "Calendário", url: "/api/calendar/" },
  { name: "Feedback", url: "/api/feedback/" },
];

export function DashboardTab() {
  const [endpoints, setEndpoints] = useState<ApiEndpoint[]>(
    ENDPOINTS.map((e) => ({ ...e, status: "checking" }))
  );
  const [isChecking, setIsChecking] = useState(false);
  const [stats, setStats] = useState<SystemStats>({
    totalUsers: 0,
    totalTeachers: 0,
    totalStudents: 0,
    totalClassrooms: 0,
    lastSync: new Date().toISOString(),
  });
  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  const checkEndpoints = async () => {
    setIsChecking(true);
    const results = await Promise.all(
      ENDPOINTS.map(async (endpoint) => {
        const start = Date.now();
        try {
          const res = await fetch(endpoint.url, {
            credentials: "include",
            method: "GET",
          });
          const responseTime = Date.now() - start;
          return {
            ...endpoint,
            status: res.ok || res.status === 401 || res.status === 403 ? "online" : "offline",
            responseTime,
          } as ApiEndpoint;
        } catch {
          return {
            ...endpoint,
            status: "offline",
            responseTime: undefined,
          } as ApiEndpoint;
        }
      })
    );
    setEndpoints(results);
    setIsChecking(false);
  };

  const fetchStats = async () => {
    try {
      const [studentsRes, classroomsRes] = await Promise.all([
        fetch("/api/students/", { credentials: "include" }),
        fetch("/api/classrooms/", { credentials: "include" }),
      ]);

      let totalStudents = 0;
      let totalClassrooms = 0;

      if (studentsRes.ok) {
        const data = await studentsRes.json();
        totalStudents = Array.isArray(data) ? data.length : 0;
      }

      if (classroomsRes.ok) {
        const data = await classroomsRes.json();
        totalClassrooms = Array.isArray(data) ? data.length : 0;
      }

      setStats({
        totalUsers: 48, // Mock - would come from user count endpoint
        totalTeachers: 32, // Mock
        totalStudents,
        totalClassrooms,
        lastSync: new Date().toISOString(),
      });

      // Mock recent activity
      setRecentActivity([
        { action: "LOGIN", actor: "admin@safari.com", entity: "Auth", time: "Agora" },
        { action: "CREATE", actor: "coord@safari.com", entity: "Turma 5ºA", time: "5 min atrás" },
        { action: "UPDATE", actor: "prof@safari.com", entity: "Nota", time: "12 min atrás" },
        { action: "CREATE", actor: "admin@safari.com", entity: "Aluno", time: "1h atrás" },
      ]);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    }
  };

  useEffect(() => {
    checkEndpoints();
    fetchStats();
  }, []);

  const onlineCount = endpoints.filter((e) => e.status === "online").length;
  const allOnline = onlineCount === endpoints.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-100">
            Dashboard do Sistema
          </h2>
          <p className="text-slate-400 text-sm">
            Monitoramento de saúde da API e métricas do sistema.
          </p>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="gap-2 text-slate-300 hover:text-white hover:bg-slate-700"
          onClick={checkEndpoints}
          disabled={isChecking}
        >
          <RefreshCw size={16} className={isChecking ? "animate-spin" : ""} />
          Verificar APIs
        </Button>
      </div>

      {/* API Health Status */}
      <Card className="bg-slate-800/60 border-slate-700 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
              allOnline ? "bg-emerald-500/20" : "bg-amber-500/20"
            }`}>
              <Server size={20} className={allOnline ? "text-emerald-400" : "text-amber-400"} />
            </div>
            <div>
              <h3 className="font-bold text-slate-100">Status da API</h3>
              <p className="text-xs text-slate-400">
                {onlineCount}/{endpoints.length} endpoints operacionais
              </p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${
            allOnline 
              ? "bg-emerald-500/20 text-emerald-400" 
              : "bg-amber-500/20 text-amber-400"
          }`}>
            {allOnline ? "Todos Online" : "Atenção"}
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {endpoints.map((endpoint) => (
            <div
              key={endpoint.name}
              className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50 border border-slate-600"
            >
              <div className="flex items-center gap-2">
                {endpoint.status === "checking" ? (
                  <AlertCircle size={16} className="text-slate-400 animate-pulse" />
                ) : endpoint.status === "online" ? (
                  <CheckCircle2 size={16} className="text-emerald-400" />
                ) : (
                  <XCircle size={16} className="text-red-400" />
                )}
                <span className="text-sm font-medium text-slate-200">{endpoint.name}</span>
              </div>
              {endpoint.responseTime !== undefined && (
                <span className="text-xs text-slate-500">{endpoint.responseTime}ms</span>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* System Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          icon={<Users size={20} />}
          label="Total de Usuários"
          value={stats.totalUsers}
          color="cyan"
        />
        <StatCard 
          icon={<GraduationCap size={20} />}
          label="Turmas"
          value={stats.totalClassrooms}
          color="blue"
        />
        <StatCard 
          icon={<UserRound size={20} />}
          label="Alunos"
          value={stats.totalStudents}
          color="violet"
        />
        <StatCard 
          icon={<Database size={20} />}
          label="Professores"
          value={stats.totalTeachers}
          color="emerald"
        />
      </div>

      {/* Recent Activity */}
      <Card className="bg-slate-800/60 border-slate-700 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity size={18} className="text-cyan-400" />
            <h3 className="font-bold text-slate-100">Atividade Recente</h3>
          </div>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Clock size={12} />
            Última atualização: agora
          </span>
        </div>

        <div className="space-y-2">
          {recentActivity.map((activity, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30 border border-slate-700"
            >
              <div className="flex items-center gap-3">
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                  activity.action === "CREATE" ? "bg-emerald-500/20 text-emerald-400" :
                  activity.action === "UPDATE" ? "bg-blue-500/20 text-blue-400" :
                  activity.action === "DELETE" ? "bg-red-500/20 text-red-400" :
                  "bg-slate-500/20 text-slate-400"
                }`}>
                  {activity.action}
                </span>
                <span className="text-sm text-slate-200">{activity.entity}</span>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">{activity.actor}</p>
                <p className="text-xs text-slate-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function StatCard({ 
  icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: number; 
  color: "cyan" | "blue" | "violet" | "emerald";
}) {
  const colors = {
    cyan: "from-cyan-500 to-cyan-600 shadow-cyan-500/20",
    blue: "from-blue-500 to-blue-600 shadow-blue-500/20",
    violet: "from-violet-500 to-violet-600 shadow-violet-500/20",
    emerald: "from-emerald-500 to-emerald-600 shadow-emerald-500/20",
  };

  return (
    <Card className="bg-slate-800/60 border-slate-700 p-4">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-400">{label}</p>
          <p className="text-2xl font-bold text-slate-100 mt-1">{value}</p>
        </div>
        <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${colors[color]} shadow-lg flex items-center justify-center text-white`}>
          {icon}
        </div>
      </div>
    </Card>
  );
}
