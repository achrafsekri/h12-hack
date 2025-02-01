import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Playfair_Display } from "next/font/google";
import { type Metadata } from "next";
import { BreakpointIndicator } from "~/components/breakpoint-indicator";
import { Header } from "~/components/shared/header";
import Assistant from "~/components/shared/assistant";
import Footer from "~/components/shared/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${GeistSans.variable} ${playfair.variable}`}
    >
      <body>
        <Header />
        {/* <Assistant /> */}
        {children}
        <BreakpointIndicator />
        <Footer />
      </body>
    </html>
  );
}
