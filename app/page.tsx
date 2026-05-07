import { TransitionLink } from "@/components/transition-link";

export default function Home() {
  return (
    <>
      <h1 className="font-semibold mb-7 text-foreground">Reda Herradi</h1>
      <p className="mt-7">
        I&apos;m a senior frontend engineer at{" "}
        <a
          className="prose-link"
          href="https://www.oracle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oracle
        </a>
        , based in Morocco. These days I work on the Oracle Payment System —
        used by multi-billion-dollar companies to manage payments with their
        customers. Before that I spent a chapter on Datastudio, a data
        visualization and graph exploration tool, from active development
        through to its handover.
      </p>
      <p className="mt-7">
        The work I care most about is leading products that have a real impact
        — spotting the gaps where a team could be more efficient, and
        experimenting enough in the field to find the small things that quietly
        make everyone&apos;s life better. Some of that happens through the
        IAAP, where I sit alongside C-suite and directors to keep an eye on the
        new projects coming into the company. I was recently placed on a
        leadership track aimed at engineers the company is growing into bigger
        roles.
      </p>
      <p className="mt-7">
        You can read more about my{" "}
        <TransitionLink className="prose-link" href="/experience">
          experience
        </TransitionLink>
        , or get in{" "}
        <TransitionLink className="prose-link" href="/contact">
          contact
        </TransitionLink>
        .
      </p>
    </>
  );
}
