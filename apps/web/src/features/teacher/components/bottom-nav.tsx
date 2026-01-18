"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlassPanel } from "@/components/ui/glass-panel";

export function BottomNav() {
  const pathname = usePathname();

  const links = [
    { href: "/teacher", label: "Início", icon: "🏠" },
    { href: "/teacher/classroom", label: "Turmas", icon: "📚" },
    { href: "/teacher/students", label: "Alunos", icon: "🎓" },
    { href: "/teacher/calendar", label: "Agenda", icon: "📅" },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <GlassPanel variant="strong" className="flex justify-around items-center p-2 !rounded-full shadow-xl border-[var(--border-strong)]">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/teacher" && pathname?.startsWith(link.href));
          return (
            <Link key={link.href} href={link.href} className={`
              flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-200
              ${isActive ? "bg-[var(--primary)] text-[var(--primary-fg)] -translate-y-2 shadow-lg" : "text-[var(--text-muted)] hover:bg-[var(--surface-glass)]"}
            `}>
              <span className="text-xl">{link.icon}</span>
              {isActive && <span className="text-[10px] font-bold mt-0.5">{link.label}</span>}
            </Link>
          );
        })}
      </GlassPanel>
    </div>
  );
}
