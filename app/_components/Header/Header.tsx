"use client";
import Logo from "../Logo";

import { Clapperboard, Film, Home, Phone } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DesktopNavigation from "./DesktopNavigation";
import NavToggleButton from "./NavToggleButton";
import MobileNavigation from "./MobileNavigation";

const navLinks = [
  { name: "Home", href: "/", icon: <Home /> },
  { name: "Movies", href: "/movies", icon: <Clapperboard /> },
  { name: "Cinemas", href: "/cinemas", icon: <Film /> },
  { name: "Contact", href: "/contact", icon: <Phone /> },
];

const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
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
};

export default Header;
