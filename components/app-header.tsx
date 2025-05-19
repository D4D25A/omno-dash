"use client"

import { Search, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function AppHeader() {
   return (
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-black bg-background px-6">
         <SidebarTrigger className="border border-black rounded-none hover:bg-secondary" />
         <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center">
               <span className="font-heading text-sm tracking-tight">REWARDS</span>
            </div>
            <div className="flex items-center gap-4">
               <Button variant="outline" size="icon" className="border-black rounded-none hover:bg-secondary">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
               </Button>
               <Button variant="outline" size="icon" className="border-black rounded-none hover:bg-secondary">
                  <ShoppingBag className="h-4 w-4" />
                  <span className="sr-only">Shop</span>
               </Button>
            </div>
         </div>
      </header>
   )
}
