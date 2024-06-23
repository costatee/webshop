// import { ramenMenuData } from '../ui/menu/ramen-menu';
// import { sushiMenuData } from '../ui/menu/sushi-menu';

// export async function generateStaticParams() {
//     const dishes = ramenMenuData.concat(sushiMenuData);
//     // const posts = await fetch('https://.../posts').then((res) => res.json())

//     return dishes.map(dish => ({
//         id: dish.id.toLowerCase().replace(/%/g, ''),
//       }));
//   }

import { slugify } from './utils';

import { ramenMenuData } from '../ui/menu/ramen-menu';
import { sushiMenuData } from '../ui/menu/sushi-menu';

export async function generateStaticParams() {
  const menuData = sushiMenuData.concat(ramenMenuData);
  return menuData.map((dish) => ({
    title: slugify(dish.title),
  }));
}

export const fetchProductData = async (title: string) => {
  const menuData = sushiMenuData.concat(ramenMenuData);
  return menuData.find((dish) => slugify(dish.title) === title) || null;
};
