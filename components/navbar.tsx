'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation'

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
//import NavbarActions from "@/components/navbar-actions";
//import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const router = useRouter();

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <a href="/" className="ml-4 flex lg:ml-0 gap-x-2" onClick={() => {router.refresh();router.push('/')}}>
            <p className="font-bold text-xl">Landing Demo</p>
          </a>
          <MainNav />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;