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

export const metadata = {
  title: "Mostafa Ayman",
  description: "My Portfilio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-primary2 bg-pat antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
