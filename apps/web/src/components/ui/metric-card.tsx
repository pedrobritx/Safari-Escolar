import { Card } from "./card";
import { cn } from "@/lib/utils";

type Accent = "primary" | "secondary" | "accent";
type TrendDirection = "up" | "down" | "flat";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  accent?: Accent;
  trendLabel?: string;
  trendDirection?: TrendDirection;
  className?: string;
}

const ACCENT_STYLES: Record<Accent, string> = {
  primary: "from-[var(--primary)]/85 to-[var(--primary)]/70 text-[var(--primary-fg)]",
  secondary: "from-[var(--secondary)]/85 to-[var(--secondary)]/70 text-[var(--secondary-fg)]",
  accent: "from-[var(--accent)]/85 to-[var(--accent)]/70 text-[var(--accent-fg)]",
};

const TREND_STYLES: Record<TrendDirection, string> = {
  up: "text-[var(--secondary)]",
  down: "text-[var(--accent)]",
  flat: "text-[var(--text-muted)]",
};

export function MetricCard({
  title,
  value,
  subtitle,
  icon,
  accent = "primary",
  trendLabel,
  trendDirection = "flat",
  className,
}: MetricCardProps) {
  return (
    <Card className={cn("relative overflow-hidden bg-[var(--surface)] shadow-sm hover:shadow-md transition-all", className)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 space-y-2">
          <p className="text-sm font-medium text-[var(--text-muted)]">{title}</p>
          <div className="text-2xl font-bold text-[var(--text)] leading-tight">{value}</div>
          {subtitle && <p className="text-sm text-[var(--text-muted)]">{subtitle}</p>}
          {trendLabel && (
            <p className={cn("text-xs font-semibold flex items-center gap-1", TREND_STYLES[trendDirection])}>
              {trendDirection === "up" && "▲"}
              {trendDirection === "down" && "▼"}
              {trendDirection === "flat" && "●"}
              <span>{trendLabel}</span>
            </p>
          )}
        </div>
        {icon && (
          <div
            className={cn(
              "h-12 w-12 rounded-[var(--radius-lg)] flex items-center justify-center shadow-sm text-xl",
              "bg-gradient-to-br",
              ACCENT_STYLES[accent]
            )}
          >
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
}
