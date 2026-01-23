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
  avatarColor?: string;
  whatsapp?: string;
  email?: string;
  birthday?: string;
  attendances?: Attendance[];
  todayStatus?: 'PRESENT' | 'ABSENT' | 'LATE' | null;
  todayScore?: number;
  feedbackEvents?: FeedbackEvent[];
}

export interface School {
  id: string;
  name: string;
  coordinatorId: string;
}

export interface Attendance {
  id?: string;
  date: string;
  status: 'PRESENT' | 'ABSENT' | 'LATE';
}

export interface FeedbackEvent {
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
  todayLate: number;
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
  recentFeedbackEvents: FeedbackEvent[];
}

export type UserRole = Omit<User, 'role'>

export interface ClassDataWithTeacher {
	id: string;
	name: string;
	schoolId: string;
	teacherId: string;
	school: School;
	teacher: UserRole;
  students: Student[];
}

export interface SchoolWithCoordinator extends School {
	coordinator: UserRole
}