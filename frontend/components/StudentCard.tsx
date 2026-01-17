import React from 'react';
import { Button } from '@/components/ui/Button';
import { Student } from '@/lib/types';
import { Pencil, ChevronDown } from 'lucide-react';

interface StudentCardProps {
  student: Student;
  viewMode: 'grid' | 'list';
  onEdit: (student: Student) => void;
  onAttendanceChange: (studentId: string, status: 'PRESENT' | 'ABSENT' | 'LATE' | 'CLEARED') => void;
  onOpenFeedback: (studentId: string, studentName: string) => void;
}

export const StudentCard: React.FC<StudentCardProps> = ({ 
  student, 
  viewMode, 
  onEdit, 
  onAttendanceChange, 
  onOpenFeedback 
}) => {
  
  const getAvatarEmoji = (avatar: string) => {
    const map: Record<string, string> = {
      'Leão': '🦁', 'Tigre': '🐯', 'Elefante': '🐘', 'Girafa': '🦒', 'Zebra': '🦓', 
      'Macaco': '🐒', 'Urso': '🐻', 'Lobo': '🐺', 'Raposa': '🦊', 'Coelho': '🐰', 
      'Panda': '🐼', 'Koala': '🐨'
    };
    return map[avatar] || avatar; 
  };

  return (
    <div 
      className={viewMode === 'list' 
        ? "px-6 py-4 hover:bg-white transition-colors"
        : `bg-white border-2 border-[var(--color-border)] rounded-xl p-4 flex flex-col items-center text-center hover:shadow-md transition-all relative group`
      }
    >
      <div className={viewMode === 'list' ? "flex flex-col sm:flex-row items-center justify-between gap-4" : "w-full"}>
        <div className={viewMode === 'list' ? "flex items-center space-x-4" : "flex flex-col items-center gap-2 mb-4 relative"}>
          <div className="relative group/avatar">
            <div 
              className={`flex items-center justify-center border-2 border-[var(--color-border)] rounded-full shadow-sm cursor-pointer ${viewMode === 'list' ? 'w-12 h-12 text-2xl' : 'w-24 h-24 text-5xl mb-1'}`}
              style={{ backgroundColor: student.avatarColor || '#FFFFFF' }}
            >
              {getAvatarEmoji(student.animalAvatar)}
            </div>
            
            {/* Edit Overlay */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(student);
              }}
              className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity"
            >
              <div className="bg-white text-primary text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                <Pencil size={12} /> Detalhar
              </div>
            </button>
            
            {/* Pontuação Badge */}
            {(student.todayScore || 0) !== 0 && (
              <div 
                className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-md z-50 ${
                  (student.todayScore || 0) >= 0 ? 'bg-[#4D7C0F]' : 'bg-[#EA580C]'
                }`}
              >
                {student.todayScore}
              </div>
            )}
          </div>

          <span className={`font-bold text-primary ${viewMode === 'list' ? 'text-lg' : 'text-xl'}`}>{student.name}</span>
        </div>
        
        <div className={viewMode === 'list' ? "flex items-center gap-2" : "flex flex-col gap-2 w-full"}>
          <div className={viewMode === 'list' ? "w-[140px]" : "w-full"}>
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative"
            >
              <select
                id={`attendance-${student.id}`}
                aria-label={`Presença de ${student.name}`}
                value={student.todayStatus || ''}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val) onAttendanceChange(student.id, val as 'PRESENT' | 'ABSENT' | 'LATE');
                  else onAttendanceChange(student.id, 'CLEARED');
                }}
                className={`w-full appearance-none font-bold rounded-lg border-2 cursor-pointer outline-none transition-colors text-sm text-center
                  ${!student.todayStatus 
                    ? 'bg-white border-[#E5E7EB] text-[#57534E] py-2' 
                    : student.todayStatus === 'PRESENT' 
                      ? 'bg-[#ECFCCB] border-[#4D7C0F] text-[#3F6212] py-2' 
                      : student.todayStatus === 'LATE'
                        ? 'bg-[#FEF9C3] border-[#CA8A04] text-[#854D0E] py-2'
                        : 'bg-[#FFEDD5] border-[#EA580C] text-[#9A3412] py-2'
                  }
                `}
              >
                <option value="" className="bg-white text-gray-500">Marcar Presença</option>
                <option value="PRESENT" className="bg-[#ECFCCB] text-[#3F6212]">✅ Presente</option>
                <option value="LATE" className="bg-[#FEF9C3] text-[#854D0E]">⏰ Atrasado</option>
                <option value="ABSENT" className="bg-[#FFEDD5] text-[#9A3412]">🚫 Ausente</option>
                <option value="CLEARED" className="bg-white text-gray-400">🗑️ Limpar</option>
              </select>
              {/* Chevron Icon for better UX since appearance-none removes it */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                <ChevronDown size={12} strokeWidth={3} />
              </div>
            </div>
          </div>
          <div className={viewMode === 'list' ? "" : "w-full mt-1"}>
            <Button
              variant="info"
              onClick={(e) => {
                e.stopPropagation();
                onOpenFeedback(student.id, student.name);
              }}
              className={`flex items-center justify-center gap-2 ${viewMode === 'list' ? 'px-3 py-1.5 text-sm min-w-[90px]' : 'py-2 text-xs w-full'}`}
            >
              Feedback
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
