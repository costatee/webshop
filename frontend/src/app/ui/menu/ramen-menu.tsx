// components/CardList.tsx
import { CardDefault } from '../card';

interface CardData {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  price: number;
}

export const cardData: CardData[] = [
  {
    id: '1',
    imageUrl: "/hero_images/hero4.jpg",
    title: "Spicy Prawn Ramen",
    description: "Spicy seafood broth, flame grilled prawns, noodles, soft boiled egg, pak choi, wok broccolini and mangetout.",
    buttonText: "+",
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
  }
];

export const AllRamen: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 mx-2 my-2 sm:flex-col sm:items-center md:flex-row md:flex-wrap md:justify-center">
        {cardData.map((data, index) => (
          <CardDefault
              key={data.id}
              id={data.id}
              price={data.price}
              imageUrl={data.imageUrl}
              title={data.title}
              description={data.description}
              buttonText={data.buttonText}
            />
        ))}
      </div>
    </>
  );
};

export const TopFiveRamen: React.FC = () => {
    return (
        <>
            <div className="flex gap-2 mx-2 my-2 sm:flex-col sm:items-center md:flex-row md:flex-wrap md:justify-center">
                {cardData.slice(0, 5).map((data, index) => (
                    <CardDefault
                      key={data.id}
                      id={data.id} 
                      price={0}
                      imageUrl={data.imageUrl}
                      title={data.title}
                      description={data.description}
                      buttonText={data.buttonText} 
                    />
                ))}
            </div>
        </>
    )};