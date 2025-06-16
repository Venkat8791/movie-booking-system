"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../_context/AuthProvider";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../../../config";

function capitalizeFirstLetter(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function UserMenu() {
  const { auth, setAuth } = useAuth();
  const handleLogout = async () => {
    await fetch(`${API_BASE_URL}/api/logout`, {
      method: "POST",
      credentials: "include",
    });

    // Clear your AuthContext
    setAuth({
      isAuthenticated: false,
      firstName: null,
      email: null,
      userId: null,
      lastName: null,
      phoneNumber: null,
    });

    toast.success("Logged out successfully");
    router.push("/");
    router.refresh();
  };

  const router = useRouter();
  let displayName = "Guest";
  if (auth.isAuthenticated) {
    displayName =
      auth.firstName !== null ? capitalizeFirstLetter(auth.firstName) : "Guest";
  }

  return (
    <div className="relative inline-block text-left w-full">
      <Menu>
        <MenuButton className="inline-flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm w-full">
          {displayName}
          <ChevronDownIcon className="ml-2 h-5 w-5" />
        </MenuButton>
        <MenuItems className="absolute right-0 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/10 focus:outline-none z-10">
          <MenuItem>
            <button
              className="px-4 py-2 text-left text-sm hover:bg-[var(--accent)] w-full rounded-md"
              onClick={() => router.push("/profile")}
            >
              Profile
            </button>
          </MenuItem>

          <MenuItem>
            <button
              className="px-4 py-2 text-left text-sm hover:bg-[var(--accent)] w-full rounded-md"
              onClick={() => router.push("/bookings")}
            >
              Bookings
            </button>
          </MenuItem>

          <MenuItem>
            <button
              className="px-4 py-2 text-left text-sm hover:bg-[var(--accent)] w-full rounded-md"
              onClick={handleLogout}
            >
              Logout
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}

export default UserMenu;
