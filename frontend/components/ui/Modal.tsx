import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  headerColorClass?: string; // Optional override for header color
  borderColorClass?: string; // Optional override for border color
}

export function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  maxWidth = 'md',
  headerColorClass,
  borderColorClass
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  const maxWidthClass = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  }[maxWidth];

  const headerClass = headerColorClass || 'bg-[var(--safari-green-light)] border-[var(--neu-border-color)]';
  // unused borderClass removed
  
  const content = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className={`bg-white rounded-[var(--neu-radius-lg)] w-full ${maxWidthClass} shadow-[var(--neu-shadow-hover)] overflow-hidden animate-in zoom-in-95 duration-200 border-3 ${borderColorClass ? borderColorClass : 'border-[var(--neu-border-color)]'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`px-6 py-4 border-b-2 border-[var(--neu-border-color)] flex justify-between items-center ${headerClass}`}>
          {title && (
            <h2 className="text-xl font-bold text-[var(--safari-green)]">
              {title}
            </h2>
          )}
          <button 
            onClick={onClose}
            className="btn btn-accent p-2 rounded-[var(--neu-radius)] ml-auto"
            aria-label="Close modal"
          >
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[80vh] overflow-y-auto">
           {children}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
