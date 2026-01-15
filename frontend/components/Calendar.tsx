import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateChange }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate));

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const isSameDay = (d1: Date, d2: Date) => {
    return d1.getDate() === d2.getDate() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getFullYear() === d2.getFullYear();
  };

  const handleDayClick = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    onDateChange(newDate);
  };
  
  const handleTodayClick = () => {
    const today = new Date();
    setCurrentMonth(today);
    onDateChange(today);
  };

  const renderDays = () => {
    const days = [];
    
    // Células vazias para dias antes do início do mês
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="h-8 md:h-10"></div>);
    }

    // Dias do mês
    for (let i = 1; i <= daysInMonth; i++) {
        const dateToCheck = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
        const isSelected = isSameDay(dateToCheck, selectedDate);
        const isToday = isSameDay(dateToCheck, new Date());

        days.push(
            <button
                key={i}
                onClick={() => handleDayClick(i)}
                className={`h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center text-sm font-bold transition-all relative
                    ${isSelected 
                        ? 'bg-[var(--color-primary)] text-white shadow-md scale-105' 
                        : 'text-[#57534E] hover:bg-[var(--color-secondary)] hover:text-primary'
                    }
                    ${isToday && !isSelected ? 'border-2 border-[var(--color-primary)] text-primary' : ''}
                `}
            >
                {i}
                {isToday && !isSelected && (
                  <span className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full"></span>
                )}
            </button>
        );
    }
    return days;
  };

  return (
    <div className="bg-[#FAF9F6] border-2 border-[var(--color-border)] rounded-2xl shadow-[4px_4px_0px_var(--color-border)] p-4 md:p-6 w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <button 
            onClick={handlePrevMonth}
            className="p-1 rounded-full hover:bg-[var(--color-secondary)] text-primary transition-colors"
        >
            <ChevronLeft size={24} />
        </button>
        <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold text-primary capitalize">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
        </div>
        <button 
            onClick={handleNextMonth}
            className="p-1 rounded-full hover:bg-[var(--color-secondary)] text-primary transition-colors"
        >
            <ChevronRight size={24} />
        </button>
      </div>

      <div className="grid grid-cols-7 mb-2 text-center">
        {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
            <div key={index} className="text-xs font-bold text-[#A8A29E] py-1">
                {day}
            </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1 justify-items-center flex-1">
        {renderDays()}
      </div>

      <button
        onClick={handleTodayClick}
        className="mt-4 w-full py-2 bg-white border-2 border-[var(--color-border)] rounded-xl text-sm font-bold text-primary hover:bg-[var(--color-secondary)] transition-all flex items-center justify-center gap-2"
      >
        <CalendarIcon size={16} />
        Ir para Hoje
      </button>
    </div>
  );
};

export default Calendar;
