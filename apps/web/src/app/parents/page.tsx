
import { Button } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";

export default function ParentsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[url('/grid.svg')] bg-cover bg-center">
      <GlassPanel variant="strong" className="w-full max-w-md p-8 flex flex-col gap-8 items-center text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-20 w-20 rounded-full bg-[var(--primary)] flex items-center justify-center text-3xl mb-2 shadow-lg text-[var(--primary-fg)]">
             👪
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--primary)]">
            Área dos Pais
          </h1>
          <p className="text-[var(--text-muted)] text-lg">
            Acompanhe o desempenho do seu filho.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
             <p className="text-sm text-[var(--text-muted)] italic">
                (Funcionalidade de login em desenvolvimento)
            </p>
            <Button href="/" size="lg" variant="secondary" className="w-full">
                Voltar ao Início
            </Button>
        </div>
      </GlassPanel>
    </main>
  );
}
