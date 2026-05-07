import { TransitionLink } from "@/components/transition-link";

export default function Home() {
  return (
    <>
      <h1 className="font-semibold mb-7 text-foreground">Reda Herradi</h1>
      <p className="mt-7">
        Senior Frontend Engineer at{" "}
        <a
          className="prose-link"
          href="https://www.oracle.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oracle
        </a>
        , working on Datastudio — a data visualization and graph exploration
        tool. (Placeholder copy — we&apos;ll rewrite this together.)
      </p>
      <p className="mt-7">
        You can read more about my{" "}
        <TransitionLink className="prose-link" href="/experience">
          experience
        </TransitionLink>{" "}
        or get in{" "}
        <TransitionLink className="prose-link" href="/contact">
          contact
        </TransitionLink>
        .
      </p>
    </>
  );
}
