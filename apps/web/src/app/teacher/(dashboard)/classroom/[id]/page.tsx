"use client";

import { useState, use, useEffect } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/back-button";
import { StudentTile } from "@/features/teacher/components/student-tile";
import { AttendanceChip, AttendanceStatus } from "@/features/teacher/components/attendance-chip";

// Feedback Templates (Mock)
import { FeedbackCategory, FeedbackTemplate } from "@/features/teacher/types/feedback-types";
import { FeedbackBottomBar } from "@/features/teacher/components/feedback-bottom-bar";
import { StudentFeedbackModal } from "@/features/teacher/components/student-feedback-modal";
import { FeedbackTemplateManager } from "@/features/teacher/components/feedback-template-manager";

const INITIAL_TEMPLATES: FeedbackTemplate[] = [
  { id: "1", label: "Participação", icon: "✋", points: 1, category: "positive" },
  { id: "2", label: "Colaboração", icon: "🤝", points: 1, category: "positive" },
  { id: "3", label: "Criatividade", icon: "🎨", points: 1, category: "positive" },
  { id: "4", label: "Foco", icon: "🎯", points: 1, category: "positive" },
  { id: "5", label: "Conversa", icon: "🗣️", points: -1, category: "improvement" },
  { id: "6", label: "Atraso", icon: "⏰", points: -1, category: "improvement" },
];

interface Student {
    id: number;
    name: string;
    avatar: string;
}

const AVATARS = ["🦒", "🦁", "zebra", "🐘", "🐒", "🦜", "🐊", "🐢", "🦊", "🐼"];

export default function ClassDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [viewMode, setViewMode] = useState<"attendance" | "feedback">("attendance");
  
  // Replaced mock generation with state and fetch
  const [currentStudents, setCurrentStudents] = useState<Student[]>([]);
  const [isLoadingStudents, setIsLoadingStudents] = useState(true);

  // Attendance State
  const [attendanceMode, setAttendanceMode] = useState<AttendanceStatus>("present");
  const [studentStatus, setStudentStatus] = useState<Record<number, AttendanceStatus>>({});
  const [studentPoints, setStudentPoints] = useState<Record<number, number>>({});

  // Feedback State
  const [templates, setTemplates] = useState<FeedbackTemplate[]>(INITIAL_TEMPLATES);
  const [modalOpen, setModalOpen] = useState(false);
  const [managerOpen, setManagerOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(null);

  // Fetch Students from API
  useEffect(() => {
    const fetchStudents = async () => {
        setIsLoadingStudents(true);
        try {
            const res = await fetch(`/api/students/?classroom=${id}`, {
              credentials: "include",
            });
            if (res.ok) {
                const data = await res.json();
                // Map backend student to UI Student
                const mapped = data.map((s: any, idx: number) => ({
                    id: s.id,
                    name: s.display_name,
                    avatar: AVATARS[idx % AVATARS.length] // Deterministic avatar based on index
                }));
                setCurrentStudents(mapped);
                
                // Initialize status
                const initialStatus: Record<number, AttendanceStatus> = {};
                mapped.forEach((s: any) => initialStatus[s.id] = "present");
                setStudentStatus(initialStatus);
            }
        } catch (error) {
            console.error("Failed to fetch students", error);
        } finally {
            setIsLoadingStudents(false);
        }
    };
    fetchStudents();
  }, [id]);

  // Template Management Handlers
  const handleAddTemplate = (template: Omit<FeedbackTemplate, "id">) => {
    const newTemplate = { ...template, id: Math.random().toString(36).substr(2, 9) };
    setTemplates([...templates, newTemplate]);
  };

  const handleEditTemplate = (id: string, updates: Partial<FeedbackTemplate>) => {
    setTemplates(templates.map(t => t.id === id ? { ...t, ...updates } : t));
  };

  const handleDeleteTemplate = (id: string) => {
    setTemplates(templates.filter(t => t.id !== id));
  };

  const handleStudentClick = (studentId: number) => {
    if (viewMode === "attendance") {
        setStudentStatus((prev) => {
            const currentStatus = prev[studentId];
            if (currentStatus === attendanceMode) {
                 // Toggle off if same status (optional, or stay same)
                 // Let's just keep strict assignment for now or maybe toggle to 'present' if 'absent'?
                 // The original code removed the key, effectively resetting?
                 // Let's stick to assigning the current mode.
                 if (currentStatus === attendanceMode) return prev; // No change?
                 return { ...prev, [studentId]: attendanceMode };
            }
            return {
                ...prev,
                [studentId]: attendanceMode,
            };
        });
    } else {
        setSelectedStudentId(studentId);
        setModalOpen(true);
    }
  };

  const handleApplyFeedback = (template: FeedbackTemplate, note?: string) => {
    if (selectedStudentId) {
        setStudentPoints(prev => ({
            ...prev,
            [selectedStudentId]: (prev[selectedStudentId] || 0) + template.points
        }));
        console.log(`Applied ${template.label} to student ${selectedStudentId}${note ? ` with note: ${note}` : ''}`);
    }
  };

  const handleMarkAll = () => {
    const newStatus: Record<number, AttendanceStatus> = {};
    currentStudents.forEach((s) => {
      newStatus[s.id] = "present";
    });
    setStudentStatus(newStatus);
  };

  const currentCount = Object.values(studentStatus).filter(s => s === "present").length;

  return (
    <div className="flex flex-col gap-4 pb-60 relative">
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-2">
            <BackButton href="/teacher/classroom" />
         </div>
         
         <div className="flex bg-[var(--surface)] p-1 rounded-full border">
            <button 
                onClick={() => setViewMode("attendance")}
                className={`py-1 px-3 text-xs font-bold rounded-full transition-all ${viewMode === 'attendance' ? 'bg-[var(--primary)] text-white' : 'text-[var(--text-muted)]'}`}
            >
                Chamada
            </button>
            <button 
                onClick={() => setViewMode("feedback")}
                className={`py-1 px-3 text-xs font-bold rounded-full transition-all ${viewMode === 'feedback' ? 'bg-[var(--primary)] text-white' : 'text-[var(--text-muted)]'}`}
            >
                Feedback
            </button>
         </div>
      </div>

      <GlassPanel className="p-4 flex justify-between items-center rounded-[var(--radius-lg)]">
        <div>
           <h2 className="font-bold text-xl">Turma {id}</h2>
           <p className="text-sm text-[var(--text-muted)]">
               {viewMode === 'attendance' ? 'Chamada em andamento' : 'Enviar Feedback'}
           </p>
        </div>
        <div className="text-right">
           <span className="block text-2xl font-bold text-[var(--primary)]">{currentCount}/{currentStudents.length}</span>
           <span className="text-xs">Presentes</span>
        </div>
      </GlassPanel>

      {isLoadingStudents ? (
          <div className="text-center py-12 text-[var(--text-muted)]">Carregando alunos...</div>
      ) : currentStudents.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-[var(--border)] rounded-xl">
            <p className="text-[var(--text-muted)]">Nenhum aluno nesta turma ainda.</p>
          </div>
      ) : (
          <div className="grid grid-cols-3 gap-3">
            {currentStudents.map((student) => (
              <StudentTile
                key={student.id}
                name={student.name}
                avatar={student.avatar}
                status={studentStatus[student.id]}
                points={studentPoints[student.id]}
                onClick={() => handleStudentClick(student.id)}
              />
            ))}
          </div>
      )}

      {viewMode === 'attendance' ? (
        <div className="fixed bottom-20 left-4 right-4 md:static md:w-full md:mx-0 z-40">
            <GlassPanel variant="strong" className="p-3 shadow-2xl flex flex-col gap-3 border-[var(--primary)] border-2">
            <div className="flex justify-between items-center bg-[var(--surface)] p-1 rounded-[var(--radius-md)] relative">
                {(["present", "late", "absent"] as const).map((mode) => (
                    <AttendanceChip 
                    key={mode} 
                    status={mode} 
                    selected={attendanceMode === mode} 
                    onClick={() => setAttendanceMode(mode)}
                    />
                ))}
            </div>
            
            <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="flex-1" onClick={handleMarkAll}>
                    Todos Presentes
                </Button>
                <Button variant="primary" size="sm" className="flex-[2]">
                    Salvar Chamada
                </Button>
            </div>
            </GlassPanel>
        </div>
      ) : (
          <FeedbackBottomBar
             onOpenManager={() => setManagerOpen(true)}
          />
      )}

      {selectedStudentId && (
        <StudentFeedbackModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            studentName={currentStudents.find(s => s.id === selectedStudentId)?.name || ""}
            studentAvatar={currentStudents.find(s => s.id === selectedStudentId)?.avatar || ""}
            templates={templates}
            onApplyFeedback={handleApplyFeedback}
        />
      )}

      <FeedbackTemplateManager
        isOpen={managerOpen}
        onClose={() => setManagerOpen(false)}
        templates={templates}
        onAdd={handleAddTemplate}
        onEdit={handleEditTemplate}
        onDelete={handleDeleteTemplate}
      />

    </div>
  );
}
