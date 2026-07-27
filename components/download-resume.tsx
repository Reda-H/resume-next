"use client";

import { useResumeDownload } from "@/components/use-resume-download";

export function DownloadResume() {
  const { state, download } = useResumeDownload();

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={download}
        disabled={state === "working"}
        className="inline-flex items-center gap-2 border border-primary px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-dotted focus-visible:outline-primary disabled:opacity-60"
      >
        <svg
          aria-hidden="true"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          className="translate-y-px"
        >
          <path
            d="M7.5 1v8m0 0L4.5 6M7.5 9l3-3M2.5 11.5v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="square"
          />
        </svg>
        {state === "working" ? "Generating…" : "Download PDF"}
      </button>
      {state === "error" && (
        <span className="text-xs text-destructive">
          Couldn&apos;t generate the PDF — please try again.
        </span>
      )}
    </div>
  );
}
