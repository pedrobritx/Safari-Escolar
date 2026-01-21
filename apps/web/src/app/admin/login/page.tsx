"use client";

import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await fetch("/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin");
      } else {
        setError(data.error || "Credenciais inválidas");
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <GlassPanel variant="strong" className="w-full max-w-md p-8 flex flex-col gap-8 items-center text-center bg-slate-800/50 border-slate-700">
        <div className="flex flex-col items-center gap-2">
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl mb-2 shadow-lg shadow-cyan-500/20">
            🖥️
          </div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Portal TI
          </h1>
          <p className="text-slate-400 text-lg">
            Acesso restrito à equipe de suporte.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left">
          {error && (
            <div className="p-3 rounded-lg bg-red-900/30 border border-red-700 text-red-400 text-sm">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="admin@safariescolar.com" 
              required 
              className="bg-slate-700/50 border-slate-600 text-slate-100 placeholder:text-slate-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-slate-300">Senha</Label>
            <Input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className="bg-slate-700/50 border-slate-600 text-slate-100"
            />
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0" 
            disabled={loading}
          >
            {loading ? "Autenticando..." : "Entrar"}
          </Button>
        </form>

        <div className="w-full">
          <Link href="/" passHref className="w-full block">
            <Button variant="ghost" size="sm" className="w-full text-slate-400 hover:text-slate-200">
              Voltar ao Início
            </Button>
          </Link>
        </div>
      </GlassPanel>
    </main>
  );
}
