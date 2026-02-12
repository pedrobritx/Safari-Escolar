import React, { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import { Modal } from "./ui/Modal";
import { Button } from "./ui/Button";

export interface FeedbackItem {
	id: string;
	label: string;
	icon: string;
	points: number;
}

interface FeedbackModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSelectFeedback: (
		feedback: string,
		type: "positive" | "negative",
		comment?: string,
	) => void;
	onEditFeedback: () => void;
	studentName: string;
	positiveFeedbacks: FeedbackItem[];
	negativeFeedbacks: FeedbackItem[];
}

export default function FeedbackModal({
	isOpen,
	onClose,
	onSelectFeedback,
	onEditFeedback,
	studentName,
	positiveFeedbacks,
	negativeFeedbacks,
}: FeedbackModalProps) {
	const [activeTab, setActiveTab] = useState<"positive" | "negative">(
		"positive",
	);
	const [comment, setComment] = useState("");

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => setActiveTab("positive"), 0);
			setComment("");
		}
	}, [isOpen]);

	const currentFeedbacks =
		activeTab === "positive" ? positiveFeedbacks : negativeFeedbacks;

	const handleSelect = (item: FeedbackItem) => {
		onSelectFeedback(item.label, activeTab, comment);
		setComment("");
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={`Feedback • ${studentName}`}
			maxWidth="lg"
		>
			<div className="space-y-4">

				<div className="p-2 bg-[var(--surface-raised)]">
					<div className="segmented-control">
						<button
							onClick={() => setActiveTab("positive")}
							className={`segmented-tab segmented-tab--positive liquid-control ${
								activeTab === "positive" ? "segmented-tab--active" : ""
							}`}
						>
							Positivo
						</button>
						<button
							onClick={() => setActiveTab("negative")}
							className={`segmented-tab segmented-tab--negative liquid-control ${
								activeTab === "negative" ? "segmented-tab--active" : ""
							}`}
						>
							Construtivo
						</button>
						<Button
							variant="ghost"
							onClick={onEditFeedback}
							className="w-12 px-0 flex items-center justify-center bg-white flex-none"
							title="Configurar Feedback"
						>
							<Settings size={18} />
						</Button>
					</div>
				</div>

				<div className="px-4">
					<textarea
						className="w-full bg-[var(--surface-raised)] border border-[var(--safari-stone-200)] rounded-[var(--radius-inner)] p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--safari-green)] resize-none"
						placeholder="Adicionar um comentário (opcional)..."
						rows={2}
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
				</div>

				<div className="modal-body pt-0">
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
						{currentFeedbacks.map((item) => (
							<button
								key={item.id}
								onClick={() => handleSelect(item)}
								className={`feedback-tile liquid-control group ${
									activeTab === "positive"
										? "feedback-tile--positive"
										: "feedback-tile--negative"
								}`}
							>
								<div
									className={`feedback-tile-icon ${
										activeTab === "positive"
											? "feedback-tile-icon--positive"
											: "feedback-tile-icon--negative"
									}`}
								>
									{item.icon}
								</div>
								<span className="feedback-tile-label">{item.label}</span>
								<span
									className={`feedback-tile-points ${
										activeTab === "positive"
											? "feedback-tile-points--positive"
											: "feedback-tile-points--negative"
									}`}
								>
									{activeTab === "positive" ? "+" : ""}
									{item.points}
								</span>
							</button>
						))}
					</div>
				</div>
			</div>
		</Modal>
	);
}