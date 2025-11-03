import Footer from "@/components/Footer";
import Navbar from "@/components/ui/navbar";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"], // Example weights
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Syed Noor | Portfolio Website",
  description:
    "Hi, I am Syed Shaeduzzaman Noor, a software engineer with a passion for building impactful web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
