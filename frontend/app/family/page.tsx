'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { FamilyStudent, User } from '@/lib/types';

export default function FamilyPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [students, setStudents] = useState<FamilyStudent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    if (parsedUser.role !== 'FAMILY') {
      router.push('/dashboard');
      return;
    }

    setUser(parsedUser);
    loadData(token);
  }, [router]);

  const loadData = async (token: string) => {
    try {
      const data = await api.getFamilyView(token);
      setStudents(data.students);
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
              <p className="text-sm text-gray-600">{user?.name}</p>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Acompanhamento dos Filhos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {students.map((student) => (
            <div key={student.id} className="bg-white rounded-lg shadow overflow-hidden">
              {/* Student Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4">
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{student.animalAvatar}</span>
                  <div className="text-white">
                    <h3 className="text-xl font-bold">{student.name}</h3>
                    <p className="text-sm opacity-90">{student.className}</p>
                    <p className="text-xs opacity-75">Professor(a): {student.teacherName}</p>
                  </div>
                </div>
              </div>

              {/* Student Stats */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{student.attendanceRate.toFixed(0)}%</div>
                    <div className="text-xs text-gray-600">Presença</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">+{student.positiveEvents}</div>
                    <div className="text-xs text-gray-600">Positivos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">-{student.negativeEvents}</div>
                    <div className="text-xs text-gray-600">Negativos</div>
                  </div>
                </div>
              </div>

              {/* Recent Attendance */}
              <div className="px-6 py-4 border-b border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Presença Recente</h4>
                <div className="flex flex-wrap gap-2">
                  {student.recentAttendances.slice(0, 10).map((att, idx) => (
                    <div
                      key={idx}
                      className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium ${
                        att.present
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                      title={new Date(att.date).toLocaleDateString('pt-BR')}
                    >
                      {att.present ? '✓' : '✗'}
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Behavior Events */}
              <div className="px-6 py-4">
                <h4 className="font-semibold text-gray-900 mb-2">Eventos Recentes</h4>
                <div className="space-y-2">
                  {student.recentBehaviorEvents.slice(0, 5).map((event) => (
                    <div
                      key={event.id}
                      className={`p-3 rounded-lg ${
                        event.type === 'positive'
                          ? 'bg-green-50 border border-green-200'
                          : 'bg-orange-50 border border-orange-200'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <span
                            className={`text-sm font-medium ${
                              event.type === 'positive' ? 'text-green-700' : 'text-orange-700'
                            }`}
                          >
                            {event.type === 'positive' ? '✓' : '!'} {event.description}
                          </span>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">
                          {new Date(event.date).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                  ))}
                  {student.recentBehaviorEvents.length === 0 && (
                    <p className="text-sm text-gray-500 italic">Nenhum evento registrado</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {students.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600">Nenhum aluno vinculado a esta família.</p>
          </div>
        )}
      </main>
    </div>
  );
}
