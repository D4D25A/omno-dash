"use client"

import Image from "next/image"
import { Progress } from "@/components/ui/progress"

interface HeroSectionProps {
  points: number
  totalPoints: number
  nextTier: string
  currentTier: string
}

export default function HeroSection({ 
  points = 450, 
  totalPoints = 1000, 
  nextTier = "Silver", 
  currentTier = "Bronze" 
}: HeroSectionProps) {
  const progress = (points / totalPoints) * 100;
  const pointsToNextTier = totalPoints - points;

  return (
    <div className="w-full h-full relative overflow-hidden border-black border-[1px] bg-neutral-100">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/photos/product-shots/Omno-BeautyShot-Solace-A.png"
          alt="Omno Products"
          fill
          sizes="(max-width: 768px) 100vw, 70vw"
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col h-full justify-center">
        <div className="space-y-6 max-w-md">
          <div className="space-y-3">
            <h2 className="text-sm uppercase tracking-wider font-medium text-white/80">CURRENT POINTS</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-heading text-white">{points}</span>
              <div className="h-[40px] flex items-center">
                <Image
                  src="/logo/Icon/Omno_Icon_white.png"
                  alt="Omno"
                  width={32}
                  height={40}
                  className="object-contain h-full w-auto"
                />
              </div>
            </div>
            <p className="text-sm text-white/80">
              {currentTier} Member • {pointsToNextTier} points to {nextTier}
            </p>
          </div>
          
          <div className="w-full space-y-2">
            <div className="flex justify-between text-xs text-white/80">
              <span>{currentTier}</span>
              <span>{nextTier}</span>
            </div>
            <Progress value={progress} className="h-2 bg-white/20" />
            <p className="text-xs text-white/80 mt-2">
              Earn Ø Points with every purchase. Each $1 spent equals 1 Ø Point.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
