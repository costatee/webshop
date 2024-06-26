"use client";

import { Footer } from "./footer";
import MenuBar from "./menubar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center md:gap-10">
        <MenuBar />
            {children}
        <Footer />
    </div>
  );
}