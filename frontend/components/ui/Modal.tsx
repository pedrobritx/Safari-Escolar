import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
	maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
	/** @deprecated Use standard modal styling instead */
	headerColorClass?: string;
	/** @deprecated Modal borders no longer change by mode */
	borderColorClass?: string;
}

export function Modal({
	isOpen,
	onClose,
	title,
	children,
	maxWidth = "md",
	// Deprecated props kept for backward compatibility but ignored
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	headerColorClass,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	borderColorClass,
}: ModalProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setMounted(true);
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	if (!mounted || !isOpen) return null;

	const maxWidthClass = {
		sm: "max-w-sm",
		md: "max-w-md",
		lg: "max-w-lg",
		xl: "max-w-xl",
		"2xl": "max-w-2xl",
	}[maxWidth];

	const content = (
		<div
			className="modal-overlay animate-in fade-in duration-200"
			onClick={onClose}
		>
			<div
				className={`modal-glass ${maxWidthClass} animate-in zoom-in-95 duration-200`}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="modal-header">
					{title && <h2 className="modal-header-title">{title}</h2>}
					<button
						onClick={onClose}
						className="modal-close liquid-control icon-btn"
						aria-label="Close modal"
					>
						<X size={24} strokeWidth={2.5} />
					</button>
				</div>

				{/* Content */}
				<div className="max-h-[80vh] overflow-y-auto">{children}</div>
			</div>
		</div>
	);

	return createPortal(content, document.body);
}
