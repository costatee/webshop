import { cardData } from '../ui/menu/ramen-menu';

export async function generateStaticParams() {
    const dishes = cardData;
    // const posts = await fetch('https://.../posts').then((res) => res.json())
    
    return dishes.map(dish => ({
        id: dish.id.toLowerCase().replace(/%/g, ''),
      }));
  }