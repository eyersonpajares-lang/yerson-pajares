import type { Metadata } from "next";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import { settings } from "@/lib/data/settings";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(settings.site.url),
  title: {
    default: settings.site.title,
    template: `%s — ${settings.displayName}`,
  },
  description: settings.site.description,
  openGraph: {
    title: settings.site.title,
    description: settings.site.description,
    url: settings.site.url,
    siteName: settings.displayName,
    type: "website",
    locale: "es_PE",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: settings.site.title,
    description: settings.site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
