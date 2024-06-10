"use client"

import PromoBar from "../ui/promo-bar";
import MenuBar from "../ui/menubar";
import { RegisterForm } from "../ui/register-form";
import { Footer } from "../ui/footer";

export default function Register(): JSX.Element {

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-20">
      <PromoBar />
      <MenuBar /> 

      <div className="flex flex-col w-auto rounded-xl bg-[#FAFAFA] items-center justify-center py-8 px-10 mt-10 shadow-xl">
        <RegisterForm  />
      </div>
      <Footer />
    </main>
  );
}
