"use client"

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-16">
      <nav className="hidden md:flex w-full"> {/* main bar */}
        <div className="flex w-full rounded-b-xl items-center bg-[#FAFAFA] h-12 shadow shadow-slate-200 pl-10"> {/* top bar */}
          <img src="star.png" alt="star" className="mr-2 size-6" />
          <p className="flex items-center text-sm mr-16">
            Get 5% off your first order, &nbsp;
            <span className="font-bold text-[#FC8A06] underline">
              Promo: ORDER5
            </span>
          </p>
          <img src="location.png" alt="Location" className="mr-2 size-6" />
          <p className="flex items-center text-sm mr-16"> {/* location will be here */}
            Madrid, Spain &nbsp;
            <a href="#" className=" text-[#FC8A06] underline">
              Change location
            </a>
          </p>
          <div className="h-full rounded-b-xl flex items-center space-x-4 bg-[#028643] ml-auto pl-2 pr-2 stroke-gray-50 stroke-2"> {/* basket box */}
            <div className="border-r-2 border-green-300/10">
              <img src="basket.png" alt="basket" className="m-2 size-6" />
            </div>
            <div>
              <p className="text-xs">{/* item quantity  */}5 items</p>
            </div>
            <div className="h-10 border-l-2 border-green-300/10"></div>
            <div>
              <p className="text-sm">{/* total price  */}€ 24.50</p>
            </div>
            <div className="border-l-2 border-green-300/10">
              <img
                src="forward_button.png"
                alt="forward"
                className="m-2 size-6"
              />
            </div>
          </div>
        </div>
      </nav>

      <nav className="flex md:hidden w-screen h-[77px]"> {/* mobile bar */}
        <div className="flex w-full rounded-b-xl"> {/* top bar */}
          <div className="flex bg-[#FC8A06] w-full justify-center items-center">
            <img src="user.png" alt="basket" className="mr-1 size-6" />{" "}
            {/* user image if there is || default image */}
            <p className="text-sm">{/* account name  */}Naomi</p>
          </div>
          <div className="flex bg-[#028643] w-full justify-center items-center">
            <img src="basket.png" alt="basket" className="mr-1 size-7" />
            <p className="text-sm">{/* total price  */}€24.50</p>
          </div>
        </div>
      </nav>

      <div className="flex items-center w-full md:hidden">
        <img src="logo.png" alt="logo" className="h-10 w-auto" />
        <button
          className="ml-auto flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src="user.png" alt="menu" className="h-10 w-10" />
        </button>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col items-center w-full md:hidden bg-gray-100">
          <ul className="flex flex-col items-center gap-6 text-m py-4">
            <li className="bg-[#FC8A06] text-white px-4 py-2 rounded">Home</li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Reservations</a></li>
            <div className="bg-[#03081F] flex items-center justify-center px-10 py-3 rounded">
              <img src="male_user_icon.png" alt="basket" className="mr-2 size-8 w-full" />
              <li className="text-white">Login/Signup</li>
            </div>
          </ul>
        </div>
      )}

      <div className="hidden md:flex items-center w-full"> {/* large screen menu */} {/* code 2 !!! */}
        <img src="logo.png" alt="logo" className="h-10 w-auto" />
        <ul className="ml-auto flex gap-10 text-m items-center">
          <li className="bg-[#FC8A06] text-white px-7 py-2.5 rounded-l-[120px] rounded-r-[120px]">Home</li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Offers</a></li>
          <li><a href="#">Restaurants</a></li>
          <li><a href="#">Reservations</a></li>
          <div className="bg-[#03081F] flex items-center justify-center px-10 py-3 rounded-l-[120px] rounded-r-[120px]">
            <img src="male_user_icon.png" alt="basket" className="mr-2 size-8 w-full" />
            <li className="text-white">Login/Signup</li>
          </div>
        </ul>
      </div>

      
    </main>
  );
}
