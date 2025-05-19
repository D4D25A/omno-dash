import Link from "next/link"
import Image from "next/image"
import { Gift, LayoutDashboard, LogOut, ShoppingBag, Star, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
   Sidebar,
   SidebarContent,
   SidebarFooter,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuItem,
   SidebarMenuButton,
   SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SignOutForm from "./sign-out-form"
import type { User as UserType } from "@/lib/types"
import Logo from "./logo"


type UserProps = {
   user: UserType | null
}

export default function AppSidebar({ user }: UserProps) {
   return (
      <Sidebar variant="sidebar" className="border-r border-neutral-700 bg-black text-white dark">
         <SidebarHeader className="h-16 flex items-center border-b border-neutral-700 px-6">
            <Logo />
         </SidebarHeader>
         <SidebarContent>
            <SidebarMenu className="px-2 py-4">
               <SidebarMenuItem>
                  <SidebarMenuButton>
                     <Link href="/dashboard" className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center border border-neutral-700 text-white">
                           <LayoutDashboard className="h-5 w-5" />
                        </div>
                        <span className="font-medium">Dashboard</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
               
               <SidebarMenuItem>
                  <SidebarMenuButton>
                     <Link href="#" className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center border border-neutral-700 text-white">
                           <User className="h-5 w-5" />
                        </div>
                        <span className="font-medium">Profile</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
               
               <SidebarMenuItem>
                  <SidebarMenuButton>
                     <Link href="#" className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center border border-neutral-700 text-white">
                           <ShoppingBag className="h-5 w-5" />
                        </div>
                        <span className="font-medium">Orders</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
               
               <SidebarMenuItem>
                  <SidebarMenuButton>
                     <Link href="#" className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center border border-neutral-700 text-white">
                           <Gift className="h-5 w-5" />
                        </div>
                        <span className="font-medium">Rewards</span>
                     </Link>
                  </SidebarMenuButton>
               </SidebarMenuItem>
            </SidebarMenu>
         </SidebarContent>
         <SidebarFooter className="border-t border-neutral-700 p-4">
            <div className="flex items-center gap-3 rounded-none border border-neutral-700 p-3">
               <Avatar className="h-10 w-10 border border-neutral-700 rounded-none">
                  <AvatarImage src={user?.image || ""} alt="User" />
                  <AvatarFallback className="rounded-none bg-black text-white border border-neutral-700">
                     {user?.name ? (
                        user.name.charAt(0)
                     ) : (
                        <div className="flex items-center justify-center">
                           <Image
                              src="/logo/Omno_Black_Logo_Full.png"
                              alt="Omno"
                              width={28}
                              height={28}
                              className="object-contain filter invert"
                           />
                        </div>
                     )}
                  </AvatarFallback>
               </Avatar>
               <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-medium leading-none">
                     {user?.name || 'Omno Rewards Member'}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                     {user?.email || 'rewards@omno.store'}
                  </p>
               </div>
               <SignOutForm>
                  <Button
                     variant={"ghost"}
                     size={"icon"}
                     className="flex items-center cursor-pointer hover:bg-neutral-800 text-white"
                  >
                     <LogOut className="h-4 w-4" />
                  </Button>
               </SignOutForm>
            </div>
         </SidebarFooter>
         <SidebarRail />
      </Sidebar>
   )
}
