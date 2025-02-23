"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarIcon, CameraIcon, GalleryHorizontal,  StoreIcon } from "lucide-react";

export function BentoGridThirdDemo() {
  return (
    <div className="py-20  ">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold  mb-4">
        Your Digital Presence, <span className="text-red-500">All in One Place</span>
      </h2>
      <p className=" text-xl max-w-2xl mx-auto">
        Connect with your audience across all platforms through a single, powerful link
      </p>
    </div>
  
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[24rem] p-6 md:p-8">
      {featureItems.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          }
          className={cn(
            "hover:shadow-2xl transition-all duration-300 hover:-translate-y-1",
            item.className
          )}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  </div>
  
  );
};

const featureItems = [
  {
    title: "Social Hub",
    description: "Connect all your social media profiles in one stunning, customizable page",
    image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=2000",
    className: "md:col-span-2",
    icon: <CameraIcon className="h-6 w-6 text-red-500" />
  },
  {
    title: "Analytics Dashboard",
    description: "Track your engagement and grow your audience with detailed insights",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000",
    className: "md:col-span-1",
    icon: <CalendarIcon className="h-6 w-6 text-red-500" />
  },
  {
    title: "Content Monetization",
    description: "Turn your followers into customers with integrated payment links",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2000",
    className: "md:col-span-1",
    icon: <StoreIcon className="h-6 w-6 text-red-500" />
  },
  {
    title: "Brand Showcase",
    description: "Display your partnerships and sponsored content professionally",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2000",
    className: "md:col-span-2",
    icon: <GalleryHorizontal className="h-6 w-6 text-red-500" />
  }
];

 


