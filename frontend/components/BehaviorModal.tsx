import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export interface Behavior {
  id: string;
  label: string;
  icon: string;
  points: number;
}

interface BehaviorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBehavior: (behavior: string, type: 'positive' | 'negative') => void;
  studentName: string;
  positiveBehaviors: Behavior[];
  negativeBehaviors: Behavior[];
}

export default function BehaviorModal({ isOpen, onClose, onSelectBehavior, studentName, positiveBehaviors, negativeBehaviors }: BehaviorModalProps) {
  const [activeTab, setActiveTab] = useState<'positive' | 'negative'>('positive');

  useEffect(() => {
    if (isOpen) {
      setActiveTab('positive'); // Reset to positive when opening
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentBehaviors = activeTab === 'positive' ? positiveBehaviors : negativeBehaviors;
  const themeColor = activeTab === 'positive' ? 'green' : 'orange'; 
  const currentBorderColor = activeTab === 'positive' ? 'border-green-500' : 'border-[#EA580C]';
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-lg border-4 ${currentBorderColor} overflow-hidden animate-in fade-in zoom-in duration-200`}>
        
        {/* Header - Unified "Feedback" Title */}
        <div className={`bg-green-500 p-4 flex justify-between items-center border-b-2 border-green-600`}>
           <div className="w-full text-center">
             <h3 className="text-xl font-black text-white uppercase tracking-wider">FEEDBACK</h3>
           </div>
           <button 
             onClick={onClose}
             className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors absolute right-4"
           >
             <X size={24} />
           </button>
        </div>

        {/* Tabs */}
        <div className="flex p-2 gap-2 bg-[#F3F4F6]">
          <button
            onClick={() => setActiveTab('positive')}
            className={`flex-1 py-3 font-black text-white rounded-xl border-b-4 transition-all uppercase ${
              activeTab === 'positive' 
                ? 'bg-[#0092FA] border-[#0070C0] shadow-sm' 
                : 'bg-gray-300 border-gray-400 text-gray-500 hover:bg-gray-400'
            }`}
          >
            Positivo
          </button>
          <button
            onClick={() => setActiveTab('negative')}
            className={`flex-1 py-3 font-black text-white rounded-xl border-b-4 transition-all uppercase ${
              activeTab === 'negative' 
                ? 'bg-[#F59E0B] border-[#D97706] shadow-sm' 
                : 'bg-gray-300 border-gray-400 text-gray-500 hover:bg-gray-400'
            }`}
          >
            Construtivo
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-[#FAF9F6] h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {currentBehaviors.map((behavior) => (
              <button
                key={behavior.id}
                onClick={() => onSelectBehavior(behavior.label, activeTab)}
                className={`flex flex-col items-center justify-center bg-white border-2 border-[var(--color-border)] rounded-xl p-4 hover:shadow-lg transition-all group hover:scale-105 ${activeTab === 'positive' ? 'hover:border-green-500 hover:bg-green-50' : 'hover:border-orange-500 hover:bg-orange-50'}`}
              >
                <div className={`${activeTab === 'positive' ? 'bg-blue-50' : 'bg-orange-50'} w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3 group-hover:scale-110 transition-transform`}>
                  {behavior.icon}
                </div>
                <span className="font-bold text-primary text-sm text-center line-clamp-2">{behavior.label}</span>
                <span className={`text-xs font-bold mt-1 ${activeTab === 'positive' ? 'text-green-600' : 'text-orange-600'}`}>
                  {activeTab === 'positive' ? '+' : ''}{behavior.points}
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

      </div>
    </div>
  );
}
