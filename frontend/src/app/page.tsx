"use client"

import { CarouselDefault } from "./ui/carousel";
import { TopFiveRamen } from "./ui/menu/ramen_menu";
import PromoBar from "./ui/promoBar";
import MenuBar from "./ui/menubar";
import { BBreadcrumbs } from "./ui/breadcrumbs";

export default function Home(): JSX.Element {

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 pl-20 pr-20 pb-20">
      <PromoBar />
      <MenuBar />     
      <BBreadcrumbs />

      <div className=" flex overflow-auto bg-[#FBFBFB] border-slate-300/20 w-full h-[500px] round-xl shadow-xl">
        <CarouselDefault />
      </div>

      <div className="w-full rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 shadow-xl">
        <p className="relative w-full text-center text-xl mt-8">
          Top <span className="text-[#FC8A06]">5</span> most popular Ramens
          <br></br>
          <span className="font-light text-sm">based on your choices</span>
        </p>
        <TopFiveRamen />
      </div>

      <div className="w-full rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 shadow-xl">
        <p className="relative w-full text-center text-xl mt-8">
          Top <span className="text-[#FC8A06]">5</span> most popular Sushis
          <br></br>
          <span className="font-light text-sm">based on your choices</span>
        </p>
        <TopFiveRamen />
      </div>

    </main>
  );
}
