"use client";

import { Typography } from "@material-tailwind/react";
import { OfferCard } from "../ui/card";

export default function Offers(): JSX.Element {
  return (
    <main className="relative w-full lg:max-w-[1440px]">
      <div className="w-full flex flex-col rounded-lg md:rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 px-4">
        <Typography
          variant="h1"
          className="relative w-full text-center text-[2rem] my-8"
        >
          Offers
        </Typography>

        <div className="w-full flex flex-col md:flex-row md:flex-wrap bg-[#FAFAFA] items-center justify-center pb-6 text-black">
          <OfferCard
            id={"1"}
            imageUrl={"/sushi/sushi6.jpg"}
            title={"Free sushi"}
            description={
              "When you get any two of our ramens and we will send you a sushi of you choice for free. Not valid to combine with any other offer."
            }
            price={20}
            quantity={1}
            buttonText={"Get offer"}
          />
          <OfferCard
            id={"2"}
            imageUrl={"/sushi/sushi6.jpg"}
            title={"Two for one Gyozas"}
            description={
              "Get two of any of our gyozas and we give the cheaper on the house. Not valid to combine with any other offer."
            }
            price={5}
            quantity={1}
            buttonText={"Get offer"}
          />
          <OfferCard
            id={"3"}
            imageUrl={"/sushi/sushi7.jpg"}
            title={"Spend more then €30 to get 10% off"}
            description={
              "Get 10% off on any of our sushi for €30 or more. Not valid to combine with any other offer."
            }
            price={30}
            quantity={1}
            buttonText={"Get offer"}
          />
        </div>
      </div>
    </main>
  );
}
