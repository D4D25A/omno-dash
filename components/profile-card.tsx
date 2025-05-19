"use client"

import {
   Card,
   CardContent,
   CardHeader
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, Mail, MapPin, Shield, User } from "lucide-react"
import { useUser } from "@/context/UserContext"

export default function ProfileCard() {
   const user = useUser();
   return (
      <Card className="overflow-hidden border-[1px] border-black">
         <CardHeader className="relative p-0">
            <div className="h-32 bg-black"></div>
            <div className="absolute -bottom-12 left-4">
               <div className="relative">
                  <Avatar className="h-24 w-24 border-2 border-black rounded-none">
                     <AvatarImage src={user?.image || ''} alt={user?.name || 'Profile'} />
                     <AvatarFallback className="text-4xl font-heading bg-white text-black rounded-none">
                        {user?.name ? user.name.charAt(0) : "O"}
                     </AvatarFallback>
                  </Avatar>
               </div>
            </div>
         </CardHeader>
         <CardContent className="pt-14">
            <div className="space-y-1">
               <h3 className="font-heading text-xl">
                  {user?.name || 'Omno Rewards Member'}
               </h3>
               <p className="text-sm text-muted-foreground">
                  {user?.email || 'rewards@omno.store'}
               </p>
            </div>
            <div className="flex items-center gap-2 mt-4">
               <Badge variant="outline" className="flex items-center gap-1 rounded-none border-black">
                  <Check className="h-3 w-3" />
                  {user?.emailVerified ? 'Verified' : 'Not Verified'}
               </Badge>
               <Badge variant="outline" className="flex items-center gap-1 rounded-none border-black">
                  <Clock className="h-3 w-3" />
                  Member since {user?.createdAt ? user.createdAt.getFullYear() : '2024'}
               </Badge>
            </div>
            <Separator className="my-4 bg-black" />
            <div className="space-y-4">
               <div className="flex items-start gap-2">
                  <User className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                     <p className="text-sm font-medium">Rewards Status</p>
                     <p className="text-sm text-muted-foreground">Bronze Tier</p>
                  </div>
               </div>
               <div className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                     <p className="text-sm font-medium">Email</p>
                     <p className="text-sm text-muted-foreground">
                        {user?.email || 'rewards@omno.store'}
                     </p>
                  </div>
               </div>
               <div className="flex items-start gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                     <p className="text-sm font-medium">Account Security</p>
                     <p className="text-sm text-muted-foreground">Password Protected</p>
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>
   )
}
