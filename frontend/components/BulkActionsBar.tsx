import { Button } from "./ui/Button";
import { X, CheckSquare, MessageSquare } from "lucide-react";

interface BulkActionsBarProps {
	selectedCount: number;
	onClearSelection: () => void;
	onMarkPresent: () => void;
	onGiveFeedback: () => void;
}

export const BulkActionsBar = ({
	selectedCount,
	onClearSelection,
	onMarkPresent,
	onGiveFeedback,
}: BulkActionsBarProps) => {
	if (selectedCount === 0) return null;

	return (
		<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
			<div className="bg-[var(--surface-glass)] backdrop-blur-[var(--blur-glass)] border border-[var(--border-glass)] shadow-[var(--shadow-floating)] rounded-[var(--radius-outer)] p-2 pr-4 flex items-center gap-3">
				<div className="bg-[var(--safari-stone-900)] text-white px-3 py-1.5 rounded-[calc(var(--radius-inner)-2px)] text-sm font-bold flex items-center gap-2">
					<span>{selectedCount}</span>
					<span className="font-normal opacity-70">selecionados</span>
					<button
						onClick={onClearSelection}
						className="ml-1 hover:text-[var(--safari-orange)] transition-colors"
					>
						<X size={14} />
					</button>
				</div>

				<div className="h-6 w-px bg-[var(--safari-stone-300)]" />

				<Button
					variant="ghost"
					onClick={onMarkPresent}
					className="h-8 hover:bg-[var(--safari-green-light)] hover:text-[var(--safari-green)] flex items-center gap-2"
				>
					<CheckSquare size={16} />
					<span className="hidden sm:inline font-bold">Marcar Presença</span>
				</Button>

				<Button
					variant="primary"
					onClick={onGiveFeedback}
					className="h-8 flex items-center gap-2"
				>
					<MessageSquare size={16} />
					<span>Dar Feedback</span>
				</Button>
			</div>
		</div>
	);
};