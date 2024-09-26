"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { headerNavItems } from "@/data/headerConfig";
import DropdownMenu from "@/components/DropdownMenu";
import MobileMenu from "@/components/MobileMenu";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link className="flex items-center" href="/">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="ml-2 text-2xl font-bold">KRNM-SPH</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {headerNavItems.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <DropdownMenu item={item} />
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 text-lg"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">打开主菜单</span>
              <Bars3Icon
                className={`${isOpen ? "hidden" : "block"} h-8 w-8`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
