"use client"

import { Typography } from "@material-tailwind/react";

export default function Reservations(): JSX.Element {

  return (
    <main className="flex min-h-screen w-[100px] flex-col items-center gap-10 px-20 text-black">
      <div className="flex flex-col w-auto rounded-xl bg-[#FAFAFA] items-center justify-center py-8 px-10 mt-10 shadow-xl">
        <Typography variant="h1" className="text-[2.5rem] ml-5">Reservations</Typography>
      </div> 
    </main>
  );
}
