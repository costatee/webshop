"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BasketItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface BasketContextType {
  basket: BasketItem[];
  addToBasket: (item: BasketItem) => void;
  removeFromBasket: (id: string) => void;
  updateBasketItemQuantity: (id: string, newQuantity: number) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = (): BasketContextType => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};

export const BasketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [basket, setBasket] = useState<BasketItem[]>(() => {
    if (typeof window !== 'undefined') {
      const storedBasket = localStorage.getItem('basket');
      return storedBasket ? JSON.parse(storedBasket) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (item: BasketItem) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((basketItem) => basketItem.id === item.id);
      if (existingItem) {
        return prevBasket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem
        );
      }
      return [...prevBasket, { ...item, quantity: 1 }];
    });
  };

  const removeFromBasket = (id: string) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
  };

  const updateBasketItemQuantity = (id: string, newQuantity: number) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Basket context value with functions defined
  const basketContextValue: BasketContextType = {
    basket,
    addToBasket,
    removeFromBasket,
    updateBasketItemQuantity,
  };

  return (
    <BasketContext.Provider value={basketContextValue}>
      {children}
    </BasketContext.Provider>
  );
};
