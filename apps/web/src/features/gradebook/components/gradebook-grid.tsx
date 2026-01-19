"use client";

import { useState } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Input } from "@/components/ui/input";
import { Student } from "@/features/teacher/types";
import { GradeCategory, GradeItem, GradeEntry } from "../types";

interface GradebookGridProps {
  students: Student[];
  categories: GradeCategory[];
  items: GradeItem[];
  entries: GradeEntry[];
  onUpdateGrade: (studentId: string, itemId: string, score: number) => void;
  onEditItem?: (item: GradeItem) => void;
}

export function GradebookGrid({
  students,
  categories,
  items,
  entries,
  onUpdateGrade,
  onEditItem
}: GradebookGridProps) {
  
  const getScore = (studentId: string, itemId: string) => {
    const entry = entries.find(e => e.student === studentId && e.grade_item === itemId);
    return entry ? entry.score : "";
  };

  return (
    <div className="overflow-x-auto pb-4">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="text-[var(--text-muted)] bg-[var(--surface-active)] uppercase rounded-t-lg">
          <tr>
            <th className="px-4 py-3 sticky left-0 bg-[var(--surface-active)] z-10 w-48 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                Aluno
            </th>
            {items.map((item) => (
              <th 
                key={item.id} 
                className={`px-4 py-3 min-w-[100px] text-center border-l border-[var(--border)] ${onEditItem ? 'cursor-pointer hover:bg-[var(--surface-hover)] transition-colors group' : ''}`}
                onClick={() => onEditItem?.(item)}
              >
                <div className="font-bold text-[var(--text)] flex items-center justify-center gap-1">
                  {item.title}
                  {onEditItem && <span className="opacity-0 group-hover:opacity-60 text-xs">✏️</span>}
                </div>
                <div className="text-[10px] opacity-70">{item.max_score} pts</div>
              </th>
            ))}
            <th className="px-4 py-3 min-w-[100px] text-center border-l border-[var(--border)] font-bold">
                Total
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            const studentId = student.id;
            return (
                <tr key={studentId} className="border-b border-[var(--border)] hover:bg-[var(--surface-hover)]">
                    <td className="px-4 py-3 font-medium sticky left-0 bg-[var(--background)] shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                        {student.name}
                    </td>
                    {items.map((item) => (
                    <td key={item.id} className="px-2 py-2 border-l border-[var(--border)] text-center">
                        <Input 
                            type="number"
                            className="bg-transparent border-0 text-center h-8 focus:ring-1 focus:ring-[var(--primary)] px-1"
                            value={getScore(studentId, item.id)}
                            onChange={(e) => {
                                const val = parseFloat(e.target.value);
                                if (!isNaN(val)) {
                                    onUpdateGrade(studentId, item.id, val);
                                }
                            }}
                            max={item.max_score}
                            min={0}
                        />
                    </td>
                    ))}
                    <td className="px-4 py-3 font-bold text-center border-l border-[var(--border)]">
                        {/* Calculate Total */}
                        {items.reduce((acc, item) => {
                             const score = entries.find(e => e.student === studentId && e.grade_item === item.id)?.score || 0;
                             return acc + Number(score);
                        }, 0)}
                    </td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
