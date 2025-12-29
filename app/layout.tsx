import "./globals.css";
import type { ReactNode } from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";
import ButtonAnimProvider from "@/components/layout/ButtonAnimProvider";
import NoiseOverlay from "@/components/layout/NoiseOverlay";

const ProxzFont = localFont({
  src: [
    { path: "../assets/fonts/ProxzFont-ExtraThin.otf", weight: "100", style: "normal" },
    { path: "../assets/fonts/ProxzFont-Thin.otf", weight: "200", style: "normal" },
    { path: "../assets/fonts/ProxzFont-Extra Light.otf", weight: "300", style: "normal" },
    { path: "../assets/fonts/ProxzFont-Light.otf", weight: "400", style: "normal" },
    { path: "../assets/fonts/ProxzFont-Regular.otf", weight: "500", style: "normal" },
    { path: "../assets/fonts/ProxzFont-Medium.otf",  weight: "600", style: "normal" },
    { path: "../assets/fonts/ProxzFont-Semibold.otf",  weight: "700", style: "normal" },
    { path: "../assets/fonts/ProxzFont-Bold.otf",    weight: "800", style: "normal" },
    { path: "../assets/fonts/ProxzFont-Extrabold.otf",    weight: "900", style: "normal" },
  ],
  variable: "--font-proxz",
  display: "swap",
});


export const metadata = {
  title: "Mahender Creative Studio",
  description: "A creative agency crafting digital experiences.",
};

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang="en" className={ProxzFont.variable}>
      <body>
        <NoiseOverlay /> 
        <ButtonAnimProvider>
          <Header />
           <main>{children}</main>
          <Footer />
        </ButtonAnimProvider>
      </body>
    </html>
  );
}