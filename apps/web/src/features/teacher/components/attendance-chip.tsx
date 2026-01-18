import React from "react";

export type AttendanceStatus = "present" | "absent" | "late";

interface AttendanceChipProps {
  status: AttendanceStatus;
  selected?: boolean;
  onClick?: () => void;
}

export function AttendanceChip({ status, selected, onClick }: AttendanceChipProps) {
  const config = {
    present: { label: "Presente", color: "var(--secondary)", bg: "var(--green-100)" },
    absent: { label: "Falta", color: "var(--accent)", bg: "var(--orange-100)" },
    late: { label: "Atraso", color: "var(--color-khaki-600)", bg: "var(--color-khaki-200)" },
  };

  const { label, color, bg } = config[status];

  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-1.5 rounded-[var(--radius-sm)] text-sm font-semibold border transition-all
        ${selected 
          ? `bg-[${bg}] border-[${color}] text-[${color}] shadow-sm scale-105` 
          : "bg-transparent border-transparent text-[var(--text-muted)] opacity-60 hover:opacity-100"
        }
      `}
      style={selected ? { backgroundColor: bg, borderColor: color, color: color } : {}}
    >
      {label}
    </button>
  );
}
