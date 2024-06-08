import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "../app/ui/fonts";
import { BasketProvider } from "./lib/BasketContext";
import { AuthProvider } from "./login/AuthContext";

export const metadata: Metadata = {
  title: "Order Your Favourites Online",
  description: "Online food ordering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <BasketProvider>
            {children}
          </BasketProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
