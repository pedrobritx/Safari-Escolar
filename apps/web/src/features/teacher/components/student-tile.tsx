import React from "react";
import { Card } from "@/components/ui/card";

interface StudentTileProps {
  name: string;
  avatar: string; // Emoji for now, or URL
  status?: "present" | "absent" | "late";
  onClick?: () => void;
}

export function StudentTile({ name, avatar, status, onClick }: StudentTileProps) {
  const statusColors = {
    present: "border-[var(--secondary)] bg-[var(--green-50)]",
    absent: "border-[var(--accent)] bg-[var(--orange-50)]",
    late: "border-[var(--color-khaki-400)] bg-[var(--color-khaki-50)]",
  };

  const activeStyle = status ? statusColors[status] : "border-transparent bg-[var(--surface)]";

  return (
    <Card 
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 cursor-pointer hover:scale-[1.02] active:scale-95 border-2 ${activeStyle}`}
    >
      <div className="text-4xl filter drop-shadow-sm">{avatar}</div>
      <span className="text-sm font-medium text-center leading-tight line-clamp-2">
        {name}
      </span>
    </Card>
  );
}
