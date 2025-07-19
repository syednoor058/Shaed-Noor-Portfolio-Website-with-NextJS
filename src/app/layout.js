import Navbar from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import { DM_Sans } from '@next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'], // Example weights
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
