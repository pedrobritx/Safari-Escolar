
"use client";

import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link"; // Import Link for navigation
import { useState } from "react";

export default function TeacherPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    console.log("Login submitted");
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[url('/grid.svg')] bg-cover bg-center">
      <GlassPanel variant="strong" className="w-full max-w-md p-8 flex flex-col gap-8 items-center text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-20 w-20 rounded-full bg-[var(--primary)] flex items-center justify-center text-3xl mb-2 shadow-lg text-[var(--primary-fg)]">
            👨‍🏫
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--primary)]">
            Portal do Professor
          </h1>
          <p className="text-[var(--text-muted)] text-lg">
            Entre para gerenciar suas turmas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="professor@escola.com.br" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required />
          </div>

          <Button type="submit" size="lg" className="w-full mt-2" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>
        </form>

        <div className="w-full">
             <Link href="/" passHref className="w-full block"> 
                <Button variant="ghost" size="sm" className="w-full">
                    Voltar ao Início
                </Button>
            </Link>
        </div>
      </GlassPanel>
    </main>
  );
}
