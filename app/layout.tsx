import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Sacramento } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { studio } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const sacramento = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script-face",
});

export const metadata: Metadata = {
  metadataBase: new URL(studio.url),
  title: {
    default: studio.name,
    template: "%s · Little Lions Head",
  },
  description:
    "Little Lions Head builds software and AI for intelligent organisations. Data platforms, agents, and tools the organisation owns. Cape Town.",
  openGraph: {
    title: studio.name,
    description:
      "Software, data, and AI for organisations that need the work to decide. Grounded, governed, and owned.",
    locale: "en_ZA",
    type: "website",
    siteName: studio.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${sacramento.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
