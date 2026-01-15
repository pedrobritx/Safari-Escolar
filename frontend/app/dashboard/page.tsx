'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { DashboardData, User, Class } from '@/lib/types';
import { LayoutGrid, List } from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardData[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
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

  const handleMarkAttendance = async (studentId: string, status: 'PRESENT' | 'ABSENT' | 'LATE') => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      await api.markAttendance(token, studentId, status);
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-xl font-bold text-primary animate-pulse">Carregando Mapa do Safari...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b-2 border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-heading font-bold text-primary">🦁 Safari Escolar</h1>
              <p className="text-sm font-medium text-[#57534E]">{user?.name} - {user?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-bold px-4 py-2 rounded-xl border-b-4 border-red-700 active:border-b-0 active:translate-y-1 hover:bg-red-600 transition-all"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dashboardData.map((data) => (
            <div key={data.classId} className="bg-[#FAF9F6] border-2 border-[var(--color-border)] rounded-2xl shadow-[4px_4px_0px_var(--color-border)] p-6">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                🏕️ {data.className}
              </h3>
              <div className="space-y-3 text-sm font-medium">
                <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                  <span className="text-[#57534E]">Total de Alunos:</span>
                  <span className="font-bold text-primary">{data.totalStudents}</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                  <span className="text-[#57534E]">Presentes Hoje:</span>
                  <span className="font-bold text-green-600">{data.todayAttendance}</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                  <span className="text-[#57534E]">Taxa de Presença:</span>
                  <span className="font-bold text-primary">{data.attendanceRate.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                  <span className="text-[#57534E]">Eventos Positivos:</span>
                  <span className="font-bold text-green-600">+{data.todayPositiveEvents}</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                  <span className="text-[#57534E]">Eventos Negativos:</span>
                  <span className="font-bold text-red-600">-{data.todayNegativeEvents}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Class Selection */}
        {classes.length > 0 && (
          <div className="mb-6">
            <label className="block text-sm font-bold text-primary mb-2 ml-1">MAPA (SELECIONE A TURMA):</label>
            <select
              value={selectedClass?.id || ''}
              onChange={(e) => {
                const cls = classes.find((c) => c.id === e.target.value);
                setSelectedClass(cls || null);
              }}
              className="w-full max-w-md px-4 py-3 border-2 border-[var(--color-border)] rounded-xl focus:ring-4 focus:ring-[var(--color-secondary)] focus:border-primary outline-none bg-white font-medium text-lg text-primary cursor-pointer"
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
          <div className="bg-[#FAF9F6] border-2 border-[var(--color-border)] rounded-2xl shadow-[4px_4px_0px_var(--color-border)] overflow-hidden">
            <div className="px-6 py-4 border-b-2 border-[var(--color-border)] bg-[var(--color-secondary)] flex justify-between items-center">
              <h2 className="text-xl font-bold text-primary">{selectedClass.name} - Exploradores</h2>
              <div className="flex gap-2">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg border-2 transition-all ${viewMode === 'grid' ? 'bg-[#EA580C] text-white border-[#9A3412]' : 'bg-white text-primary border-[var(--color-border)] hover:bg-gray-50'}`}
                  title="Visualização em Grade"
                >
                  <LayoutGrid size={20} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg border-2 transition-all ${viewMode === 'list' ? 'bg-[#EA580C] text-white border-[#9A3412]' : 'bg-white text-primary border-[var(--color-border)] hover:bg-gray-50'}`}
                  title="Visualização em Lista"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
            
            <div className={viewMode === 'list' ? "divide-y-2 divide-[var(--color-border)]" : "p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"}>
              {selectedClass.students.map((student) => (
                <div 
                  key={student.id} 
                  className={viewMode === 'list' 
                    ? "px-6 py-4 hover:bg-white transition-colors"
                    : "bg-white border-2 border-[var(--color-border)] rounded-xl p-4 flex flex-col items-center text-center hover:shadow-md transition-all relative overflow-hidden group"
                  }
                >
                  <div className={viewMode === 'list' ? "flex flex-col sm:flex-row items-center justify-between gap-4" : "w-full"}>
                    <div className={viewMode === 'list' ? "flex items-center space-x-4" : "flex flex-col items-center gap-2 mb-4"}>
                      <div className={`flex items-center justify-center bg-white border-2 border-[var(--color-border)] rounded-full shadow-sm ${viewMode === 'list' ? 'w-12 h-12 text-2xl' : 'w-20 h-20 text-4xl mb-1'}`}>
                        {student.animalAvatar === 'Leão' ? '🦁' : 
                         student.animalAvatar === 'Elefante' ? '🐘' : 
                         student.animalAvatar === 'Girafa' ? '🦒' : 
                         student.animalAvatar === 'Zebra' ? '🦓' : 
                         student.animalAvatar === 'Tigre' ? '🐯' : '🐾'}
                      </div>
                      <span className={`font-bold text-primary ${viewMode === 'list' ? 'text-lg' : 'text-xl'}`}>{student.name}</span>
                    </div>
                    
                    <div className={viewMode === 'list' ? "flex flex-wrap justify-center gap-2" : "flex flex-col gap-2 w-full"}>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <button
                          onClick={() => handleMarkAttendance(student.id, 'PRESENT')}
                          className={`bg-[#4D7C0F] text-white rounded-lg border-b-4 border-[#365314] active:border-b-0 active:translate-y-1 hover:bg-[#3F6212] font-bold transition-all ${viewMode === 'list' ? 'px-3 py-1.5 text-sm min-w-[90px]' : 'py-2 text-xs'}`}
                          title="Presente"
                        >
                           Presente
                        </button>
                        <button
                          onClick={() => handleMarkAttendance(student.id, 'LATE')}
                          className={`bg-yellow-500 text-white rounded-lg border-b-4 border-yellow-700 active:border-b-0 active:translate-y-1 hover:bg-yellow-600 font-bold transition-all ${viewMode === 'list' ? 'px-3 py-1.5 text-sm min-w-[90px]' : 'py-2 text-xs'}`}
                          title="Atrasado"
                        >
                          Atrasado
                        </button>
                        <button
                          onClick={() => handleMarkAttendance(student.id, 'ABSENT')}
                          className={`bg-red-500 text-white rounded-lg border-b-4 border-red-700 active:border-b-0 active:translate-y-1 hover:bg-red-600 font-bold transition-all ${viewMode === 'list' ? 'px-3 py-1.5 text-sm min-w-[90px]' : 'py-2 text-xs'}`}
                          title="Ausente"
                        >
                           Ausente
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-2 w-full mt-1">
                        <button
                          onClick={() => handleAddBehavior(student.id, 'positive')}
                          className={`bg-blue-500 text-white rounded-lg border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 hover:bg-blue-600 font-bold transition-all ${viewMode === 'list' ? 'px-3 py-1.5 text-sm min-w-[90px]' : 'py-2 text-xs'}`}
                        >
                          + Positivo
                        </button>
                        <button
                          onClick={() => handleAddBehavior(student.id, 'negative')}
                          className={`bg-[#EA580C] text-white rounded-lg border-b-4 border-[#9A3412] active:border-b-0 active:translate-y-1 hover:bg-[#C2410C] font-bold transition-all ${viewMode === 'list' ? 'px-3 py-1.5 text-sm min-w-[90px]' : 'py-2 text-xs'}`}
                        >
                          - Negativo
                        </button>
                      </div>
                    </div>
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
