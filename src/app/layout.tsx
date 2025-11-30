import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ThemeProvider from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const description =
  "OGQ is a program of the Foundation for Promotion of Sports and Games, a Not for Profit (Section 8) Company founded by Indian sports legends Geet Sethi and Prakash Padukone. The mission of OGQ is to support Indian athletes in winning Olympic and Paralympic Gold medals. In the last four Olympics, 13 out of the 21 medal winners for India were supported by OGQ and 35 out of the 48 medals for India at the Tokyo 2020 & Paris 2024 Paralympics were supported by OGQ";

export const metadata: Metadata = {
  title: "OGQ",
  description,
  icons: {
    icon: "https://ogq.org/icon.ico",
  },
  openGraph: {
    title: "OGQ",
    description,
    images: [
      {
        url: "https://ogq.org/icon.ico",
        width: 1200,
        height: 781,
        alt: "OGQ",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider>
              {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
