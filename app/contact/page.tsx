import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Reda Herradi — email, phone, GitHub, and LinkedIn.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Reda Herradi",
    description: "Email, phone, GitHub, and LinkedIn for Reda Herradi.",
    url: "/contact",
  },
  twitter: {
    title: "Contact — Reda Herradi",
    description: "Email, phone, GitHub, and LinkedIn for Reda Herradi.",
  },
};

export default function Contact() {
  return (
    <>
      <h1 className="font-semibold mb-7 text-foreground">Contact</h1>
      <p className="mt-7">
        Email is the fastest way to reach me —{" "}
        <a className="prose-link" href="mailto:herradi.r@gmail.com">
          herradi.r@gmail.com
        </a>
        . You can also call or text me at{" "}
        <a className="prose-link" href="tel:+212697444476">
          +212 697 444 476
        </a>
        .
      </p>
      <p className="mt-7">
        I&apos;m also on{" "}
        <a
          className="prose-link"
          href="https://github.com/Reda-H"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and{" "}
        <a
          className="prose-link"
          href="https://www.linkedin.com/in/reda-herradi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </>
  );
}
