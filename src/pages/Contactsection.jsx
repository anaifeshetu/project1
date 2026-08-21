import React from "react";
import { Mail, MapPin, Phone, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactSection() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f7f2e9] px-4 pb-28 pt-3 sm:px-6 sm:pt-5">
      <section className="mx-auto w-full max-w-5xl">

        {/* Main Contact Container */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            bg-white
            p-6
            shadow-[0_20px_50px_rgba(15,23,42,0.08)]
            sm:p-8
            lg:p-10
          "
        >

          {/* Decorative background circles */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-48
              w-48
              rounded-full
              bg-[#fff1c9]
              opacity-60
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20
              h-52
              w-52
              rounded-full
              bg-[#075e54]/5
            "
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* =====================================================
                LEFT SIDE
            ====================================================== */}
            <div className="px-1 sm:px-2">

              {/* Small Label */}
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
                <Sparkles
                  className="h-4 w-4 text-[#d5a13a]"
                  strokeWidth={1.8}
                />

                <span
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#a87820]
                  "
                >
                  Get in Touch
                </span>
              </div>

              {/* Heading */}
              <h1
                className="
                  mt-5
                  font-serif
                  text-4xl
                  font-bold
                  leading-tight
                  text-[#071b16]
                  sm:text-5xl
                "
              >
                Let's make time
                <br />

                <span className="text-[#075e54]">
                  for you.
                </span>
              </h1>

              {/* Gold underline */}
              <div className="mt-4 flex items-center gap-2">
                <span className="h-1 w-10 rounded-full bg-[#d5a13a]" />
                <span className="h-1 w-2 rounded-full bg-[#d5a13a]/50" />
              </div>

              {/* Description */}
              <p
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  leading-6
                  text-slate-600
                  sm:text-base
                  sm:leading-7
                "
              >
                Have a question, want to book a massage, or simply want
                to know more about our services? We're always happy to
                hear from you.
              </p>

              {/* Small information box */}
              <div
                className="
                  mt-6
                  flex
                  max-w-md
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-[#d5a13a]/20
                  bg-[#fffaf0]
                  p-4
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
                  <Sparkles
                    className="h-4 w-4 text-[#a87820]"
                    strokeWidth={1.8}
                  />
                </div>

                <p className="text-xs leading-5 text-slate-600">
                  We're here to help you find the perfect massage
                  experience for your needs.
                </p>
              </div>

              {/* Button */}
              <button
                onClick={() => navigate("/booking")}
                className="
                  group
                  mt-7
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#075e54]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_25px_rgba(7,94,84,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#06483f]
                  hover:shadow-[0_15px_30px_rgba(7,94,84,0.22)]
                  active:scale-95
                "
              >
                Book a Massage

                <span
                  className="
                    flex
                    h-7
                    w-7
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

            </div>

            {/* =====================================================
                RIGHT SIDE
            ====================================================== */}
            <div className="space-y-4">

              {/* PHONE */}
              <a
                href="tel:+251900000000"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-[22px]
                  border
                  border-slate-100
                  bg-[#fdfdfc]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#d5a13a]/40
                  hover:bg-[#fffdf8]
                  hover:shadow-[0_15px_35px_rgba(213,161,58,0.10)]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#fff1c9]
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:bg-[#075e54]
                  "
                >
                  <Phone
                    className="
                      h-5
                      w-5
                      text-[#a87820]
                      transition-colors
                      duration-300
                      group-hover:text-[#fff1c9]
                    "
                    strokeWidth={1.7}
                  />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-medium text-slate-400">
                    Call us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#071b16]">
                    +251 900 000 000
                  </p>
                </div>

                <ArrowRight
                  className="
                    h-4
                    w-4
                    text-slate-300
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#d5a13a]
                  "
                />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:hello@ethiomassage.com"
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-[22px]
                  border
                  border-slate-100
                  bg-[#fdfdfc]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#d5a13a]/40
                  hover:bg-[#fffdf8]
                  hover:shadow-[0_15px_35px_rgba(213,161,58,0.10)]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#fff1c9]
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:bg-[#075e54]
                  "
                >
                  <Mail
                    className="
                      h-5
                      w-5
                      text-[#a87820]
                      transition-colors
                      duration-300
                      group-hover:text-[#fff1c9]
                    "
                    strokeWidth={1.7}
                  />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-medium text-slate-400">
                    Email us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#071b16]">
                    hello@ethiomassage.com
                  </p>
                </div>

                <ArrowRight
                  className="
                    h-4
                    w-4
                    text-slate-300
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#d5a13a]
                  "
                />
              </a>

              {/* LOCATION */}
              <div
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-[22px]
                  border
                  border-slate-100
                  bg-[#fdfdfc]
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#d5a13a]/40
                  hover:bg-[#fffdf8]
                  hover:shadow-[0_15px_35px_rgba(213,161,58,0.10)]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#075e54]/10
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:bg-[#075e54]
                  "
                >
                  <MapPin
                    className="
                      h-5
                      w-5
                      text-[#075e54]
                      transition-colors
                      duration-300
                      group-hover:text-[#fff1c9]
                    "
                    strokeWidth={1.7}
                  />
                </div>

                <div className="flex-1">
                  <p className="text-xs font-medium text-slate-400">
                    Our area
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#071b16]">
                    Addis Ababa, Ethiopia
                  </p>
                </div>

                <MapPin
                  className="
                    h-4
                    w-4
                    text-slate-300
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:text-[#d5a13a]
                  "
                />
              </div>

              {/* Small availability card */}
              <div
                className="
                  mt-5
                  rounded-[22px]
                  bg-[#075e54]
                  p-5
                  text-white
                  shadow-[0_15px_35px_rgba(7,94,84,0.12)]
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f7d98a]
                    "
                  >
                    <Sparkles
                      className="h-4 w-4 text-[#075e54]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Ready when you are
                    </p>

                    <p className="mt-0.5 text-xs text-white/65">
                      Book your relaxing experience today.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>
    </main>
  );
}