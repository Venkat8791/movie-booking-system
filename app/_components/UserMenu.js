"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "../_context/AuthProvider";
import toast from "react-hot-toast";

function UserMenu() {
  const { setAuth } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    setAuth({
      isAuthenticated: false,
      userId: null,
      userName: null,
      token: null,
      expiry: null,
    });
    toast.success("Logged out successfully");
    router.push("/");
    router.refresh();
  };

  const router = useRouter();
  return (
    <div className="relative inline-block text-left w-full">
      <Menu>
        <MenuButton className="inline-flex justify-between items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm w-full">
          Guest
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
