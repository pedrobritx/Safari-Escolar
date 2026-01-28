import React, { useState } from "react";
import {
	ChevronLeft,
	ChevronRight,
	Calendar as CalendarIcon,
} from "lucide-react";

interface CalendarProps {
	selectedDate: Date;
	onDateChange: (date: Date) => void;
	// Future: dayStatuses?: { [date: string]: 'complete' | 'partial' | 'empty' }
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateChange }) => {
	const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate));

	const daysInMonth = new Date(
		currentMonth.getFullYear(),
		currentMonth.getMonth() + 1,
		0,
	).getDate();
	const firstDayOfMonth = new Date(
		currentMonth.getFullYear(),
		currentMonth.getMonth(),
		1,
	).getDay();

	const monthNames = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro",
	];

	const handlePrevMonth = () => {
		setCurrentMonth(
			new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
		);
	};

	const handleNextMonth = () => {
		setCurrentMonth(
			new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
		);
	};

	const isSameDay = (d1: Date, d2: Date) => {
		return (
			d1.getDate() === d2.getDate() &&
			d1.getMonth() === d2.getMonth() &&
			d1.getFullYear() === d2.getFullYear()
		);
	};

	const handleDayClick = (day: number) => {
		const newDate = new Date(
			currentMonth.getFullYear(),
			currentMonth.getMonth(),
			day,
		);
		onDateChange(newDate);
	};

	const handleTodayClick = () => {
		const today = new Date();
		setCurrentMonth(today);
		onDateChange(today);
	};

	// Mock data generator for visual verification (Since backend doesn't provide this yet)
	const getDayStatus = (day: number) => {
		// Mock logic: Weekends empty, some random days complete/partial
		const date = new Date(
			currentMonth.getFullYear(),
			currentMonth.getMonth(),
			day,
		);
		const dayOfWeek = date.getDay();
		if (dayOfWeek === 0 || dayOfWeek === 6) return "empty";

		// Deterministic randomish based on day
		if (day % 4 === 0) return "partial";
		if (day % 3 === 0) return "missing"; // Gray/No data
		return "complete";
	};

	const renderDays = () => {
		const days = [];

		// Células vazias para dias antes do início do mês
		for (let i = 0; i < firstDayOfMonth; i++) {
			days.push(<div key={`empty-${i}`} className="h-10 md:h-12"></div>);
		}

		// Dias do mês
		for (let i = 1; i <= daysInMonth; i++) {
			const dateToCheck = new Date(
				currentMonth.getFullYear(),
				currentMonth.getMonth(),
				i,
			);
			const isSelected = isSameDay(dateToCheck, selectedDate);
			const isToday = isSameDay(dateToCheck, new Date());
			const status = getDayStatus(i);

			days.push(
				<button
					key={i}
					onClick={() => handleDayClick(i)}
					className={`liquid-control h-10 w-10 md:h-12 md:w-12 rounded-[var(--radius-inner)] flex flex-col items-center justify-center text-sm font-bold relative
                    ${
											isSelected
												? "bg-[var(--safari-green)] text-white shadow-[var(--shadow-hardware-active)] scale-105 border border-transparent"
												: "bg-[var(--control-surface)] text-[var(--text-muted)] border border-[var(--safari-stone-200)] shadow-[var(--shadow-hardware)] hover:bg-[var(--safari-green-light)]/20 hover:text-[var(--safari-green)] hover:border-[var(--safari-green)]"
										}
                    ${isToday && !isSelected ? "ring-2 ring-[var(--safari-green)] ring-offset-1" : ""}
                `}
				>
					<span>{i}</span>

					{/* Status Dot */}
					<div className="flex gap-0.5 mt-1">
						{!isSelected && status === "complete" && (
							<div className="w-1.5 h-1.5 rounded-full bg-[var(--safari-green)]/60"></div>
						)}
						{!isSelected && status === "partial" && (
							<div className="w-1.5 h-1.5 rounded-full bg-[var(--safari-orange)]/60"></div>
						)}
						{!isSelected && status === "missing" && (
							<div className="w-1.5 h-1.5 rounded-full bg-[var(--safari-stone-300)]"></div>
						)}
					</div>
				</button>,
			);
		}
		return days;
	};

	return (
		<div className="card p-4 md:p-6 w-full h-full flex flex-col bg-[var(--surface-raised)] rounded-[var(--radius-outer)] border border-[var(--safari-stone-200)] shadow-sm">
			<div className="flex items-center justify-between mb-6">
				<button onClick={handlePrevMonth} className="liquid-control icon-btn">
					<ChevronLeft size={20} />
				</button>
				<h3 className="text-lg font-bold text-[var(--text-primary)] capitalize">
					{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
				</h3>
				<button onClick={handleNextMonth} className="liquid-control icon-btn">
					<ChevronRight size={20} />
				</button>
			</div>

			<div className="grid grid-cols-7 mb-4 text-center">
				{["D", "S", "T", "Q", "Q", "S", "S"].map((day, index) => (
					<div
						key={index}
						className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider"
					>
						{day}
					</div>
				))}
			</div>

			<div className="grid grid-cols-7 gap-2 justify-items-center flex-1">
				{renderDays()}
			</div>

			<button
				onClick={handleTodayClick}
				className="liquid-control mt-6 w-full py-2 bg-[var(--control-surface)] text-[var(--text-muted)] text-sm font-bold rounded-[var(--radius-inner)] border border-[var(--safari-stone-200)] shadow-[var(--shadow-hardware)] hover:bg-[var(--safari-green-light)]/20 hover:text-[var(--safari-green)] hover:border-[var(--safari-green)] flex items-center justify-center gap-2"
			>
				<CalendarIcon size={16} />
				Ir para Hoje
			</button>
		</div>
	);
};

export default Calendar;
