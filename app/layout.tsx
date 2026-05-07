import './globals.css';
import type { Metadata } from 'next';
import { SidebarNav } from '@/components/sidebar-nav';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Reda Herradi",
  "jobTitle": "Senior Frontend Engineer",
  "url": "https://herradi.com",
  "sameAs": [
    "https://github.com/Reda-H",
    "https://www.linkedin.com/in/reda-herradi/"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL('https://herradi.com'),
  title: 'Reda Herradi',
  description: "Reda Herradi — Senior Frontend Engineer.",
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
  keywords: "Reda Herradi, Frontend Engineer, Senior Developer, Vue.js, JavaScript, TypeScript, Web Development",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Reda Herradi",
    title: "Reda Herradi — Senior Frontend Engineer",
    description: "Senior Frontend Engineer.",
    url: "/",
    images: [
      { url: "/android-chrome-512x512.png", width: 512, height: 512, alt: "Reda Herradi" }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Reda Herradi — Senior Frontend Engineer",
    description: "Senior Frontend Engineer.",
    creator: "@reda_herradi",
    images: ["/android-chrome-512x512.png"]
  },
  alternates: { canonical: "/" }
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
      </body>
    </html>
  );
}
