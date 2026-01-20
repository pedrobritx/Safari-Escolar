import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface DashboardStatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  href?: string;
  variant?: "default" | "warning" | "success" | "info";
  className?: string;
}

export function DashboardStatCard({
  title,
  value,
  subtitle,
  icon,
  href,
  variant = "default",
  className,
}: DashboardStatCardProps) {
  const variantStyles = {
    default: "bg-[var(--surface)] border-[var(--border)]",
    warning: "bg-[var(--color-orange-50)] border-[var(--border)]",
    success: "bg-[var(--color-green-50)] border-[var(--border)]",
    info: "bg-[var(--surface-glass-strong)] border-[var(--border)]",
  };

  const Content = (
    <div className="flex flex-col h-full justify-between">
      <div className="flex justify-between items-start">
        <div className="p-2 rounded-full bg-[var(--surface-glass-strong)] w-fit">
            {icon}
        </div>
        {variant === "warning" && (
             <span className="flex h-2 w-2 rounded-full bg-[var(--accent)]" />
        )}
      </div>
      
      <div className="mt-4">
        <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
        <p className="text-sm font-medium text-[var(--text-muted)]">{title}</p>
        {subtitle && (
            <p className="text-xs text-[var(--text-muted)] mt-1 opacity-80">{subtitle}</p>
        )}
      </div>
    </div>
  );

  const wrapperClasses = cn(
    "p-4 transition-all hover:shadow-md cursor-pointer active:scale-[0.98]",
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className="flex-1 min-w-[140px]">
        <Card className={wrapperClasses}>
          {Content}
        </Card>
      </Link>
    );
  }

  return (
    <Card className={cn("flex-1 min-w-[140px]", wrapperClasses)}>
      {Content}
    </Card>
  );
}
