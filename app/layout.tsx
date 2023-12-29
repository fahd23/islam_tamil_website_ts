import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Islam Tamil | இஸ்லாம் தமிழ்",
  description:
    "இவ்வலைத்தளத்தின் நோக்கம் இஸ்லாத்தை அதன் தூய வடிவில் கற்றுத்தருவது.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={inter.className}>
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
