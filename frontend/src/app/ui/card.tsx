"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useBasket } from "../lib/BasketContext";
import { slugify } from "../lib/utils";
import { CardProps } from "../lib/definitions";

export const CardDefault: React.FC<CardProps> = ({
  id,
  imageUrl,
  title,
  description,
  price,
  buttonText,
}) => {
  const { addToBasket } = useBasket();

  const handleAddToBasket = () => {
    addToBasket({
      id,
      title,
      price,
      quantity: 1,
      imageUrl,
    });
  };

  return (
    <Card className="m-2 md:w-[18.2rem] lg:w-96 xl:w-80 snap-start">
      <Link href={`/menu/${slugify(title)}`} key={id}>
        <CardHeader color="blue-gray" className="mt-4 relative h-56">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            className="object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography variant="paragraph" className="min-h-[5rem] md:min-h-[6.5rem] lg:min-h-[3rem]">
            {description}
          </Typography>
        </CardBody>
      </Link>
      <CardFooter className="block">
        <Typography variant="h6" color="blue-gray" className="mb-2">
          ${price.toFixed(2)}
        </Typography>
        <Button fullWidth={true} onClick={handleAddToBasket}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export const BasketCard: React.FC<CardProps> = ({
  id,
  imageUrl,
  title,
  description,
  price,
  quantity,
}) => {
  const handleRemoveFromBasket = () => {
    console.log(id);
  };

  return (
    <Card className="w-full max-w-[48rem] flex flex-row items-center shadow-lg gap-2 p-4 rounded-xl">
      <Link href={`/menu/${slugify(title)}`} key={id}>
        <CardHeader
          shadow={false}
          floated={false}
          className="w-1/3 shrink-0 rounded-lg overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt="card-image"
            className="object-cover"
            layout="responsive"
            width={300}
            height={200}
          />
        </CardHeader>
        <CardBody className="w-2/3 pl-4">
          <Typography variant="h6" color="gray" className="uppercase">
            {title}
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            ${price}
          </Typography>
          <div className="flex items-center mb-4">
            <Typography variant="paragraph" color="blue-gray" className="mr-2">
              Quantity:
            </Typography>
            <Input
              type="number"
              value={quantity}
              min="1"
              className="w-20"
              onChange={(e) => {}}
              crossOrigin={undefined}
            />
          </div>
        </CardBody>
      </Link>
      <CardFooter className="ml-auto">
        <Button type="button" color="red" onClick={handleRemoveFromBasket}>
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

export const OfferCard: React.FC<CardProps> = ({
  id,
  imageUrl,
  title,
  description,
  price,
  buttonText,
}) => {
  const { addToBasket } = useBasket();

  const handleAddToBasket = () => {
    addToBasket({
      id,
      title,
      price,
      quantity: 1,
      imageUrl,
    });
  };

  return (
    <Card className="m-2 md:w-[18.2rem] lg:w-96 xl:w-80 snap-start">
      <CardHeader className="mt-4 relative h-80 md:h-64 lg:h-72" floated={true}>
      <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            className="object-cover"
          />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {`€${price}`}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-80 min-h-[5rem] md:min-h-[6rem]"
        >{description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 hover:border-1 focus:scale-105 focus:shadow-none active:scale-100"
          onClick={handleAddToBasket}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}