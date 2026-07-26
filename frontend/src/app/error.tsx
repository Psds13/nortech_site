"use client";

import { useEffect } from "react";
import Link from "next/link";
import { reportError } from "@/lib/logger";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    reportError(error, { component: "AppErrorBoundary", digest: error.digest });
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-black px-6 text-center text-white">
      <h1 className="text-3xl font-bold">Algo deu errado</h1>
      <p role="alert" className="text-gray-400 max-w-md">
        Ocorreu um erro inesperado nesta página. Nossa equipe foi notificada.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={reset}
          className="rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-cyan-400"
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
