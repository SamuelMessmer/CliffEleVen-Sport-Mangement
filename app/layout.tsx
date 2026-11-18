import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Anton, IBM_Plex_Mono, Manrope } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SiteBehaviour from "./components/SiteBehaviour";

// next/font downloads the fonts at build time and serves them from this
// domain, so no visitor data is sent to Google.
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const plexMono = IBM_Plex_Mono({ weight: "500", subsets: ["latin"], variable: "--font-plex-mono", display: "swap" });

export const metadata: Metadata = {
  title: "CliffEleVen – Sportmanagement für Fußballer",
  description:
    "CliffEleVen begleitet Fußballtalente in ganz Europa: Karriereplanung, Vertragsverhandlungen, Coaching und ein starkes Netzwerk.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "CliffEleVen – Catch your dreams",
    description: "Sportmanagement für Fußballer in ganz Europa.",
    images: ["/images/osei.webp"],
    locale: "de_DE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0c11",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${anton.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <SiteBehaviour />
      </body>
    </html>
  );
}
