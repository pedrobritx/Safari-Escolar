"use client";

import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		// 1. Background uses default body background (Khaki Base)
		<div className="flex h-screen w-full flex-col items-center justify-center p-4">
			{/* 2. Card container using .card (Base Flat Surface) */}
			<div className="card w-full max-w-md text-center">
				{/* Icon Container */}
				<div className="mx-auto mt-6 mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--safari-orange-light)]">
					<svg
						className="h-8 w-8 text-[var(--safari-orange)]" /* Use Orange for errors */
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
						/>
					</svg>
				</div>

				<div className="card-body pt-0">
					<h2 className="mb-2 text-xl font-bold text-[var(--text-primary)]">
						Algo deu errado!
					</h2>
					<p className="mb-6 text-sm text-[var(--text-muted)]">
						Não conseguimos processar sua solicitação. Tente novamente ou
						contate o suporte se o problema persistir.
					</p>

					<div className="flex justify-center gap-3">
						<button
							onClick={() => window.location.reload()}
							className="btn btn-ghost" /* Use Ghost Button */
						>
							Recarregar Página
						</button>
						<button
							onClick={() => reset()}
							className="btn btn-accent" /* Use Accent (Orange) for retry/attention */
						>
							Tentar Novamente
						</button>
					</div>

					{process.env.NODE_ENV === "development" && (
						<div className="mt-6 overflow-hidden rounded bg-[var(--safari-stone-100)] p-4 text-left border border-[var(--safari-stone-200)]">
							<p className="font-mono text-xs text-[var(--safari-orange)] break-all">
								{error.message}
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
