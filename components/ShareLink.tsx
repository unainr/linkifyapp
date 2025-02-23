import React from "react";
import { CardStackDemo } from "./CardStack";
import { Button } from "./ui/button";

const ShareLink = () => {
	return (
		<div className="min-h-screen grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 p-4 md:p-8 lg:p-12 items-center">
  <div className="flex flex-col gap-6 lg:gap-8">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-red-500 text-transparent bg-clip-text animate-gradient">
      Share Your Social Media Links
    </h1>
    
    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
      Connect with your audience by sharing your Instagram, TikTok, and Twitter links in one beautiful place.
    </p>
    
    <Button className="group relative overflow-hidden rounded-lg bg-red-500 hover:bg-red-600 px-8 py-4 w-fit text-white shadow-lg transition-all duration-300  hover:shadow-xl">
      <span className="relative z-10 text-lg font-medium">
        Share Your Links
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Button>
  </div>

  <div className="relative h-[300px] md:h-[300px] lg:h-[400px] w-full flex items-center justify-center">
    <div className="absolute w-full h-full bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-2xl -rotate-6 transform"></div>
    <div className="relative z-10 w-full h-full flex items-center justify-center">
      <CardStackDemo />
    </div>
  </div>
</div>

	);
};

export default ShareLink;
