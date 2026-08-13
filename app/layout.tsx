import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Sans } from "next/font/google";
import localFont from "next/font/local";
import { AppShell } from "@/components/layout/app-shell";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getSiteUrl } from "@/lib/config";
import "./globals.css";

const arabic = localFont({
  src: [
    { path: "./fonts/DroidArabicKufi-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/DroidArabicKufi-Regular.ttf", weight: "500", style: "normal" },
    { path: "./fonts/DroidArabicKufi-Bold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/DroidArabicKufi-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-arabic",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nour Al Arab | Industrial AI Transformation Concept",
    template: "%s | نور العرب — تصور صناعي",
  },
  description:
    "تصور أولي مستقل لمنظومة ذكاء صناعي وأتمتة لشركة نور العرب للصناعات البلاستيكية. ليس نظاماً رسمياً للشركة، ويحتاج اكتشافاً ميدانياً قبل أي تقدير دقيق.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Nour Al Arab | Industrial AI Transformation Concept",
    description: "تصور مستقل للذكاء الصناعي والأتمتة — Industrial AI & Automation Concept",
    locale: "ar_JO",
    type: "website",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nour Al Arab | Industrial AI Transformation Concept",
    description: "Industrial AI & Automation Concept — تصور مستقل لأغراض النقاش.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${arabic.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        <TooltipProvider>
          <AppShell>{children}</AppShell>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
