"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  image: string;
};

let interval: any;

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-60 w-full md:h-60 md:w-96 rounded-3xl overflow-hidden"
            style={{
              transformOrigin: "right top",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1.1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <Image
              src={card.image}
              alt={card.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        );
      })}
    </div>
  );
};
