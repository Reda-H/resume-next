"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/transition-link";
import { useResumeDownload } from "@/components/use-resume-download";

const items = [
  { name: "About", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export function SidebarNav() {
  const pathname = usePathname();
  const { state, download } = useResumeDownload();

  return (
    <nav className="sm:mr-10 md:mr-14 w-full sm:w-16">
      <ul className="lowercase text-right sm:sticky top-6 sm:top-10 md:top-14 mb-6 sm:mb-0 flex flex-wrap gap-x-2 gap-y-1 justify-end sm:block">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href} className="-mx-2 transition-colors">
              <TransitionLink
                href={item.href}
                draggable={false}
                className={`inline-block w-full px-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-dotted focus-visible:outline-primary ${
                  active
                    ? "text-foreground underline decoration-primary decoration-dotted decoration-1 underline-offset-4"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.name}
              </TransitionLink>
            </li>
          );
        })}
        <li className="-mx-2 transition-colors">
          <button
            type="button"
            onClick={download}
            disabled={state === "working"}
            title="Download résumé as PDF"
            aria-label="Download résumé as PDF"
            className="inline-flex w-full items-center justify-end gap-1.5 px-2 text-primary hover:text-primary/70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-dotted focus-visible:outline-primary disabled:opacity-60"
          >
            <svg
              aria-hidden="true"
              width="12"
              height="12"
              viewBox="0 0 15 15"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M7.5 1v8m0 0L4.5 6M7.5 9l3-3M2.5 11.5v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="square"
              />
            </svg>
            {state === "working"
              ? "generating…"
              : state === "error"
              ? "retry"
              : "download"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
