import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { Metadata } from "next";
import { Suspense } from "react";
import Loader from "../components/Loader";
import AdSense from "../components/scripts/AdSense";
import GoogleAnalytics from "../components/scripts/GoogleAnalytics";
import NeworMedia from "../components/scripts/NeworMedia";
import { WEB_BASE_URL } from "../utilities/constants";
import { montserrat } from "./fonts";
import "./globals.css";

const title = "Midhah - Hamd, Naat, Manqbat and Durood o Salam lyrics platform";
const description =
  "Midhah مدحة is a leading & the most authentic lyrics searching platform for Hamd, Nasheed/Naat, Manqbat, and Durood o Salam. Download the app from Google Play Store.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(WEB_BASE_URL),
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Midhah Lyrics",
  },
  twitter: {
    title,
    description,
    creator: "@midhahOfficial",
  },
  manifest: "/app.webmanifest",
  creator: "Rutal, Inc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID as string}
        />
        <AdSense />
        <NeworMedia />

        <Suspense fallback={<Loader />}>
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
