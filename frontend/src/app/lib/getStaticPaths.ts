import { slugify } from './utils';

import { ramenMenuData } from '../ui/menu/ramen-menu';

export async function generateStaticParams() {
  const menuData = ramenMenuData;
  return menuData.map((dish) => ({
    title: slugify(dish.title),
  }));
}

export const fetchProductData = async (title: string) => {
  const menuData = ramenMenuData;
  return menuData.find((dish) => slugify(dish.title) === title) || null;
};
