"use client";
import { useState } from "react";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import { Clapperboard, Film, Home, Menu, Phone, X } from "lucide-react";

import Navigation from "./Navigation";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/", icon: <Home /> },
  { name: "Movies", href: "/movies", icon: <Clapperboard /> },
  { name: "Cinemas", href: "/about-us", icon: <Film /> },
  { name: "Contact Us", href: "/contact-us", icon: <Phone /> },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-8">
          <Navigation />
          <LoginButton />
          {/* mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hidden md:block lg:hidden text-white"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>

          {/* mobile menu
          <div className="md:hidden fixed top-0 left-0 w-full h-full">
            <div className="flexx justify-end p-6">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center space-y-6 h-full">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="cursor-pointer flex gap-2 items-center"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </li>
              ))}
            </ul>
          </div> */}

          {/* mobile menu */}

          {/* {isMenuOpen && (
            <div className="fixed top-20 left-0 w-full h-full">
              <ul className="flex flex-col items-start  space-y-6 h-full">
                {navLinks.map((link) => (
                  <li
                    key={link.name}
                    className="cursor-pointer flex gap-2 items-center justify-between"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )} */}

          {/* Mobile Menu (Slide-In) */}
          <nav
            className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-red-500 p-6 shadow-md transition-transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="mt-10 space-y-6 text-left">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 text-xl py-2 hover:text-gray-400"
                    onClick={() => isMenuOpen(false)} // Close menu on click
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
