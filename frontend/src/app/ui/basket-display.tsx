import React, { useState, useEffect } from 'react';
import { useBasket } from '../lib/BasketContext';
import { Typography, Input } from "@material-tailwind/react";
import { CardDefault, BasketCard } from './card';

export const BasketDisplay: React.FC = () => {
  const { basket } = useBasket();
  const [clientBasket, setClientBasket] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setClientBasket(basket);
    setLoading(false);
  }, [basket]);

  if (loading) {
    return (
      <Typography variant="h1" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Loading...
      </Typography>
    );
  }

  return ( // continue fixing the horizontal card
    <div className='flex-col w-full items-center justify-center overflow-hidden'>
      <Typography variant="h3" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Basket
      </Typography>
      <div className='flex flex-col mx-2 my-2'>
        {clientBasket.length === 0 ? (
          <Typography variant="paragraph" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Your basket is empty.
          </Typography>
        ) : (
          <ul>
            {clientBasket.map((item: any) => (
              <li key={item.id} className="mb-4">
                <BasketCard
                  id={item.id}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                  buttonText="Remove"
                />
                <div className="flex items-center mt-2">
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
