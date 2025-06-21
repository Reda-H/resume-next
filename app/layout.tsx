import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import ElasticMouseFollow from '@/components/ui/elastic-mouse-follow';

const inter = Inter({ subsets: ['latin'] });

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
}

export const metadata: Metadata = {
  metadataBase: new URL('https://herradi.com'),
  title: 'Reda Herradi - Resume',
  description: 'Reda Herradi\'s professional resume as a Senior Frontend Engineer',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
    ],
  },
  keywords: "Reda Herradi, Frontend Engineer, Senior Developer, Vue.js, JavaScript, TypeScript, Web Development",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Reda Herradi",
    title: "Reda Herradi - Senior Frontend Engineer",
    description: "Professional portfolio and resume of Reda Herradi, a Senior Frontend Engineer specializing in Vue.js and modern web development",
    url: "/",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Reda Herradi"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Reda Herradi - Senior Frontend Engineer",
    description: "Professional portfolio and resume of Reda Herradi",
    creator: "@reda_herradi",
    images: ["/android-chrome-512x512.png"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ElasticMouseFollow>
          <Header />
          {children}
        </ElasticMouseFollow>
      </body>
    </html>
  );
}