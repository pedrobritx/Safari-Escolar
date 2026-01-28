import React from "react";

type ButtonVariant =
	| "primary"
	| "accent"
	| "anger"
	| "warning"
	| "info"
	| "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className = "",
			variant = "primary",
			isLoading,
			children,
			disabled,
			...props
		},
		ref,
	) => {
		const baseClass = "btn liquid-control";
		const variantClass = `btn-${variant}`;

		return (
			<button
				ref={ref}
				className={`${baseClass} ${variantClass} ${className} ${disabled || isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
				disabled={disabled || isLoading}
				{...props}
			>
				{isLoading ? (
					<>
						<span className="animate-spin mr-2">⏳</span>
						Wait...
					</>
				) : (
					children
				)}
			</button>
		);
	},
);

Button.displayName = "Button";
