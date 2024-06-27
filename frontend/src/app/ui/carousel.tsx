import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export function CarouselDefault() {
  return (
    <Carousel className="md:rounded-xl" loop autoplay>
      {/* Slide 1 */}
      <div className="relative w-full h-[28rem] md:h-96 lg:h-[500px]">
        <Image
          src="/hero_images/hero1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          layout="fill"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              True Asian Spirit
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-sm sm:text-base">
              Everything we do is soaked with the centuries old traditions of Asian cooking.
              <br /> We put our heart and soul into every dish, every day.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link href="/menu">
                <Button className="rounded-full" size="lg" color="white">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide 2 */}
      <div className="relative w-full h-[28rem] md:h-96 lg:h-[500px]">
        <Image
          src="/hero_images/hero2.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          layout="fill"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Chicken Ramen
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-sm sm:text-base">
              True staple food in any asian market. We put our spin on the broth, meat and noodles.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button className="rounded-full" size="lg" color="white">
                Add to order
              </Button>
              <Link href="/menu/ramen">
                <Button className="rounded-full" size="lg" color="white" variant="text">
                  Explore all Ramens
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slide 3 */}
      <div className="relative w-full h-[28rem] md:h-96 lg:h-[500px]">
        <Image
          src="/hero_images/hero3.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          layout="fill"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/70">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Sharing is caring
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-85 text-sm sm:text-base">
              Nothing reflects more our traditions than sharing. Sharing our food is our biggest pride.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button className="rounded-full" size="lg" color="white">
                Gyozas
              </Button>
              <Button className="rounded-full" size="lg" color="white" variant="text">
                Bites to share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 4 */}
      <div className="relative w-full h-[28rem] md:h-96 lg:h-[500px]">
        <Image
          src="/hero_images/hero5.jpg"
          alt="image 4"
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          layout="fill"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Pork Donburi
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-85 text-sm sm:text-base">
              Marinated tender pork strips, rice, wok fried vegies, secret sauce.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button className="rounded-full" size="lg" color="white">
                Gyozas
              </Button>
              <Button className="rounded-full" size="lg" color="white" variant="text">
                Bites to share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
