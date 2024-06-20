"use client";

import { GetStaticPaths } from 'next';
import { Typography, Input, Button } from "@material-tailwind/react";
import { BBreadcrumbs } from '../../ui/breadcrumbs';
import Image from "next/image";
import { generateStaticParams } from 'src/app/lib/dynamic-page';

interface ProductProps {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  price: number;
  quantity: number;
  buttonText: string;
  categories?: string[];
  rating?: number;
}

const ProductPage = ({ params }: { params: ProductProps }) => {
  const { id, imageUrl, title, description, price, quantity, buttonText, categories, rating } = params;

  return (
    <main className="flex flex-1 flex-col items-center gap-10 px-20 text-black">
      <div className="flex flex-col max-w-[1800px] rounded-xl bg-[#FAFAFA] items-center justify-center pb-6 px-8">
        <BBreadcrumbs />
        <div className="flex flex-col m-2 w-full md:flex-row">
            <div className="w-[50%] flex items-center justify-center">
                <Image src={`/${params.imageUrl}`} alt={`${params.title}`} width={300} height={300} />
            </div>
            <div className="w-[50%] flex flex-col items-start justify-start">
                <Typography variant="h2">{title}</Typography>
                <Typography variant="lead">{rating}</Typography>
                <Typography variant="paragraph">{price}</Typography>
                <Input crossOrigin={undefined} onChange={(e) => console.log(e.target.value)} value={quantity} />
                <Typography variant="paragraph">{description}</Typography>
                <Button variant="outlined" className="bg-[#007BFF] text-white font-bold py-2 px-4 rounded-lg">{buttonText}</Button>
            </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await generateStaticParams();

  return { 
    paths: paths.map(path => ({ params: { id: path.id }})), 
    fallback: false 
  };
};


