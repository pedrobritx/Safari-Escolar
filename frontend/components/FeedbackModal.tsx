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
	onSelectFeedback: (feedback: string, type: "positive" | "negative") => void;
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

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => setActiveTab("positive"), 0); // Reset to positive when opening
		}
	}, [isOpen]);

	const currentFeedbacks =
		activeTab === "positive" ? positiveFeedbacks : negativeFeedbacks;

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title={`Feedback • ${studentName}`}
			maxWidth="lg"
		>
			{/* Segmented Tabs */}
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

			{/* Content - Feedback Tiles Grid */}
			<div className="modal-body">
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
					{currentFeedbacks.map((item) => (
						<button
							key={item.id}
							onClick={() => onSelectFeedback(item.label, activeTab)}
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
		</Modal>
	);
}
