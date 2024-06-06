import React from 'react';
import { useBasket } from './BasketContext';

interface MenuItemProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, title, price, imageUrl }) => {
  const { addToBasket } = useBasket();

  const handleAddToBasket = () => {
    addToBasket({ id, title, price, quantity: 1 });
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>Price: €{price}</p>
      <button onClick={handleAddToBasket}>Add to Basket</button>
    </div>
  );
};

export default MenuItem;
