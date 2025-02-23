import React from 'react'
import { Input } from './input'
import { Button } from './button'
import SearchInput from '../SearchInput'
const Banner = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    style={{
      backgroundImage: 'url(https://readymadeui.com/dark-bg-image.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
    
   
  
    <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
      <div className="space-y-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white">
          Create Your Personalized
          <span className="block mt-2 bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
            Link Hub in Seconds
          </span>
        </h1>
  
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Share all your important links in one place. Customize your page, add
          social media, and grow your audience effortlessly.
        </p>
  
        <div className="flex gap-4 justify-center items-center max-w-lg mx-auto flex-col sm:flex-row">
          <SearchInput/>
        </div>
      </div>
    </div>
  
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
  </div>
  

  
  )
}

export default Banner