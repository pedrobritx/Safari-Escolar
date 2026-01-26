import React, { useState } from 'react';
import { Pencil, Trash2, Plus, Check, ArrowLeft, X } from 'lucide-react';
import { FeedbackItem } from './FeedbackModal';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

interface FeedbackEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  positiveFeedbacks: FeedbackItem[];
  negativeFeedbacks: FeedbackItem[];
  onUpdateFeedbacks: (type: 'positive' | 'negative', feedbacks: FeedbackItem[]) => void;
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
  positiveFeedbacks, 
  negativeFeedbacks,
  onUpdateFeedbacks 
}: FeedbackEditorModalProps) {
  const [activeTab, setActiveTab] = useState<'positive' | 'negative'>('positive');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [editLabel, setEditLabel] = useState('');
  const [editIcon, setEditIcon] = useState('');
  const [editScore, setEditScore] = useState(1);
  const [isCreating, setIsCreating] = useState(false);

  // Helper to safely manipulate behaviors
  const currentList = activeTab === 'positive' ? positiveFeedbacks : negativeFeedbacks;

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

    onUpdateFeedbacks(activeTab, updatedList);
    setEditingId(null);
    setIsCreating(false);
  };

  const handleInitiateDelete = (id: string) => {
    setDeletingId(id);
    setEditingId(null);
  }

  const handleConfirmDelete = (id: string) => {
    const updatedList = currentList.filter(item => item.id !== id);
    onUpdateFeedbacks(activeTab, updatedList);
    setDeletingId(null);
  };

  const headerColorClass = "bg-[#F0B000] border-[#CA9400] text-black";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      headerColorClass={headerColorClass}
      title="EDITAR FEEDBACK"
      maxWidth="lg"
      borderColorClass="border-[#F0B000]"
    >
        {/* Navigation & Tabs */}
        <div className="bg-[#F3F4F6] p-2 flex gap-2">
            {/* Back Button */}
            <Button
                variant="ghost"
                onClick={() => {
                  if (editingId) {
                    setEditingId(null);
                    setIsCreating(false);
                  } else {
                    onBack();
                  }
                }}
                className="w-12 bg-white flex items-center justify-center p-0"
                title="Voltar"
            >
                <ArrowLeft size={24} strokeWidth={2.5} />
            </Button>

            {/* Tabs */}
            <div className="flex-1 flex gap-2">
                <button
                    onClick={() => { setActiveTab('positive'); setEditingId(null); setDeletingId(null); }}
                    className={`tab ${
                    activeTab === 'positive' ? 'tab-positive' : 'tab-inactive'
                    }`}
                >
                    Positivo
                </button>
                <button
                    onClick={() => { setActiveTab('negative'); setEditingId(null); setDeletingId(null); }}
                    className={`tab ${
                    activeTab === 'negative' ? 'tab-negative' : 'tab-inactive'
                    }`}
                >
                    Construtivo
                </button>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-[var(--safari-khaki)] overflow-y-auto h-[calc(60vh+3.5rem)] custom-scrollbar">
          
          {!editingId ? (
            /* LIST MODE */
            <>
              <div className="space-y-3 mb-6">
                {currentList.map((item) => (
                  <div key={item.id} className={`list-item ${deletingId === item.id ? 'list-item-anger' : ''}`}>
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-2xl border border-[var(--neu-border-color)]">
                          {item.icon}
                      </div>
                      <span className="font-bold text-black text-lg flex-1 truncate">{item.label}</span>
                      <div className="bg-gray-300 text-gray-600 font-bold px-3 py-1 rounded-[var(--neu-radius)] text-sm">
                        {item.points > 0 ? '+' : ''}{item.points}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-4">
                      {deletingId === item.id ? (
                        <>
                          <Button 
                            variant="accent"
                            onClick={() => handleConfirmDelete(item.id)} 
                            className="p-2"
                            title="Confirmar"
                          >
                            <Check size={18} />
                          </Button>
                          <Button 
                            variant="ghost"
                            onClick={() => setDeletingId(null)} 
                            className="p-2 bg-gray-400 text-white hover:bg-gray-500 border-gray-500"
                            title="Cancelar"
                          >
                            <X size={18} />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button 
                            onClick={() => handleStartEdit(item)} 
                            className="bg-amber-400 border-amber-600 hover:bg-amber-500 p-2" 
                            title="Editar"
                          >
                            <Pencil size={18} />
                          </Button>
                          <Button
                            onClick={() => handleInitiateDelete(item.id)} 
                            className="bg-amber-400 border-amber-600 hover:bg-amber-500 p-2"
                            title="Excluir"
                          >
                            <Trash2 size={18} />
                          </Button>
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
                          <Input
                              label="Nome"
                              value={editLabel}
                              onChange={(e) => setEditLabel(e.target.value)}
                              placeholder="Nome do comportamento..."
                              autoFocus
                          />
                          
                          <div>
                              <label className="block text-xs font-bold text-gray-400 mb-1 uppercase">Pontos</label>
                              <div className="flex items-center gap-3">
                                    <Button 
                                        variant="ghost"
                                        onClick={() => setEditScore(Math.max(1, editScore - 1))}
                                        className="w-12 h-12 text-xl"
                                    >-</Button>
                                    <div className="flex-1 flex justify-center">
                                      <span className={`text-4xl font-black ${activeTab === 'positive' ? 'text-[var(--safari-green)]' : 'text-[var(--safari-orange)]'}`}>
                                          {editScore}
                                      </span>
                                    </div>
                                    <Button 
                                        variant="ghost"
                                        onClick={() => setEditScore(Math.min(5, editScore + 1))}
                                        className="w-12 h-12 text-xl"
                                    >+</Button>
                              </div>
                          </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4 border-t mt-2">
                          <Button
                              variant="ghost"
                              onClick={() => { setEditingId(null); setIsCreating(false); }}
                              className="flex-1 uppercase"
                          >
                              Cancelar
                          </Button>
                          <Button
                              variant="primary"
                              onClick={handleSave}
                              className="flex-[2] uppercase"
                          >
                              <Check size={20} className="mr-2" /> Salvar
                          </Button>
                      </div>
                  </div>
               </div>
            </div>
          )}
        </div>
    </Modal>
  );
}
