import { notFound } from 'next/navigation';
import { fetchProductData, generateStaticParams as fetchStaticParams } from '../../lib/getStaticPaths';
import ProductClient from './product-page-client';

export async function generateStaticParams() {
  return fetchStaticParams();
}

const ProductPage = async ({ params }: { params: { title: string } }) => {
  // const product = await fetchProductData(params.title);
  const decodedTitle = decodeURIComponent(params.title);
  const product = await fetchProductData(decodedTitle);


  if (!product) return notFound();

  return (
    <>
      <ProductClient product={product} />
    </>
  );
};

export default ProductPage;
