"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ROLES = [
  { href: "/teacher", label: "Professor" },
  { href: "/coordinator", label: "Coordenação" },
  { href: "/admin", label: "Admin" },
  { href: "/family", label: "Família" },
];

export function RoleSwitcher({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center gap-2 bg-[var(--surface)]/80 border border-[var(--border)] rounded-full p-1 shadow-sm", className)}>
      {ROLES.map((role) => {
        const active = pathname === role.href || pathname?.startsWith(`${role.href}/`);
        return (
          <Link
            key={role.href}
            href={role.href}
            className={cn(
              "px-3 py-1.5 text-xs font-semibold rounded-full transition-all",
              active
                ? "bg-[var(--primary)] text-[var(--primary-fg)] shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-glass)]"
            )}
          >
            {role.label}
          </Link>
        );
      })}
    </div>
  );
}
