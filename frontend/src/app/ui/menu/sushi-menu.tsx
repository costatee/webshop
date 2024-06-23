import { CardDefault } from '../card';

interface CardData {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    buttonText: string;
    price: number;
  }

export const sushiMenuData: CardData[] = [
    {
        id: '11',
        imageUrl: "/sushi/sushi1.jpg",
        title: "Dragon Roll",
        description: "Shrimp tempura, avocado, eel sauce, topped with spicy tuna and tobiko.",
        buttonText: "+",
        price: 12,
    },
    {
        id: '12',
        imageUrl: "/sushi/sushi7.jpg",
        title: "California Roll",
        description: "Crab meat, avocado, cucumber, and tobiko, wrapped in seaweed and rice.",
        buttonText: "+",
        price: 8,
    },
    {
        id: '13',
        imageUrl: "/sushi/sushi3.jpg",
        title: "Spicy Tuna Roll",
        description: "Fresh tuna, spicy mayo, cucumber, and sesame seeds.",
        buttonText: "+",
        price: 9,
    },
    {
        id: '14',
        imageUrl: "/sushi/sushi4.jpg",
        title: "Rainbow Roll",
        description: "California roll topped with assorted fresh fish: tuna, salmon, yellowtail, and avocado.",
        buttonText: "+",
        price: 13,
    },
    {
        id: '15',
        imageUrl: "/sushi/sushi5.jpg",
        title: "Salmon Nigiri",
        description: "Fresh salmon slices over seasoned sushi rice, garnished with a touch of wasabi.",
        buttonText: "+",
        price: 7,
    },
    {
        id: '16',
        imageUrl: "/sushi/sushi6.jpg",
        title: "Eel Avocado Roll",
        description: "Grilled eel, avocado, cucumber, eel sauce, and sesame seeds.",
        buttonText: "+",
        price: 10,
    },
    {
        id: '17',
        imageUrl: "/sushi/sushi6.jpg",
        title: "Vegetable Roll",
        description: "Cucumber, avocado, carrot, and bell pepper wrapped in seaweed and rice.",
        buttonText: "+",
        price: 7,
    },
    {
        id: '18',
        imageUrl: "/sushi/sushi7.jpg",
        title: "Tempura Shrimp Roll",
        description: "Crispy tempura shrimp, avocado, cucumber, and spicy mayo.",
        buttonText: "+",
        price: 11,
    },
    {
        id: '19',
        imageUrl: "/sushi/sushi3.jpg",
        title: "Philadelphia Roll",
        description: "Smoked salmon, cream cheese, cucumber, and avocado.",
        buttonText: "+",
        price: 10,
    },
    {
        id: '20',
        imageUrl: "/sushi/sushi4.jpg",
        title: "Spider Roll",
        description: "Soft-shell crab, avocado, cucumber, and spicy mayo, topped with eel sauce.",
        buttonText: "+",
        price: 14,
    }
]    

export const AllSushi: React.FC = () => {
    return (
      <>
        <div className="flex flex-wrap gap-2 mx-2 my-2 sm:flex-col sm:items-center md:flex-row md:flex-wrap md:justify-center">
          {sushiMenuData.map((data, index) => (
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

  export const TopFiveSushi: React.FC = () => {
    return (
        <>
            <div className="flex gap-2 mx-2 my-2 sm:flex-col sm:items-center md:flex-row md:flex-wrap md:justify-center">
                {sushiMenuData.slice(0, 5).map((data, index) => (
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