import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import Search from "../search";

export default function AdminDash(): JSX.Element {

    return (
      <div className="flex w-full justify-start items-center bg-[#FBFBFB]">
        <Image src="/menu.png" alt="logo" width={20} height={20} placeholder={undefined} />
        <Typography variant="h1" className="ml-4 text-xl font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Dashboard</Typography>
        <div className="flex ml-auto items-center w-full px-28">
          <Search 
            placeholder="Search"
          />
        </div>
      </div>
    );
  }
  