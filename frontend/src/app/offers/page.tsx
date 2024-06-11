"use client"

import Image from "next/image";
import PromoBar from "../ui/promo-bar";
import MenuBar from "../ui/menubar";
import { AllRamen } from "../ui/menu/ramen-menu";
import { BBreadcrumbs } from "../ui/breadcrumbs";
import Search from "../ui/search";
import { Footer } from "../ui/footer";
import { Typography } from "@material-tailwind/react";
import OfferCard from "../ui/offers";

export default function Offers(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-20 text-black">
      <PromoBar />
      <MenuBar /> 

      <BBreadcrumbs />

      <div className="flex flex-col w-full max-w-7xl rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 px-10">
        <Typography 
            variant="h1" 
            className="relative w-full text-center text-[2rem] my-8" 
            placeholder={undefined} 
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}>Our offers
        </Typography>

        <div className="block w-full self-center">
          <OfferCard />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}