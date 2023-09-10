"use client";

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useAuth, UserButton } from "@clerk/nextjs"
import { Ticket } from "lucide-react"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        {/* <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div> */}
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Landing Demo
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
      {isSignedIn ? 
        <div className="flex items-center">
          <Link href="/boletas" className="flex items-center hover:text-gray-50">
            <Ticket className="text-white mr-2" width='16' height='16' />
            <span className="mr-3 font-medium text-gray-50">Boletas</span>
          </Link>
          <div className="rounded-full border-2 border-cyan-50"><UserButton afterSignOutUrl="/" /></div>
          
        </div> 
        : 
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button variant="outline" className="rounded-full text-xs sm:txt-lg">
            Inicia Sessión
          </Button>
        </Link>
      }
      </div>
    </nav>
  )
}