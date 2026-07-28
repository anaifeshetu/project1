import React from "react";
import {
  Home as HomeIcon,
  Hand,
  Calendar,
  Phone,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  {
    label: "Home",
    Icon: HomeIcon,
    path: "/",
  },
  {
    label: "Services",
    Icon: Hand,
    path: "/services",
  },
  {
    label: "Booking",
    Icon: Calendar,
    path: "/booking",
  },
  {
    label: "Contact",
    Icon: Phone,
    path: "/contact",
  },
];

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-8 rounded-full bg-white px-8 py-3 shadow-xl">
      {navItems.map(({ label, Icon, path }) => (
        <button
          key={label}
          onClick={() => navigate(path)}
          className={`flex flex-col items-center gap-1 transition ${
            location.pathname === path
              ? "text-[#075e54]"
              : "text-gray-500 hover:text-[#075e54]"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.8} />
          <span className="text-xs font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
}