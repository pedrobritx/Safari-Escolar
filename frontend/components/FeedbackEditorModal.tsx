import React, { useState } from 'react';
import { X, Pencil, Trash2, Plus, Check } from 'lucide-react';
import { Behavior } from './BehaviorModal';

interface FeedbackEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  positiveBehaviors: Behavior[];
  negativeBehaviors: Behavior[];
  onUpdateBehaviors: (type: 'positive' | 'negative', behaviors: Behavior[]) => void;
}

const EMOJI_LIST = [
  '👍', '👎', '⭐', '🌟', '💫', '🔥', '💡', '❤️', '🤝', '🎯', '🙋', '💪', '🧩', '🚀',
  '🏆', '🥇', '📚', '📝', '🎨', '🎭', '🎼', '⚽', '🏀', '🦠', '🧼', '🗣️', '🚫', '⏰',
  '🐢', '🤐', '🎮', '📵', '😴', '🤡', '🌪️', '📢', '🤬', '👊', '🤥', '🤧'
];

export default function FeedbackEditorModal({ 
  isOpen, 
  onClose, 
  positiveBehaviors, 
  negativeBehaviors,
  onUpdateBehaviors 
}: FeedbackEditorModalProps) {
  const [activeTab, setActiveTab] = useState<'positive' | 'negative'>('positive');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editLabel, setEditLabel] = useState('');
  const [editIcon, setEditIcon] = useState('');
  const [editScore, setEditScore] = useState(1);
  const [isCreating, setIsCreating] = useState(false);

  if (!isOpen) return null;

  const currentList = activeTab === 'positive' ? positiveBehaviors : negativeBehaviors;

  const handleStartEdit = (item: Behavior) => {
    setEditingId(item.id);
    setEditLabel(item.label);
    setEditIcon(item.icon);
    setEditScore(Math.abs(item.points)); // Store as positive magnitude for editing
    setIsCreating(false);
  };

  const handleStartCreate = () => {
    setEditingId('new');
    setEditLabel('');
    setEditIcon(activeTab === 'positive' ? '👍' : '👎');
    setEditScore(1);
    setIsCreating(true);
  };

  const handleSave = () => {
    if (!editLabel.trim()) return;

    const points = activeTab === 'positive' ? editScore : -editScore;

    const newItem: Behavior = {
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

  const handleDelete = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este feedback?')) {
      const updatedList = currentList.filter(item => item.id !== id);
      onUpdateBehaviors(activeTab, updatedList);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl border-4 border-[var(--color-secondary)] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-[var(--color-secondary)] p-4 flex justify-between items-center border-b-2 border-[var(--color-border)]">
          <div>
            <h3 className="text-xl font-bold text-primary">⚙️ Editar Feedback</h3>
            <p className="text-sm font-medium text-primary/80">Personalize as habilidades e comportamentos</p>
          </div>
          <button onClick={onClose} className="bg-white/50 hover:bg-white text-primary p-2 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b-2 border-[var(--color-border)]">
          <button
            onClick={() => { setActiveTab('positive'); setEditingId(null); }}
            className={`flex-1 p-3 font-bold text-center transition-colors ${activeTab === 'positive' ? 'bg-green-100 text-green-800 border-b-4 border-green-500' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
          >
            Positivos (+1)
          </button>
          <button
            onClick={() => { setActiveTab('negative'); setEditingId(null); }}
            className={`flex-1 p-3 font-bold text-center transition-colors ${activeTab === 'negative' ? 'bg-red-100 text-red-800 border-b-4 border-red-500' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
          >
            Negativos (-1)
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-[#FAF9F6] overflow-y-auto flex-1">
          
          {/* List */}
          <div className="space-y-3 mb-6">
            {currentList.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-3 rounded-xl border-2 border-[var(--color-border)] shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="text-2xl bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full">{item.icon}</span>
                  <span className="font-bold text-primary">{item.label}</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleStartEdit(item)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" title="Editar">
                    <Pencil size={18} />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Excluir">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add Button */}
          {!editingId && (
            <button
              onClick={handleStartCreate}
              className="w-full py-3 border-2 border-dashed border-gray-400 rounded-xl text-gray-500 font-bold hover:bg-white hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-all flex items-center justify-center gap-2"
            >
              <Plus size={20} /> Adicionar Novo Feedback
            </button>
          )}

          {/* Edit Form */}
          {editingId && (
            <div className="bg-white p-4 rounded-xl border-2 border-blue-200 shadow-md">
              <h4 className="font-bold text-primary mb-3">{isCreating ? 'Criar Novo' : 'Editar'} Feedback</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4">
                {/* Emoji Selection */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Ícone</label>
                  <div className="grid grid-cols-5 gap-1 w-40 h-32 overflow-y-auto custom-scrollbar border rounded-lg p-1 bg-gray-50">
                    {EMOJI_LIST.map(emoji => (
                      <button
                        key={emoji}
                        onClick={() => setEditIcon(emoji)}
                        className={`text-xl p-1 rounded hover:bg-white ${editIcon === emoji ? 'bg-blue-100 ring-1 ring-blue-500' : ''}`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Label Input */}
                <div className="flex flex-col justify-between w-full">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">Nome do Comportamento</label>
                      <input
                        type="text"
                        value={editLabel}
                        onChange={(e) => setEditLabel(e.target.value)}
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 outline-none font-medium"
                        placeholder="Ex: Bom Companheiro"
                        autoFocus
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">
                        Pontos ({activeTab === 'positive' ? '0 a 5' : '-5 a 0'})
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="0"
                          max="5"
                          step="1"
                          value={editScore}
                          onChange={(e) => setEditScore(Number(e.target.value))}
                          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                        <span className={`text-xl font-bold ${activeTab === 'positive' ? 'text-green-600' : 'text-red-600'} w-12 text-center`}>
                          {activeTab === 'positive' ? '+' : '-'}{editScore}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 text-gray-500 font-bold hover:bg-gray-100 rounded-lg"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 shadow-sm flex items-center gap-2"
                    >
                      <Check size={18} /> Salvar
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
