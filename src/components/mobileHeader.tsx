"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

interface MobileNavbarProps {
  navItems: NavItem[];
  className?: string;
}


export default function MobileNavbar({ navItems, className }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const overflow = isOpen ? "hidden" : "auto";
    document.documentElement.style.overflow = overflow;
  }, [isOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setIsOpen(false);
    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);
    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, []);

  return (
    <div className="md:hidden bg-white fixed top-0 left-0 z-50 w-full h-11 flex items-center justify-between border-b   ">
      <h2 className="  fixed top-1 left-2 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Hemsedal Fjellcamp
      </h2>
      <button
        className={`md:hidden fixed top-1 right-4 ${className}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-8" /> : <Menu className="size-8" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 top-[50px] z-40 size-full overflow-auto bg-black/40 animate-in slide-in-from-bottom-24 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <nav className="bg-white p-4 absolute right-0 top-0 h-full w-1/2 flex flex-col items-end ">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 hover:bg-gray-100 text-left w-full"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}