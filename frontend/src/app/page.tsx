"use client"

import { CarouselDefault } from "./ui/carousel";
import { TopFiveRamen } from "./ui/menu/ramen-menu";
import { Typography} from "@material-tailwind/react";

export default function Home(): JSX.Element {

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 pl-20 pr-20 pb-20">

      <div className="max-w-[1800px] flex overflow-auto bg-[#FBFBFB] border-slate-300/20 h-[500px] round-xl shadow-xl">
        <CarouselDefault />
      </div>

      <div className="max-w-[1800px] rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 shadow-xl text-black">
        <Typography variant="lead" className="relative w-full text-center text-xl mt-8">
          Top <span className="text-[#FC8A06]">5</span> most popular Ramens
          <br></br>
          <span className="font-light text-sm">based on your choices</span>
        </Typography>
        <TopFiveRamen />
      </div>

      <div className="max-w-[1800px] rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 shadow-xl text-black">
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