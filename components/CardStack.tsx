"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CardStackDemo() {
  return (
    <div className="flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5 ",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Sophie Anderson",
    designation: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    content: "These designs are incredible, absolutely stunning"
  },
  {
    id: 1,
    name: "Emma Lawrence",
    designation: "Digital Artist",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000",
    content: "The aesthetic is exactly what I was looking for, beautifully crafted"
  },
  {
    id: 2,
    name: "Isabella Chen",
    designation: "Art Director",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000",
    content: "As a designer, I'm impressed by the visual harmony"
  }
];

