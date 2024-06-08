"use client"

import PromoBar from "../ui/promoBar";
import MenuBar from "../ui/menubar";
import { RegisterForm } from "../ui/registerForm";

export default function Register(): JSX.Element {

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-20">
      <PromoBar />
      <MenuBar /> 

      <div className="flex flex-col w-auto rounded-xl bg-[#FAFAFA] items-center justify-center py-8 px-10 mt-10 shadow-xl">
        <RegisterForm  />
      </div>
    </main>
  );
}
