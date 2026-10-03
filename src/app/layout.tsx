import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppFloat from "@/components/whatsapp/WhatsAppFloat";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brayanoservice.com"),
  title: {
    default: "Brayano Service — Agence digitale au Cameroun",
    template: "%s — Brayano Service",
  },
  description:
    "Agence digitale à Douala, Cameroun. Publicité Meta Ads, sites web, WhatsApp Business, automatisation et intelligence artificielle pour développer votre activité.",
  keywords: [
    "agence marketing digital Douala",
    "publicité Facebook Cameroun",
    "agence Meta Ads Cameroun",
    "création site web Douala",
    "automatisation WhatsApp Cameroun",
    "intelligence artificielle entreprise Cameroun",
  ],
  openGraph: {
    title: "Brayano Service — Agence digitale au Cameroun",
    description:
      "Publicité, sites web, WhatsApp, automatisation et IA pour développer votre activité au Cameroun.",
    locale: "fr_CM",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body className="font-sans antialiased bg-bg text-text leading-relaxed">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
