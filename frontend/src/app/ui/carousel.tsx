import { Carousel, Typography, Button } from "@material-tailwind/react";
import type { CarouselProps } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <div className="relative h-full w-full">
        <Image
          src="/hero_images/hero1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
          layout="fill" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="/hero_images/hero1.jpg"  // let's work on this blur while loading
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              True Asian Spirit
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Everything we do is soaked with the centuries old traditions of Asian cooking. <br></br> We put our heart and soul into every dish, every day.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button className="rounded-l-[120px] rounded-r-[120px]" size="lg" color="white"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Link href="/menu">Viev Menu</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/hero_images/hero2.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
          layout="fill" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Chicken Ramen
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 max-w-[50ch]"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              True staple food in any asian market. We put our spin on the broth, meat and noodles. Just how we learned at home. 
            </Typography>
            <div className="flex gap-2">
              <Button className="rounded-l-[120px] rounded-r-[120px]" size="lg" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Add to order
              </Button>
              <Button className="rounded-l-[120px] rounded-r-[120px]" size="lg" color="white" variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <Link href="/menu/ramen">Explore all Ramens</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/hero_images/hero3.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
          layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/70">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Sharing is caring
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-85 max-w-[50ch]" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Nothing reflects more our traditions than sharing. Sharing our food is our biggest pride. What will you share today? Gyozas or fried chilly squid? Choices.. choices..
            </Typography>
            <div className="flex gap-2">
              <Button className="rounded-l-[120px] rounded-r-[120px]" size="lg" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Gyozas
              </Button>
              <Button className="rounded-l-[120px] rounded-r-[120px]" size="lg" color="white" variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Bites to share
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="/hero_images/hero5.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
          layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/60">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Pork Donburi
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-85" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Marinated tender pork strips, rice, wok fried vegies, secret sauce. 
            </Typography>
            <div className="flex gap-2">
              <Button className="rounded-l-[120px] rounded-r-[120px]" size="lg" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Gyozas
              </Button>
              <Button className="rounded-l-[120px] rounded-r-[120px]" size="lg" color="white" variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Bites to share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

