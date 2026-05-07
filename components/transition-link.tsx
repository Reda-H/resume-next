"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

export function TransitionLink({ href, onClick, children, ...rest }: Props) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (typeof href !== "string") return;
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

    const doc = document as Document & {
      startViewTransition?: (cb: () => void | Promise<void>) => unknown;
    };

    if (typeof doc.startViewTransition === "function") {
      e.preventDefault();
      doc.startViewTransition(() => {
        router.push(href);
      });
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
