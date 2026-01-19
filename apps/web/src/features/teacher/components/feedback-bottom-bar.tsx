import React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { FeedbackCategory, FeedbackTemplate } from "../types/feedback-types";

interface FeedbackBottomBarProps {
  templates: FeedbackTemplate[];
  selectedTemplateId: string | null;
  onSelectTemplate: (id: string) => void;
  noteEnabled: boolean;
  onToggleNote: (enabled: boolean) => void;
  currentCategory: FeedbackCategory;
  onSelectCategory: (category: FeedbackCategory) => void;
  onOpenManager: () => void;
}

export function FeedbackBottomBar({
  templates,
  selectedTemplateId,
  onSelectTemplate,
  noteEnabled,
  onToggleNote,
  currentCategory,
  onSelectCategory,
  onOpenManager,
}: FeedbackBottomBarProps) {
  const filteredTemplates = templates.filter((t) => t.category === currentCategory);

  return (
    <div className="fixed bottom-20 left-4 right-4 md:static md:w-full md:mx-0 z-40">
      <GlassPanel variant="strong" className="p-3 shadow-2xl flex flex-col gap-3 border-[var(--primary)] border-2">
        {/* Category Switcher */}
        <div className="flex bg-[var(--surface)] rounded-[var(--radius-md)] p-1">
          <button
            className={`flex-1 py-1 px-3 rounded-[var(--radius-sm)] text-sm font-semibold transition-all ${
              currentCategory === "positive"
                ? "bg-[var(--green-100)] text-[var(--secondary)] shadow-sm"
                : "text-[var(--text-muted)] hover:bg-black/5"
            }`}
            onClick={() => onSelectCategory("positive")}
          >
            Positivo
          </button>
          <button
            className={`flex-1 py-1 px-3 rounded-[var(--radius-sm)] text-sm font-semibold transition-all ${
              currentCategory === "improvement"
                ? "bg-[var(--orange-100)] text-[var(--accent)] shadow-sm"
                : "text-[var(--text-muted)] hover:bg-black/5"
            }`}
            onClick={() => onSelectCategory("improvement")}
          >
            Melhoria
          </button>
        </div>

        {/* Template List */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {filteredTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => onSelectTemplate(template.id)}
              className={`
                flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-[var(--radius-md)] border text-sm font-medium transition-all
                ${selectedTemplateId === template.id
                  ? currentCategory === 'positive' 
                    ? "bg-[var(--green-50)] border-[var(--secondary)] text-[var(--secondary)] ring-1 ring-[var(--secondary)]"
                    : "bg-[var(--orange-50)] border-[var(--accent)] text-[var(--accent)] ring-1 ring-[var(--accent)]"
                  : "bg-[var(--surface)] border-transparent hover:bg-black/5"
                }
              `}
            >
              <span>{template.icon}</span>
              <span>{template.label}</span>
            </button>
          ))}
        </div>

        {/* Tools and Toggles */}
        <div className="flex items-center justify-between pt-1 border-t border-black/5">
           <label className="flex items-center gap-2 text-sm text-[var(--text-muted)] cursor-pointer select-none">
             <input 
               type="checkbox" 
               checked={noteEnabled} 
               onChange={(e) => onToggleNote(e.target.checked)}
               className="rounded border-gray-300 text-[var(--primary)] focus:ring-[var(--primary)]"
             />
             Adicionar anotação
           </label>
           
           <Button variant="ghost" size="sm" onClick={onOpenManager} className="text-xs h-8">
             ⚙️ Gerenciar
           </Button>
        </div>
      </GlassPanel>
    </div>
  );
}
