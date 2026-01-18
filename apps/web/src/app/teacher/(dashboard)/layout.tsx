import { BottomNav } from "@/features/teacher/components/bottom-nav";
import { GlassPanel } from "@/components/ui/glass-panel";

export default function TeacherDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pb-24 bg-[url('/grid.svg')] bg-fixed bg-cover bg-center">
      {/* Top Bar for Desktop/Mobile - Simple Branding for now */}
      <GlassPanel className="sticky top-0 z-40 mx-4 mt-4 mb-6 flex items-center justify-between px-6 py-4 rounded-[var(--radius-xl)]">
         <div className="flex items-center gap-3">
            <span className="text-2xl">👨‍🏫</span>
            <h1 className="font-bold text-lg text-[var(--primary)]">Safari Escolar</h1>
         </div>
         <div className="text-sm font-medium text-[var(--text-muted)]">
            Prof. Carlos
         </div>
      </GlassPanel>

      <main className="px-4 md:px-6 max-w-5xl mx-auto">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
