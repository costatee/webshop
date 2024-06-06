"use client"

import Image from "next/image";
import PromoBar from "../../ui/promoBar";
import MenuBar from "../../ui/menubar";
import { AllRamen } from "../../ui/menu/ramen_menu";
import { Carousel } from "@material-tailwind/react";
import { BBreadcrumbs } from "../../ui/breadcrumbs";

export default function OffersMenu(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-20">
      <PromoBar />
      <MenuBar /> 

      <BBreadcrumbs />

      <div className="flex flex-col w-full max-w-7xl rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 px-10">
        <p className="relative w-full text-center text-[2rem] mt-8">Our offers</p>
        <p className="relative w-full text-center font-light text-sm mb-8">can change daily</p>
        <Carousel className="" placeholder="blur" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <AllRamen />
        </Carousel>
      </div>
    </main>
  );
}