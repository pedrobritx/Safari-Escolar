'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { User, Student } from '@/lib/types';
import FeedbackModal, { FeedbackItem } from '@/components/FeedbackModal';
import FeedbackEditorModal from '@/components/FeedbackEditorModal';
import StudentDetailModal from '@/components/StudentDetailModal';
import StudentFormModal from '@/components/StudentFormModal';
import Calendar from '@/components/Calendar';
import { LayoutGrid, List, Plus, Trash, Download } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { toast } from 'sonner';
import { useDashboard } from '@/hooks/useDashboard';
import { StudentCard } from '@/components/StudentCard';

const DEFAULT_POSITIVE_FEEDBACKS: FeedbackItem[] = [
  { id: 'task_ok', label: 'Tarefa em Dia', icon: '📝', points: 1 },
  { id: 'participating', label: 'Participando', icon: '🙋', points: 1 },
  { id: 'helping', label: 'Ajudando os Outros', icon: '🤝', points: 1 },
  { id: 'teamwork', label: 'Trabalho em Equipe', icon: '🧩', points: 1 },
  { id: 'effort', label: 'Se Esforçando', icon: '💪', points: 1 },
];

const DEFAULT_NEGATIVE_FEEDBACKS: FeedbackItem[] = [
  { id: 'no_collab', label: 'Não Colabora', icon: '🚫', points: -1 },
  { id: 'late_task', label: 'Tarefa Atrasada', icon: '⏰', points: -1 },
  { id: 'disrupting', label: 'Atrapalhando a Aula', icon: '🗣️', points: -1 },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOption, setSortOption] = useState<'firstNameAsc' | 'firstNameDesc' | 'lastNameAsc' | 'lastNameDesc'>('firstNameAsc');

  // Custom Hook
  const { 
    dashboardData, 
    classes, 
    selectedClass, 
    setSelectedClass, 
    loading, 
    selectedDate, 
    setSelectedDate,
    refreshData,
    setClasses, 
    setDashboardData
  } = useDashboard(user);

  
  // Estado do Modal de Comportamento
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [currentFeedbackStudent, setCurrentFeedbackStudent] = useState<{id: string, name: string} | null>(null);

  // Estado do Editor de Feedback
  const [feedbackEditorOpen, setFeedbackEditorOpen] = useState(false);
  const [positiveFeedbacks, setPositiveFeedbacks] = useState<FeedbackItem[]>(DEFAULT_POSITIVE_FEEDBACKS);
  const [negativeFeedbacks, setNegativeFeedbacks] = useState<FeedbackItem[]>(DEFAULT_NEGATIVE_FEEDBACKS);

  // Estado do Formulário de Aluno
  const [studentFormOpen, setStudentFormOpen] = useState(false);
  const [studentFormMode, setStudentFormMode] = useState<'create' | 'edit'>('create');
  const [editingStudentData, setEditingStudentData] = useState<Student | null>(null);

  useEffect(() => {
    // Carregar comportamentos personalizados do armazenamento local se disponível
    const savedPositive = localStorage.getItem('safari_positive_feedbacks');
    const savedNegative = localStorage.getItem('safari_negative_feedbacks');

    if (savedPositive) setPositiveFeedbacks(JSON.parse(savedPositive));
    if (savedNegative) setNegativeFeedbacks(JSON.parse(savedNegative));
  }, []);

  const handleUpdateFeedbacks = (type: 'positive' | 'negative', updatedList: FeedbackItem[]) => {
    if (type === 'positive') {
      setPositiveFeedbacks(updatedList);
      localStorage.setItem('safari_positive_feedbacks', JSON.stringify(updatedList));
    } else {
      setNegativeFeedbacks(updatedList);
      localStorage.setItem('safari_negative_feedbacks', JSON.stringify(updatedList));
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

  const handleMarkAttendance = async (studentId: string, status: 'PRESENT' | 'ABSENT' | 'LATE' | 'CLEARED') => {
    const token = localStorage.getItem('token');
    if (!token) return;

    // Save previous state for rollback
    const previousClass = selectedClass;
    const previousClasses = classes;

    // Direct assignment, no toggling
    const newStatus = status === 'CLEARED' ? null : status;
    const apiStatus = status;

    // Optimistic Update: Update UI immediately
    if (selectedClass) {
      const updatedStudents = selectedClass.students.map(s => 
        s.id === studentId ? { ...s, todayStatus: newStatus } : s
      );
      
      const updatedClass = { ...selectedClass, students: updatedStudents };
      setSelectedClass(updatedClass);
      
      // Update classes list as well ensure consistency if switching views
      setClasses(prev => prev.map(c => c.id === selectedClass.id ? updatedClass : c));
    }

    try {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      await api.markAttendance(token, studentId, apiStatus, formattedDate);
      
      // Show success feedback
      toast.success('Presença marcada!');
      
      // Fetch only dashboard data to update counts without reloading student list (avoiding race conditions)
      const dashboard = await api.getDashboard(token, formattedDate);
      setDashboardData(dashboard);
    } catch (error) {
      console.error('Error marking attendance:', error);
      // Rollback to previous state
      setSelectedClass(previousClass);
      setClasses(previousClasses);
      toast.error('Erro ao marcar presença. Tente novamente.');
    }
  };

  const handleCreateStudent = async (data: { name: string; animalAvatar?: string; avatarColor?: string }) => {
    const token = localStorage.getItem('token');
    if (!token || !selectedClass) return;

    try {
      await api.createStudent(token, { ...data, classId: selectedClass.id });
      toast.success('Aluno adicionado com sucesso!');
      setStudentFormOpen(false);
      refreshData();
    } catch (error) {
      console.error('Error creating student:', error);
      toast.error('Erro ao adicionar aluno. Tente novamente.');
    }
  };

  const handleDeleteStudent = async () => {
    const token = localStorage.getItem('token');
    if (!token || !editingStudentData) return;

    try {
      await api.deleteStudent(token, editingStudentData.id);
      toast.success('Aluno removido com sucesso!');
      setStudentFormOpen(false);
      setEditingStudentData(null);
      refreshData();
    } catch (error) {
      console.error('Error deleting student:', error);
      toast.error('Erro ao remover aluno. Tente novamente.');
    }
  };

  const openFeedbackModal = (studentId: string, studentName: string) => {
    setCurrentFeedbackStudent({ id: studentId, name: studentName });
    setFeedbackModalOpen(true);
  };

  const handleAddFeedback = async (studentId: string, type: 'positive' | 'negative', description?: string) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const finalDescription = description;

    if (!finalDescription) {
       return;
    }

    try {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      await api.addFeedbackEvent(token, studentId, type, finalDescription, formattedDate);
      toast.success('Feedback registrado!');
      setFeedbackModalOpen(false);
      refreshData();
    } catch (error) {
      console.error('Error adding feedback:', error);
      toast.error('Erro ao registrar feedback. Tente novamente.');
    }
  };

  const handleResetDay = async () => {
    if (!confirm('ATENÇÃO: Isso apagará TODOS os registros de presença e feedback desta turma para a data selecionada. Deseja continuar?')) return;
    
    const token = localStorage.getItem('token');
    if (!token || !selectedClass) return;

    try {
        const formattedDate = selectedDate.toISOString().split('T')[0];
        await api.resetDay(token, formattedDate, selectedClass.id);
        toast.success('Dados do dia reiniciados com sucesso!');
        refreshData();
    } catch (error) {
        console.error('Error resetting day:', error);
        toast.error('Erro ao reiniciar o dia');
    }
  };

  const handleUpdateStudent = async (data: { name?: string; animalAvatar?: string; avatarColor?: string; whatsapp?: string; email?: string; birthday?: string }) => {
    const token = localStorage.getItem('token');
    if (!token || !editingStudentData) return;

    try {
      await api.updateStudent(token, editingStudentData.id, data);
      toast.success('Aluno atualizado com sucesso!');
      setStudentFormOpen(false);
      setEditingStudentData(null);
      refreshData();
    } catch (error) {
      console.error('Error updating student:', error);
      toast.error('Erro ao atualizar aluno. Tente novamente.');
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
        <div className="layout-container py-4">
          <div className="flex-between">
            <div>
              <h1 className="text-2xl font-heading font-bold text-primary">🦁 Safari Escolar</h1>
              <p className="text-sm font-medium text-[#57534E]">{user?.name} - {user?.role}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="accent"
            >
              Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="layout-container py-8">
        {/* Seleção de Turma */}
        {classes.length > 0 && (
          <div className="mb-6 flex gap-4 items-end">
            <div className="flex-1 max-w-md">
              <label htmlFor="class-selector" className="block text-sm font-bold text-primary mb-2 ml-1">MAPA (SELECIONE A TURMA):</label>
              <select
                id="class-selector"
                name="class-selector"
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
              <div className="relative group">
                <Button
                  variant="ghost"
                  className="mb-[2px] px-4 py-3 text-primary hover:bg-primary/10"
                  title="Exportar CSV"
                >
                  <Download size={20} />
                </Button>
                <div className="absolute right-0 top-full mt-1 bg-white border-2 border-primary rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[180px]">
                  <button
                    onClick={async () => {
                      const token = localStorage.getItem('token');
                      if (token) {
                        try {
                          await api.exportStudents(token);
                          toast.success('Alunos exportados!');
                        } catch {
                          toast.error('Erro ao exportar');
                        }
                      }
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                  >
                    📋 Exportar Alunos
                  </button>
                  <button
                    onClick={async () => {
                      const token = localStorage.getItem('token');
                      if (token) {
                        try {
                          await api.exportHistory(token);
                          toast.success('Histórico exportado!');
                        } catch {
                          toast.error('Erro ao exportar');
                        }
                      }
                    }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm border-t"
                  >
                    📅 Exportar Histórico
                  </button>
                </div>
              </div>
              <Button
                variant="ghost"
                onClick={handleResetDay}
                className="mb-[2px] px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-700"
                title="Reiniciar Dia"
              >
                <Trash size={20} />
              </Button>
            </div>
          </div>
        )}


        {/* Cartões do Dashboard e Calendário */}
        <div className="grid-dashboard mb-8">
           {/* Cartão de Resumo */}
          <div className="lg:col-span-1">
          {dashboardData.map((data) => (
            <Card key={data.classId} className="h-full">
              <CardBody>
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  🏕️ {data.className}
                </h3>
                <div className="space-y-3 text-sm font-medium">
                  <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                    <span className="text-[#57534E]">Total de Alunos:</span>
                    <span className="font-bold text-[var(--safari-green)]">{data.totalStudents}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                    <span className="text-[#57534E]">Presentes:</span>
                    <span className="font-bold text-[var(--safari-green)]">{data.todayAttendance}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                    <span className="text-[#57534E]">Atrasados:</span>
                    <span className="font-bold text-[var(--safari-orange)]">{data.todayLate}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                    <span className="text-[#57534E]">Taxa de Presença:</span>
                    <span className="font-bold text-[var(--safari-green)]">{data.attendanceRate.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                    <span className="text-[#57534E]">Feedbacks Positivos:</span>
                    <span className="font-bold text-[var(--safari-green)]">+{data.todayPositiveEvents}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-white rounded-lg border border-[var(--color-border)]">
                    <span className="text-[#57534E]">Feedbacks Construtivos:</span>
                    <span className="font-bold text-[var(--safari-orange)]">-{data.todayNegativeEvents}</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
          </div>

           {/* Calendário */}
          <div className="lg:col-span-2">
             <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
          </div>
        </div>

        {/* Lista de Alunos */}
        {selectedClass && (
          <Card>
            <CardHeader className="bg-[var(--color-secondary)]">
              <h2 className="text-xl font-bold text-primary">{selectedClass.name} - Exploradores</h2>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setStudentFormMode('create');
                    setEditingStudentData(null);
                    setStudentFormOpen(true);
                  }}
                  className="bg-white px-4 py-2 h-[42px] border-2 border-transparent hover:border-[var(--color-border)] mr-2"
                >
                  <Plus size={20} />
                  Adicionar Aluno
                </Button>
                <select
                  id="sort-selector"
                  name="sort-selector"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as 'firstNameAsc' | 'firstNameDesc' | 'lastNameAsc' | 'lastNameDesc')}
                  className="px-3 py-2 rounded-lg border-2 border-[var(--color-border)] bg-white text-sm font-bold text-primary outline-none focus:border-primary cursor-pointer mr-2"
                  aria-label="Ordenar alunos"
                >
                  <option value="firstNameAsc">Nome (A-Z)</option>
                  <option value="firstNameDesc">Nome (Z-A)</option>
                  <option value="lastNameAsc">Sobrenome (A-Z)</option>
                  <option value="lastNameDesc">Sobrenome (Z-A)</option>
                </select>
                <Button 
                  variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                  onClick={() => setViewMode('grid')}
                  className="p-2"
                  title="Visualização em Grade"
                >
                  <LayoutGrid size={20} />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? 'primary' : 'ghost'}
                  onClick={() => setViewMode('list')}
                  className="p-2"
                  title="Visualização em Lista"
                >
                  <List size={20} />
                </Button>
              </div>
            </CardHeader>
            
            <div className={viewMode === 'list' ? "divide-y-2 divide-[var(--color-border)]" : "p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"}>
              {sortStudents(selectedClass.students).map((student) => (
                <StudentCard 
                    key={student.id}
                    student={student}
                    viewMode={viewMode}
                    onEdit={(s) => {
                        setEditingStudentData(s);
                        setStudentFormMode('edit');
                        setStudentFormOpen(true);
                    }}
                    onAttendanceChange={handleMarkAttendance}
                    onOpenFeedback={openFeedbackModal}
                />
              ))}
            </div>
          </Card>
        )}
      </main>

      <FeedbackModal 
        isOpen={feedbackModalOpen}
        onClose={() => setFeedbackModalOpen(false)}
        onSelectFeedback={(behavior, type) => {
          if (currentFeedbackStudent) {
            handleAddFeedback(currentFeedbackStudent.id, type, behavior);
          }
        }}
        onEditFeedback={() => {
          setFeedbackModalOpen(false);
          setFeedbackEditorOpen(true);
        }}
        studentName={currentFeedbackStudent?.name || ''}
        positiveFeedbacks={positiveFeedbacks}
        negativeFeedbacks={negativeFeedbacks}
      />

      <FeedbackEditorModal
        isOpen={feedbackEditorOpen}
        onClose={() => setFeedbackEditorOpen(false)}
        onBack={() => {
          setFeedbackEditorOpen(false);
          setFeedbackModalOpen(true);
        }}
        positiveFeedbacks={positiveFeedbacks}
        negativeFeedbacks={negativeFeedbacks}
        onUpdateFeedbacks={handleUpdateFeedbacks}
      />

      {studentFormMode === 'create' ? (
        <StudentFormModal
            isOpen={studentFormOpen}
            onClose={() => setStudentFormOpen(false)}
            onSave={handleCreateStudent}
            mode="create"
        />
      ) : (
        <StudentDetailModal
            isOpen={studentFormOpen}
            onClose={() => {
                setStudentFormOpen(false);
                setEditingStudentData(null);
            }}
            student={editingStudentData}
            onUpdate={(data: Partial<Student>) => handleUpdateStudent(data)}
            onDelete={handleDeleteStudent}
        />
      )}
    </div>
  );
}
