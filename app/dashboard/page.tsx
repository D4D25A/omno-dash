import ProfileCard from "@/components/profile-card"
import RecentPurchases from "@/components/recent-purchases"
import ProductRecommendations from "@/components/product-recommendations"
import HeroSection from "@/components/hero-section"
import WelcomeSection from "@/components/welcome-section"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
   const userPoints = 450;
   const totalPoints = 1000;
   const currentTier = "Bronze";
   const nextTier = "Silver";
   const progress = (userPoints / totalPoints) * 100;
   const pointsToNextTier = totalPoints - userPoints;

   return (
      <div className="flex flex-col gap-8 w-full">
         {/* Unified Hero Section with Background */}
         <div className="relative w-full overflow-hidden border-black border-[1px] bg-neutral-100 min-h-[300px]">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
               <Image
                  src="/placeholder-product.jpg"
                  alt="Omno Products"
                  fill
                  sizes="100vw"
                  className="object-cover object-center opacity-90"
                  priority
               />
               {/* Gradient overlay for readability */}
               <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 py-12 px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 h-full">
               {/* Welcome Text */}
               <div className="md:col-span-4 flex flex-col justify-center">
                  <h1 className="text-4xl md:text-5xl font-heading tracking-tight mb-4 text-white">
                     Welcome to Omno Rewards
                  </h1>
                  <p className="text-white/80 text-lg">
                     Everything in Equilibrium
                  </p>
               </div>
               
               {/* Points Information */}
               <div className="md:col-span-8 flex flex-col justify-center">
                  <div className="space-y-6 max-w-md">
                     <div className="space-y-3">
                        <h2 className="text-sm uppercase tracking-wider font-medium text-white/80">CURRENT POINTS</h2>
                        <div className="flex items-baseline gap-2">
                           <span className="text-6xl font-heading text-white">{userPoints}</span>
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
                        <Progress value={progress} className="h-2 bg-white/20 [&>div]:bg-white" />
                        <p className="text-xs text-white/80 mt-2">
                           Earn Ø Points with every purchase. Each $1 spent equals 1 Ø Point.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-1">
               <ProfileCard />
            </div>
            <div className="lg:col-span-2 space-y-8">
               {/* <OmnoPointsCard 
                  points={450} 
                  totalPoints={1000} 
                  currentTier="Bronze" 
                  nextTier="Silver" 
               /> */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <RecentPurchases />
                  <div className="flex flex-col space-y-8">
                     <div className="border-[1px] border-black p-4">
                        <h3 className="font-heading text-xl mb-2">Upcoming Rewards</h3>
                        <p className="text-sm mb-4">Reach {userPoints + 50} points to unlock a free Omno product sample</p>
                        <div className="flex justify-between text-sm">
                           <div className="flex items-center gap-1">
                              <span>Current:</span>
                              <span>{userPoints}</span>
                              <Image
                                 src="/logo/Icon/Omno_Icon_black.png"
                                 alt="Omno"
                                 width={12}
                                 height={12}
                                 className="object-contain"
                              />
                           </div>
                           <div className="flex items-center gap-1">
                              <span>Next:</span>
                              <span>{userPoints + 50}</span>
                              <Image
                                 src="/logo/Icon/Omno_Icon_black.png"
                                 alt="Omno"
                                 width={12}
                                 height={12}
                                 className="object-contain"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="border-[1px] border-black p-4">
                        <h3 className="font-heading text-xl mb-2">Birthday Offer</h3>
                        <p className="text-sm">Free Rollerball Perfume during your birthday month</p>
                     </div>
                  </div>
               </div>
               <ProductRecommendations />
            </div>
         </div>
      </div>
   )
}

