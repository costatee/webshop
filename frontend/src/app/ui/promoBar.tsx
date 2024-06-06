import Image from "next/image";

export default function PromoBar() {
    return (
        <>
            <nav className="hidden md:flex w-full">
            {/* promo bar */}
            <div className="flex w-full rounded-b-xl items-center justify-between bg-[#FAFAFA] h-12 shadow shadow-slate-200 pl-5">
            <div className="flex items-center">
                <Image
                src="/star.png"
                alt="star"
                width={20}
                height={20}
                className="mr-2"
                />
                <p className="flex items-center text-sm">
                Get 5% off your first order, &nbsp;
                <span className="font-bold text-[#FC8A06] underline">
                    Promo: ORDER5
                </span>
                </p>
            </div>
            <div className="flex items-center">
                <Image
                src="/location.png"
                alt="location"
                width={20}
                height={20}
                className="mr-2"
                />
                <p className="flex items-center text-sm">
                Calle Ferenc Puskas 420 10A, 28052, Madrid
                </p>
            </div>
            {/* basket box */}
            <div className="h-full rounded-b-xl flex items-center space-x-4 bg-[#028643] pl-2 pr-2">
                <div className="border-r-2 border-green-300/10">
                <Image
                    src="/basket.png"
                    alt="basket"
                    height={25}
                    width={25}
                    className="m-2"
                />
                </div>
                <div>
                <p className="text-xs">5 items</p>
                </div>
                <div className="h-10 border-l-2 border-green-300/10"></div>
                <div>
                <p className="text-sm">€ 24.50</p>
                </div>
                <div className="border-l-2 border-green-300/10">
                <Image
                    src="/forward_button.png"
                    alt="forward"
                    height={28}
                    width={28}
                    className="m-2"
                />
                </div>
            </div>
            </div>
            </nav>
            <nav className="flex md:hidden w-screen h-[77px]">
            {/* mobile top bar */}
            <div className="flex w-full rounded-b-xl">
            <div className="flex bg-[#FC8A06] w-full justify-center items-center">
                <Image
                src="/user.png"
                alt="basket"
                width={20}
                height={20}
                className="mr-1"
                />
                {/* user image || default image */}
                <p className="text-sm">{/* account name  */}Naomi</p>
            </div>
            <div className="flex bg-[#028643] w-full justify-center items-center">
                <Image
                src="/basket.png"
                alt="basket"
                width={20}
                height={20}
                className="mr-1 size-7"
                />
                <p className="text-sm">{/* total price  */}€24.50</p>
            </div>
            </div>
            </nav>
        </>
    );
};