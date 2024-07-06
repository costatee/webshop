// components/CardList.tsx
import { CardDefault } from '../card';

export interface CardData {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  price: number;
}

export const ramenMenuData: CardData[] = [
  {
    id: '1',
    imageUrl: "/hero_images/hero4.jpg",
    title: "Spicy Prawn Ramen",
    description: "Spicy seafood broth, flame grilled prawns, noodles, soft boiled egg, pak choi, wok broccolini and mangetout.",
    buttonText: "Add to order",
    price: 10,
  },
  {
    id: '2',
    imageUrl: "/hero_images/hero5.jpg",
    title: "Chicken Teriyaki Ramen",
    description: "Savory teriyaki broth, grilled chicken, noodles, green onions, nori, and bamboo shoots. Add prawns for €3",
    buttonText: "Add to order",
    price: 10,
  },
  {
    id: '3',
    imageUrl: "/hero_images/hero6.jpg",
    title: "Vegetarian Miso Ramen",
    description: "Rich miso broth, tofu, noodles, spinach, corn, and shiitake mushrooms. Make it spicy for €0.50",
    buttonText: "Add to order",
    price: 10,
  },
  {
    id: '4',
    imageUrl: "/hero_images/hero2.jpg",
    title: "Beef Ramen",
    description: "Hearty beef broth, thinly sliced beef, noodles, bean sprouts, and a soft boiled egg.",
    buttonText: "Add to order",
    price: 10,
  },
  {
    id: '5',
    imageUrl: "/hero_images/hero3.jpg",
    title: "Seafood Ramen",
    description: "Flavorful seafood broth, shrimp, squid, clams, noodles, wakame, and scallions.",
    buttonText: "Add to order",
    price: 10,
  },
  {
    id: '6',
    imageUrl: "/hero_images/hero4.jpg",
    title: "Pork Tonkotsu Ramen",
    description: "Creamy pork broth, chashu pork, noodles, wood ear mushrooms, and garlic oil.",
    buttonText: "Add to order",
    price: 12,
  },
  {
    id: '7',
    imageUrl: "/hero_images/hero2.jpg",
    title: "Curry Ramen",
    description: "Spicy curry broth, chicken, noodles, carrots, potatoes, and a soft boiled egg.",
    buttonText: "Add to order",
    price: 12,
  },
  {
    id: '8',
    imageUrl: "/hero_images/hero4.jpg",
    title: "Cold Ramen",
    description: "Refreshing cold broth, chilled noodles, cucumber, tomato, and boiled egg.",
    buttonText: "Add to order",
    price: 10,
  },
  {
    id: '9',
    imageUrl: "/hero_images/hero4.jpg",
    title: "Kimchi Ramen",
    description: "Spicy kimchi broth, kimchi, pork, noodles, scallions, and a soft boiled egg.",
    buttonText: "Add to order",
    price: 10,
  },
  {
    id: '10',
    imageUrl: "/hero_images/hero3.jpg",
    title: "Shoyu Ramen",
    description: "Soy sauce based broth, chicken, noodles, bamboo shoots, and nori.",
    buttonText: "Add to order",
    price: 10,
  },
  {
    id: '11',
    imageUrl: "/sushi/sushi1.jpg",
    title: "Dragon Roll",
    description: "Shrimp tempura, avocado, eel sauce, topped with spicy tuna and tobiko.",
    buttonText: "Add to order",
    price: 12,
},
{
    id: '12',
    imageUrl: "/sushi/sushi7.jpg",
    title: "California Roll",
    description: "Crab meat, avocado, cucumber, and tobiko, wrapped in seaweed and rice.",
    buttonText: "Add to order",
    price: 8,
},
{
    id: '13',
    imageUrl: "/sushi/sushi3.jpg",
    title: "Spicy Tuna Roll",
    description: "Fresh tuna, spicy mayo, cucumber, and sesame seeds.",
    buttonText: "Add to order",
    price: 9,
},
{
    id: '14',
    imageUrl: "/sushi/sushi4.jpg",
    title: "Rainbow Roll",
    description: "California roll topped with assorted fresh fish: tuna, salmon, yellowtail, and avocado.",
    buttonText: "Add to order",
    price: 13,
},
{
    id: '15',
    imageUrl: "/sushi/sushi5.jpg",
    title: "Salmon Nigiri",
    description: "Fresh salmon slices over seasoned sushi rice, garnished with a touch of wasabi.",
    buttonText: "Add to order",
    price: 7,
},
{
    id: '16',
    imageUrl: "/sushi/sushi6.jpg",
    title: "Eel Avocado Roll",
    description: "Grilled eel, avocado, cucumber, eel sauce, and sesame seeds.",
    buttonText: "Add to order",
    price: 10,
},
{
    id: '17',
    imageUrl: "/sushi/sushi6.jpg",
    title: "Vegetable Roll",
    description: "Cucumber, avocado, carrot, and bell pepper wrapped in seaweed and rice.",
    buttonText: "Add to order",
    price: 7,
},
{
    id: '18',
    imageUrl: "/sushi/sushi7.jpg",
    title: "Tempura Shrimp Roll",
    description: "Crispy tempura shrimp, avocado, cucumber, and spicy mayo.",
    buttonText: "Add to order",
    price: 11,
},
{
    id: '19',
    imageUrl: "/sushi/sushi3.jpg",
    title: "Philadelphia Roll",
    description: "Smoked salmon, cream cheese, cucumber, and avocado.",
    buttonText: "Add to order",
    price: 10,
},
{
    id: '20',
    imageUrl: "/sushi/sushi4.jpg",
    title: "Spider Roll",
    description: "Soft-shell crab, avocado, cucumber, and spicy mayo, topped with eel sauce.",
    buttonText: "Add to order",
    price: 14,
}
];

interface AllRamenProps {
  filteredData?: CardData[]; 
}

export const AllRamen: React.FC<AllRamenProps> = ({ filteredData }) => {
  const menuData = filteredData || ramenMenuData;

  return (
    <>
      <div className="flex flex-wrap gap-2 mx-2 my-2 sm:flex-col sm:items-center md:flex-row md:flex-wrap md:justify-center">
        {menuData.length > 0 ? (
          menuData.map((data, index) => (
            <CardDefault
              key={data.id}
              id={data.id}
              price={data.price}
              imageUrl={data.imageUrl}
              title={data.title}
              description={data.description}
              buttonText={data.buttonText}
            />
          ))
        ) : (
          <p>{filteredData ? 'No results found.' : 'Loading...'}</p>
        )}
      </div>
    </>
  );
};

export const TopFiveRamen: React.FC = () => {
  return (
      <div className="overflow-x-auto flex ml-4 md:ml-5 justify-start items-center snap-x snap-mandatory">
          <div className="flex w-full">
              {ramenMenuData.slice(0, 5).map((data) => (
                  <div key={data.id} className="inline-block w-full md:w-auto flex-shrink-0">
                      <CardDefault
                          id={data.id} 
                          price={0}
                          imageUrl={data.imageUrl}
                          title={data.title}
                          description={data.description}
                          buttonText={data.buttonText} 
                      />
                  </div>
              ))}
          </div>
      </div>
  );
};

