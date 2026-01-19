import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FeedbackTemplate, FeedbackCategory } from "../types/feedback-types";

interface StudentFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  studentAvatar: string;
  templates: FeedbackTemplate[];
  onApplyFeedback: (template: FeedbackTemplate, note?: string) => void;
}

export function StudentFeedbackModal({
  isOpen,
  onClose,
  studentName,
  studentAvatar,
  templates,
  onApplyFeedback,
}: StudentFeedbackModalProps) {
  const [activeTab, setActiveTab] = useState<FeedbackCategory>("positive");
  const [note, setNote] = useState("");
  const [showNoteInput, setShowNoteInput] = useState(false);

  // Filter templates based on active tab
  const filteredTemplates = useMemo(() => {
    return templates.filter((t) => t.category === activeTab);
  }, [templates, activeTab]);

  const handleTemplateClick = (template: FeedbackTemplate) => {
    if (showNoteInput && note.trim()) {
        onApplyFeedback(template, note);
    } else {
        onApplyFeedback(template, showNoteInput ? note : undefined);
    }
    // Reset state after feedback
    setNote("");
    setShowNoteInput(false); 
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-[var(--surface)] border-[var(--border)] sm:rounded-[var(--radius-lg)]">
        <DialogHeader>
          <div className="flex items-center gap-3">
             <div className="text-4xl">{studentAvatar}</div>
             <DialogTitle className="text-xl">Feedback para {studentName}</DialogTitle>
          </div>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex p-1 bg-[var(--bg)] rounded-full border border-[var(--border)] mb-4">
          <button
            className={`flex-1 py-2 text-sm font-medium rounded-full transition-all ${
              activeTab === "positive"
                ? "bg-[var(--green-100)] text-[var(--green-700)] shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
            onClick={() => setActiveTab("positive")}
          >
            Positivo
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium rounded-full transition-all ${
              activeTab === "improvement"
                ? "bg-[var(--orange-100)] text-[var(--orange-700)] shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
            onClick={() => setActiveTab("improvement")}
          >
            Melhoria
          </button>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4 max-h-[40vh] overflow-y-auto p-1">
            {filteredTemplates.map((template) => (
                <button
                    key={template.id}
                    onClick={() => handleTemplateClick(template)}
                    className={`flex flex-col items-center justify-center p-3 rounded-[var(--radius-md)] border-2 transition-all hover:scale-105 active:scale-95 gap-2
                        ${activeTab === "positive" ? "border-[var(--green-100)] bg-[var(--green-50)] hover:border-[var(--green-300)]" : "border-[var(--orange-100)] bg-[var(--orange-50)] hover:border-[var(--orange-300)]"}
                    `}
                >
                    <span className="text-2xl">{template.icon}</span>
                    <span className="text-xs font-semibold text-center leading-tight">{template.label}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${activeTab === 'positive' ? 'bg-[var(--green-200)] text-[var(--green-800)]' : 'bg-[var(--orange-200)] text-[var(--orange-800)]'}`}>
                        {template.points > 0 ? `+${template.points}` : template.points}
                    </span>
                </button>
            ))}
        </div>

        {/* Optional Note */}
        <div className="space-y-2">
            {!showNoteInput ? (
                <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-[var(--text-muted)]"
                    onClick={() => setShowNoteInput(true)}
                >
                    + Adicionar anotação (opcional)
                </Button>
            ) : (
                <div className="animate-in fade-in slide-in-from-top-2">
                    <Textarea
                        placeholder="Escreva uma observação..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        className="min-h-[80px]"
                    />
                </div>
            )}
        </div>

      </DialogContent>
    </Dialog>
  );
}
