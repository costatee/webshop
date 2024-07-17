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
    quantity: number;
  }

  export interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
  }
  
  export interface UserSectionProps {
    token: string | null;
  }
  export interface MaterialIconProps {
    iconClass: string;
    iconTitle: string;
  }

  export interface AuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
  }