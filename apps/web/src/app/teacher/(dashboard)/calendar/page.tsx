"use client";

import { useEffect, useMemo, useState } from "react";
import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  formatISO,
  isSameDay,
  isSameMonth,
  startOfDay,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassPanel } from "@/components/ui/glass-panel";
import { CalendarAgenda, calendarTypeColors, calendarTypeLabels } from "@/features/calendar/components/calendar-agenda";
import { CalendarEvent } from "@/features/calendar/types";
import { CalendarForm } from "@/features/calendar/components/calendar-form";
import { Classroom } from "@/features/teacher/types";
import { apiFetch } from "@/lib/api";
import { CalendarDays, CalendarRange, ChevronLeft, ChevronRight, Download, RefreshCcw, SunMedium } from "lucide-react";

type CalendarView = "day" | "workweek" | "month";

const typeAccentColors: Record<CalendarEvent["type"], string> = {
  assignment_due: "bg-[var(--primary)]",
  exam: "bg-[var(--accent)]",
  meeting: "bg-[var(--secondary)]",
  break: "bg-amber-500",
  other: "bg-slate-400",
};

export default function CalendarPage() {
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [activeClassroomId, setActiveClassroomId] = useState<string | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [reloadFlag, setReloadFlag] = useState(0);
  const [view, setView] = useState<CalendarView>("workweek");
  const [focusDate, setFocusDate] = useState<Date>(new Date());

  const dateRange = useMemo(() => {
    if (view === "day") {
      const from = startOfDay(focusDate);
      const to = endOfDay(focusDate);
      return { from: formatISO(from), to: formatISO(to) };
    }
    if (view === "workweek") {
      const start = startOfWeek(focusDate, { weekStartsOn: 1 });
      const end = addDays(start, 4);
      return { from: formatISO(startOfDay(start)), to: formatISO(endOfDay(end)) };
    }
    const start = startOfMonth(focusDate);
    const end = endOfMonth(focusDate);
    return { from: formatISO(startOfDay(start)), to: formatISO(endOfDay(end)) };
  }, [view, focusDate]);

  const eventsByDay = useMemo(() => {
    const map = new Map<string, CalendarEvent[]>();
    events.forEach((event) => {
      const key = format(new Date(event.start), "yyyy-MM-dd");
      map.set(key, [...(map.get(key) || []), event]);
    });
    return map;
  }, [events]);

  const workWeekDays = useMemo(() => {
    const start = startOfWeek(focusDate, { weekStartsOn: 1 });
    return Array.from({ length: 5 }, (_, index) => addDays(start, index));
  }, [focusDate]);

  const monthDays = useMemo(() => {
    const start = startOfWeek(startOfMonth(focusDate), { weekStartsOn: 1 });
    const end = endOfWeek(endOfMonth(focusDate), { weekStartsOn: 1 });
    return eachDayOfInterval({ start, end });
  }, [focusDate]);

  const viewLabel = useMemo(() => {
    if (view === "day") {
      return format(focusDate, "EEEE, dd 'de' MMMM", { locale: ptBR });
    }
    if (view === "workweek") {
      const start = startOfWeek(focusDate, { weekStartsOn: 1 });
      const end = addDays(start, 4);
      return `${format(start, "dd MMM", { locale: ptBR })} · ${format(end, "dd MMM", { locale: ptBR })}`;
    }
    return format(focusDate, "MMMM yyyy", { locale: ptBR });
  }, [focusDate, view]);

  const focusKey = useMemo(() => format(focusDate, "yyyy-MM-dd"), [focusDate]);
  const today = useMemo(() => new Date(), []);
  const todayKey = useMemo(() => format(today, "yyyy-MM-dd"), [today]);

  const loadClassrooms = async () => {
    const res = await apiFetch("/api/classrooms");
    if (!res.ok) throw new Error("Falha ao carregar turmas");
    const data: Classroom[] = await res.json();
    setClassrooms(data);
    if (!activeClassroomId && data[0]) {
      setActiveClassroomId(data[0].id);
    }
    return data;
  };

  const loadEvents = async (classId?: string | null) => {
    if (!classId) {
      setEvents([]);
      return;
    }
    const res = await apiFetch(
      `/api/calendar/?classroom_id=${classId}&from=${encodeURIComponent(dateRange.from)}&to=${encodeURIComponent(dateRange.to)}`
    );
    if (!res.ok) {
      // Log the error but don't throw - just show empty state
      console.warn("Calendar API error:", res.status);
      setEvents([]);
      return;
    }
    const data: CalendarEvent[] = await res.json();
    setEvents(data);
  };

  const refresh = async (classId?: string | null) => {
    setIsLoading(true);
    try {
      const list = await loadClassrooms();
      const target = classId || activeClassroomId || list[0]?.id || null;
      if (!target) {
        setEvents([]);
        setIsLoading(false);
        return;
      }
      if (!activeClassroomId) {
        setActiveClassroomId(target);
        return;
      }
      if (target !== activeClassroomId) {
        setActiveClassroomId(target);
        return;
      }
      setReloadFlag((value) => value + 1);
    } catch (e) {
      console.error(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!activeClassroomId) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    loadEvents(activeClassroomId)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [activeClassroomId, dateRange.from, dateRange.to, reloadFlag]);

  const goToToday = () => setFocusDate(new Date());

  const goToPrevious = () => {
    setFocusDate((current) => {
      if (view === "day") return subDays(current, 1);
      if (view === "workweek") return subDays(current, 5);
      return subMonths(current, 1);
    });
  };

  const goToNext = () => {
    setFocusDate((current) => {
      if (view === "day") return addDays(current, 1);
      if (view === "workweek") return addDays(current, 5);
      return addMonths(current, 1);
    });
  };

  const handleViewChange = (nextView: CalendarView) => {
    setView(nextView);
    if (nextView === "day") {
      setFocusDate(new Date());
    }
  };

  const handleDayJump = (day: Date, nextView?: CalendarView) => {
    setFocusDate(day);
    if (nextView) {
      setView(nextView);
    }
  };

  const timeWindow = (event: CalendarEvent) => {
    const start = new Date(event.start);
    const end = event.end ? new Date(event.end) : null;
    if (end) {
      return `${format(start, "HH:mm")} - ${format(end, "HH:mm")}`;
    }
    return format(start, "HH:mm");
  };

  const viewOptions: { key: CalendarView; label: string; icon: JSX.Element }[] = [
    { key: "day", label: "Hoje", icon: <SunMedium size={14} /> },
    { key: "workweek", label: "Semana", icon: <CalendarDays size={14} /> },
    { key: "month", label: "Mês", icon: <CalendarRange size={14} /> },
  ];

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
          description: data.description || "",
          start: startISO,
          end: endISO,
          classroom: classId,
        }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Calendar create error:", res.status, errorText);
        throw new Error(errorText || `Erro ${res.status} ao criar evento`);
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
        <GlassPanel className="p-4 space-y-5 lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                aria-label="Período anterior"
                className="border border-[var(--border)] bg-[var(--surface)]/70"
              >
                <ChevronLeft size={18} />
              </Button>
              <div className="px-3 py-2 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]/80 shadow-sm">
                <div className="text-[10px] uppercase tracking-wide text-[var(--text-muted)]">
                  {view === "month" ? "Visão mensal" : view === "workweek" ? "Semana de 5 dias" : "Hoje"}
                </div>
                <div className="text-sm font-semibold text-[var(--text)]">{viewLabel}</div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                aria-label="Próximo período"
                className="border border-[var(--border)] bg-[var(--surface)]/70"
              >
                <ChevronRight size={18} />
              </Button>
              <Button variant="outline" size="sm" onClick={goToToday} className="gap-2">
                <SunMedium size={14} />
                Hoje
              </Button>
            </div>
            <div className="flex items-center gap-2">
              {viewOptions.map((option) => (
                <Button
                  key={option.key}
                  variant={view === option.key ? "secondary" : "outline"}
                  size="sm"
                  className={`gap-2 ${view === option.key ? "shadow-md" : ""}`}
                  onClick={() => handleViewChange(option.key)}
                >
                  {option.icon}
                  {option.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--secondary)]" />
            Mostrando eventos de {new Date(dateRange.from).toLocaleDateString("pt-BR")} até {new Date(dateRange.to).toLocaleDateString("pt-BR")}
          </div>

          {isLoading ? (
            <div className="flex justify-center py-10">
              <div className="h-9 w-9 animate-spin rounded-full border-2 border-[var(--border)] border-b-[var(--primary)]" />
            </div>
          ) : (
            <>
              {view === "day" && (
                <CalendarAgenda events={eventsByDay.get(focusKey) || []} />
              )}

              {view === "workweek" && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
                  {workWeekDays.map((day) => {
                    const dayKey = format(day, "yyyy-MM-dd");
                    const dayEvents = eventsByDay.get(dayKey) || [];
                    const isToday = isSameDay(day, today);
                    return (
                      <div
                        key={dayKey}
                        className="flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]/80 p-3 shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col leading-tight">
                            <span className="text-[11px] uppercase tracking-wide text-[var(--text-muted)]">
                              {format(day, "EEE", { locale: ptBR })}
                            </span>
                            <span className="text-sm font-semibold text-[var(--text)]">
                              {format(day, "d 'de' MMM", { locale: ptBR })}
                            </span>
                          </div>
                          {isToday && <span className="text-[10px] font-semibold text-[var(--accent)]">Hoje</span>}
                        </div>
                        <div className="space-y-2">
                          {dayEvents.length === 0 ? (
                            <div className="text-xs text-[var(--text-muted)]">Sem eventos</div>
                          ) : (
                            dayEvents.map((event) => (
                              <div
                                key={event.id}
                                className="space-y-1 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-2 py-2 shadow-sm"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <Badge variant="secondary" className={calendarTypeColors[event.type] || ""}>
                                    {calendarTypeLabels[event.type] || "Evento"}
                                  </Badge>
                                  <span className="text-[11px] text-[var(--text-muted)]">{timeWindow(event)}</span>
                                </div>
                                <div className="text-sm font-semibold leading-tight text-[var(--text)]">
                                  {event.title}
                                </div>
                                {event.description ? (
                                  <div className="text-xs text-[var(--text-muted)] overflow-hidden text-ellipsis whitespace-nowrap">
                                    {event.description}
                                  </div>
                                ) : null}
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {view === "month" && (
                <div className="space-y-2">
                  <div className="hidden md:grid grid-cols-7 gap-2 px-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                    {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((label) => (
                      <div key={label} className="text-center">
                        {label}
                      </div>
                    ))}
                  </div>
                  <div className="overflow-x-auto -mx-1">
                    <div className="min-w-[720px] grid grid-cols-7 gap-2 px-1">
                      {monthDays.map((day) => {
                        const dayKey = format(day, "yyyy-MM-dd");
                        const dayEvents = eventsByDay.get(dayKey) || [];
                        const isCurrentMonth = isSameMonth(day, focusDate);
                        const isToday = dayKey === todayKey;
                        const isFocused = dayKey === focusKey;
                        return (
                          <button
                            key={dayKey}
                            className={`text-left rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]/70 p-2 shadow-sm transition hover:-translate-y-[2px] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                              isCurrentMonth ? "" : "opacity-60"
                            } ${isFocused ? "ring-2 ring-[var(--accent)]" : ""}`}
                            onClick={() => handleDayJump(day, "day")}
                          >
                            <div className="flex items-center justify-between text-[11px] font-semibold text-[var(--text)]">
                              <span>{format(day, "d", { locale: ptBR })}</span>
                              {isToday ? (
                                <span className="text-[10px] font-semibold text-[var(--accent)]">Hoje</span>
                              ) : dayEvents.length > 0 ? (
                                <span className="text-[10px] text-[var(--text-muted)]">{dayEvents.length} evt</span>
                              ) : null}
                            </div>
                            <div className="mt-2 space-y-1">
                              {dayEvents.slice(0, 3).map((event) => (
                                <div
                                  key={event.id}
                                  className="flex items-start gap-2 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-2 py-1 shadow-sm"
                                >
                                  <span
                                    className={`mt-1 h-2 w-2 rounded-full ${typeAccentColors[event.type] || "bg-[var(--text-muted)]"}`}
                                  />
                                  <div className="min-w-0">
                                    <div className="truncate text-[11px] font-semibold leading-tight">{event.title}</div>
                                    <div className="text-[10px] text-[var(--text-muted)]">{timeWindow(event)}</div>
                                  </div>
                                </div>
                              ))}
                              {dayEvents.length > 3 && (
                                <div className="text-[10px] text-[var(--text-muted)]">
                                  +{dayEvents.length - 3} {dayEvents.length - 3 === 1 ? "evento" : "eventos"}
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </>
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
