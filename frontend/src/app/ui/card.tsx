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
import { useBasket } from "../lib/BasketContext";

interface CardProps {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  price: number;
  buttonText: string;
  quantity?: number;
}

export const CardDefault: React.FC<CardProps> = ({ id, imageUrl, title, description, price, buttonText }) => {
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
    <Card className="my-2 mx-2 w-80 sm:w-96 md:w-80 aspect-w16 aspect-h-9" >
      <CardHeader  color="blue-gray" className="mt-4 relative h-56">
        <Image
          src={imageUrl}
          alt="card-image"
          layout="fill"
          className="object-cover"
        />
      </CardHeader>
      <CardBody >
        <Typography variant="h5" color="blue-gray" className="mb-2" >
          {title}
        </Typography>
        <Typography >
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="block" >
        <Typography variant="h6" color="blue-gray" className="mb-2" >
          ${price.toFixed(2)}
        </Typography>
        <Button type="button" onClick={handleAddToBasket} >{buttonText}</Button>
      </CardFooter>
    </Card>
  );
};

interface BasketCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  price: number;
  quantity: number;
  buttonText: string;
}

export const BasketCard: React.FC<CardProps> = ({ id, imageUrl, title, description, price, quantity }) => {


  const handleRemoveFromBasket = () => {
    console.log(id);
  };

  return (
    <Card className="w-full max-w-[48rem] flex flex-row items-center shadow-lg gap-2 p-4 rounded-xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <CardHeader
        shadow={false}
        floated={false}
        className="w-1/3 shrink-0 rounded-lg overflow-hidden"
        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
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
      <CardBody className="w-2/3 pl-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Typography variant="h6" color="gray" className="uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          {title}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          ${price}
        </Typography>
        <div className="flex items-center mb-4">
          <Typography variant="paragraph" color="blue-gray" className="mr-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Quantity:
          </Typography>
          <Input 
            type="number"
            value={quantity}
            min="1"
            className="w-20"
            onChange={(e) => { } } onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}          />
        </div>
      </CardBody>
      <CardFooter className="ml-auto" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Button type="button" color="red" onClick={handleRemoveFromBasket} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};


export const OfferCard: React.FC<CardProps> = ({ id, imageUrl, title, description, price, quantity }) => {
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
    <>
    <h1>Whatever cards</h1></>
  )
};