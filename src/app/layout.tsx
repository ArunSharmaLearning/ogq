import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ThemeProvider from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OGQ",
  description:
    "OGQ is a program of the Foundation for Promotion of Sports and Games, a Not for Profit (Section 8) Company founded by Indian sports legends Geet Sethi and Prakash Padukone. The mission of OGQ is to support Indian athletes in winning Olympic and Paralympic Gold medals",
  icons: {
    icon: "/icon.ico",
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
          <ThemeProvider>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
