"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BottomNav, DesktopTopNav } from "@/features/teacher/components/bottom-nav";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, UserRound } from "lucide-react";

export default function TeacherDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);

  const teacherProfile = {
    name: "Prof. Carlos",
    email: "carlos@safariescolar.com",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen pb-24 bg-[url('/grid.svg')] bg-fixed bg-cover bg-center">
      {/* Top Bar for Desktop/Mobile - Simple Branding for now */}
      <GlassPanel className="sticky top-0 z-40 mx-4 mt-4 mb-6 flex items-center justify-between px-6 py-4 rounded-[var(--radius-xl)]">
         <div className="flex items-center gap-3">
            <span className="text-2xl">👨‍🏫</span>
            <h1 className="font-bold text-lg text-[var(--primary)]">Safari Escolar</h1>
         </div>
         
         <DesktopTopNav />

         <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen((open) => !open)}
              className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-3 py-2 shadow-sm transition hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              <div className="h-10 w-10 rounded-full bg-[var(--primary)]/15 flex items-center justify-center text-lg">
                <UserRound size={18} className="text-[var(--primary)]" />
              </div>
              <div className="text-left leading-tight">
                <div className="text-sm font-semibold text-[var(--text)]">{teacherProfile.name}</div>
                <div className="text-[11px] text-[var(--text-muted)]">{teacherProfile.email}</div>
              </div>
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-72 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-xl">
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 rounded-full bg-[var(--primary)]/15 flex items-center justify-center text-xl">
                    🦁
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-semibold text-[var(--text)]">{teacherProfile.name}</div>
                    <div className="text-xs text-[var(--text-muted)]">{teacherProfile.email}</div>
                    <div className="mt-1 text-xs text-[var(--text-muted)]">Perfil docente · informações e preferências</div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <Link href="/teacher/settings" onClick={() => setIsProfileOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                    >
                      <Settings size={16} />
                      Configurações pessoais
                    </Button>
                  </Link>
                  <Link href="/teacher/login">
                    <Button variant="destructive" className="w-full justify-start gap-2">
                      <LogOut size={16} />
                      Sair para login
                    </Button>
                  </Link>
                </div>
              </div>
            )}
         </div>
      </GlassPanel>

      <main className="px-4 md:px-6 max-w-5xl mx-auto">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
