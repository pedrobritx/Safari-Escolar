import React from "react";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "strong";
}

export function GlassPanel({
  children,
  className = "",
  variant = "default",
  ...props
}: GlassPanelProps) {
  // We use inline styles for the glass variables to ensure they are picked up if we need overriding,
  // but mostly relying on the global CSS classes or utility mapping.
  // Actually, we'll map the classes to the tailwind utilities or raw styles using the vars.
  
  // Tailwind v4 mapping:
  // We'll use a custom class or just apply the styles directly with utilities if configured.
  // Since we haven't configured utility classes for "glass" in Tailwind yet (only variables),
  // we can use arbitrary values or style object.
  // A cleaner way for now is using the `backdrop-blur` utility combined with background color variable.
  
  // However, UI.md defines specific relationships.
  // Let's use standard CSS classes that consume the variables.
  
  const baseStyles = "rounded-[var(--radius-xl)] border border-[var(--border)] shadow-sm backdrop-blur-[var(--glass-blur)] transition-all duration-200";
  
  const bgStyle = variant === "strong" 
    ? { backgroundColor: "var(--surface-glass-strong)" }
    : { backgroundColor: "var(--surface-glass)" };

  return (
    <div
      className={`${baseStyles} ${className}`}
      style={bgStyle}
      {...props}
    >
      {children}
    </div>
  );
}
