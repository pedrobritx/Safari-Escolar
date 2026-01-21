import { CalendarEvent } from "../types";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarRange, Clock } from "lucide-react";

export const calendarTypeLabels: Record<CalendarEvent["type"], string> = {
  assignment_due: "Entrega",
  exam: "Prova",
  meeting: "Reunião",
  break: "Recesso",
  other: "Outro",
};

export const calendarTypeColors: Record<CalendarEvent["type"], string> = {
  assignment_due: "bg-[var(--primary)]/10 text-[var(--primary)]",
  exam: "bg-[var(--accent)]/10 text-[var(--accent)]",
  meeting: "bg-[var(--secondary)]/10 text-[var(--secondary)]",
  break: "bg-amber-100 text-amber-800",
  other: "bg-slate-200 text-slate-700",
};

export function CalendarAgenda({ events }: { events: CalendarEvent[] }) {
  if (events.length === 0) {
    return (
      <div className="text-center py-10 text-[var(--text-muted)]">
        Nenhum evento agendado neste período.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {events.map((event) => {
        const start = new Date(event.start);
        const end = event.end ? new Date(event.end) : null;
        return (
          <GlassPanel
            key={event.id}
            className="p-4 flex items-start gap-3 border-[var(--border)] bg-[var(--surface)]"
          >
            <div className="mt-1">
              <CalendarRange size={16} className="text-[var(--text-muted)]" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className={calendarTypeColors[event.type] || ""}>
                    {calendarTypeLabels[event.type] || "Evento"}
                  </Badge>
                  <span className="font-semibold text-sm">{event.title}</span>
                </div>
                <div className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                  <Clock size={12} />
                  <span>
                    {format(start, "dd MMM, HH:mm", { locale: ptBR })}
                    {end ? ` - ${format(end, "HH:mm", { locale: ptBR })}` : ""}
                  </span>
                </div>
              </div>
              {event.description && (
                <p className="text-sm text-[var(--text-muted)]">{event.description}</p>
              )}
            </div>
          </GlassPanel>
        );
      })}
    </div>
  );
}
