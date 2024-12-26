import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Shanka Visal | Freelancer, Designer, Developer - Transforming Ideas into Reality",
  description:
    "Welcome to the personal website of Shanka Visal, a skilled freelancer specializing in design and development. Explore his portfolio, achievements, and services, and let’s create something extraordinary together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
