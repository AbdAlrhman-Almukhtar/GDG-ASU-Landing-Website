import React, { useRef, useEffect, useState } from "react";

interface NavItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive, onClick }) => {
  const ref = useRef<HTMLLIElement>(null);
  const [style, setStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (isActive && ref.current) {
      setStyle({
        left: 0,
        width: ref.current.offsetWidth,
      });
    }
  }, [isActive]);

  return (
    <li ref={ref} className="relative pb-2 cursor-pointer" onClick={onClick}>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className={`hover:text-gray-900 transition-colors duration-300 ${
          isActive ? "font-semibold text-gray-800" : ""
        }`}
      >
        {label}
      </a>
      {isActive && (
        <span
          className="absolute bottom-0 left-0 h-0.5 bg-blue-600 rounded-sm transition-all duration-500 ease-in-out"
          style={{ width: style.width }}
        />
      )}
    </li>
  );
};

export default NavItem;
