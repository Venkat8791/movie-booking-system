"use client";
import { useState } from "react";
import Logo from "./Logo";
import { Clapperboard, Film, Home, Phone } from "lucide-react";

import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import NavToggleButton from "./NavToggleButton";
import LoginFormModal from "./LoginFormModal";
import RegistrationFormModal from "./RegistrationFormModal";

const navLinks = [
  { name: "Home", href: "/", icon: <Home /> },
  { name: "Movies", href: "/movies", icon: <Clapperboard /> },
  { name: "Cinemas", href: "/cinemas", icon: <Film /> },
  { name: "Contact", href: "/contact", icon: <Phone /> },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null);

  return (
    <header>
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center">
          <DesktopNavigation
            navLinks={navLinks}
            onLoginClick={() => setAuthModal("login")}
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
              onLoginClick={() => setAuthModal("login")}
            />
          )}

          {authModal === "login" && (
            <LoginFormModal
              isOpen={authModal === "login"}
              onClose={() => setAuthModal(null)}
              onSignupClick={() => setAuthModal("signup")}
            />
          )}

          {authModal === "signup" && (
            <RegistrationFormModal
              isOpen={authModal === "signup"}
              onClose={() => setAuthModal(null)}
              onLoginClick={() => setAuthModal("login")}
            />
          )}
        </div>
      </div>
    </header>
  );
}
