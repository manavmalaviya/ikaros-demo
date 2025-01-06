import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/ikaros-navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IKAROS - The Future of Modern BTL Activity Management and Future of Digital Advertising",
  description: "Tired of ineffective paper ads? IKAROS offers guaranteed ad visibility, rapid deployment, dynamic content, eco-friendly solutions, and easy analytics tracking for your business in Hyderabad. Reach a wider audience and optimize your BTL campaigns  with our vast network of digital screens in betel/pan shops. Elevate your Below-The-Line (BTL) activities in Hyderabad with IKAROS.",
  keywords: "IKAROS Hyderabad, Modern BTL activity management ,Digital BTL advertising Hyderabad, Guaranteed ad visibility, Rapid ad deployment, Dynamic ad content, Eco-friendly advertising, Easy analytics tracking, Betel shop advertising Hyderabad, Pan shop advertising Hyderabad"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col justify-between  min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <Navbar />
          {children}
          <Toaster />
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}
