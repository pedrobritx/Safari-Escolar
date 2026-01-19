export interface Student {
  id: string;
  display_name: string;
  preferred_name?: string;
  classroom: string;
  classroom_name?: string;
  color_hex?: string;
  status?: string;
  // Legacy fields for compatibility
  name?: string;
  avatar?: string;
  points?: number;
}

export interface Classroom {
  id: string;
  name: string;
  grade_level?: string;
  student_count?: number;
}
