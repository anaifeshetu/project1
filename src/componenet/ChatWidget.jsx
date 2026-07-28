import { Send, MessageCircle } from "lucide-react";

export default function ChatWidget() {
  return (
    <div
      className="
        fixed
        bottom-5
        right-4
        z-50
        flex
        flex-col
        gap-3
      "
    >

      {/* Telegram */}
      <button
        className="
          flex
          items-center
          justify-center
          w-12
          h-12

          sm:w-14
          sm:h-14

          md:w-[130px]
          md:h-[55px]

          lg:w-[150px]
          lg:h-[60px]

          xl:w-[165px]
          xl:h-[64px]

          rounded-full
          bg-[#229ED9]
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-105
        "
      >

        <Send
          size={22}
          className="
            sm:w-6
            sm:h-6
          "
        />

        <span
          className="
            hidden
            md:block
            ml-2
            lg:ml-3
            text-sm
            lg:text-base
            xl:text-[17px]
            font-semibold
          "
        >
          Telegram
        </span>

      </button>


      {/* WhatsApp */}
      <button
        className="
          flex
          items-center
          justify-center
          w-12
          h-12

          sm:w-14
          sm:h-14

          md:w-[130px]
          md:h-[55px]

          lg:w-[150px]
          lg:h-[60px]

          xl:w-[165px]
          xl:h-[64px]

          rounded-full
          bg-[#20B038]
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-105
        "
      >

        <MessageCircle
          size={24}
          className="
            sm:w-7
            sm:h-7
          "
        />

        <span
          className="
            hidden
            md:block
            ml-2
            lg:ml-3
            text-sm
            lg:text-base
            xl:text-[17px]
            font-semibold
          "
        >
          WhatsApp
        </span>

      </button>

    </div>
  );
}