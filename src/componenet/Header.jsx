// NO CHANGES NEEDED: this file was already correct. Included here unchanged
// so you have the full matching set. Function name (Header) unchanged.
import massage from "../assets/massage.png"
import { MenuIcon } from "lucide-react";
export default function Header() {
  return (
    
    <div className="flex justify-center bg-[#f7f5f0] px-4 py-3 sm:px-3 ">
    <header className="w-full max-w-5xl mx-auto overflow-hidden rounded-[28px] bg-white  flex items-center justify-between p-4">

      {/* Hamburger Menu */}
      {/* <button
        aria-label="Open menu"
        className="flex-col gap-2 p-1  flex items-center justify-between cursor-pointer"
      >
        <span className="block w-2 h-1 bg-[#111] "></span>
        <span className="block w-2 h-1 bg-[#111] "></span>
        <span className="block w-2 h-1 bg-[#111] "></span>
      </button> */}
      <div>
 <MenuIcon/>
      </div>


      {/* Logo */}
      <div className="flex items-center gap-1.5">

       <img src={massage} alt="massage"  className="
    w-8
    h-8
    rounded-full
    object-cover
    shrink-0
  "></img>
        <div className="leading-none text-center">

          <div className="
            text-[15px]
            font-serif
            text-[#0d4d40]
            tracking-tight
          ">
            Ethio<span className="font-bold">massage</span>
          </div>

          <div className="
            text-[7px]
            italic
            text-[#c9a24b]
            tracking-wide
            mt-1
          ">
            Relax, Renew, Rejuvenate
          </div>

        </div>
      </div>


      {/* Call Button */}
      <button
        aria-label="Call us"
        className="
          flex items-center justify-center
          w-11 h-11
          rounded-full
          bg-[#0d4d40]
          cursor-pointer
        "
      >

        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="
            M6.6 10.8c1.4 2.8 3.8 5.2
            6.6 6.6l2.2-2.2
            c.3-.3.7-.4 1-.2
            1.1.4 2.3.6 3.6.6
            .6 0 1 .4 1 1V20
            c0 .6-.4 1-1 1
            C10.5 21 3 13.5 3 4
            c0-.6.4-1 1-1h3.5
            c.6 0 1 .4 1 1
            0 1.3.2 2.5.6 3.6
            .1.4 0 .8-.2 1
            l-2.3 2.2z
            "
          />
        </svg>

      </button>

    </header>
    </div>
  );
}