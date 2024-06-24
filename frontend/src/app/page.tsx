"use client"

import { CarouselDefault } from "./ui/carousel";
import { TopFiveRamen } from "./ui/menu/ramen-menu";
import { Typography} from "@material-tailwind/react";

export default function Home(): JSX.Element {

  return (
    <main className="flex flex-1 flex-col items-center gap-10 px-4 sm:px-6 lg:px-0 pb-20">

      <div className="max-w-[1440px] w-full flex overflow-hidden bg-[#FBFBFB] border-slate-300/20 max-h-[500px] round-xl shadow-xl">
        <CarouselDefault />
      </div>

      <div className="max-w-[1440px] w-full rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 shadow-xl text-black">
        <Typography variant="lead" className="relative w-full text-center text-xl mt-8">
          Top <span className="text-[#FC8A06]">5</span> most popular Ramens
          <br></br>
          <span className="font-light text-sm">based on your choices</span>
        </Typography>
        <TopFiveRamen />
      </div>

      <div className="max-w-[1440px] rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 shadow-xl text-black">
        <Typography variant="lead" className="relative w-full text-center text-xl mt-8">
          Top <span className="text-[#FC8A06]">5</span> most popular Sushis
          <br></br>
          <span className="font-light text-sm">based on your choices</span>
        </Typography>
        <TopFiveRamen />
      </div>
    </main>
  );
}
