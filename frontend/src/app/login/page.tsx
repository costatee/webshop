"use client"

import LoginForm from "../ui/login-form";

export default function Login(): JSX.Element {
  return (
    <main className="flex flex-col flex-1 items-center gap-10 px-20">
      <div className="flex flex-col w-auto rounded-xl bg-[#FAFAFA] items-center justify-center py-8 px-10 mt-10 shadow-xl">
        <LoginForm />
      </div>
    </main>
  );
}