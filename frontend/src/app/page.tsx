"use client"

import { CarouselDefault } from "./ui/carousel";
import { TopFiveRamen } from "./ui/menu/ramen-menu";
import { Typography} from "@material-tailwind/react";
import { Opening} from "./ui/opening";

export default function Home(): JSX.Element {

  return (
    <main className="w-[90vw] flex flex-1 flex-col items-center gap-10 pb-20">

      <div className="max-w-[1440px] w-full flex overflow-hidden sm:rounded-lg md:rounded-xl md:max-h-[500px] shadow-xl">
        <CarouselDefault />
      </div>

      <div className="max-w-[1440px] w-screen flex-col  bg-[#FAFAFA] pb-6 shadow-md text-black">
        <Typography variant="lead" className="relative w-full text-center text-xl mt-8">
          Top <span className="text-[#FC8A06]">5</span> most popular dishes
          <br></br>
          <span className="font-light text-sm">based on your choices</span>
        </Typography>
        <TopFiveRamen />
      </div>

      <div className="rounded-xl w-full h-96 sm:h-[500px] overflow-hidden max-w-[1440px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97173.80132360694!2d-3.762108418840564!3d40.438055583835315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1sen!2ses!4v1718271739385!5m2!1sen!2ses"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
      </div>

      <Opening />

    </main>
  );
}
