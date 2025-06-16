"use client";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";
import Spinner from "../Spinner";
import UserMenu from "../Profile/UserMenu";
import LoginButton from "../Login/LoginButton";
import { useAuth } from "../../_context/AuthProvider";
import { NavLink } from "../../types/navigation";

type MobileNavigationProps = {
  navLinks: NavLink[];
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  onLoginClick: () => void;
};

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  navLinks,
  isMenuOpen,
  setIsMenuOpen,
  onLoginClick,
}) => {
  const { auth, loading } = useAuth();

  let authComponent;
  if (loading) {
    authComponent = <Spinner />;
  } else if (auth.isAuthenticated) {
    authComponent = <UserMenu />;
  } else {
    authComponent = <LoginButton onLoginClick={onLoginClick} />;
  }

  return (
    <aside
      className={`lg:hidden fixed top-0 right-0 w-64 h-full flex flex-col bg-white z-50  p-6 shadow-md transition-transform ${
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
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        {authComponent}
      </ul>
    </aside>
  );
};

export default MobileNavigation;
