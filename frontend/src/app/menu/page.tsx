"use client";

import { AllRamen } from "../ui/menu/ramen-menu";
import Search from "../ui/search";
import { Footer } from "../ui/footer";

export default function Menu(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-20 text-black">
      <div className="flex flex-col max-w-[1800px] rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 px-8">
        <p className="relative w-full text-center text-[2rem] mt-8">Our menu</p>
        <p className="relative w-full text-center font-light text-sm mb-8 opacity-80">
          crafted with love
        </p>
        <div className="w-2/3 mb-3 flex items-center justify-center">
          <Search placeholder="Search for anything" />
        </div>
        <div className="w-full rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 text-black">
          <AllRamen />
        </div>
      </div>
      <Footer />
    </main>
  );
}
