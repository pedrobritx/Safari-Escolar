import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
}

export function Button({
  className = "",
  variant = "primary",
  size = "md",
  children,
  href,
  ...props
}: ButtonProps) {
  // Base: structural + focus + disabled
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  
  // Size variants
  const sizeClasses = {
    sm: "h-8 px-3 text-sm rounded-[var(--radius-md)]",
    md: "h-11 px-6 text-base rounded-[var(--radius-md)]",
    lg: "h-14 px-8 text-lg rounded-[var(--radius-lg)]",
    icon: "h-11 w-11 rounded-[var(--radius-md)]",
  };

  // Aesthetic variants (Skeuomorphic)
  // We use shadow-md for elevation 2, and remove/inset on active.
  const variantClasses = {
    primary: "bg-[var(--primary)] text-[var(--primary-fg)] shadow-sm hover:brightness-105 active:brightness-95 active:shadow-inner border border-transparent",
    secondary: "bg-[var(--secondary)] text-[var(--secondary-fg)] shadow-sm hover:brightness-105 active:brightness-95 active:shadow-inner border border-transparent",
    accent: "bg-[var(--accent)] text-[var(--accent-fg)] shadow-md hover:brightness-105 active:brightness-95 active:shadow-inner border border-transparent",
    ghost: "bg-transparent text-[var(--text)] hover:bg-[var(--surface-glass)] active:bg-[var(--border)]",
    outline: "bg-transparent text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface-glass)] active:scale-[0.98]",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
