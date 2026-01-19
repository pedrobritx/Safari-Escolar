import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";

interface FeedbackBottomBarProps {
  onOpenManager: () => void;
}

export function FeedbackBottomBar({
  onOpenManager,
}: FeedbackBottomBarProps) {
  return (
    <div className="fixed bottom-20 left-4 right-4 md:static md:w-full md:mx-0 z-40">
      <GlassPanel variant="strong" className="p-3 shadow-2xl flex items-center justify-between border-[var(--primary)] border-2">
        <div className="flex-1 text-sm font-medium text-[var(--text-muted)]">
            Toque em um aluno para dar feedback
        </div>
        
        <Button 
            variant="ghost" 
            size="sm" 
            className="text-[var(--text-muted)] hover:text-[var(--text)]"
            onClick={onOpenManager}
        >
            ⚙️ Gerenciar
        </Button>
      </GlassPanel>
    </div>
  );
}

