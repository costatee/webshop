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
    <Card className="my-2 mx-2 w-80 sm:w-96 md:w-80 aspect-w16 aspect-h-9">
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
          <Typography variant="paragraph" className="min-h-[5rem]">
            {description}
          </Typography>
        </CardBody>
      </Link>
      <CardFooter className="block">
        <Typography variant="h6" color="blue-gray" className="mb-2">
          ${price.toFixed(2)}
        </Typography>
        <Button onClick={handleAddToBasket}>
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

interface CardProps {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  price: number;
  buttonText: string;
  quantity?: number;
}

export const OfferCard: React.FC<CardProps> = ({
  id,
  imageUrl,
  title,
  description,
  price,
  quantity,
}) => {
  const { addToBasket } = useBasket();

  const handleAddOffer = () => {
    const chooseOne = prompt("Choose one");
    const chooseTwo = prompt("Choose two");

    if (chooseOne && chooseTwo) {
      addToBasket({
        id,
        title,
        price,
        quantity: 1,
        imageUrl,
      });
      console.log(
        `Added to basket: ${title}, choices: ${chooseOne}, ${chooseTwo}`
      );
    } else {
      console.log("Offer not added, both choices are required.");
    }
  };

  return (
    <Card className="w-full flex flex-row items-center shadow-lg gap-1 p-1 rounded-xl">
      <Link href={`/menu/${slugify(title)}`} key={id}>
      <CardHeader shadow={false} floated={false} className="rounded-lg">
        <Image
          src={imageUrl}
          alt="card-image"
          className="object-cover rounded-xl"
          // layout="responsive"
          width={300}
          height={200}
        />
      </CardHeader>
      <CardBody className="pl-1">
        <Typography variant="h6" color="gray" className="uppercase">
          {title}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          ${price.toFixed(2)}
        </Typography>
        <div className="flex items-center mb-4">
          <Typography variant="paragraph" color="blue-gray" className="mr-2">
            Quantity:
          </Typography>
          <Input
            variant="static"
            type="number"
            value={quantity || 1}
            min="1"
            className="w-10"
            onChange={(e) => {}}
            crossOrigin={undefined}
          />
        </div>
      </CardBody>
      </Link>
      <CardFooter className="ml-auto">
        <Button
          className=""
          type="button"
          color="orange"
          onClick={handleAddOffer}
        >
          Get offer
        </Button>
      </CardFooter>
    </Card>
  );
};
