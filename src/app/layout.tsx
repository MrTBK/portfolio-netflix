import type { Metadata } from "next";
import "./globals.css";
import "@/components/sites/sumanthsamala/sumanthsamala.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedaziztabakh.com"),
  title: {
    default: "Mohamed Aziz Tabakh | Business Intelligence & Data Developer",
    template: "%s | Mohamed Aziz Tabakh",
  },
  description:
    "Interactive Netflix-themed developer portfolio of Mohamed Aziz Tabakh — Business Intelligence student at ESEN Manouba specializing in automated ETL pipelines, Star Schema Data Warehousing, Power BI analytics, and competitive programming.",
  keywords: [
    "Mohamed Aziz Tabakh",
    "Aziz Tabakh",
    "MrTBK",
    "Business Intelligence",
    "Data Engineering",
    "ETL",
    "SSIS",
    "SQL Server",
    "Power BI",
    "Data Warehouse",
    "Tunisia",
    "ESEN Manouba",
    "COFICAB",
    "TCPC",
    "Competitive Programming",
  ],
  authors: [{ name: "Mohamed Aziz Tabakh", url: "https://github.com/MrTBK" }],
  creator: "Mohamed Aziz Tabakh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohamedaziztabakh.com",
    title: "Mohamed Aziz Tabakh | Business Intelligence & Data Developer",
    description:
      "Interactive Netflix-themed developer portfolio of Mohamed Aziz Tabakh — Business Intelligence, Data Engineering, and Competitive Programming.",
    siteName: "Mohamed Aziz Tabakh Portfolio",
    images: [
      {
        url: "/sites/mrtbk/catemer360.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Aziz Tabakh - Business Intelligence & Data Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Aziz Tabakh | Business Intelligence & Data Developer",
    description:
      "Interactive Netflix-themed portfolio: Data Warehouses, automated ETL pipelines, Power BI dashboards, and competitive programming.",
    images: ["/sites/mrtbk/catemer360.png"],
  },
  icons: {
    icon: "/sites/sumanthsamala/blue.9b293a4a6ef065903a8f.png",
    apple: "/sites/sumanthsamala/blue.9b293a4a6ef065903a8f.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-[#141414] text-white min-h-screen">{children}</body>
    </html>
  );
}
