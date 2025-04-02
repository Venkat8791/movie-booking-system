import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import LoginButton from "./LoginButton";

function MobileNavigation({ navLinks, isMenuOpen, setIsMenuOpen }) {
  return (
    <nav
      className={`lg:hidden fixed top-0 right-0 w-64 h-full flex flex-col bg-white p-6 shadow-md transition-transform ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button onClick={() => setIsMenuOpen(false)} className="">
        <X className="w-7 h-7" />
      </button>
      <ul className="mt-10 space-y-6 text-left">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="flex items-center gap-2 hover:text-gray-400"
              onClick={() => isMenuOpen(false)} // Close menu on click
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <LoginButton />
      </ul>
    </nav>
  );
}

export default MobileNavigation;
