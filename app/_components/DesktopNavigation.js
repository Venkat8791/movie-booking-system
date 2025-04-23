"use client";
import Link from "next/link";
import LoginButton from "./LoginButton";
import { useAuth } from "../_context/AuthProvider";
import UserComponent from "./UserComponent";

export default function DesktopNavigation({ navLinks }) {
  const { auth } = useAuth();
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

        {auth.isAuthenticated ? <UserComponent /> : <LoginButton />}
      </ul>
    </nav>
  );
}
