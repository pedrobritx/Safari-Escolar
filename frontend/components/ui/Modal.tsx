import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
	maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl";
	hideCloseButton?: boolean;
	className?: string;

	headerColorClass?: string;

	borderColorClass?: string;
}

export function Modal({
	isOpen,
	onClose,
	title,
	children,
	maxWidth = "md",
	hideCloseButton = false,
	className = "",

	headerColorClass,

	borderColorClass,
}: ModalProps) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {

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
				className={`modal-glass ${maxWidthClass} ${className} animate-in zoom-in-95 duration-200`}
				onClick={(e) => e.stopPropagation()}
			>

				<div className="modal-header">
					{title && <h2 className="modal-header-title">{title}</h2>}
					{!hideCloseButton && (
						<button
							onClick={onClose}
							className="modal-close liquid-control icon-btn"
							aria-label="Close modal"
						>
							<X size={24} strokeWidth={2.5} />
						</button>
					)}
				</div>

				<div className="max-h-[80vh] overflow-y-auto">{children}</div>
			</div>
		</div>
	);

	return createPortal(content, document.body);
}