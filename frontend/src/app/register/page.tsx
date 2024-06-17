"use client"

import { RegisterForm } from "../ui/register-form";

export default function Register(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-20">
      <div className="flex flex-col w-auto rounded-xl bg-[#FAFAFA] items-center justify-center py-8 px-10 mt-10 shadow-xl">
        <RegisterForm  />
      </div>
    </main>
  );
}
