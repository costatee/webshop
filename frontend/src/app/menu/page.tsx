"use client";

import { AllRamen } from "../ui/menu/ramen-menu";
import Search from "../ui/search";
import { AllSushi } from "../ui/menu/sushi-menu";

export default function Menu(): JSX.Element {
  return (
    <main className="relative w-full lg:max-w-[1440px]">
      <div className="w-full flex flex-col rounded-lg md:rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 px-4">
        <p className="relative w-full text-center text-[2rem] mt-8">Our menu</p>
        <p className="relative w-full text-center font-light text-sm mb-4 md:mb-8 opacity-80">
          crafted with love
        </p>
        <div className="w-[90%] md:w-2/3 mb-3 flex items-center justify-center">
          <Search placeholder="Search for anything" />
        </div>
        <div className="w-full flex-col md:flex-row bg-[#FAFAFA] items-center justify-center pb-6 text-black">
          <AllRamen />
          <AllSushi />
        </div>
      </div>
    </main>
  );
}
