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

  async getClasses(token: string, date?: string) {
    const query = date ? `?date=${encodeURIComponent(date)}` : '';
    const response = await fetch(`${API_URL}/api/classes${query}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch classes');
    }

    return response.json();
  },

  async getDashboard(token: string) {
    const response = await fetch(`${API_URL}/api/dashboard`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch dashboard');
    }

    return response.json();
  },

  async getFamilyView(token: string) {
    const response = await fetch(`${API_URL}/api/family`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch family view');
    }

    return response.json();
  },

  async markAttendance(token: string, studentId: string, status: 'PRESENT' | 'ABSENT' | 'LATE') {
    const response = await fetch(`${API_URL}/api/attendance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ studentId, status }),
    });

    if (!response.ok) {
      throw new Error('Failed to mark attendance');
    }

    return response.json();
  },

  async addBehaviorEvent(token: string, studentId: string, type: 'positive' | 'negative', description: string) {
    const response = await fetch(`${API_URL}/api/behavior`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ studentId, type, description }),
    });

    if (!response.ok) {
      throw new Error('Failed to add behavior event');
    }

    return response.json();
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
