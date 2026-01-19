import React from "react";
import { Card } from "@/components/ui/card";

interface StudentTileProps {
  name: string;
  avatar: string; // Emoji for now, or URL
  status?: "present" | "absent" | "late";
  points?: number;
  onClick?: () => void;
  onLongPress?: () => void;
}

export function StudentTile({ name, avatar, status, points = 0, onClick, onLongPress }: StudentTileProps) {
  const statusColors = {
    present: "border-[var(--secondary)] bg-[var(--green-50)]",
    absent: "border-[var(--accent)] bg-[var(--orange-50)]",
    late: "border-[var(--color-khaki-400)] bg-[var(--color-khaki-50)]",
  };

  const activeStyle = status ? statusColors[status] : "border-transparent bg-[var(--surface)]";

  return (
    <Card 
      onClick={onClick}
      onContextMenu={(e) => { e.preventDefault(); onLongPress?.(); }}
      className={`relative flex flex-col items-center justify-center gap-2 p-3 cursor-pointer hover:scale-[1.02] active:scale-95 border-2 ${activeStyle}`}
    >
      {/* Points Badge */}
      {points !== 0 && (
         <div className={`absolute top-2 right-2 flex items-center justify-center min-w-[24px] h-6 px-1.5 rounded-full text-xs font-bold shadow-sm ${points > 0 ? 'bg-[var(--green-100)] text-[var(--green-700)]' : 'bg-[var(--orange-100)] text-[var(--orange-700)]'}`}>
            {points > 0 ? "+" : ""}{points}
         </div>
      )}

      <div className="text-4xl filter drop-shadow-sm">{avatar}</div>
      <span className="text-sm font-medium text-center leading-tight line-clamp-2">
        {name}
      </span>
    </Card>
  );
}
