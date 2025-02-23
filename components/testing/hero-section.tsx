import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchInput from "../SearchInput";

export default function HeroSection() {
	return (
    <section 
    className="relative overflow-hidden min-h-screen pt-36 bg-cover bg-center bg-no-repeat bg-fixed" 
    style={{ 
      backgroundImage: "url('https://readymadeui.com/dark-bg-image.webp')",
      backgroundColor: "rgba(0, 0, 0, 0.85)",
      backgroundBlendMode: "overlay"
    }}
  >
    {/* Enhanced gradient overlays */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--primary-50)_0%,transparent_100%)]" />
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl animate-pulse" />
      <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
    </div>
  
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="inline-flex items-center rounded-full bg-white/10 px-6 py-2 text-sm backdrop-blur-xl text-white border border-white/20">
          <Sparkles className="mr-2 h-4 w-4 text-red-400" />
          Linkify - Smart Link Management Made Simple
        </div>
  
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-red-600 via-purple-400 to-blue-400 bg-clip-text text-5xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
          Simplify Your Online
            <br />
            Presence with Linkify
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-white/90 md:text-md font-light">
            Transform your bio link into a powerful showcase. Connect your audience to all your content, social profiles, and achievements in one stunning page.
          </p>
        </div>
  
        <div className="flex flex-col gap-4 min-[400px]:flex-row pb-6">
        <SearchInput/>   
        </div>
      </div>
    </div>
  </section>
  
	);
}
