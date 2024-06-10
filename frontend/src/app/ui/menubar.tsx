import Image from "next/image";
import { useState, useContext } from "react";
import { Avatar } from "@material-tailwind/react";
import Link from "next/link";
import { AuthContext } from "../lib/AuthContext";

export default function MenuBar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, logout } = useContext(AuthContext);

  return (
    <>
      <div className="flex items-center w-full md:hidden">
        <div className="absolute rotate-90"><span className="text-black">mi</span></div>
        <h1 className="text-[2.5rem] ml-5 text-black">Restaurant</h1>
        <button
          className="ml-auto flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            src="/menu.png"
            alt="menu"
            width={20}
            height={20}
            className="h-10 w-10"
          />
        </button>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col items-center w-full md:hidden bg-gray-100">
          {" "}
          {/* mobile menu */}
          <ul className="flex flex-col items-center gap-6 text-m py-4 text-black">
            <li className="bg-[#FC8A06] text-white px-4 py-2 rounded-l-[120px] rounded-r-[120px]">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/offers">Offers</Link>
            </li>
            <li>
              <Link href="/res">Reservations</Link>
            </li>
            <div className="bg-[#03081F] flex items-center justify-center px-7 py-3 rounded-r-[120px] rounded-l-[120px]">
              <Avatar
                className="mr-6"
                src={"https://docs.material-tailwind.com/img/face-4.jpg"}
                alt="avatar"
                size="md"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
              <li className="text-white">
                <Link href="/login">Login/Signup</Link>
              </li>
            </div>
          </ul>
        </div>
      )}
      <div className="hidden md:flex items-center w-full min-w-md">
        {" "}
        {/* large screen menu */}
        <div className="absolute rotate-90">mi</div>
        <h1 className="text-[2.5rem] ml-5">Restaurant</h1>
        <ul className="ml-auto flex gap-10 text-m items-center text-black">
          <li className="bg-[#FC8A06] text-dark-gray px-7 py-2.5 rounded-l-[120px] rounded-r-[120px]">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/offers">Offers</Link>
          </li>
          <li>
            <Link href="/reservations">Reservations</Link>
          </li>
          <div className="bg-[#03081F] flex items-center justify-center px-6 py-3 rounded-l-[120px] rounded-r-[120px]">
            <Avatar
              className="mr-6"
              src="/male_user_icon.png"
              alt="avatar"
              size="sm"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
                {token ? (
                    <li className="text-white mr-2">
                        <button onClick={logout} className="text-white">
                            Logout
                        </button>
                    </li>
                ) : (
                    <li className="text-white mr-2">
                        <Link href="/login">Login/Signup</Link>
                    </li>
                )}
          </div>
        </ul>
      </div>
    </>
  );
}
