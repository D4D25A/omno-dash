"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"

interface Purchase {
  id: string
  date: string
  name: string
  amount: string
  pointsEarned: number
}

const mockPurchases: Purchase[] = [
  {
    id: "1",
    date: "May 15, 2024",
    name: "Solace Hand & Body Cleanser",
    amount: "S$45.00",
    pointsEarned: 45
  },
  {
    id: "2",
    date: "May 3, 2024",
    name: "Moonatic Body Lotion",
    amount: "S$56.00",
    pointsEarned: 56
  },
  {
    id: "3",
    date: "Apr 27, 2024",
    name: "Gaea Soothe Roller",
    amount: "S$35.00",
    pointsEarned: 35
  }
]

export default function RecentPurchases() {
  return (
    <Card className="border-[1px] border-black">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <ShoppingBag className="h-4 w-4 mr-2" />
          Recent Purchases
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockPurchases.map((purchase, index) => (
            <div key={purchase.id}>
              {index > 0 && <Separator className="my-4" />}
              <div className="space-y-1">
                <div className="flex justify-between">
                  <p className="font-medium">{purchase.name}</p>
                  <p className="font-medium">{purchase.amount}</p>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <p>{purchase.date}</p>
                  <div className="flex items-center gap-1">
                    <span>+{purchase.pointsEarned}</span>
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
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-border">
          <button className="w-full py-2 text-sm font-medium hover:bg-secondary transition-colors">
            View All Orders
          </button>
        </div>
      </CardContent>
    </Card>
  )
} 