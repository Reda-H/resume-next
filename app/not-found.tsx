import type { Metadata } from "next";
import { TransitionLink } from "@/components/transition-link";

export const metadata: Metadata = {
  title: "Lost?",
  description:
    "This page doesn't exist — but since you're already here, let's talk.",
};

export default function NotFound() {
  return (
    <>
      <h1 className="font-semibold mb-7 text-foreground">
        You took a wrong turn
      </h1>
      <p className="mt-7">
        This page doesn&apos;t exist — but since you&apos;re already here,
        why not say hi? I read every email I get and I&apos;m always up for a
        conversation about engineering, leadership, or whatever you&apos;re
        building.
      </p>
      <p className="mt-7">
        Or if you came here looking for something specific and can&apos;t
        find it, tell me — I&apos;ll point you at it.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-5">
        <TransitionLink
          href="/contact"
          className="inline-flex items-center bg-primary px-5 py-3 font-semibold text-primary-foreground no-underline hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-1 focus-visible:outline-dotted focus-visible:outline-primary focus-visible:outline-offset-4"
        >
          Get in touch →
        </TransitionLink>
        <TransitionLink href="/" className="prose-link">
          or back to the start
        </TransitionLink>
      </div>
    </>
  );
}
