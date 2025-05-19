"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: string
  imageUrl: string
}

const recommendedProducts: Product[] = [
  {
    id: "1",
    name: "Odyssey Hair Cleanser",
    price: "S$45.00",
    imageUrl: "/placeholder-product.jpg"
  },
  {
    id: "2",
    name: "Solace Body Scrub",
    price: "S$63.00",
    imageUrl: "/placeholder-product.jpg"
  },
  {
    id: "3",
    name: "EcoWarrior Mosquito Repellent",
    price: "S$29.00",
    imageUrl: "/placeholder-product.jpg"
  }
]

export default function ProductRecommendations() {
  return (
    <Card className="border-[1px] border-black">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <Sparkles className="h-4 w-4 mr-2" />
          Recommended For You
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="space-y-2">
              <div className="aspect-square relative bg-secondary">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback for missing images
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'%3E%3C/rect%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'%3E%3C/circle%3E%3Cpolyline points='21 15 16 10 5 21'%3E%3C/polyline%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div>
                <p className="font-medium text-sm">{product.name}</p>
                <p className="text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-border">
          <button className="w-full py-2 text-sm font-medium hover:bg-secondary transition-colors">
            Shop Now
          </button>
        </div>
      </CardContent>
    </Card>
  )
} 