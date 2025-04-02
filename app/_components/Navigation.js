"use client";
import Link from "next/link";
import { Home, Clapperboard, Film, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: <Home /> },
  { name: "Movies", href: "/movies", icon: <Clapperboard /> },
  { name: "Cinemas", href: "/about-us", icon: <Film /> },
  { name: "Contact Us", href: "/contact-us", icon: <Phone /> },
];
export default function Navigation() {
  return (
    // desktop navigation
    <nav className="hidden lg:block">
      <ul className="flex gap-8 justify-center items-center font-bold">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
