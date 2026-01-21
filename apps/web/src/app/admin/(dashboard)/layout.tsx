"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, Terminal, UserRound } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const profileRef = useRef<HTMLDivElement | null>(null);

  const adminProfile = {
    name: "Admin TI",
    email: "ti@safariescolar.com",
    role: "Suporte Técnico",
  };

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/status/", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated) {
            setIsAuthenticated(true);
          } else {
            router.push("/admin/login");
          }
        } else if (res.status === 401 || res.status === 403) {
          router.push("/admin/login");
        } else {
          // Fallback: assume authenticated for development
          setIsAuthenticated(true);
        }
      } catch {
        // On network error, assume authenticated for development
        setIsAuthenticated(true);
      } finally {
        setIsLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  // Profile dropdown click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout/", {
        method: "POST",
        credentials: "include",
      });
    } catch {
      // Continue to login even if logout request fails
    }
    router.push("/admin/login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-slate-400 text-lg flex items-center gap-2">
          <Terminal size={20} className="animate-pulse" />
          Inicializando sistema...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <GlassPanel className="sticky top-0 z-40 mx-4 mt-4 mb-6 flex flex-wrap items-center justify-between gap-3 px-6 py-4 rounded-[var(--radius-xl)] bg-slate-800/60 border-slate-700">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Terminal size={20} className="text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-400">
              Safari Escolar
            </p>
            <h1 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              TI / Suporte
            </h1>
          </div>
        </div>

        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsProfileOpen((open) => !open)}
            className="flex items-center gap-3 rounded-full border border-slate-600 bg-slate-700/80 px-2 py-2 lg:px-3 shadow-sm transition hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-shrink-0"
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-lg flex-shrink-0">
              <UserRound size={18} className="text-white" />
            </div>
            <div className="text-left leading-tight hidden lg:block">
              <div className="text-sm font-semibold text-slate-100">{adminProfile.name}</div>
              <div className="text-[11px] text-slate-400">{adminProfile.role}</div>
            </div>
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-72 rounded-[var(--radius-lg)] border border-slate-600 bg-slate-800 p-4 shadow-xl">
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xl text-white">
                  🖥️
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold text-slate-100">{adminProfile.name}</div>
                  <div className="text-xs text-slate-400">{adminProfile.email}</div>
                  <div className="mt-1 text-xs text-slate-500">{adminProfile.role} · Acesso total</div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <Link href="/admin/settings" onClick={() => setIsProfileOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2 border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Settings size={16} />
                    Configurações
                  </Button>
                </Link>
                <Button 
                  variant="destructive" 
                  className="w-full justify-start gap-2"
                  onClick={handleLogout}
                >
                  <LogOut size={16} />
                  Sair
                </Button>
              </div>
            </div>
          )}
        </div>
      </GlassPanel>

      <main className="px-4 md:px-6 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
