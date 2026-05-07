"use client";

import { usePathname } from "next/navigation";
import { TransitionLink } from "@/components/transition-link";

const items = [
  { name: "About", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="sm:mr-10 md:mr-14 w-full sm:w-16">
      <ul className="lowercase text-right sm:sticky top-6 sm:top-10 md:top-14 mb-6 sm:mb-0 flex gap-2 justify-end sm:block">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href} className="-mx-2 transition-colors">
              <TransitionLink
                href={item.href}
                draggable={false}
                className={`inline-block w-full px-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-dotted focus-visible:outline-primary ${
                  active
                    ? "text-foreground"
                    : "text-foreground/40 hover:text-foreground/70"
                }`}
              >
                {item.name}
              </TransitionLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
