"use client";
import { useState } from "react";
import Logo from "../Logo";
import { Clapperboard, Film, Home, Phone } from "lucide-react";
import DesktopNavigation from "./DesktopNavigation";
import NavToggleButton from "./NavToggleButton";
import MobileNavigation from "./MobileNavigation";
import { useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/", icon: <Home /> },
  { name: "Movies", href: "/movies", icon: <Clapperboard /> },
  { name: "Cinemas", href: "/cinemas", icon: <Film /> },
  { name: "Contact", href: "/contact", icon: <Phone /> },
];

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center">
          <DesktopNavigation
            navLinks={navLinks}
            onLoginClick={() => router.push("/login")}
          />

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
              onLoginClick={() => router.push("/login")}
            />
          )}
        </div>
      </div>
    </header>
  );
}
