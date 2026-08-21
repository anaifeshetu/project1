import React from "react";
import {
  CalendarCheck,
  ArrowRight,
  Sparkles,
  Clock,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BookingSection() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#f7f5f0] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto flex min-h-[80vh] w-full max-w-5xl items-center justify-center">
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-[32px]
            bg-white
            px-6
            py-10
            shadow-[0_20px_50px_rgba(15,23,42,0.08)]
            sm:px-10
            sm:py-14
          "
        >
          {/* Decorative background circles */}
          <div
            className="
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-[#fff1c9]
              opacity-70
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-20
              h-52
              w-52
              rounded-full
              bg-[#075e54]/5
            "
          />

          <div className="relative mx-auto max-w-2xl text-center">

            {/* Small label */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#fff1c9]
                px-4
                py-2
              "
            >
              <Sparkles className="h-4 w-4 text-[#d5a13a]" />

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#a87820]
                "
              >
                Your Wellness Journey
              </span>
            </div>

            {/* Icon */}
            <div
              className="
                mx-auto
                mt-6
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-[#075e54]
                shadow-[0_12px_25px_rgba(7,94,84,0.18)]
              "
            >
              <CalendarCheck
                className="h-7 w-7 text-[#f7d98a]"
                strokeWidth={1.7}
              />
            </div>

            {/* Heading */}
            <h2
              className="
                mt-6
                font-serif
                text-3xl
                font-bold
                leading-tight
                text-[#071b16]
                sm:text-4xl
              "
            >
              Book Your
              <span className="block text-[#075e54]">
                Perfect Session
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-4
                max-w-lg
                text-sm
                leading-6
                text-slate-600
                sm:text-base
                sm:leading-7
              "
            >
              Choose a time that works for you and enjoy a relaxing massage
              experience at your home, hotel, or preferred setting in Addis
              Ababa.
            </p>

            {/* Features */}
            <div
              className="
                mx-auto
                mt-7
                grid
                max-w-lg
                gap-3
                sm:grid-cols-2
              "
            >
              {/* Feature 1 */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-[#075e54]/10
                  bg-[#f8faf8]
                  p-4
                  text-left
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#075e54]/10
                  "
                >
                  <Clock
                    className="h-4 w-4 text-[#075e54]"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Flexible
                  </p>

                  <p className="text-sm font-semibold text-[#071b16]">
                    Choose your time
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-[#d5a13a]/20
                  bg-[#fffaf0]
                  p-4
                  text-left
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#fff1c9]
                  "
                >
                  <Heart
                    className="h-4 w-4 text-[#a87820]"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Personal
                  </p>

                  <p className="text-sm font-semibold text-[#071b16]">
                    Made for you
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => navigate("/booking")}
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#075e54]
                px-7
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-[0_12px_25px_rgba(7,94,84,0.18)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#06483f]
                hover:shadow-[0_18px_30px_rgba(7,94,84,0.22)]
                active:scale-95
              "
            >
              Check Availability

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f7d98a]
                  text-[#075e54]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>

            {/* Small bottom text */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#d5a13a]/40" />

              <span className="text-xs text-slate-400">
                Simple · Comfortable · Professional
              </span>

              <span className="h-px w-8 bg-[#d5a13a]/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}