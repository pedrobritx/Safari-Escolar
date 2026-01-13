export interface User {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'COORDINATOR' | 'TEACHER' | 'FAMILY';
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface Class {
  id: string;
  name: string;
  students: Student[];
}

export interface Student {
  id: string;
  name: string;
  animalAvatar: string;
  attendances?: Attendance[];
  behaviorEvents?: BehaviorEvent[];
}

export interface Attendance {
  id?: string;
  date: string;
  present: boolean;
}

export interface BehaviorEvent {
  id: string;
  type: 'positive' | 'negative';
  description: string;
  date: string;
}

export interface DashboardData {
  classId: string;
  className: string;
  totalStudents: number;
  todayAttendance: number;
  attendanceRate: number;
  todayPositiveEvents: number;
  todayNegativeEvents: number;
}

export interface FamilyStudent {
  id: string;
  name: string;
  animalAvatar: string;
  className: string;
  teacherName: string;
  attendanceRate: number;
  positiveEvents: number;
  negativeEvents: number;
  recentAttendances: Attendance[];
  recentBehaviorEvents: BehaviorEvent[];
}
