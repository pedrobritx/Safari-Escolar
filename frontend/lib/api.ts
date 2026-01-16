const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const api = {
  async login(email: string, password: string) {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return response.json();
  },

  async get(endpoint: string, token?: string) {
    const localToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const finalToken = token || localToken;
    
    const response = await fetch(`${API_URL}/api${endpoint}`, {
      headers: finalToken ? { 'Authorization': `Bearer ${finalToken}` } : {},
    });

    if (!response.ok) {
        throw new Error('API Request Failed');
    }
    return response.json();
  },

  async getClasses(token: string, date?: string) {
    const query = date ? `?date=${encodeURIComponent(date)}` : '';
    const response = await fetch(`${API_URL}/api/classes${query}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to fetch classes');
    }

    return response.json();
  },

  async getDashboard(token: string, date?: string) {
    const query = date ? `?date=${encodeURIComponent(date)}` : '';
    const response = await fetch(`${API_URL}/api/dashboard${query}`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to fetch dashboard');
    }

    return response.json();
  },

  async getFamilyView(token: string) {
    const response = await fetch(`${API_URL}/api/family`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to fetch family view');
    }

    return response.json();
  },

  async markAttendance(token: string, studentId: string, status: 'PRESENT' | 'ABSENT' | 'LATE', date?: string) {
    const response = await fetch(`${API_URL}/api/attendance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ studentId, status, date }),
    });

    if (!response.ok) {
      throw new Error('Failed to mark attendance');
    }

    return response.json();
  },

  async addFeedbackEvent(token: string, studentId: string, type: 'positive' | 'negative', description: string, date?: string) {
    const response = await fetch(`${API_URL}/api/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ studentId, type, description, date }),
    });

    if (!response.ok) {
      throw new Error('Failed to add feedback event');
    }

    return response.json();
  },

  async deleteFeedbackEvent(token: string, feedbackId: string) {
    const response = await fetch(`${API_URL}/api/feedback/${feedbackId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete feedback event');
    }

    return true;
  },

  async createStudent(token: string, data: { name: string; classId: string; animalAvatar?: string; avatarColor?: string }) {
    const response = await fetch(`${API_URL}/api/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create student');
    }

    return response.json();
  },

  async updateStudent(token: string, studentId: string, data: { name?: string; animalAvatar?: string; avatarColor?: string }) {
    const response = await fetch(`${API_URL}/api/students/${studentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to update student');
    }

    return response.json();
  },

  async deleteStudent(token: string, studentId: string) {
    const response = await fetch(`${API_URL}/api/students/${studentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete student');
    }

    return true;
  },
};
