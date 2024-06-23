export interface ProductProps {
    id: string;
    imageUrl: string;
    title: string;
    price: number;
    buttonText: string;
    description?: string;
  }
  
  export interface CardProps {
    id: string;
    imageUrl: string;
    title: string;
    description?: string;
    price: number;
    buttonText: string;
    quantity?: number;
  }