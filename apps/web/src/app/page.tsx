import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import Image from "next/image";
import { APIStatus } from "@/components/APIStatus";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[url('/grid.svg')] bg-cover bg-center">
      {/* Background decoration or texture could go here if grid.svg doesn't exist, we fallback to CSS bg color which is already set in body */}
      
      <GlassPanel variant="strong" className="w-full max-w-md p-8 flex flex-col gap-8 items-center text-center">
        <div className="flex flex-col items-center gap-2">
          {/* Logo Placeholder */}
          <div className="h-20 w-20 rounded-full bg-[var(--primary)] flex items-center justify-center text-3xl mb-2 shadow-lg text-[var(--primary-fg)]">
            🦁
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--primary)]">
            Safari Escolar
          </h1>
          <p className="text-[var(--text-muted)] text-lg">
            Gestão simplificada para a sala de aula.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Button href="/teacher" size="lg" variant="accent" className="w-full">
            Entrar como Professor
          </Button>
          <Button href="/school" size="lg" variant="secondary" className="w-full">
            Painel da Escola
          </Button>
          <Button href="/parents" size="lg" variant="primary" className="w-full">
            Área dos Pais
          </Button>
        </div>
        
        <APIStatus />
      </GlassPanel>
    </main>
  );
}
