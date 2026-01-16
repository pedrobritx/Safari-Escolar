import React, { useState } from 'react';
import { X, Pencil, Trash2, Plus, Check, ArrowLeft } from 'lucide-react';
import { FeedbackItem } from './FeedbackModal';

interface FeedbackEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  positiveBehaviors: FeedbackItem[];
  negativeBehaviors: FeedbackItem[];
  onUpdateBehaviors: (type: 'positive' | 'negative', behaviors: FeedbackItem[]) => void;
}

const EMOJI_LIST = [
  '👍', '👎', '⭐', '🌟', '💫', '🔥', '💡', '❤️', '🤝', '🎯', '🙋', '💪', '🧩', '🚀',
  '🏆', '🥇', '📚', '📝', '🎨', '🎭', '🎼', '⚽', '🏀', '🦠', '🧼', '🗣️', '🚫', '⏰',
  '🐢', '🤐', '🎮', '📵', '😴', '🤡', '🌪️', '📢', '🤬', '👊', '🤥', '🤧'
];

export default function FeedbackEditorModal({ 
  isOpen, 
  onClose,
  onBack,
  positiveBehaviors, 
  negativeBehaviors,
  onUpdateBehaviors 
}: FeedbackEditorModalProps) {
  const [activeTab, setActiveTab] = useState<'positive' | 'negative'>('positive');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [editLabel, setEditLabel] = useState('');
  const [editIcon, setEditIcon] = useState('');
  const [editScore, setEditScore] = useState(1);
  const [isCreating, setIsCreating] = useState(false);

  if (!isOpen) return null;

  const currentList = activeTab === 'positive' ? positiveBehaviors : negativeBehaviors;

  const handleStartEdit = (item: FeedbackItem) => {
    setEditingId(item.id);
    setDeletingId(null);
    setEditLabel(item.label);
    setEditIcon(item.icon);
    setEditScore(Math.abs(item.points));
    setIsCreating(false);
  };

  const handleStartCreate = () => {
    setEditingId('new');
    setDeletingId(null);
    setEditLabel('');
    setEditIcon(activeTab === 'positive' ? '👍' : '👎');
    setEditScore(1);
    setIsCreating(true);
  };

  const handleSave = () => {
    if (!editLabel.trim()) return;

    const points = activeTab === 'positive' ? editScore : -editScore;

    const newItem: FeedbackItem = {
      id: isCreating ? Date.now().toString() : editingId!,
      label: editLabel,
      icon: editIcon,
      points: points
    };

    let updatedList;
    if (isCreating) {
      updatedList = [...currentList, newItem];
    } else {
      updatedList = currentList.map(item => item.id === editingId ? newItem : item);
    }

    onUpdateBehaviors(activeTab, updatedList);
    setEditingId(null);
    setIsCreating(false);
  };

  const handleInitiateDelete = (id: string) => {
    setDeletingId(id);
    setEditingId(null);
  }

  const handleConfirmDelete = (id: string) => {
    const updatedList = currentList.filter(item => item.id !== id);
    onUpdateBehaviors(activeTab, updatedList);
    setDeletingId(null);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg border-4 border-[#F0B000] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header - Yellow for Edit Mode */}
        <div className="bg-[#F0B000] p-4 flex justify-between items-center border-b-2 border-[#CA9400] relative transition-colors">
           <div className="w-full text-center">
             <h3 className="text-xl font-black text-black uppercase tracking-wider">EDITAR FEEDBACK</h3>
           </div>
           <button 
             onClick={onClose}
             className="btn btn-accent p-2 rounded-lg absolute right-4"
           >
             <X size={20} strokeWidth={3} />
           </button>
        </div>

        {/* Navigation & Tabs */}
        <div className="bg-[#F3F4F6] p-2 flex gap-2">
            {/* Back Button - Handles "Back to List" if editing, or "Back to Feedback" if in list */}
            <button
                onClick={() => {
                  if (editingId) {
                    setEditingId(null);
                    setIsCreating(false);
                  } else {
                    onBack();
                  }
                }}
                className="btn bg-white border-gray-300 text-gray-600 w-12 flex-none flex items-center justify-center rounded-xl shadow-sm hover:bg-gray-50"
                title="Voltar"
            >
                <ArrowLeft size={24} strokeWidth={2.5} />
            </button>

            {/* Tabs */}
            <div className="flex-1 flex gap-2">
                <button
                    onClick={() => { setActiveTab('positive'); setEditingId(null); setDeletingId(null); }}
                    className={`flex-1 btn rounded-xl transition-all uppercase ${
                    activeTab === 'positive' 
                        ? 'bg-[var(--safari-green)] text-white border-[#365314] shadow-sm' 
                        : 'bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200'
                    }`}
                >
                    Positivo
                </button>
                <button
                    onClick={() => { setActiveTab('negative'); setEditingId(null); setDeletingId(null); }}
                    className={`flex-1 btn rounded-xl transition-all uppercase ${
                    activeTab === 'negative' 
                        ? 'bg-[var(--safari-orange)] text-white border-[#9A3412] shadow-sm' 
                        : 'bg-gray-100 border-gray-300 text-gray-500 hover:bg-gray-200'
                    }`}
                >
                    Construtivo
                </button>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-[#FAF9F6] overflow-y-auto h-[calc(60vh+3.5rem)] custom-scrollbar">
          
          {!editingId ? (
            /* LIST MODE */
            <>
              <div className="space-y-3 mb-6">
                {currentList.map((item) => (
                  <div key={item.id} className={`flex items-center justify-between bg-white p-3 px-4 rounded-xl border-2 border-gray-200 border-b-4 hover:border-gray-300 transition-all ${deletingId === item.id ? 'border-orange-500 bg-orange-50 !border-b-2 translate-y-0.5' : ''}`}>
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-2xl border border-gray-200">
                          {item.icon}
                      </div>
                      <span className="font-bold text-black text-lg flex-1 truncate">{item.label}</span>
                      <div className="bg-gray-300 text-gray-600 font-bold px-3 py-1 rounded-lg text-sm">
                        {item.points > 0 ? '+' : ''}{item.points}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      {deletingId === item.id ? (
                        <>
                          <button 
                            onClick={() => handleConfirmDelete(item.id)} 
                            className="btn bg-[var(--safari-orange)] text-white p-2 rounded-lg" 
                            title="Confirmar"
                          >
                            <Check size={18} />
                          </button>
                          <button 
                            onClick={() => setDeletingId(null)} 
                            className="btn bg-gray-400 text-white p-2 rounded-lg" 
                            title="Cancelar"
                          >
                            <X size={18} />
                          </button>
                        </>
                      ) : (
                        <>
                          <button 
                            onClick={() => handleStartEdit(item)} 
                            className="btn bg-amber-400 border-amber-600 text-white p-2 rounded-lg hover:bg-amber-500" 
                            title="Editar"
                          >
                            <Pencil size={18} />
                          </button>
                          <button 
                            onClick={() => handleInitiateDelete(item.id)} 
                            className="btn bg-amber-400 border-amber-600 text-white p-2 rounded-lg hover:bg-amber-500" 
                            title="Excluir"
                          >
                            <Trash2 size={18} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {!deletingId && (
                <button
                  onClick={handleStartCreate}
                  className="w-full py-4 border-2 border-dashed border-gray-400 rounded-xl text-gray-500 font-bold hover:bg-white hover:border-gray-500 hover:text-gray-700 transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  <Plus size={24} /> Adicionar Novo
                </button>
              )}
            </>
          ) : (
            /* FORM MODE (In-Place) */
            <div className="animate-in fade-in slide-in-from-right-4 duration-200">
               <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-gray-200"> 
                  <h4 className="font-black text-gray-700 mb-6 uppercase tracking-wide text-center border-b pb-2">
                    {isCreating ? 'Criar Novo Item' : 'Editando Item'}
                  </h4>

                  <div className="flex flex-col gap-6">
                      {/* Icon Grid */}
                      <div>
                          <label className="block text-xs font-bold text-gray-400 mb-2 uppercase">Ícone</label>
                          <div className="flex flex-wrap gap-2 justify-center max-h-40 overflow-y-auto custom-scrollbar p-2 bg-gray-50 rounded-xl border border-gray-100">
                              {EMOJI_LIST.map(emoji => (
                                  <button
                                      key={emoji}
                                      onClick={() => setEditIcon(emoji)}
                                      className={`text-3xl w-12 h-12 flex-none rounded-xl hover:bg-yellow-50 transition-all flex items-center justify-center ${editIcon === emoji ? 'bg-yellow-100 ring-2 ring-yellow-500 scale-110 shadow-sm' : 'bg-white border border-gray-100'}`}
                                  >
                                      {emoji}
                                  </button>
                              ))}
                          </div>
                      </div>

                      {/* Inputs */}
                      <div className="space-y-4">
                          <div>
                              <label className="block text-xs font-bold text-gray-400 mb-1 uppercase">Nome</label>
                              <input
                                  type="text"
                                  value={editLabel}
                                  onChange={(e) => setEditLabel(e.target.value)}
                                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-yellow-500 outline-none font-bold text-lg transition-colors"
                                  placeholder="Nome do comportamento..."
                                  autoFocus
                              />
                          </div>
                          <div>
                              <label className="block text-xs font-bold text-gray-400 mb-1 uppercase">Pontos</label>
                              <div className="flex items-center gap-3">
                                    <button 
                                        onClick={() => setEditScore(Math.max(1, editScore - 1))}
                                        className="w-12 h-12 rounded-xl bg-gray-100 font-black text-xl hover:bg-gray-200 border-b-4 border-gray-300 active:border-b-0 active:translate-y-1 transition-all"
                                    >-</button>
                                    <div className="flex-1 flex justify-center">
                                      <span className={`text-4xl font-black ${activeTab === 'positive' ? 'text-[var(--safari-green)]' : 'text-[var(--safari-orange)]'}`}>
                                          {editScore}
                                      </span>
                                    </div>
                                    <button 
                                        onClick={() => setEditScore(Math.min(5, editScore + 1))}
                                        className="w-12 h-12 rounded-xl bg-gray-100 font-black text-xl hover:bg-gray-200 border-b-4 border-gray-300 active:border-b-0 active:translate-y-1 transition-all"
                                    >+</button>
                              </div>
                          </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4 border-t mt-2">
                          <button
                              onClick={() => { setEditingId(null); setIsCreating(false); }}
                              className="flex-1 py-3 text-gray-500 font-bold hover:bg-gray-100 rounded-xl transition-colors uppercase border-2 border-transparent hover:border-gray-200"
                          >
                              Cancelar
                          </button>
                          <button
                              onClick={handleSave}
                              className="flex-[2] py-3 bg-[var(--safari-green)] text-white font-bold rounded-xl hover:brightness-110 shadow-md border-b-4 border-[#365314] active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 uppercase"
                          >
                              <Check size={20} /> Salvar
                          </button>
                      </div>
                  </div>
               </div>
            </div>
          )}
        </div>


      </div>
    </div>
  );
}
