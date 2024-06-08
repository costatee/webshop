import React from 'react';
import { useBasket } from '../lib/BasketContext';
import { Typography } from "@material-tailwind/react";

export const BasketDisplay: React.FC = () => {
  const { basket } = useBasket();

  return (
    <div>
      <Typography variant="h5" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Basket
      </Typography>
      {basket.length === 0 ? (
        <Typography variant="h6" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Your basket is empty.
        </Typography>
      ) : (
        <ul>
          {basket.map((item : any) => (
            <li key={item.id} className="mb-2">
              <Typography variant="h1" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {item.title} - ${item.price} x {item.quantity}
              </Typography>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
