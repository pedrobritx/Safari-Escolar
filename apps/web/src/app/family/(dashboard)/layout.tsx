import { RoleSwitcher } from "@/components/role-switcher";
import { GlassPanel } from "@/components/ui/glass-panel";

export default function FamilyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pb-20 bg-[url('/grid.svg')] bg-fixed bg-cover bg-center">
      <GlassPanel className="sticky top-0 z-40 mx-4 mt-4 mb-6 flex flex-wrap items-center justify-between gap-3 px-6 py-4 rounded-[var(--radius-xl)]">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🦁</span>
          <div>
            <p className="text-sm font-semibold text-[var(--text-muted)]">
              Safari Escolar
            </p>
            <h1 className="text-lg font-bold text-[var(--primary)]">
              Famílias
            </h1>
          </div>
        </div>

        <RoleSwitcher />

        <div className="text-sm font-medium text-[var(--text-muted)]">
          Responsável conectado
        </div>
      </GlassPanel>

      <main className="px-4 md:px-6 max-w-5xl mx-auto">{children}</main>
    </div>
  );
}
