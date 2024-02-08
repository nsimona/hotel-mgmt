import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ThemeProvider from "./components/theme-provider/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Discover best hotel rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <main className="font-normal">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
