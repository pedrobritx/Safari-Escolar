import { useState, useEffect } from 'react';
import { X, Trash2, Save } from 'lucide-react';
import { Student } from '../lib/types';
import EmojiPicker from './EmojiPicker';

interface StudentFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { name: string; animalAvatar?: string; avatarColor?: string }) => void;
  onDelete?: () => void;
  initialData?: Student | null;
  mode: 'create' | 'edit';
}

export default function StudentFormModal({ 
  isOpen, 
  onClose, 
  onSave, 
  onDelete, 
  initialData, 
  mode 
}: StudentFormModalProps) {
  const [name, setName] = useState('');
  const [animalAvatar, setAnimalAvatar] = useState('🦁'); // Default
  const [avatarColor, setAvatarColor] = useState('#FFFFFF');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (mode === 'edit' && initialData) {
        setName(initialData.name);
        setAnimalAvatar(initialData.animalAvatar || '🦁');
        setAvatarColor(initialData.avatarColor || '#FFFFFF');
      } else {
        // Reset for create
        setName('');
        setAnimalAvatar('🦁');
        setAvatarColor('#FFFFFF');
      }
      setShowEmojiPicker(false);
    }
  }, [isOpen, mode, initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, animalAvatar, avatarColor });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-[var(--color-secondary)] px-6 py-4 border-b-2 border-[var(--color-border)] flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary">
            {mode === 'create' ? '✨ Adicionar Aluno' : '✏️ Editar Aluno'}
          </h2>
          <button 
            onClick={onClose}
            className="btn btn-accent p-2 rounded-lg"
          >
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-bold text-[#57534E]">Avatar</span>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="w-24 h-24 text-5xl flex items-center justify-center rounded-full border-4 border-[var(--color-border)] shadow-sm hover:scale-105 transition-transform bg-white"
                style={{ backgroundColor: avatarColor }}
              >
                {animalAvatar}
              </button>
              
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-md border border-gray-200 pointer-events-none">
                 <span className="text-xs font-bold text-primary">Mudar</span>
              </div>
            </div>

            {showEmojiPicker && (
              <div className="absolute z-10 mt-28">
                 <EmojiPicker 
                   onSelectEmoji={(emoji) => {
                     setAnimalAvatar(emoji);
                     setShowEmojiPicker(false);
                   }}
                   onSelectColor={(color) => setAvatarColor(color)}
                   onClose={() => setShowEmojiPicker(false)}
                   currentColor={avatarColor}
                 />
              </div>
            )}
          </div>

          {/* Name Input */}
          <div>
            <label className="block text-sm font-bold text-primary mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: João Silva"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-[var(--color-secondary)] focus:border-primary outline-none font-medium text-lg text-gray-900 placeholder:text-gray-500"
              autoFocus
              required
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            {mode === 'edit' && onDelete && (
              <button
                type="button"
                onClick={() => {
                  if(confirm('Tem certeza que deseja excluir este aluno? Esta ação não pode ser desfeita.')) {
                    onDelete();
                  }
                }}
                className="btn btn-accent px-4 py-3 rounded-xl flex items-center justify-center gap-2"
                title="Excluir Aluno"
              >
                <Trash2 size={20} />
              </button>
            )}
            
            <button
              type="submit"
              className="flex-1 btn btn-primary px-6 py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Save size={20} />
              {mode === 'create' ? 'Adicionar' : 'Salvar Alterações'}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
