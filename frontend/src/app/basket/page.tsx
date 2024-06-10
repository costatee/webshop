"use client"

import PromoBar from "../ui/promo-bar";
import MenuBar from "../ui/menubar";
import { BasketDisplay } from "../ui/basket-display";

export default function Basket(): JSX.Element {

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-20">
      <PromoBar />
      <MenuBar /> 

      <div className="flex flex-col w-auto rounded-xl bg-[#FAFAFA] items-center justify-center py-8 px-10 mt-10 shadow-xl">
        <BasketDisplay />
      </div>
    </main>
  );
}
