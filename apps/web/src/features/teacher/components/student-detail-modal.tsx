"use client";

import { useState, useEffect, useCallback } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, TrendingUp, TrendingDown, MessageSquare, FileText, BarChart3, User, Save, Loader2 } from "lucide-react";
import { ANIMAL_EMOJIS } from "@/features/teacher/constants";
import { getCookie } from "@/lib/utils";
import { apiFetch } from "@/lib/api";

// Types
interface Student {
  id: string; // Changed to string (UUID)
  name: string;
  avatar: string;
  class: string;
  classId?: string; // ID for fetching data
}

interface GradeCategory {
  id: string;
  name: string;
  weight: number;
}

interface GradeItem {
  id: string;
  title: string;
  max_score: number;
  category: string; // category ID
}

interface GradeEntry {
  id: string;
  grade_item: string;
  score: number;
}

interface FeedbackHistoryItem {
  id: string;
  type: "positive" | "improvement";
  label: string;
  icon: string;
  points: number;
  date: string; // ISO string
  note?: string;
}

interface StudentDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student | null;
  onUpdate?: (updates: { animal_id?: string }) => void;
}

// Mock data
// ... (rest of mock data remains the same, assuming it's stable)

// Mock data
// ... (rest of mock data remains the same, assuming it's stable)



const MOCK_NOTES = [
  { id: "1", date: "19/01/2026", content: "Demonstrou grande interesse na atividade de ciências." },
  { id: "2", date: "15/01/2026", content: "Reunião com os pais marcada para próxima semana." },
];

type TabKey = "overview" | "grades" | "feedback" | "notes";

export function StudentDetailModal({ isOpen, onClose, student, onUpdate }: StudentDetailModalProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  // Gradebook State
  const [categories, setCategories] = useState<GradeCategory[]>([]);
  const [items, setItems] = useState<GradeItem[]>([]);
  const [entries, setEntries] = useState<Record<string, number>>({}); // itemId -> score
  const [isLoadingGrades, setIsLoadingGrades] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Feedback State
  const [feedbackHistory, setFeedbackHistory] = useState<FeedbackHistoryItem[]>([]);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  
  // Feedback total points calculated from history
  const totalPoints = feedbackHistory.reduce((sum, f) => sum + f.points, 0);

  // Fetch feedback
  const fetchFeedback = useCallback(async () => {
    if (!student?.id) return;
    setIsLoadingFeedback(true);
    try {
        const res = await apiFetch(`/api/feedback?student_id=${student.id}`);
        if (res.ok) {
            const data = await res.json();
            // Map API data to UI format
            const mapped = data.map((f: any) => ({
                id: f.id,
                type: f.type,
                label: f.label,
                icon: f.icon,
                points: f.points,
                date: new Date(f.created_at).toLocaleDateString('pt-BR'),
                note: f.note
            }));
            setFeedbackHistory(mapped);
        }
    } catch (error) {
        console.error("Failed to fetch feedback:", error);
    } finally {
        setIsLoadingFeedback(false);
    }
  }, [student?.id]);

  useEffect(() => {
     if (isOpen && student?.id) {
         fetchFeedback();
     }
  }, [isOpen, student?.id, fetchFeedback]);

  const handleDeleteFeedback = async (id: string) => {
      if (!confirm("Tem certeza que deseja excluir este feedback?")) return;
      try {
          const res = await apiFetch(`/api/feedback/${id}`, {
              method: "DELETE",
              headers: { "X-CSRFToken": getCookie("csrftoken") || "" }
          });
          if (res.ok) {
              setFeedbackHistory(prev => prev.filter(f => f.id !== id));
          } else {
              alert("Erro ao excluir feedback");
          }
      } catch (e) {
          console.error("Error deleting feedback", e);
      }
  };

  // Simple edit: for now just allow deleting to correct mistakes, or maybe prompt for new note?
  // The user asked for "edit/delete". Let's implemented a simple prompt for note update to verify "Edit".
  const handleEditNote = async (item: FeedbackHistoryItem) => {
      const newNote = prompt("Editar anotação:", item.note || "");
      if (newNote === null) return; // Cancelled
      
      try {
          const res = await apiFetch(`/api/feedback/${item.id}`, {
              method: "PATCH",
              headers: { 
                  "Content-Type": "application/json",
                  "X-CSRFToken": getCookie("csrftoken") || "" 
              },
              body: JSON.stringify({ note: newNote })
          });
          if (res.ok) {
              setFeedbackHistory(prev => prev.map(f => f.id === item.id ? { ...f, note: newNote } : f));
          } else {
              alert("Erro ao editar feedback");
          }
      } catch (e) {
          console.error("Error editing feedback", e);
      }
  };


  // Fetch grades when tab is active and we have student/class data
  const fetchGrades = useCallback(async () => {
    if (!student?.classId || !student?.id) return;
    
    setIsLoadingGrades(true);
    try {
      const [catsRes, itemsRes, entriesRes] = await Promise.all([
        apiFetch(`/api/grades/categories?classroom_id=${student.classId}`),
        apiFetch(`/api/grades/items?classroom_id=${student.classId}`),
        apiFetch(`/api/grades/entries?student_id=${student.id}`)
      ]);

      if (catsRes.ok && itemsRes.ok && entriesRes.ok) {
        const catsData = await catsRes.json();
        const itemsData = await itemsRes.json();
        const entriesData = await entriesRes.json();

        setCategories(catsData);
        setItems(itemsData);
        
        // Map entries to manageable state
        const entriesMap: Record<string, number> = {};
        entriesData.forEach((e: GradeEntry) => {
          entriesMap[e.grade_item] = parseFloat(e.score.toString());
        });
        setEntries(entriesMap);
      }
    } catch (error) {
      console.error("Failed to fetch grades:", error);
    } finally {
      setIsLoadingGrades(false);
    }
  }, [student?.classId, student?.id]);

  useEffect(() => {
    if (activeTab === "grades" && student?.classId && student?.id) {
       fetchGrades();
    }
  }, [activeTab, student, fetchGrades]);

  const handleSaveGrades = async () => {
    if (!student?.id) return;
    setIsSaving(true);
    
    try {
      // Prepare payload
      const payload = Object.entries(entries).map(([itemId, score]) => ({
        student: student.id,
        grade_item: itemId,
        score: score
      }));

      const res = await apiFetch("/api/grades/entries/bulk_update_grades", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken") || "" // Need a way to get CSRF
        },
        body: JSON.stringify(payload)
      }); 

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Failed to save grades");
      }
      
      // Optionally show success toast
    } catch (error) {
        console.error("Error saving grades:", error);
    } finally {
        setIsSaving(false);
    }
  };


  if (!student) return null;

  if (!student) return null;

  // Total points now calculated in state definition

  // const overallGradeAverage = MOCK_GRADES.reduce((sum, g) => sum + g.average, 0) / MOCK_GRADES.length; 
  // Calculate real average? For now, leave it or calculate from real entries if possible.
  // Let's placeholder it
  const overallGradeAverage = 0;

  const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
    { key: "overview", label: "Geral", icon: <User size={16} /> },
    { key: "grades", label: "Notas", icon: <BarChart3 size={16} /> },
    { key: "feedback", label: "Feedback", icon: <MessageSquare size={16} /> },
    { key: "notes", label: "Anotações", icon: <FileText size={16} /> },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-hidden flex flex-col bg-[var(--surface)] border-[var(--border)] sm:rounded-[var(--radius-lg)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-[var(--bg)] transition-colors z-10"
        >
          <X size={20} className="text-[var(--text-muted)]" />
        </button>

        {/* Header */}
        <DialogHeader className="pb-2 relative">
          <div className="flex items-center gap-4">
            <div className="relative">
                <button 
                  onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
                  className="text-5xl filter drop-shadow-md hover:scale-110 transition-transform cursor-pointer outline-none focus:scale-110"
                  aria-label="Alterar emoji"
                >
                    {student.avatar}
                </button>
                
                {/* Emoji Picker Popover */}
                {isEmojiPickerOpen && (
                    <>
                        <div 
                            className="fixed inset-0 z-10" 
                            onClick={() => setIsEmojiPickerOpen(false)} 
                        />
<div className="absolute top-full left-0 mt-2 p-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl shadow-xl z-20 grid grid-cols-5 gap-1 w-[280px] max-h-[300px] overflow-y-auto animate-in fade-in zoom-in-95 data-[side=bottom]:slide-in-from-top-2">
                             {ANIMAL_EMOJIS.map(emoji => (
                                 <button
                                    key={emoji}
                                    onClick={() => {
                                        onUpdate?.({ animal_id: emoji });
                                        setIsEmojiPickerOpen(false);
                                    }}
                                    className="text-2xl p-2 hover:bg-[var(--bg)] rounded-lg transition-colors"
                                 >
                                    {emoji}
                                 </button>
                             ))}
                        </div>
                    </>
                )}
            </div>
            <div>
              <DialogTitle className="text-xl">{student.name}</DialogTitle>
              <p className="text-sm text-[var(--text-muted)]">{student.class}</p>
            </div>
          </div>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex p-1 bg-[var(--bg)] rounded-full border border-[var(--border)] mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-full transition-all ${
                activeTab === tab.key
                  ? "bg-[var(--primary)] text-white shadow-sm"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-1">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-2">
              <div className="grid grid-cols-2 gap-3">
                <GlassPanel className="p-4 flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase text-[var(--text-muted)]">Pontos</span>
                  <span className={`text-2xl font-bold ${totalPoints >= 0 ? "text-[var(--secondary)]" : "text-[var(--accent)]"}`}>
                    {totalPoints > 0 ? "+" : ""}{totalPoints}
                  </span>
                </GlassPanel>
                <GlassPanel className="p-4 flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase text-[var(--text-muted)]">Média Geral</span>
                  <span className="text-2xl font-bold text-[var(--primary)]">{overallGradeAverage.toFixed(1)}</span>
                </GlassPanel>
              </div>
              <GlassPanel className="p-4 flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-[var(--text-muted)]">Frequência</span>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-[var(--secondary)]">92%</span>
                  <div className="flex-1 h-2 bg-[var(--bg)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{ width: "92%" }} />
                  </div>
                </div>
              </GlassPanel>
              <GlassPanel className="p-4 flex flex-col gap-2">
                  <span className="text-xs font-bold uppercase text-[var(--text-muted)]">Últimos Feedbacks</span>
                <div className="flex gap-2">
                  {feedbackHistory.slice(0, 4).map((f) => (
                    <div
                      key={f.id}
                      className={`flex items-center justify-center w-10 h-10 rounded-full text-lg ${
                        f.type === "positive" ? "bg-[var(--green-50)]" : "bg-[var(--orange-50)]"
                      }`}
                      title={`${f.label} (${f.points})`}
                    >
                      {f.icon}
                    </div>
                  ))}
                  {feedbackHistory.length === 0 && <span className="text-sm text-[var(--text-muted)]">Nenhum feedback.</span>}
                </div>
              </GlassPanel>
            </div>
          )}

          {/* Grades Tab */}
          {activeTab === "grades" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-2 h-full flex flex-col">
               <div className="flex justify-between items-center px-1">
                  <h3 className="text-sm font-medium text-[var(--text-muted)]">Boletim Escolar</h3>
                  <Button 
                    size="sm" 
                    onClick={handleSaveGrades}
                    disabled={isSaving}
                    className="gap-2"
                  >
                    {isSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
                    Salvar Notas
                  </Button>
               </div>

               {isLoadingGrades ? (
                   <div className="flex justify-center py-12">
                       <Loader2 className="animate-spin text-[var(--primary)]" />
                   </div>
               ) : categories.length === 0 ? (
                  <div className="text-center py-8 text-[var(--text-muted)] border-2 border-dashed border-[var(--border)] rounded-xl">
                    <BarChart3 size={32} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Nenhuma categoria de nota configurada para esta turma.</p>
                  </div>
               ) : (
                   <div className="space-y-6 pb-4">
                       {categories.map(cat => {
                           const catItems = items.filter(i => i.category === cat.id);
                           if (catItems.length === 0) return null;

                           return (
                               <div key={cat.id} className="space-y-2">
                                   <h4 className="text-xs font-bold uppercase text-[var(--text-muted)] tracking-wider ml-1">
                                       {cat.name} {cat.weight ? `(${cat.weight}%)` : ''}
                                   </h4>
                                   <GlassPanel className="p-1 overflow-hidden divide-y divide-[var(--border)]">
                                       {catItems.map(item => (
                                           <div key={item.id} className="flex items-center justify-between p-3 hover:bg-[var(--bg)] transition-colors">
                                               <div className="flex flex-col">
                                                   <span className="font-medium text-sm">{item.title}</span>
                                                   <span className="text-xs text-[var(--text-muted)]">Máx: {item.max_score}</span>
                                               </div>
                                               <div className="flex items-center gap-2">
                                                   <Input 
                                                       type="number" 
                                                       min="0"
                                                       max={item.max_score}
                                                       step="0.1"
                                                       className="w-20 text-right h-9 bg-[var(--surface)]"
                                                       value={entries[item.id] !== undefined ? entries[item.id] : ''}
                                                       onChange={(e) => {
                                                           const val = e.target.value === '' ? undefined : parseFloat(e.target.value);
                                                           if (val !== undefined && (val < 0 || val > item.max_score)) return; // Simple validation
                                                           
                                                           if (val !== undefined) {
                                                               setEntries(prev => ({ ...prev, [item.id]: val }));
                                                           } else {
                                                               const newEntries = { ...entries };
                                                               delete newEntries[item.id];
                                                               setEntries(newEntries);
                                                           }
                                                       }}
                                                   />
                                               </div>
                                           </div>
                                       ))}
                                   </GlassPanel>
                               </div>
                           );
                       })}
                   </div>
               )}
            </div>
          )}

          {/* Feedback Tab */}
          {activeTab === "feedback" && (
            <div className="space-y-3 animate-in fade-in slide-in-from-right-2">
            <div className="space-y-3 animate-in fade-in slide-in-from-right-2">
              {feedbackHistory.map((feedback) => (
                <GlassPanel
                  key={feedback.id}
                  className={`p-3 flex items-start gap-3 border-l-4 group relative ${
                    feedback.type === "positive"
                      ? "border-l-[var(--secondary)] bg-[var(--green-50)]"
                      : "border-l-[var(--accent)] bg-[var(--orange-50)]"
                  }`}
                >
                  <div className="text-2xl">{feedback.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-sm">{feedback.label}</span>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          feedback.type === "positive"
                            ? "bg-[var(--green-100)] text-[var(--green-700)]"
                            : "bg-[var(--orange-100)] text-[var(--orange-700)]"
                        }`}
                      >
                        {feedback.points > 0 ? "+" : ""}{feedback.points}
                      </span>
                    </div>
                    {feedback.note && (
                      <p className="text-xs text-[var(--text-muted)] mt-1">{feedback.note}</p>
                    )}
                    <p className="text-xs text-[var(--text-muted)] mt-1">{feedback.date}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity absolute right-2 top-2 bg-white/50 rounded-md p-1 shadow-sm backdrop-blur-sm">
                      <button 
                        onClick={() => handleEditNote(feedback)}
                        className="p-1 hover:bg-black/10 rounded" 
                        title="Editar anotação"
                      >
                         <FileText size={14} className="text-[var(--text-secondary)]" />
                      </button>
                      <button 
                        onClick={() => handleDeleteFeedback(feedback.id)}
                        className="p-1 hover:bg-red-100 rounded text-red-600"
                        title="Excluir"
                      >
                         <X size={14} />
                      </button>
                  </div>
                </GlassPanel>
              ))}
              {feedbackHistory.length === 0 && (
                  <div className="text-center py-8 text-[var(--text-muted)]">
                    <MessageSquare size={32} className="mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Nenhum feedback registrado.</p>
                  </div>
              )}
            </div>
            </div>
          )}

          {/* Notes Tab */}
          {activeTab === "notes" && (
            <div className="space-y-3 animate-in fade-in slide-in-from-right-2">
              {MOCK_NOTES.map((note) => (
                <GlassPanel key={note.id} className="p-4">
                  <p className="text-xs text-[var(--text-muted)] mb-1">{note.date}</p>
                  <p className="text-sm">{note.content}</p>
                </GlassPanel>
              ))}
              {MOCK_NOTES.length === 0 && (
                <div className="text-center py-8 text-[var(--text-muted)]">
                  <FileText size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Nenhuma anotação ainda</p>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
