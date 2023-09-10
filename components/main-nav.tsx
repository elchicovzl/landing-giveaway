"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { GiveWay } from "@/types";

interface MainNavProps {
  data: GiveWay[];
}

const MainNav = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/sorteos`,
      label: 'Sorteos',
      active: pathname === `/sorteos`,
    },
  ]

  return (
    <nav
      className="mx-6 flex items-center space-x-4 lg:space-x-6"
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
      </Link>
      ))}
    </nav>
  )
};

export default MainNav;