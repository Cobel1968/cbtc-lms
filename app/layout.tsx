import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";
import Navbar from "./components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CBTC Training Center",
  description: "Centre de formation professionnelle en Côte d'Ivoire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LanguageProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col bg-gray-50">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
            </div>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
