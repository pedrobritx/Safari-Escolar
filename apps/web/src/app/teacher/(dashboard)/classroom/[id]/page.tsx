"use client";

import { useState } from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/back-button";
import { StudentTile } from "@/features/teacher/components/student-tile";
import { AttendanceChip, AttendanceStatus } from "@/features/teacher/components/attendance-chip";

// Mock Data
const MOCK_STUDENTS = [
  { id: 1, name: "Ana Clara", avatar: "🦒" },
  { id: 2, name: "Bernardo", avatar: "🦁" },
  { id: 3, name: "Carla", avatar: "🦓" },
  { id: 4, name: "Daniel", avatar: "🐘" },
  { id: 5, name: "Eduardo", avatar: "🐒" },
  { id: 6, name: "Fernanda", avatar: "🦜" },
  { id: 7, name: "Gabriel", avatar: "🐊" },
  { id: 8, name: "Helena", avatar: "🦒" },
];

export default function ClassDetail() {
  const [attendanceMode, setAttendanceMode] = useState<AttendanceStatus>("present");
  const [studentStatus, setStudentStatus] = useState<Record<number, AttendanceStatus>>({});

  // Initialize with 'present' implicitly or explicitly? 
  // UI.md says: Bulk action (Mark all present)
  
  const handleStudentClick = (id: number) => {
    setStudentStatus((prev) => {
      const currentStatus = prev[id];
      // If already marked with the current mode, unmark (toggle off)
      if (currentStatus === attendanceMode) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      // Otherwise set to current mode
      return {
        ...prev,
        [id]: attendanceMode,
      };
    });
  };

  const handleMarkAll = () => {
    const newStatus: Record<number, AttendanceStatus> = {};
    MOCK_STUDENTS.forEach((s) => {
      newStatus[s.id] = "present";
    });
    setStudentStatus(newStatus);
  };

  const currentCount = Object.values(studentStatus).filter(s => s === "present").length;

  return (
    <div className="flex flex-col gap-4 pb-20 relative">
      <div className="flex items-center gap-2">
         <BackButton href="/teacher" />
      </div>

      {/* Header Info */}
      <GlassPanel className="p-4 flex justify-between items-center rounded-[var(--radius-lg)]">
        <div>
           <h2 className="font-bold text-xl">Matemática 2B</h2>
           <p className="text-sm text-[var(--text-muted)]">Chamada em andamento</p>
        </div>
        <div className="text-right">
           <span className="block text-2xl font-bold text-[var(--primary)]">{currentCount}/{MOCK_STUDENTS.length}</span>
           <span className="text-xs">Presentes</span>
        </div>
      </GlassPanel>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-3">
        {MOCK_STUDENTS.map((student) => (
          <StudentTile
            key={student.id}
            name={student.name}
            avatar={student.avatar}
            status={studentStatus[student.id]}
            onClick={() => handleStudentClick(student.id)}
          />
        ))}
      </div>

      {/* Bottom Action Bar (Floating) - Replacing standard Nav if in 'focus' mode? 
          UI.md says: Fixed bottom action strip. 
          Given layout has BottomNav, maybe this sits above it or replaces it.
          For now, let's put it fixed bottom, z-index higher than BottomNav if we want to override,
          or just inside the flow if simple. But UI.md implies "Fast Mode" is a specific state.
          Let's make it a fixed sticky bottom panel.
      */}
      <div className="fixed bottom-20 left-4 right-4 md:static md:w-full md:mx-0 z-40">
        <GlassPanel variant="strong" className="p-3 shadow-2xl flex flex-col gap-3 border-[var(--primary)] border-2">
           <div className="flex justify-between items-center bg-[var(--surface)] p-1 rounded-[var(--radius-md)] relative">
              {(["present", "late", "absent"] as const).map((mode) => (
                <AttendanceChip 
                   key={mode} 
                   status={mode} 
                   selected={attendanceMode === mode} 
                   onClick={() => setAttendanceMode(mode)}
                />
              ))}
           </div>
           
           <div className="flex gap-2">
             <Button variant="ghost" size="sm" className="flex-1" onClick={handleMarkAll}>
               Todos Presentes
             </Button>
             <Button variant="primary" size="sm" className="flex-[2]">
               Salvar Chamada
             </Button>
           </div>
        </GlassPanel>
      </div>
    </div>
  );
}
