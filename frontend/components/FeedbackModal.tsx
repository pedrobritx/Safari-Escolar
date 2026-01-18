import React, { useState, useEffect } from 'react';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';

export interface FeedbackItem {
  id: string;
  label: string;
  icon: string;
  points: number;
}

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFeedback: (feedback: string, type: 'positive' | 'negative') => void;
  onEditFeedback: () => void;
  studentName: string;
  positiveFeedbacks: FeedbackItem[];
  negativeFeedbacks: FeedbackItem[];
}

export default function FeedbackModal({ isOpen, onClose, onSelectFeedback, onEditFeedback, studentName, positiveFeedbacks, negativeFeedbacks }: FeedbackModalProps) {
  const [activeTab, setActiveTab] = useState<'positive' | 'negative'>('positive');

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setActiveTab('positive'), 0); // Reset to positive when opening, async to avoid lint error
    }
  }, [isOpen]);

  const currentFeedbacks = activeTab === 'positive' ? positiveFeedbacks : negativeFeedbacks;
  const currentBorderColor = activeTab === 'positive' ? 'border-[#4D7C0F]' : 'border-[#EA580C]';
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Feedback: ${studentName}`} // Improved title context
      maxWidth="lg"
      borderColorClass={currentBorderColor}
      // Using standard header for consistency, but keeping the border color to indicate state.
    >
      
        {/* Tabs */}
        <div className="flex p-2 gap-2 bg-[#F3F4F6]">
          <button
            onClick={() => setActiveTab('positive')}
            className={`tab ${
              activeTab === 'positive' ? 'tab-positive' : 'tab-inactive'
            }`}
          >
            Positivo
          </button>
          <button
            onClick={() => setActiveTab('negative')}
            className={`tab ${
              activeTab === 'negative' ? 'tab-negative' : 'tab-inactive'
            }`}
          >
            Construtivo
          </button>
          <Button
            variant="ghost"
            onClick={onEditFeedback}
            className="w-12 px-0 flex items-center justify-center bg-white"
            title="Configurar Feedback"
          >
            ⚙️
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 bg-[var(--safari-khaki)] h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {currentFeedbacks.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectFeedback(item.label, activeTab)}
                className={`card-interactive flex flex-col items-center justify-center p-4 group active:translate-y-1 active:shadow-[var(--neu-shadow-sm)] ${activeTab === 'positive' ? 'hover:border-[var(--safari-green)] hover:bg-[var(--safari-green-light)]' : 'hover:border-[var(--safari-orange)] hover:bg-orange-50'}`}
              >
                <div className={`${activeTab === 'positive' ? 'bg-[var(--safari-green-light)]' : 'bg-orange-50'} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className="font-bold text-[var(--safari-green)] text-sm text-center line-clamp-2">{item.label}</span>
                <span className={`text-xs font-bold mt-1 ${activeTab === 'positive' ? 'text-[var(--safari-green)]' : 'text-[var(--safari-orange)]'}`}>
                  {activeTab === 'positive' ? '+' : ''}{item.points}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer with Student Name */}
        <div className="p-3 bg-[#F3F4F6] border-t-2 border-[var(--neu-border-color)] text-center">
            <span className="text-gray-500 font-bold text-sm">Aluno: </span>
            <span className="text-[var(--safari-green)] font-black text-lg">{studentName}</span>
        </div>

    </Modal>
  );
}
