'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { Binoculars } from 'lucide-react';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await api.login(email, password);
      
      // Store in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      toast.success('Login realizado com sucesso!');

      // Redirect based on role
      if (data.user.role === 'FAMILY') {
        router.push('/family');
      } else {
        router.push('/dashboard');
      }
    } catch (err: any) {
      console.error(err);
      const errorMessage = err.message || 'Email ou senha inválidos';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-[#FAF9F6] border-2 border-[var(--color-border)] rounded-3xl shadow-[8px_8px_0px_var(--color-border)] p-8 w-full max-w-md transition-all">
        <div className="flex justify-center mb-6">
           <Binoculars size={64} className="text-primary stroke-2" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-2 text-primary font-heading">Safari Escolar</h1>
        <p className="text-center text-[#57534E] mb-8 font-medium">A aventura de aprender começa aqui!</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-primary mb-2 ml-1">
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-stone-300 rounded-xl focus:ring-4 focus:ring-[var(--color-secondary)] focus:border-primary outline-none bg-white font-medium text-lg placeholder:text-gray-500 text-gray-900"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold text-green-800 mb-2 ml-1">
              SENHA
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-stone-300 rounded-xl focus:ring-4 focus:ring-[var(--color-secondary)] focus:border-primary outline-none bg-white font-medium text-lg placeholder:text-gray-500 text-gray-900"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl font-bold flex items-center gap-2">
              🚨 {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white font-bold text-xl py-4 rounded-xl hover:bg-[#c2410c] transition-all shadow-[0_4px_0_#9a3412] active:translate-y-[4px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Entrando na Aventura...' : 'Entrar'}
          </button>
        </form>

        <div className="mt-10 p-5 bg-[var(--color-secondary)] rounded-2xl border-2 border-[var(--color-border)]">
          <p className="text-sm text-primary font-bold mb-3 uppercase tracking-wider text-center">🗺️ Acesso Rápido</p>
          <p className="text-xs text-primary/80 font-medium mb-1">joao.professor@escola.com</p>
          <p className="text-xs text-primary/80 font-medium mb-1">familia.silva@email.com</p>
          <p className="text-xs text-primary/80 font-medium mb-1">coordenacao@escola.com</p>
          <p className="text-xs text-primary/80 font-medium mb-1">admin@escola.com</p>
          <p className="text-xs text-primary/80 font-medium mb-1">password123</p>
        </div>
      </div>
    </div>
  );
}
