"use client";
import Link from "next/link";

import LoginButton from "../Login/LoginButton";
import UserMenu from "../Profile/UserMenu";
import Spinner from "../Spinner";
import { NavLink } from "../../types/navigation";
import { useAuth } from "../../_context/AuthProvider";

type DesktopNavigationProps = {
  navLinks: NavLink[];
  onLoginClick: () => void;
};

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navLinks,
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
        {authComponent}
      </ul>
    </nav>
  );
};

export default DesktopNavigation;
