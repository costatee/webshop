"use client"

import PromoBar from "../ui/promo-bar";
import MenuBar from "../ui/menubar";
import { AllRamen } from "../ui/menu/ramen-menu";
import { BBreadcrumbs } from "../ui/breadcrumbs";
import Search from "../ui/search";

export default function Menu(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-20 text-black">
      <PromoBar />
      <MenuBar /> 

      <BBreadcrumbs />

      <div className="flex flex-col w-full max-w-7xl rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 px-10">
        <p className="relative w-full text-center text-[2rem] mt-8">Our menu</p>
        <p className="relative w-full text-center font-light text-sm mb-8 opacity-80">crafted with love</p>
        <div className="w-2/3 mb-3 flex items-center justify-center">
          <Search placeholder="Search for anything" />
        </div>
        <div className="w-5/6 flex items-center justify-center">
          <div className="">
            <AllRamen />
          </div>
        </div>
      </div>
    </main>
  );
}