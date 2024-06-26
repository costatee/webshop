import type { Metadata } from "next";
import "./globals.css";
import { poppins, inter } from "../app/ui/fonts";
import { BasketProvider } from "./lib/BasketContext";
import { AuthProvider } from "./lib/AuthContext";
import AppLayout from "./ui/app-layout";

export const metadata: Metadata = {
  title: "Order Your Favourites Online",
  description: "Online food ordering",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AuthProvider>
          <BasketProvider>
            <AppLayout>
            <div className="container sm:px-6 lg:px-8">
                {children}
              </div>
            </AppLayout>
          </BasketProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
