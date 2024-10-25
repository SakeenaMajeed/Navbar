import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-700 text-white max-w-screen-2xl mx-auto p-4">
      <nav>
        <h1 className="px-2 font-semibold text-5xl hover:text-yellow-500">sakeena</h1>
      </nav>
      {/* Desktop Links */}
      <ul className="hidden md:flex gap-5 text-3xl ml-auto">
        <li>
          <Link href="/" className="hover:border-b-2 hover:border-yellow-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:border-b-2 hover:border-yellow-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:border-b-2 hover:border-yellow-500">
            Contact
          </Link>
        </li>
      </ul>
      
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger>
          <Menu className="md:hidden w-8 h-8 cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="bg-gray-700 text-white">
          <SheetHeader>
            <ul className="flex flex-col gap-5 text-3xl">
              <li><Link href="/" className="hover:border-b-2 hover:border-yellow-500">Home</Link></li>
              <li><Link href="/about" className="hover:border-b-2 hover:border-yellow-500">About</Link></li>
              <li><Link href="/contact" className="hover:border-b-2 hover:border-yellow-500">Contact</Link></li>
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
