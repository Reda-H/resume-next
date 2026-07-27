"use client";

import { useState } from "react";

export type DownloadState = "idle" | "working" | "error";

/**
 * Generates the resume PDF client-side and triggers a download.
 * The PDF renderer is lazy-loaded on first use, so it never lands in the
 * initial bundle of whatever page (or the global sidebar) mounts this hook.
 */
export function useResumeDownload() {
  const [state, setState] = useState<DownloadState>("idle");

  async function download() {
    if (state === "working") return;
    setState("working");
    try {
      const [{ pdf }, { ResumeDocument }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/lib/resume-pdf"),
      ]);

      const blob = await pdf(<ResumeDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Reda-Herradi-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setState("idle");
    } catch {
      setState("error");
    }
  }

  return { state, download };
}
