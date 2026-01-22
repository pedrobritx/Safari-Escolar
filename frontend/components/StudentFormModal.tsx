import { useState, useEffect } from 'react';
import { Trash2, Save } from 'lucide-react';
import { Student } from '../lib/types';
import EmojiPicker from './EmojiPicker';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { getAnimalAvatar } from '@/utils/getAnimalAvatar';

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
  const [animalAvatar, setAnimalAvatar] = useState('Leão'); // Default
  const [avatarColor, setAvatarColor] = useState('#FFFFFF');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (mode === 'edit' && initialData) {
          setName(initialData.name);
          setAnimalAvatar(initialData.animalAvatar || 'Leão');
          setAvatarColor(initialData.avatarColor || '#FFFFFF');
        } else {
          // Reset for create
          setName('');
          setAnimalAvatar('Leão');
          setAvatarColor('#FFFFFF');
        }
        setShowEmojiPicker(false);
      }, 0);
    }
  }, [isOpen, mode, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, animalAvatar, avatarColor });
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === 'create' ? '✨ Adicionar Aluno' : '✏️ Editar Aluno'}
      maxWidth="md"
    >
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        
        {/* Avatar Section */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-bold text-[#57534E]">Avatar</span>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="cursor-pointer w-24 h-24 text-5xl flex items-center justify-center rounded-full border-4 border-[var(--color-border)] shadow-sm hover:scale-105 transition-transform bg-white"
              style={{ backgroundColor: avatarColor }}
              aria-label="Choose avatar"
            >
              {getAnimalAvatar(animalAvatar)}
            </button>
            
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-md border border-gray-200 pointer-events-none">
                <span className="text-xs font-bold text-primary">Mudar</span>
            </div>
          </div>

          {showEmojiPicker && (
            <div className="absolute z-10 mt-28">
                <EmojiPicker 
                  onSelectEmoji={(emoji) => {
					console.log(emoji)
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
        <Input
          label="Nome Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: João Silva"
          autoFocus
          required
        />

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {mode === 'edit' && onDelete && (
            <Button
              type="button"
              variant="accent"
              onClick={() => {
                if(confirm('Tem certeza que deseja excluir este aluno? Esta ação não pode ser desfeita.')) {
                  onDelete();
                }
              }}
              className="px-4 py-3"
              title="Excluir Aluno"
            >
              <Trash2 size={20} />
            </Button>
          )}
          
          <Button
            type="submit"
            variant="primary"
            className="flex-1 px-6 py-3"
          >
            <Save size={20} />
            {mode === 'create' ? 'Adicionar' : 'Salvar Alterações'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
