import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "accent" | "destructive" | "outline";
}

export function Badge({
  className = "",
  variant = "primary",
  ...props
}: BadgeProps) {
  const baseClasses = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2";

  const variantClasses = {
    primary: "border-transparent bg-[var(--primary)] text-[var(--primary-fg)] shadow hover:bg-[var(--primary)]/80",
    secondary: "border-transparent bg-[var(--secondary)] text-[var(--secondary-fg)] hover:bg-[var(--secondary)]/80",
    accent: "border-transparent bg-[var(--accent)] text-[var(--accent-fg)] shadow hover:bg-[var(--accent)]/80",
    destructive: "border-transparent bg-red-500 text-white shadow hover:bg-red-600",
    outline: "text-[var(--text)] border-[var(--border)] border",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={classes} {...props} />
  );
}
