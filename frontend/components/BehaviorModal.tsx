import React from 'react';
import { X } from 'lucide-react';

interface BehaviorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBehavior: (behavior: string) => void;
  studentName: string;
  type: 'positive' | 'negative';
}

const POSITIVE_BEHAVIORS = [
  { id: 'helping', label: 'Ajudando Outros', icon: '🤝', points: 1 },
  { id: 'ontask', label: 'Na Tarefa', icon: '🎯', points: 1 },
  { id: 'participating', label: 'Participando', icon: '🙋', points: 1 },
  { id: 'persistence', label: 'Persistência', icon: '💪', points: 1 },
  { id: 'teamwork', label: 'Trabalho em Equipe', icon: '🧩', points: 1 },
  { id: 'workinghard', label: 'Trabalhando Duro', icon: '🚀', points: 1 },
];

const NEGATIVE_BEHAVIORS = [
  { id: 'no_collab', label: 'Não Colabora', icon: '🚫', points: -1 },
  { id: 'late_task', label: 'Tarefa Atrasada', icon: '⏰', points: -1 },
  { id: 'interrupting', label: 'Interrompendo Aula', icon: '🗣️', points: -1 },
];

export default function BehaviorModal({ isOpen, onClose, onSelectBehavior, studentName, type }: BehaviorModalProps) {
  if (!isOpen) return null;

  const behaviors = type === 'positive' ? POSITIVE_BEHAVIORS : NEGATIVE_BEHAVIORS;
  const themeColor = type === 'positive' ? 'green' : 'red';
  const borderColor = type === 'positive' ? 'border-green-500' : 'border-red-500';
  const bgColor = type === 'positive' ? 'bg-green-50' : 'bg-red-50';
  const title = type === 'positive' ? '🎉 Feedback Positivo' : '⚠️ Feedback Negativo';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-lg border-4 ${type === 'positive' ? 'border-[var(--color-secondary)]' : 'border-red-500'} overflow-hidden animate-in fade-in zoom-in duration-200`}>
        
        {/* Header */}
        <div className={`${type === 'positive' ? 'bg-[var(--color-secondary)]' : 'bg-red-100'} p-4 flex justify-between items-center border-b-2 border-[var(--color-border)]`}>
          <div>
            <h3 className="text-xl font-bold text-primary">{title}</h3>
            <p className="text-sm font-medium text-primary/80">Aluno: <span className="font-bold">{studentName}</span></p>
          </div>
          <button 
            onClick={onClose}
            className="bg-white/50 hover:bg-white text-primary p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-[#FAF9F6]">
          <h4 className="text-center text-primary font-bold mb-6 text-lg">Selecione uma habilidade:</h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {behaviors.map((behavior) => (
              <button
                key={behavior.id}
                onClick={() => onSelectBehavior(behavior.label)}
                className={`flex flex-col items-center justify-center bg-white border-2 border-[var(--color-border)] rounded-xl p-4 hover:shadow-lg hover:${borderColor} hover:${bgColor} transition-all group`}
              >
                <div className={`${type === 'positive' ? 'bg-blue-50' : 'bg-red-50'} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform`}>
                  {behavior.icon}
                </div>
                <span className="font-bold text-primary text-sm text-center">{behavior.label}</span>
                <span className={`text-xs font-bold ${type === 'positive' ? 'text-green-600' : 'text-red-600'} mt-1`}>
                  {type === 'positive' ? '+' : ''}{behavior.points}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
