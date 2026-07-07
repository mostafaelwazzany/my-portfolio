import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

import { Lalezar } from 'next/font/google';
const lalezar = Lalezar({
  subsets: ['latin'], // Choose subsets if needed
  weight: '400', // Specify weights
});

const ArabicUI = localFont({ src: './fonts/DG-Gaza.ttf' })
const ArabicUI2 = localFont({ src: './fonts/LANTX.otf' })
const ArabicUI3 = localFont({ src: './fonts/Rubik.ttf' })
const ArabicUI4 = localFont({ src: './fonts/galaxy.ttf' })
const ArabicUI5 = localFont({ src: './fonts/laxr.ttf' })

const siteUrl = "https://mostafaelwazzany.site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Mostafa Elwazzany Portfolio",
  title: {
    default: "Mostafa Elwazzany | Full-Stack Web Developer",
    template: "%s | Mostafa Elwazzany",
  },
  description:
    "Mostafa Elwazzany (SASA) is a full-stack web developer from Egypt building fast, accessible, and maintainable web applications with React, Next.js, Node.js, Express, and MongoDB.",
  keywords: [
    "Mostafa Elwazzany",
    "Mostafa Elwazzany Portfolio",
    "SASA",
    "Mostafa Elwazzany",
    "mostafa elwazzany",
    "mostafaelwazzany",
    "Full-Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Egypt Developer",
    "Minya Developer",
    "Portfolio",
    "SaSa",
    "Mostafa Ayman Portfolio",
    "Mostafa Ayman Website",
    "Mostafa Ayman Projects",
    "Mostafa Ayman Resume",
    "Mostafa Ayman CV",
    "Mostafa Ayman Contact",
    "Mostafa Ayman About",
    "Mostafa Ayman Skills",
    "Mostafa Ayman Experience",
    "Mostafa Ayman Education",
    "Mostafa Ayman Achievements",
    "Mostafa Ayman Awards",
    "Mostafa Ayman Certifications",
    "Mostafa Ayman Testimonials",
    "Mostafa Ayman Blog",
    "Mostafa Ayman Articles",
    "Mostafa Ayman Tutorials",
    "Mostafa Ayman Resources",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Egypt Developer",
    "Minya Developer",
    "Portfolio",
  ],
  authors: [{ name: "Mostafa Elwazzany", url: "https://mostafaelwazzany.site" }],
  creator: "Mostafa Elwazzany",
  publisher: "Mostafa Elwazzany",
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mostafa Elwazzany Portfolio",
    title: "Mostafa Elwazzany | Full-Stack Web Developer",
    description:
      "Portfolio of Mostafa Elwazzany (SASA), a full-stack web developer specializing in React, Next.js, Node.js, Express, and MongoDB.",
    images: [
      {
        url: "/mostafa elwazzany.jpeg",
        width: 1200,
        height: 630,
        alt: "Mostafa Elwazzany full-stack web developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostafa Elwazzany | Full-Stack Web Developer",
    description:
      "Full-stack web developer portfolio for React, Next.js, Node.js, Express, and MongoDB projects.",
    creator: "@Mostafawazzany1",
    images: ["/mostafa elwazzany.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export const viewport = {
  themeColor: "#26332f",
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Mostafa Ayman",
        alternateName: ["SASA", "Mostafa Aiman", "Mostafa Elwazzany"],
        url: siteUrl,
        image: `${siteUrl}/mostafa%20elwazzany.jpeg`,
        jobTitle: "Full-Stack Web Developer",
        description:
          "Full-stack web developer from Egypt building fast, accessible web applications with React, Next.js, Node.js, Express, and MongoDB.",
        email: "mailto:mostafawazzany@gmail.com",
        telephone: "+201013915804",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Minya",
          addressCountry: "EG",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Minya National University",
        },
        sameAs: [
          "https://www.linkedin.com/in/mostafa-aiman/",
          "https://www.facebook.com/mostafa.aimanelwzzany/",
          "https://www.instagram.com/mostafa_elwzzany/",
          "https://x.com/Mostafawazzany1",
        ],
        knowsAbout: [
          "Next.js",
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JavaScript",
          "TypeScript",
          "Frontend Development",
          "Backend Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Mostafa Ayman Portfolio",
        description:
          "Portfolio website for Mostafa Ayman, full-stack web developer.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en",
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={` bg-primary2 bg-pat antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
