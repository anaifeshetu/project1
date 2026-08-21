import React from "react";
import { Phone, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import massage from "../assets/massage.png";

export default function Header() {
  const navigate = useNavigate();

  const handleCall = () => {
    window.location.href = "tel:+251900000000";
  };

  return (
    <div
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        bg-[#f7f5f0]
        px-4
        py-3
        sm:px-6
      "
    >
      <header
        className="
          mx-auto
          flex
          h-[68px]
          w-full
          max-w-5xl
          items-center
          justify-between
          rounded-[28px]
          border
          border-slate-100
          bg-white
          px-4
          shadow-[0_20px_45px_rgba(15,23,42,0.08)]
          sm:px-5
        "
      >
        {/* MENU */}
        <button
          type="button"
          aria-label="Menu"
          onClick={() => navigate("/")}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            text-[#0d4d40]
            transition-all
            duration-300
            hover:bg-[#f7f5f0]
            hover:scale-105
            active:scale-95
          "
        >
          <Menu className="h-5 w-5" strokeWidth={2} />
        </button>

        {/* LOGO */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="
            flex
            items-center
            gap-2
            transition-transform
            duration-300
            hover:scale-[1.02]
          "
        >
          <img
            src={massage}
            alt="Ethiomassage"
            className="
              h-9
              w-9
              shrink-0
              rounded-full
              object-cover
            "
          />

          <div className="text-center leading-none">
            <div
              className="
                font-serif
                text-[16px]
                tracking-tight
                text-[#0d4d40]
              "
            >
              Ethio<span className="font-bold">massage</span>
            </div>

            <div
              className="
                mt-1
                text-[7px]
                italic
                tracking-wide
                text-[#c9a24b]
              "
            >
              Relax, Renew, Rejuvenate
            </div>
          </div>
        </button>

        {/* CALL BUTTON */}
        <button
          type="button"
          aria-label="Call us"
          onClick={handleCall}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#0d4d40]
            text-white
            shadow-[0_6px_15px_rgba(13,77,64,0.20)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#075e54]
            hover:shadow-lg
            active:scale-95
          "
        >
          <Phone className="h-4 w-4" strokeWidth={2} />
        </button>
      </header>
    </div>
  );
}