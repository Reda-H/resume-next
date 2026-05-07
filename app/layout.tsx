import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SidebarNav } from '@/components/sidebar-nav';

const SITE_URL = 'https://herradi.com';

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": "Reda Herradi",
      "givenName": "Reda",
      "familyName": "Herradi",
      "jobTitle": "Senior Software Engineer",
      "description": "Senior software engineer at Oracle, working on Oracle Payment System. Based in Morocco.",
      "url": SITE_URL,
      "image": `${SITE_URL}/android-chrome-512x512.png`,
      "worksFor": {
        "@type": "Organization",
        "name": "Oracle",
        "url": "https://www.oracle.com"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Al Akhawayn University in Ifrane",
        "url": "https://www.aui.ma"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MA"
      },
      "telephone": "+212697444476",
      "email": "herradi.r@gmail.com",
      "knowsAbout": [
        "Frontend Engineering",
        "Vue.js",
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Web Performance",
        "Web Accessibility",
        "Team Leadership"
      ],
      "sameAs": [
        "https://github.com/Reda-H",
        "https://www.linkedin.com/in/reda-herradi/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Reda Herradi",
      "publisher": { "@id": `${SITE_URL}/#person` },
      "inLanguage": "en"
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Reda Herradi — Senior Software Engineer',
    template: '%s — Reda Herradi',
  },
  description:
    "Reda Herradi is a senior software engineer at Oracle, based in Morocco. He works on Oracle Payment System and previously led frontend at Nuitee.",
  themeColor: '#fcfcfc',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    ],
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Reda Herradi',
    title: 'Reda Herradi — Senior Software Engineer',
    description:
      "Senior software engineer at Oracle, based in Morocco. Working on Oracle Payment System.",
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reda Herradi — Senior Software Engineer',
    description:
      "Senior software engineer at Oracle, based in Morocco. Working on Oracle Payment System.",
    creator: '@HerradiR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden touch-manipulation">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="w-full p-6 sm:p-10 md:p-14 text-sm leading-6 sm:text-[15px] sm:leading-7 md:text-base md:leading-7">
        <svg
          aria-hidden="true"
          className="absolute h-0 w-0 overflow-hidden"
          focusable="false"
        >
          <filter id="grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
              result="turb"
            />
            <feColorMatrix
              in="turb"
              values="0 0 0 0 0.5
                      0 0 0 0 0.5
                      0 0 0 0 0.5
                      0 0 0 0.7 0"
              result="grayNoise"
            />
            <feComposite
              in="grayNoise"
              in2="SourceGraphic"
              operator="in"
              result="grainBounded"
            />
            <feBlend in="SourceGraphic" in2="grainBounded" mode="overlay" />
          </filter>
        </svg>
        <div className="flex flex-col sm:flex-row">
          <SidebarNav />
          <main className="relative flex-1 max-w-2xl">
            <div className="absolute w-full h-px opacity-50 bg-border right-0 sm:right-auto sm:left-0 sm:w-px sm:h-full sm:opacity-100 mix-blend-multiply" />
            <article className="pl-0 pt-6 sm:pt-0 sm:pl-10 md:pl-14 animate-in fade-in duration-500">
              {children}
            </article>
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
