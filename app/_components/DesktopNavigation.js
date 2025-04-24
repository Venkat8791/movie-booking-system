"use client";
import Link from "next/link";
import LoginButton from "./LoginButton";
import { useAuth } from "../_context/AuthProvider";

import UserMenu from "./UserMenu";

export default function DesktopNavigation({ navLinks }) {
  const { auth, loading } = useAuth();
  return (
    // desktop navigation
    <nav className="hidden lg:block">
      <ul className="flex gap-4 justify-center items-center font-bold">
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
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="w-6 h-6 border-4 border-t-transparent border-gray-500 rounded-full animate-spin"></div>
          </div>
        ) : auth.isAuthenticated ? (
          <UserMenu />
        ) : (
          <LoginButton />
        )}
      </ul>
    </nav>
  );
}
