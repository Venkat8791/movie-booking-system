import { Menu, X } from "lucide-react";
import React from "react";

function NavToggleButton({ isMenuOpen, setIsMenuOpen }) {
  return (
    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
      {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
    </button>
  );
}

export default NavToggleButton;
