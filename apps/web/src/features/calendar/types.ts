export type CalendarEventType = "assignment_due" | "exam" | "meeting" | "break" | "other";

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  type: CalendarEventType;
  start: string;
  end?: string | null;
  classroom?: string | null;
  visibility?: string;
  source_type?: string;
  source_id?: string;
}
