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

  const borderClass = borderColorClass || 'border-[var(--color-border)]';
  const headerClass = headerColorClass || 'bg-[var(--color-secondary)] border-[var(--color-border)]';

  const content = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className={`bg-white rounded-2xl w-full ${maxWidthClass} shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border-4 border-transparent ${borderColorClass ? borderColorClass : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`px-6 py-4 border-b-2 flex justify-between items-center ${headerClass}`}>
          {title && (
            <h2 className="text-xl font-bold text-primary">
              {title}
            </h2>
          )}
          <button 
            onClick={onClose}
            className="btn btn-accent p-2 rounded-lg ml-auto"
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
