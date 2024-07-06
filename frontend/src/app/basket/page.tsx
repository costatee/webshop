"use client"

import PromoBar from "../ui/promo-bar";
import MenuBar from "../ui/menubar";
import { BasketDisplay } from "../ui/basket-display";
import { BBreadcrumbs } from '../ui/breadcrumbs';

export default function Basket(): JSX.Element {

  return (
  <div className="flex flex-col w-full max-w-[1200px] rounded-xl gap-10 p-10 bg-[#FAFAFA] items-center justify-center">
    <BBreadcrumbs />
    <div className="flex flex-col m-1 w-full gap-2 md:gap-5 md:flex-row">
      <BasketDisplay />
    </div>
  </div>
  );
}