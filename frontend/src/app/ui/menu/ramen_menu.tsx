// components/CardList.tsx
import { CardDefault } from '../card';

interface CardData {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
}

const cardData: CardData[] = [
  {
    imageUrl: "/hero_images/hero4.jpg",
    title: "Spicy Prawn Ramen",
    description: "Spicy seafood broth, flame grilled prawns, noodles, soft boiled egg, pak choi, wok broccolini and mangetout.",
    buttonText: "Add to order",
  },
  {
    imageUrl: "/hero_images/hero5.jpg",
    title: "Chicken Teriyaki Ramen",
    description: "Savory teriyaki broth, grilled chicken, noodles, green onions, nori, and bamboo shoots. Add prawns for €3",
    buttonText: "Add to order",
  },
  {
    imageUrl: "/hero_images/hero6.jpg",
    title: "Vegetarian Miso Ramen",
    description: "Rich miso broth, tofu, noodles, spinach, corn, and shiitake mushrooms. Make it spicy for €0.50",
    buttonText: "Add to order",
  },
  {
    imageUrl: "/hero_images/hero2.jpg",
    title: "Beef Ramen",
    description: "Hearty beef broth, thinly sliced beef, noodles, bean sprouts, and a soft boiled egg.",
    buttonText: "Add to order",
  },
  {
    imageUrl: "/hero_images/hero3.jpg",
    title: "Seafood Ramen",
    description: "Flavorful seafood broth, shrimp, squid, clams, noodles, wakame, and scallions.",
    buttonText: "Add to order",
  },
  {
    imageUrl: "/hero_images/hero4.jpg",
    title: "Pork Tonkotsu Ramen",
    description: "Creamy pork broth, chashu pork, noodles, wood ear mushrooms, and garlic oil.",
    buttonText: "Add to order",
  },
  {
    imageUrl: "/hero_images/hero2.jpg",
    title: "Curry Ramen",
    description: "Spicy curry broth, chicken, noodles, carrots, potatoes, and a soft boiled egg.",
    buttonText: "Add to order",
  },
  {
    imageUrl: "/hero_images/hero4.jpg",
    title: "Cold Ramen",
    description: "Refreshing cold broth, chilled noodles, cucumber, tomato, and boiled egg.",
    buttonText: "Add to order",
  },
  {
    imageUrl: "/hero_images/hero4.jpg",
    title: "Kimchi Ramen",
    description: "Spicy kimchi broth, kimchi, pork, noodles, scallions, and a soft boiled egg.",
    buttonText: "Add to order",
  },
  {
    imageUrl: "/hero_images/hero3.jpg",
    title: "Shoyu Ramen",
    description: "Soy sauce based broth, chicken, noodles, bamboo shoots, and nori.",
    buttonText: "Add to order",
  }
];

export const AllRamen: React.FC = () => {
  return (
    <div className="flex flex-wrap">
      {cardData.map((data, index) => (
        <CardDefault
          key={index}
          imageUrl={data.imageUrl}
          title={data.title}
          description={data.description}
          buttonText={data.buttonText}
        />
      ))}
    </div>
  );
};

export const TopFiveRamen: React.FC = () => {
    return (
        <>
            <div className="flex overflow-hidden gap-5 mx-4 my-4">
                {cardData.slice(0, 5).map((data, index) => (
                    <CardDefault
                        key={index}
                        imageUrl={data.imageUrl}
                        title={data.title}
                        description={data.description}
                        buttonText={data.buttonText}
                    />
                ))}
            </div>
        </>
    )};