"use client";

import { Typography, Button } from "@material-tailwind/react";
import { BBreadcrumbs } from '../../ui/breadcrumbs';
import Image from "next/image";
import { ProductProps } from '../../lib/definitions';

const ProductClient = ({ product }: { product: ProductProps }) => {
  console.log('product: ===============', product);
  const { imageUrl, title, description, price, buttonText } = product;

  return (
    <main className="flex flex-1 w-full flex-col items-center gap-10 px-20 text-black">
      <div className="flex flex-col w-full max-w-[1200px] h-full rounded-xl gap-10 p-10 bg-[#FAFAFA] items-center justify-center">
        <BBreadcrumbs />
        <div className="flex flex-col m-1 w-full gap-5 md:flex-row">
          <div className=" w-[50%] min-h-[40rem ] flex items-center justify-center">
            <Image src={imageUrl} alt={title} width={600} height={750} className="rounded-lg shadow-lg object-cover" />
          </div>
          <div className="w-[50%] gap-5 flex flex-col items-start justify-start">
            <Typography variant="h2">{title}</Typography>
            <Typography variant="lead">⭐️⭐️⭐️⭐️⭐️</Typography>
            <Typography variant="lead">€{price}</Typography>
            <Typography variant="paragraph">{description}</Typography>
            <Button variant="outlined" className="bg-orange-500 text-black">{buttonText}</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductClient;
