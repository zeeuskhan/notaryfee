import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://notaryfee.vercel.app"),
  title: { default: "NotaryFee | Notary Fee & Mobile Notary Pricing Calculator", template: "%s | NotaryFee" },
  description: "Calculate mobile notary fees, travel mileage, expenses, and estimated profit. Create clear client quotes with this free notary fee calculator.",
  applicationName: "NotaryFee",
  keywords: ["notary fee calculator", "mobile notary fee calculator", "notary travel fee calculator", "notary mileage calculator", "notary quote generator"],
  openGraph: { title: "NotaryFee | Mobile Notary Pricing Calculator", description: "Calculate notary service fees, travel, expenses and estimated profit.", url: "https://notaryfee.vercel.app", siteName: "NotaryFee", type: "website" },
  twitter: { card: "summary_large_image", title: "NotaryFee | Notary Fee Calculator", description: "Calculate notary fees, travel and profit in seconds." },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
