"use client"

import { CarouselDefault } from "./ui/carousel";
import { TopFiveRamen } from "./ui/menu/ramen-menu";
import { Typography} from "@material-tailwind/react";

export default function Home(): JSX.Element {

  return (
    <main className="flex flex-1 flex-col items-center gap-10 px-0 pb-20">

      <div className="max-w-[1440px] w-full flex overflow-hidden sm:rounded-lg md:rounded-xl md:max-h-[500px] shadow-xl">
        <CarouselDefault />
      </div>

      <div className="max-w-[1440px] w-full flex-col sm:rounded-lg md:rounded-xl bg-[#FAFAFA] pb-6 shadow-xl text-black">
        <Typography variant="lead" className="relative w-full text-center text-xl mt-8">
          Top <span className="text-[#FC8A06]">5</span> most popular dishes
          <br></br>
          <span className="font-light text-sm">based on your choices</span>
        </Typography>
        <TopFiveRamen />
      </div>

    </main>
  );
}
