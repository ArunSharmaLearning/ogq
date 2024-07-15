import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import ThemeProvider from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OGQ",
  description:
    "OGQ supports Indian athletes striving for Olympic Gold medals, backing 9 of India's 14 individual-sport medal winners in recent Olympic Games.",
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
