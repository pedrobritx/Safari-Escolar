"use client";

import { useEffect, useMemo, useState } from "react";
import { addDays, subDays, formatISO } from "date-fns";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Download, RefreshCcw } from "lucide-react";
import { CalendarEvent } from "@/features/calendar/types";
import { CalendarAgenda } from "@/features/calendar/components/calendar-agenda";
import { CalendarForm } from "@/features/calendar/components/calendar-form";
import { apiFetch } from "@/lib/api";
import { Classroom } from "@/features/teacher/types";

export default function CalendarPage() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [activeClassroomId, setActiveClassroomId] = useState<string | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const dateRange = useMemo(() => {
    const from = subDays(new Date(), 7);
    const to = addDays(new Date(), 30);
    return { from: formatISO(from), to: formatISO(to) };
  }, []);

  const loadClassrooms = async () => {
    const res = await apiFetch("/api/classrooms");
    if (!res.ok) throw new Error("Falha ao carregar turmas");
    const data: Classroom[] = await res.json();
    setClassrooms(data);
    if (!activeClassroomId && data[0]) {
      setActiveClassroomId(data[0].id);
    }
  };

  const loadEvents = async (classId?: string | null) => {
    if (!classId) {
      setEvents([]);
      return;
    }
    const res = await apiFetch(`/api/calendar?classroom_id=${classId}&from=${dateRange.from}&to=${dateRange.to}`);
    if (!res.ok) throw new Error("Falha ao carregar eventos");
    const data: CalendarEvent[] = await res.json();
    setEvents(data);
  };

  const refresh = async (classId?: string | null) => {
    setIsLoading(true);
    try {
      await loadClassrooms();
      await loadEvents(classId || activeClassroomId);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeClassroomId) {
      loadEvents(activeClassroomId).catch(console.error);
    }
  }, [activeClassroomId, dateRange.from, dateRange.to]);

  const handleCreate = async (data: {
    title: string;
    type: CalendarEvent["type"];
    date: string;
    startTime: string;
    endTime?: string;
    description?: string;
  }) => {
    const classId = activeClassroomId;
    if (!classId) return;
    setIsSubmitting(true);
    try {
      const startISO = `${data.date}T${data.startTime}:00`;
      const endISO = data.endTime ? `${data.date}T${data.endTime}:00` : startISO;
      const res = await apiFetch("/api/calendar/", {
        method: "POST",
        body: JSON.stringify({
          title: data.title,
          type: data.type,
          description: data.description,
          start: startISO,
          end: endISO,
          classroom: classId,
        }),
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Erro ao criar evento");
      }
      await loadEvents(classId);
    } catch (e: any) {
      alert(e.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExport = async () => {
    if (!activeClassroomId) return;
    setIsExporting(true);
    try {
      const res = await apiFetch(`/api/calendar/ics/?classroom_id=${activeClassroomId}`, { csrf: false });
      if (!res.ok) {
        throw new Error(await res.text());
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `calendar-${activeClassroomId}.ics`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      alert(`Erro ao exportar: ${e.message}`);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6 pb-16">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold">Agenda</h1>
          <p className="text-[var(--text-muted)]">Entrega de tarefas, provas, reuniões e recados.</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            className="h-10 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 text-sm"
            value={activeClassroomId || ""}
            onChange={(e) => setActiveClassroomId(e.target.value)}
          >
            {classrooms.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <Button variant="outline" onClick={() => refresh(activeClassroomId)} className="gap-2">
            <RefreshCcw size={14} />
            Atualizar
          </Button>
          <Button variant="secondary" onClick={handleExport} disabled={!activeClassroomId || isExporting} className="gap-2">
            <Download size={14} />
            {isExporting ? "Exportando..." : "ICS"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <GlassPanel className="p-4 space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Próximos eventos</h3>
            <span className="text-xs text-[var(--text-muted)]">
              {new Date().toLocaleDateString("pt-BR")} · até {new Date(dateRange.to).toLocaleDateString("pt-BR")}
            </span>
          </div>
          {isLoading ? (
            <div className="flex justify-center py-10"><div className="animate-spin h-8 w-8 border-b-2 border-[var(--primary)] rounded-full" /></div>
          ) : (
            <CalendarAgenda events={events} />
          )}
        </GlassPanel>

        <GlassPanel className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Novo evento</h3>
          </div>
          <CalendarForm onSubmit={handleCreate} isSubmitting={isSubmitting} />
        </GlassPanel>
      </div>
    </div>
  );
}
