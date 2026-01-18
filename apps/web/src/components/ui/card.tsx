import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "glass";
}

export function Card({
  children,
  className = "",
  variant = "default",
  ...props
}: CardProps) {
  const baseStyles = "rounded-[var(--radius-lg)] p-5 transition-all duration-200 border border-[var(--border)]";
  
  const variantStyles = variant === "glass"
    ? "bg-[var(--surface-glass)] backdrop-blur-sm shadow-sm"
    : "bg-[var(--surface)] shadow-md";

  return (
    <div className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}
