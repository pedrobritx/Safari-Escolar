'use client';

import { useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/Button';
import { authEvents } from '@/lib/authEvents';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const [showSessionExpired, setShowSessionExpired] = useState(false);

  useEffect(() => {
    // Subscribe to session expiry events from the API layer
    const unsubscribe = authEvents.subscribe(() => {
      setShowSessionExpired(true);
    });

    return () => unsubscribe();
  }, []);

  const handleReLogin = () => {
    // Clear stored auth data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setShowSessionExpired(false);
    router.push('/login');
  };

  const handleDismiss = () => {
    setShowSessionExpired(false);
  };

  return (
    <>
      {children}
      
      {/* Session Expired Modal */}
      {showSessionExpired && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden border-4 border-[#4D7C0F]">
            {/* Header */}
            <div className="bg-[#4D7C0F] p-6 text-center">
              <div className="text-6xl mb-3">⏰</div>
              <h2 className="text-2xl font-black text-white">Sessão Expirada</h2>
            </div>
            
            {/* Body */}
            <div className="p-6 text-center">
              <p className="text-gray-700 text-lg mb-2">
                Sua sessão expirou por inatividade.
              </p>
              <p className="text-gray-500 text-sm">
                Por segurança, você precisa fazer login novamente para continuar usando o Safari Escolar.
              </p>
            </div>
            
            {/* Actions */}
            <div className="p-6 pt-0 flex flex-col gap-3">
              <Button
                onClick={handleReLogin}
                variant="primary"
                className="w-full py-4 text-lg font-bold"
              >
                🔑 Fazer Login Novamente
              </Button>
              <button
                onClick={handleDismiss}
                className="text-gray-400 text-sm hover:text-gray-600 transition-colors"
              >
                Fechar mensagem
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

