import React from 'react';

const ANIMAL_EMOJIS = [
  '🦁', '🐯', '🐘', '🦒', '🦓', '🐒', '🦍', '🦧', '🐶', '🐺', '🦊', '🦝', '🐱', '🐈', 
  '🦄', '🐴', '🐷', '🐗', '🐭', '🐹', '🐰', '🐻', '🐨', '🐼', '🦥', '🦦', '🦨', '🦘', 
  '🦡', '🐾', '🦃', '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊️', '🦅', '🦆', '🦢', 
  '🦉', '🦩', '🦚', '🦜', '🐸', '🐊', '🐢', '🦎', '🐍', '🐲', '🦕', '🦖', '🐳', '🐋', 
  '🐬', '🐟', '🐠', '🐡', '🦈', '🐙', '🐚', '🐌', '🦋', '🐛', '🐜', '🐝', '🐞', '🦗',
  '🕷️', '🦂', '🦟', '🦠', '🐎', '🐂', '🐃', '🐄', '🐖', '🐏', '🐑', '🐐', '🐪', '🐫',
];

const BG_COLORS = [
  '#FFFFFF', '#FEF3C7', '#D1FAE5', '#DBEAFE', '#FEE2E2', '#F3E8FF', '#FFEDD5'
];

interface EmojiPickerProps {
  onSelectEmoji: (emoji: string) => void;
  onSelectColor: (color: string) => void;
  onClose: () => void;
  currentColor?: string;
}

export default function EmojiPicker({ onSelectEmoji, onSelectColor, onClose, currentColor = '#FFFFFF' }: EmojiPickerProps) {
  return (
    <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50 bg-white border-2 border-[var(--color-border)] rounded-xl shadow-xl w-64 p-4">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold text-primary">Personalizar</h4>
        <button onClick={onClose} className="text-red-500 hover:bg-red-50 rounded-full p-1">
          ✕
        </button>
      </div>

      <div className="mb-4">
        <p className="text-xs font-bold text-gray-500 mb-2 uppercase">Cor de Fundo</p>
        <div className="flex flex-wrap gap-2">
          {BG_COLORS.map((color) => (
            <button
              key={color}
              onClick={() => onSelectColor(color)}
              className={`w-6 h-6 rounded-full border border-gray-200 ${currentColor === color ? 'ring-2 ring-offset-1 ring-blue-500' : ''}`}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-bold text-gray-500 mb-2 uppercase">Animal</p>
        <div className="grid grid-cols-5 gap-2 max-h-48 overflow-y-auto custom-scrollbar">
          {ANIMAL_EMOJIS.map((emoji) => (
            <button
              key={emoji}
              onClick={() => onSelectEmoji(emoji)}
              className="text-2xl hover:bg-gray-100 rounded-lg p-1 transition-colors"
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
