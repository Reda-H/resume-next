export default function Contact() {
  return (
    <>
      <h1 className="font-semibold mb-7 text-foreground">Contact</h1>
      <p className="mt-7">
        Email is the fastest way to reach me —{" "}
        <a className="prose-link" href="mailto:herradi.r@gmail.com">
          herradi.r@gmail.com
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
