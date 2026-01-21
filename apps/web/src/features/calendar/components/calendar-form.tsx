import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CalendarEventType } from "../types";

interface CalendarFormProps {
  onSubmit: (data: {
    title: string;
    type: CalendarEventType;
    date: string;
    startTime: string;
    endTime?: string;
    description?: string;
  }) => Promise<void>;
  isSubmitting: boolean;
}

export function CalendarForm({ onSubmit, isSubmitting }: CalendarFormProps) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState<CalendarEventType>("assignment_due");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    await onSubmit({ title, type, date, startTime, endTime, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <Label>Título</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Reunião, prova..." />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="space-y-1">
          <Label>Tipo</Label>
          <select
            className="h-10 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 text-sm"
            value={type}
            onChange={(e) => setType(e.target.value as CalendarEventType)}
          >
            <option value="assignment_due">Entrega</option>
            <option value="exam">Prova</option>
            <option value="meeting">Reunião</option>
            <option value="break">Recesso</option>
            <option value="other">Outro</option>
          </select>
        </div>
        <div className="space-y-1">
          <Label>Data</Label>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="space-y-1 flex gap-2">
          <div className="flex-1">
            <Label>Início</Label>
            <Input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </div>
          <div className="flex-1">
            <Label>Fim</Label>
            <Input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="space-y-1">
        <Label>Descrição</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Notas adicionais, materiais, link..."
          rows={3}
        />
      </div>
      <Button onClick={handleSubmit} disabled={!title || isSubmitting}>
        {isSubmitting ? "Salvando..." : "Adicionar"}
      </Button>
    </div>
  );
}
