import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Logo() {
   return (
      <Link href="/" className="flex items-center self-center">
         <Image 
            src="/logo/Omno_Black_Logo_Full.png"
            alt="Omno"
            width={120}
            height={35}
            priority
            className="dark:filter dark:invert"
         />
      </Link>
   )
}
