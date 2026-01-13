'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { DashboardData, User, Class } from '@/lib/types';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardData[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    if (parsedUser.role === 'FAMILY') {
      router.push('/family');
      return;
    }

    setUser(parsedUser);
    loadData(token);
  }, [router]);

  const loadData = async (token: string) => {
    try {
      const [dashboard, classesData] = await Promise.all([
        api.getDashboard(token),
        api.getClasses(token),
      ]);

      setDashboardData(dashboard);
      setClasses(classesData);
      if (classesData.length > 0) {
        setSelectedClass(classesData[0]);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/login');
  };

  const handleMarkAttendance = async (studentId: string, present: boolean) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      await api.markAttendance(token, studentId, present);
      loadData(token);
    } catch (error) {
      console.error('Error marking attendance:', error);
    }
  };

  const handleAddBehavior = async (studentId: string, type: 'positive' | 'negative') => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const description = prompt(`Descreva o comportamento ${type === 'positive' ? 'positivo' : 'negativo'}:`);
    if (!description) return;

    try {
      await api.addBehaviorEvent(token, studentId, type, description);
      loadData(token);
    } catch (error) {
      console.error('Error adding behavior:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">🦁 Safari Escolar</h1>
              <p className="text-sm text-gray-600">{user?.name} - {user?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {dashboardData.map((data) => (
            <div key={data.classId} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{data.className}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total de Alunos:</span>
                  <span className="font-semibold">{data.totalStudents}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Presentes Hoje:</span>
                  <span className="font-semibold text-green-600">{data.todayAttendance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxa de Presença:</span>
                  <span className="font-semibold">{data.attendanceRate.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Eventos Positivos:</span>
                  <span className="font-semibold text-green-600">+{data.todayPositiveEvents}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Eventos Negativos:</span>
                  <span className="font-semibold text-red-600">-{data.todayNegativeEvents}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Class Selection */}
        {classes.length > 0 && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Selecione a Turma:</label>
            <select
              value={selectedClass?.id || ''}
              onChange={(e) => {
                const cls = classes.find((c) => c.id === e.target.value);
                setSelectedClass(cls || null);
              }}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-gray-900"
            >
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Students List */}
        {selectedClass && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">{selectedClass.name} - Alunos</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {selectedClass.students.map((student) => (
                <div key={student.id} className="px-6 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{student.animalAvatar}</span>
                      <span className="font-medium text-gray-900">{student.name}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleMarkAttendance(student.id, true)}
                      className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                    >
                      ✓ Presente
                    </button>
                    <button
                      onClick={() => handleMarkAttendance(student.id, false)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                    >
                      ✗ Ausente
                    </button>
                    <button
                      onClick={() => handleAddBehavior(student.id, 'positive')}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                    >
                      + Positivo
                    </button>
                    <button
                      onClick={() => handleAddBehavior(student.id, 'negative')}
                      className="bg-orange-500 text-white px-3 py-1 rounded text-sm hover:bg-orange-600"
                    >
                      - Negativo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
