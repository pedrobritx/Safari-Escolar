'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { DashboardData, User, Class, Student } from '@/lib/types';
import EmojiPicker from '@/components/EmojiPicker';
import FeedbackModal, { FeedbackItem } from '@/components/FeedbackModal';
import FeedbackEditorModal from '@/components/FeedbackEditorModal';
import StudentFormModal from '@/components/StudentFormModal';
import Calendar from '@/components/Calendar';
import { LayoutGrid, List, Pencil, Settings, Plus } from 'lucide-react';

const DEFAULT_POSITIVE_BEHAVIORS: FeedbackItem[] = [
  { id: 'task_ok', label: 'Tarefa em Dia', icon: '📝', points: 1 },
  { id: 'participating', label: 'Participando', icon: '🙋', points: 1 },
  { id: 'helping', label: 'Ajudando os Outros', icon: '🤝', points: 1 },
  { id: 'teamwork', label: 'Trabalho em Equipe', icon: '🧩', points: 1 },
  { id: 'effort', label: 'Se Esforçando', icon: '💪', points: 1 },
];

const DEFAULT_NEGATIVE_BEHAVIORS: FeedbackItem[] = [
  { id: 'no_collab', label: 'Não Colabora', icon: '🚫', points: -1 },
  { id: 'late_task', label: 'Tarefa Atrasada', icon: '⏰', points: -1 },
  { id: 'disrupting', label: 'Atrapalhando a Aula', icon: '🗣️', points: -1 },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardData[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState<'firstNameAsc' | 'firstNameDesc' | 'lastNameAsc' | 'lastNameDesc'>('firstNameAsc');
  const [loading, setLoading] = useState(true);
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);
  
  // Estado do Modal de Comportamento
  const [behaviorModalOpen, setBehaviorModalOpen] = useState(false);
  const [currentBehaviorStudent, setCurrentBehaviorStudent] = useState<{id: string, name: string} | null>(null);

  // Estado do Editor de Feedback
  const [feedbackEditorOpen, setFeedbackEditorOpen] = useState(false);
  const [positiveBehaviors, setPositiveBehaviors] = useState<FeedbackItem[]>(DEFAULT_POSITIVE_BEHAVIORS);
  const [negativeBehaviors, setNegativeBehaviors] = useState<FeedbackItem[]>(DEFAULT_NEGATIVE_BEHAVIORS);

  // Estado do Formulário de Aluno
  const [studentFormOpen, setStudentFormOpen] = useState(false);
  const [studentFormMode, setStudentFormMode] = useState<'create' | 'edit'>('create');
  const [editingStudentData, setEditingStudentData] = useState<Student | null>(null);

  // Estado do Calendário
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  useEffect(() => {
    // Carregar comportamentos personalizados do armazenamento local se disponível
    const savedPositive = localStorage.getItem('safari_positive_behaviors');
    const savedNegative = localStorage.getItem('safari_negative_behaviors');

    if (savedPositive) setPositiveBehaviors(JSON.parse(savedPositive));
    if (savedNegative) setNegativeBehaviors(JSON.parse(savedNegative));
  }, []);

  const handleUpdateBehaviors = (type: 'positive' | 'negative', updatedList: FeedbackItem[]) => {
    if (type === 'positive') {
      setPositiveBehaviors(updatedList);
      localStorage.setItem('safari_positive_behaviors', JSON.stringify(updatedList));
    } else {
      setNegativeBehaviors(updatedList);
      localStorage.setItem('safari_negative_behaviors', JSON.stringify(updatedList));
    }
  };

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
  }, [router]);

  useEffect(() => {
    if (user) {
      const token = localStorage.getItem('token');
      if (token) loadData(token);
    }
  }, [user, selectedDate]);

  const loadData = async (token: string) => {
    try {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const [dashboard, classesData] = await Promise.all([
        api.getDashboard(token, formattedDate), 
        api.getClasses(token, formattedDate),
      ]);

      setDashboardData(dashboard);
      setClasses(classesData);
      
      // Persistir seleção se atualizando dados
      if (selectedClass) {
        const updatedClass = classesData.find((c: Class) => c.id === selectedClass.id);
        if (updatedClass) setSelectedClass(updatedClass);
      } else if (classesData.length > 0) {
        setSelectedClass(classesData[0]);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const sortStudents = (students: Student[] | undefined) => {
    if (!students) return [];
    
    return [...students].sort((a, b) => {
      const getLastName = (name: string) => {
        const parts = name.trim().split(' ');
        return parts.length > 1 ? parts[parts.length - 1] : parts[0];
      };

      switch (sortOption) {
        case 'firstNameAsc':
          return a.name.localeCompare(b.name);
        case 'firstNameDesc':
          return b.name.localeCompare(a.name);
        case 'lastNameAsc':
          return getLastName(a.name).localeCompare(getLastName(b.name));
        case 'lastNameDesc':
          return getLastName(b.name).localeCompare(getLastName(a.name));
        default:
          return 0;
      }
    });
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
      const formattedDate = selectedDate.toISOString().split('T')[0];
      await api.markAttendance(token, studentId, status, formattedDate);
      loadData(token);
    } catch (error) {
      console.error('Error marking attendance:', error);
    }
  };

  const handleCreateStudent = async (data: { name: string; animalAvatar?: string; avatarColor?: string }) => {
    const token = localStorage.getItem('token');
    if (!token || !selectedClass) return;

    try {
      await api.createStudent(token, { ...data, classId: selectedClass.id });
      setStudentFormOpen(false);
      loadData(token);
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  const handleDeleteStudent = async () => {
    const token = localStorage.getItem('token');
    if (!token || !editingStudentData) return;

    try {
      await api.deleteStudent(token, editingStudentData.id);
      setStudentFormOpen(false);
      setEditingStudentData(null);
      loadData(token);
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const openBehaviorModal = (studentId: string, studentName: string) => {
    setCurrentBehaviorStudent({ id: studentId, name: studentName });
    setBehaviorModalOpen(true);
  };

  const handleAddBehavior = async (studentId: string, type: 'positive' | 'negative', description?: string) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    // If description is provided (from modal) or if it's negative (using prompt for now)
    let finalDescription = description;
    console.log('handleAddBehavior called:', { studentId, type, description });

    if (!finalDescription) {
       console.log('No description provided, returning');
       // Deve ser tratado pelo modal agora tanto para positivo quanto negativo
       return;
    }

    try {
      console.log('Sending API request...');
      const formattedDate = selectedDate.toISOString().split('T')[0];
      await api.addFeedbackEvent(token, studentId, type, finalDescription, formattedDate);
      console.log('API request success');
      setBehaviorModalOpen(false); // Close modal if open
      loadData(token);
    } catch (error) {
      console.error('Error adding feedback:', error);
    }
  };

  const handleUpdateStudent = async (data: { name: string; animalAvatar?: string; avatarColor?: string }) => {
    const token = localStorage.getItem('token');
    if (!token || !editingStudentData) return;

    try {
      await api.updateStudent(token, editingStudentData.id, data);
      setStudentFormOpen(false);
      setEditingStudentData(null);
      await loadData(token);
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const getAvatarEmoji = (avatar: string) => {
    // Mapear nomes legados para emojis
    const map: Record<string, string> = {
      'Leão': '🦁', 'Tigre': '🐯', 'Elefante': '🐘', 'Girafa': '🦒', 'Zebra': '🦓', 
      'Macaco': '🐒', 'Urso': '🐻', 'Lobo': '🐺', 'Raposa': '🦊', 'Coelho': '🐰', 
      'Panda': '🐼', 'Koala': '🐨'
    };
    return map[avatar] || avatar; // Retornar emoji mapeado ou string bruta (se já for emoji)
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
        <div className="layout-container py-4">
          <div className="flex-between">
            <div>
              <h1 className="text-2xl font-heading font-bold text-primary">🦁 Safari Escolar</h1>
              <p className="text-sm font-medium text-[#57534E]">{user?.name} - {user?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-accent"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="layout-container py-8">
        {/* Seleção de Turma */}
        {classes.length > 0 && (
          <div className="mb-6 flex gap-4 items-end">
            <div className="flex-1 max-w-md">
              <label className="block text-sm font-bold text-primary mb-2 ml-1">MAPA (SELECIONE A TURMA):</label>
              <select
                value={selectedClass?.id || ''}
                onChange={(e) => {
                  const cls = classes.find((c) => c.id === e.target.value);
                  setSelectedClass(cls || null);
                }}
                className="select-field h-[52px] mb-[2px]"
              >
                {classes.map((cls) => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => {
                  setStudentFormMode('create');
                  setEditingStudentData(null);
                  setStudentFormOpen(true);
                }}
                className="btn btn-ghost mb-[2px] px-6 py-3"
              >
                <Plus size={20} />
                Adicionar Aluno
              </button>
              <button
                 onClick={() => setFeedbackEditorOpen(true)}
                 className="btn btn-ghost mb-[2px] px-6 py-3"
              >
                <Settings size={20} />
                Feedback
              </button>
            </div>
          </div>
        )}

        {/* Cartões do Dashboard e Calendário */}
        <div className="grid-dashboard mb-8">
           {/* Cartão de Resumo (Ocupa 1 coluna) */}
          <div className="lg:col-span-1">
          {dashboardData.map((data) => (
            <div key={data.classId} className="card h-full p-6">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                🏕️ {data.className}
              </h3>
              <div className="space-y-3 text-sm font-medium">
                <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                  <span className="text-[#57534E]">Total de Alunos:</span>
                  <span className="font-bold text-primary">{data.totalStudents}</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                  <span className="text-[#57534E]">Presentes:</span>
                  <span className="font-bold text-green-600">{data.todayAttendance}</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                  <span className="text-[#57534E]">Atrasados:</span>
                  <span className="font-bold text-yellow-600">{data.todayLate}</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                  <span className="text-[#57534E]">Taxa de Presença:</span>
                  <span className="font-bold text-primary">{data.attendanceRate.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                  <span className="text-[#57534E]">Feedbacks Positivos:</span>
                  <span className="font-bold text-green-600">+{data.todayPositiveEvents}</span>
                </div>
                <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                  <span className="text-[#57534E]">Feedbacks Construtivos:</span>
                  <span className="font-bold text-red-600">-{data.todayNegativeEvents}</span>
                </div>
              </div>
            </div>
          ))}
          </div>

           {/* Calendário (Ocupa 2 colunas) */}
          <div className="lg:col-span-2">
             <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
          </div>
        </div>



        {/* Lista de Alunos */}
        {selectedClass && (
          <div className="card">
            <div className="card-header bg-[var(--color-secondary)]">
              <h2 className="text-xl font-bold text-primary">{selectedClass.name} - Exploradores</h2>
              <div className="flex gap-2">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as any)}
                  className="px-3 py-2 rounded-lg border-2 border-[var(--color-border)] bg-white text-sm font-bold text-primary outline-none focus:border-primary cursor-pointer mr-2"
                >
                  <option value="firstNameAsc">Nome (A-Z)</option>
                  <option value="firstNameDesc">Nome (Z-A)</option>
                  <option value="lastNameAsc">Sobrenome (A-Z)</option>
                  <option value="lastNameDesc">Sobrenome (Z-A)</option>
                </select>
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`btn p-2 transition-all ${viewMode === 'grid' ? 'btn-accent' : 'btn-ghost'}`}
                  title="Visualização em Grade"
                >
                  <LayoutGrid size={20} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`btn p-2 transition-all ${viewMode === 'list' ? 'btn-accent' : 'btn-ghost'}`}
                  title="Visualização em Lista"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
            
            <div className={viewMode === 'list' ? "divide-y-2 divide-[var(--color-border)]" : "p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"}>
              {sortStudents(selectedClass.students).map((student) => (
                <div 
                  key={student.id} 
                  className={viewMode === 'list' 
                    ? "px-6 py-4 hover:bg-white transition-colors"
                    : `bg-white border-2 border-[var(--color-border)] rounded-xl p-4 flex flex-col items-center text-center hover:shadow-md transition-all relative group ${editingStudentId === student.id ? 'z-20' : ''}`
                  }
                >
                  <div className={viewMode === 'list' ? "flex flex-col sm:flex-row items-center justify-between gap-4" : "w-full"}>
                    <div className={viewMode === 'list' ? "flex items-center space-x-4" : "flex flex-col items-center gap-2 mb-4 relative"}>
                      <div className="relative group/avatar">
                        <div 
                          className={`flex items-center justify-center border-2 border-[var(--color-border)] rounded-full shadow-sm cursor-pointer ${viewMode === 'list' ? 'w-12 h-12 text-2xl' : 'w-24 h-24 text-5xl mb-1'}`}
                          style={{ backgroundColor: student.avatarColor || '#FFFFFF' }}
                        >
                          {getAvatarEmoji(student.animalAvatar)}
                        </div>
                        
                        {/* Edit Overlay */}
                        <button
                          onClick={() => {
                            setEditingStudentData(student);
                            setStudentFormMode('edit');
                            setStudentFormOpen(true);
                          }}
                          className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity"
                        >
                          <div className="bg-white text-primary text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                            <Pencil size={12} /> Editar
                          </div>
                        </button>
                        
                        {/* Pontuação Badge */}
                        {(student.todayScore || 0) !== 0 && (
                          <div 
                            className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-md z-10 ${
                              (student.todayScore || 0) >= 0 ? 'bg-green-600' : 'bg-red-500'
                            }`}
                          >
                            {student.todayScore}
                          </div>
                        )}
                      </div>

                      <span className={`font-bold text-primary ${viewMode === 'list' ? 'text-lg' : 'text-xl'}`}>{student.name}</span>
                    </div>
                    
                    <div className={viewMode === 'list' ? "flex flex-wrap justify-center gap-2" : "flex flex-col gap-2 w-full"}>
                      <div className="grid grid-cols-3 gap-2 w-full">
                        <button
                          onClick={() => handleMarkAttendance(student.id, 'PRESENT')}
                          className={`btn btn-primary ${viewMode === 'list' ? 'px-3 py-1.5 text-sm min-w-[90px]' : 'py-2 text-xs'} ${student.todayStatus && student.todayStatus !== 'PRESENT' ? 'opacity-30' : ''}`}
                          title="Presente"
                        >
                           Presente
                        </button>
                        <button
                          onClick={() => handleMarkAttendance(student.id, 'LATE')}
                          className={`btn btn-warning ${viewMode === 'list' ? 'px-3 py-1.5 text-sm min-w-[90px]' : 'py-2 text-xs'} ${student.todayStatus && student.todayStatus !== 'LATE' ? 'opacity-30' : ''}`}
                          title="Atrasado"
                        >
                          Atrasado
                        </button>
                        <button
                          onClick={() => handleMarkAttendance(student.id, 'ABSENT')}
                          className={`btn btn-anger ${viewMode === 'list' ? 'px-3 py-1.5 text-sm min-w-[90px]' : 'py-2 text-xs'} ${student.todayStatus && student.todayStatus !== 'ABSENT' ? 'opacity-30' : ''}`}
                          title="Ausente"
                        >
                           Ausente
                        </button>
                      </div>
                      <div className="w-full mt-1">
                        <button
                          onClick={() => openBehaviorModal(student.id, student.name)}
                          className={`btn bg-white border-2 border-[var(--color-border)] text-primary hover:bg-gray-50 flex items-center justify-center gap-2 ${viewMode === 'list' ? 'px-3 py-1.5 text-sm min-w-[90px]' : 'py-2 text-xs w-full'}`}
                        >
                          <span className="text-lg">⭐</span> Feedback
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

      <FeedbackModal 
        isOpen={behaviorModalOpen}
        onClose={() => setBehaviorModalOpen(false)}
        onSelectFeedback={(behavior, type) => {
          if (currentBehaviorStudent) {
            handleAddBehavior(currentBehaviorStudent.id, type, behavior);
          }
        }}
        studentName={currentBehaviorStudent?.name || ''}
        positiveBehaviors={positiveBehaviors}
        negativeBehaviors={negativeBehaviors}
      />

      <FeedbackEditorModal
        isOpen={feedbackEditorOpen}
        onClose={() => setFeedbackEditorOpen(false)}
        positiveBehaviors={positiveBehaviors}
        negativeBehaviors={negativeBehaviors}
        onUpdateBehaviors={handleUpdateBehaviors}
      />

      <StudentFormModal
        isOpen={studentFormOpen}
        onClose={() => {
          setStudentFormOpen(false);
          setEditingStudentData(null);
        }}
        onSave={studentFormMode === 'create' ? handleCreateStudent : handleUpdateStudent}
        onDelete={studentFormMode === 'edit' ? handleDeleteStudent : undefined}
        initialData={editingStudentData}
        mode={studentFormMode}
      />
    </div>
  );
}
