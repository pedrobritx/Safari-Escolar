import { authEvents } from './authEvents';
import { User, Student, DashboardData, FamilyStudent } from '@/lib/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

/**
 * Checks response for auth errors and emits session expired event if 401
 */
function handleAuthResponse(response: Response): Response {
  if (response.status === 401) {
    authEvents.emitSessionExpired();
  }
  return response;
}

/**
 * Helper to handle API responses and throw errors if not OK
 */
async function handleResponse<T = any>(responsePromise: Promise<Response>): Promise<T> {
  const response = handleAuthResponse(await responsePromise);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Request failed with status ${response.status}`);
  }

  // Handle 204 No Content
  if (response.status === 204) {
    return true as unknown as T;
  }

  return response.json();
}

export const api = {
  async login(email: string, password: string) {
    return handleResponse(fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }));
  },

  async get<T = any>(endpoint: string, token?: string): Promise<T> {
    const localToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const finalToken = token || localToken;
    
    return handleResponse<T>(fetch(`${API_URL}/api${endpoint}`, {
      headers: finalToken ? { 'Authorization': `Bearer ${finalToken}` } : {},
    }));
  },

  async getClasses(token: string, date?: string) {
    const query = date ? `?date=${encodeURIComponent(date)}` : '';
    return handleResponse(fetch(`${API_URL}/api/classes${query}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      cache: 'no-store',
    }));
  },

  async getDashboard(token: string, date?: string) {
    const query = date ? `?date=${encodeURIComponent(date)}` : '';
    return handleResponse<DashboardData[]>(fetch(`${API_URL}/api/dashboard${query}`, {
      headers: { 'Authorization': `Bearer ${token}` },
      cache: 'no-store',
    }));
  },

  async resetDay(token: string, date: string, classId?: string) {
    let url = `${API_URL}/api/dashboard/reset?date=${encodeURIComponent(date)}`;
    if (classId) url += `&classId=${classId}`;

    return handleResponse(fetch(url, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` },
    }));
  },

  async getFamilyView(token: string) {
    return handleResponse<{ students: FamilyStudent[] }>(fetch(`${API_URL}/api/family`, {
      headers: { 'Authorization': `Bearer ${token}` },
    }));
  },

  async markAttendance(token: string, studentId: string, status: 'PRESENT' | 'ABSENT' | 'LATE' | 'CLEARED', date?: string) {
    return handleResponse(fetch(`${API_URL}/api/attendance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ studentId, status, date }),
    }));
  },

  async addFeedbackEvent(token: string, studentId: string, type: 'positive' | 'negative', description: string, date?: string) {
    return handleResponse(fetch(`${API_URL}/api/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ studentId, type, description, date }),
    }));
  },

  async deleteFeedbackEvent(token: string, feedbackId: string) {
    const url = `${API_URL}/api/feedback/${feedbackId}`;
    return handleResponse(fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }));
  },

  async createStudent(token: string, data: { name: string; classId: string; animalAvatar?: string; avatarColor?: string }) {
    return handleResponse(fetch(`${API_URL}/api/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }));
  },

  async updateStudent(token: string, studentId: string, data: { name?: string; animalAvatar?: string; avatarColor?: string }) {
    return handleResponse(fetch(`${API_URL}/api/students/${studentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }));
  },

  async deleteStudent(token: string, studentId: string) {
    return handleResponse(fetch(`${API_URL}/api/students/${studentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }));
  },
};
