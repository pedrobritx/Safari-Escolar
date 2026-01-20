"use client";

import { useEffect, useState } from "react";

export function APIStatus() {
  const [status, setStatus] = useState<"loading" | "connected" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/docs/")
      .then((res) => {
        if (res.ok) {
          setStatus("connected");
          setMessage("API Online");
        } else {
          setStatus("error");
          setMessage(`API Error: ${res.status}`);
        }
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
        setMessage("API Unreachable");
      });
  }, []);

  if (status === "loading") {
    return <div className="text-xs text-[var(--text-muted)] animate-pulse">Connecting to API...</div>;
  }

  if (status === "error") {
    return (
      <div className="text-xs text-red-500 font-medium flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-red-500" />
        {message}
      </div>
    );
  }

  return (
    <div className="text-xs text-green-500 font-medium flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
      {message}
    </div>
  );
}
