import React from 'react';

const ANIMAL_EMOJIS = [
  '🦁', '🐯', '🐘', '🦒', '🦓', '🐒', '🦍', '🦧', '🐶', '🐺', '🦊', '🦝', '🐱', '🐈', 
  '🦄', '🐴', '🐷', '🐗', '🐭', '🐹', '🐰', '🐻', '🐨', '🐼', '🦥', '🦦', '🦨', '🦘', 
  '🦡', '🐾', '🦃', '🐔', '🐓', '🐣', '🐤', '🐥', '🐦', '🐧', '🕊️', '🦅', '🦆', '🦢', 
  '🦉', '🦩', '🦚', '🦜', '🐸', '🐊', '🐢', '🦎', '🐍', '🐲', '🦕', '🦖', '🐳', '🐋', 
  '🐬', '🐟', '🐠', '🐡', '🦈', '🐙', '🐚', '🐌', '🦋', '🐛', '🐜', '🐝', '🐞', '🦗',
  '🕷️', '🦂', '🦟', '🦠', '🐎', '🐂', '🐃', '🐄', '🐖', '🐏', '🐑', '🐐', '🐪', '🐫',
];

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
  onClose: () => void;
}

export default function EmojiPicker({ onSelect, onClose }: EmojiPickerProps) {
  return (
    <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50 bg-white border-2 border-[var(--color-border)] rounded-xl shadow-xl w-64 p-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-bold text-primary">Escolha um Animal</h4>
        <button onClick={onClose} className="text-red-500 hover:bg-red-50 rounded-full p-1">
          ✕
        </button>
      </div>
      <div className="grid grid-cols-5 gap-2 max-h-48 overflow-y-auto custom-scrollbar">
        {ANIMAL_EMOJIS.map((emoji) => (
          <button
            key={emoji}
            onClick={() => onSelect(emoji)}
            className="text-2xl hover:bg-gray-100 rounded-lg p-1 transition-colors"
          >
            {emoji}
          </button>
        ))}
      </div>
    </div>
  );
}
