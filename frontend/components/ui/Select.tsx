import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export interface Option {
	value: string;
	label: string;
}

interface SelectProps {
	value: string;
	onChange: (value: string) => void;
	options: Option[];
	placeholder?: string;
	className?: string;
}

export function Select({
	value,
	onChange,
	options,
	placeholder = "Selecione...",
	className = "",
}: SelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const selectedOption = options.find((opt) => opt.value === value);

	return (
		<div ref={dropdownRef} className={`relative ${className}`}>
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="w-full h-[42px] flex items-center justify-between px-4 rounded-[var(--radius-inner)] bg-[var(--control-surface-off)] border border-[var(--safari-stone-300)] text-[var(--text-primary)] font-medium shadow-inner outline-none transition-all hover:bg-white hover:border-[var(--safari-green)] focus:ring-2 focus:ring-[var(--safari-green)]/30"
			>
				<span className={!selectedOption ? "text-[var(--text-muted)]" : ""}>
					{selectedOption ? selectedOption.label : placeholder}
				</span>
				<ChevronDown
					size={14}
					className={`text-[var(--text-muted)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
					strokeWidth={3}
				/>
			</button>

			{isOpen && (
				<div className="absolute top-[calc(100%+4px)] left-0 right-0 z-50 flex flex-col p-1 bg-white/80 backdrop-blur-xl rounded-[var(--radius-inner)] border border-[var(--border-glass)] shadow-[var(--shadow-glass)] animate-in fade-in zoom-in-95 duration-200 origin-top min-w-[max-content]">
					<div className="max-h-[300px] overflow-y-auto custom-scrollbar">
						{options.map((option) => (
							<button
								key={option.value}
								onClick={() => {
									onChange(option.value);
									setIsOpen(false);
								}}
								className={`w-full text-left px-3 py-2 rounded-[calc(var(--radius-inner)-4px)] font-bold text-sm transition-all flex items-center gap-2
                  ${
										option.value === value
											? "bg-[var(--safari-green-light)] text-[var(--safari-green)]"
											: "text-[var(--text-primary)] hover:bg-[var(--safari-stone-100)]"
									}
                `}
							>
								{option.label}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
