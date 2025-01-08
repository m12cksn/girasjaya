import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Giras Jaya Aluminium | Inspirasi Aluminium Berkualitas",
  description:
    "Giras Jaya Aluminium menyediakan berbagai solusi aluminium berkualitas tinggi untuk kebutuhan Anda. Temukan inspirasi terbaik bersama kami.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "aluminium, giras jaya aluminium, inspirasi aluminium, pemasangan aluminium, desain aluminium",
  openGraph: {
    title: "Giras Jaya Aluminium | Inspirasi Aluminium Berkualitas",
    description:
      "Giras Jaya Aluminium menghadirkan solusi aluminium berkualitas tinggi untuk kebutuhan proyek Anda.",
    url: "https://girasjayaaluminium.com",
    type: "website",
    images: [
      {
        url: "https://girasjayaaluminium.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Inspirasi Aluminium Giras Jaya Aluminium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@girasjayaaluminium",
    title: "Giras Jaya Aluminium | Inspirasi Aluminium Berkualitas",
    description:
      "Temukan inspirasi pengerjaan aluminium terbaik hanya di Giras Jaya Aluminium.",
    image: "https://girasjayaaluminium.com/images/twitter-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://girasjayaaluminium.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Giras Jaya Aluminium",
              url: "https://girasjayaaluminium.com",
              logo: "https://girasjayaaluminium.com/logo.png",
              description:
                "Kami menyediakan solusi aluminium berkualitas tinggi untuk proyek Anda.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Indonesia",
                addressCountry: "ID",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
