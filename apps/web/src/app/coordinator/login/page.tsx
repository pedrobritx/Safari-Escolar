"use client";

import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CoordinatorLoginPage() {
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
        // Redirect to coordinator dashboard on success
        router.push("/coordinator");
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
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[url('/grid.svg')] bg-cover bg-center">
      <GlassPanel variant="strong" className="w-full max-w-md p-8 flex flex-col gap-8 items-center text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--primary)] flex items-center justify-center text-3xl mb-2 shadow-lg">
            👩‍💼
          </div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] bg-clip-text text-transparent">
            Portal da Coordenação
          </h1>
          <p className="text-[var(--text-muted)] text-lg">
            Acesse o painel de coordenação.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left">
          {error && (
            <div className="p-3 rounded-lg bg-red-100 border border-red-300 text-red-700 text-sm">
              {error}
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="coordenador@escola.com.br" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" name="password" type="password" required />
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
