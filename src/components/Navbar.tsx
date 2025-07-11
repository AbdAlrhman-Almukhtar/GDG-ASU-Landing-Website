import React, { useState } from "react";
import GdgLogoDesktop from "../assets/images/logos/gdg_logo_desktop.png";
import NavItem from "./NavItem";

const Navbar: React.FC = () => {
  const navItems = [
    "About GDG",
    "Growth",
    "Events",
    "Leadership",
    "FAQ",
  ];

  const [active, setActive] = useState("About GDG");

  return (
    <header className="bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div>
          <img src={GdgLogoDesktop} alt="GDG Logo" className="w-auto h-10" />
        </div>

        <nav>
          <ul className="flex items-center space-x-8 text-sm text-gray-600 px-6">
            {navItems.map((item) => (
              <NavItem
                key={item}
                label={item}
                isActive={active === item}
                onClick={() => setActive(item)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
