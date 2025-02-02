import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Playfair_Display } from "next/font/google";
import { type Metadata } from "next";
import { BreakpointIndicator } from "~/components/breakpoint-indicator";
import { Header } from "~/components/shared/header";
import Assistant from "~/components/shared/assistant";

import Footer from "~/components/shared/footer";

import { ToastProvider } from "~/components/ui/toast";
import { Toaster } from "sonner";
import { auth } from "~/server/auth";
import { db } from "~/server/db";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Sbiba Heritage Project",
  description:
    "Explore the rich heritage of Sbiba - where ancient Roman and Berber civilizations converge. Discover archaeological treasures, cultural traditions, and the fascinating history of this historic North African crossroads.",
  openGraph: {
    type: "website",
    title: "Sbiba Heritage Project",
    description:
      "Discover the enchanting blend of Roman heritage and Berber culture in the heart of Kasserine. Explore archaeological treasures and cultural traditions in this historic North African crossroads.",
    url: "https://sbiba-heritage.tn",
    siteName: "Sbiba Heritage Project",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Sbiba Heritage Project - Ancient Roman and Berber Heritage",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sbiba Heritage Project",
    description:
      "Discover the enchanting blend of Roman heritage and Berber culture in the heart of Kasserine",
    images: ["/og.jpg"],
    creator: "@sbibaheritage",
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "shortcut icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
  ],
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  const user = session?.user;

  let userdb = null;

  if (user) {
    userdb = await db.user.findUnique({
      where: {
        id: user?.id,
      },
    });
  }

  const points = userdb?.points;

  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${GeistSans.variable} ${playfair.variable} light`}
    >
      <body>
        <ToastProvider>
          <Header user={user} points={points} />
          <Assistant />
          {children}
          <BreakpointIndicator />
          <Toaster richColors />
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
