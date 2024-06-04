
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="hidden md:flex"> {/* main bar */}
        <div className="flex w-full rounded-b-xl items-center bg-[#FAFAFA] h-12 shadow shadow-slate-200 pl-10"> {/* top bar */}
          <img src="star.png" alt="star" className="mr-2 size-6" />
          <p className="flex items-center text-sm mr-16">Get 5% off your first order, &nbsp;<span className="font-bold text-[#FC8A06] underline">Promo: ORDER5</span></p>
          <img src="location.png" alt="Location" className="mr-2 size-6" />
          <p className="flex items-center text-sm mr-16"> {/*locaton will be here*/}
            Madrid, Spain &nbsp;<a href="#" className=" text-[#FC8A06] underline">Change location</a>
          </p>
          <div className="h-full rounded-b-xl flex items-center space-x-4 bg-[#028643] ml-10 pl-2 pr-2 stroke-gray-50 stroke-2"> {/* basket box */}
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
              <img src="forward_button.png" alt="forward" className="m-2 size-6" />
            </div>
          </div>
        </div>
      </nav>

      <nav className="flex md:hidden w-screen h-[77px]"> {/* mobile bar */}
        <div className="flex w-full rounded-b-xl"> {/* top bar */}
          <div className="flex bg-[#FC8A06] w-full justify-center items-center">
          <img src="user.png" alt="basket" className="mr-1 size-6" /> {/* user image if there is || default image */}
            <p className="text-sm">{/* account name  */}Naomi</p>
          </div>
          <div className="flex bg-[#028643] w-full justify-center items-center">
            <img src="basket.png" alt="basket" className="mr-1 size-7" />
            <p className="text-sm">{/* total price  */}€24.50</p>
          </div>
        </div>
      </nav>


    </main>
  );
}