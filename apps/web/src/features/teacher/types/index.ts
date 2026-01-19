export interface Student {
  id: string;
  name: string;
  avatar?: string;
  status?: "present" | "absent" | "late";
  points?: number;
}
