"use client";

import { Footer } from "./footer";
import MenuBar from "./menubar";
import PromoBar from "./promo-bar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-10 gap-10">
      <PromoBar />
        <MenuBar />
            {children}
        <Footer />
    </div>
  );
}