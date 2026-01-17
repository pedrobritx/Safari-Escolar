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
            className={`flex-1 btn rounded-xl transition-all uppercase ${
              activeTab === 'positive' 
                ? 'bg-[#4D7C0F] text-white border-[#365314] shadow-sm' 
                : 'bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200'
            }`}
          >
            Positivo
          </button>
          <button
            onClick={() => setActiveTab('negative')}
            className={`flex-1 btn rounded-xl transition-all uppercase ${
              activeTab === 'negative' 
                ? 'bg-[var(--safari-orange)] text-white border-[#9A3412] shadow-sm' 
                : 'bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200'
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
        <div className="p-6 bg-[#FAF9F6] h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {currentFeedbacks.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectFeedback(item.label, activeTab)}
                className={`flex flex-col items-center justify-center bg-white border-2 border-b-4 rounded-xl p-4 transition-all group active:border-b-2 active:translate-y-1 ${activeTab === 'positive' ? 'border-gray-200 hover:border-green-500 hover:bg-green-50' : 'border-gray-200 hover:border-orange-500 hover:bg-orange-50'}`}
              >
                <div className={`${activeTab === 'positive' ? 'bg-green-50' : 'bg-orange-50'} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <span className="font-bold text-primary text-sm text-center line-clamp-2">{item.label}</span>
                <span className={`text-xs font-bold mt-1 ${activeTab === 'positive' ? 'text-[var(--safari-green)]' : 'text-[var(--safari-orange)]'}`}>
                  {activeTab === 'positive' ? '+' : ''}{item.points}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer with Student Name */}
        <div className="p-3 bg-gray-100 border-t-2 border-gray-200 text-center">
            <span className="text-gray-500 font-bold text-sm">Aluno: </span>
            <span className="text-primary font-black text-lg">{studentName}</span>
        </div>

    </Modal>
  );
}
