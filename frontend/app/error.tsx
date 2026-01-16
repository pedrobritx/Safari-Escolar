'use client';

import { useEffect } from 'react';

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
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <svg
            className="h-8 w-8 text-red-600"
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
        <h2 className="mb-2 text-xl font-bold text-gray-900">Algo deu errado!</h2>
        <p className="mb-6 text-sm text-gray-500">
          Não conseguimos processar sua solicitação. Tente novamente ou contate o suporte se o problema persistir.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition-colors"
          >
            Recarregar Página
          </button>
          <button
            onClick={() => reset()}
            className="rounded-lg bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-600 transition-colors shadow-sm"
          >
            Tentar Novamente
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-6 overflow-hidden rounded bg-gray-100 p-4 text-left">
            <p className="font-mono text-xs text-red-600 break-all">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
