"use client";
import { useState } from "react";
import Logo from "./Logo";
import { Clapperboard, Film, Home, Phone } from "lucide-react";

import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import NavToggleButton from "./NavToggleButton";

const navLinks = [
  { name: "Home", href: "/", icon: <Home /> },
  { name: "Movies", href: "/movies", icon: <Clapperboard /> },
  { name: "Cinemas", href: "/about-us", icon: <Film /> },
  { name: "Contact", href: "/contact-us", icon: <Phone /> },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center">
          <DesktopNavigation navLinks={navLinks} />

          {/* mobile menu button */}
          <NavToggleButton
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          {/* Mobile Menu (Slide-In) */}
          {isMenuOpen && (
            <MobileNavigation
              navLinks={navLinks}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          )}
        </div>
      </div>
    </header>
  );
}
