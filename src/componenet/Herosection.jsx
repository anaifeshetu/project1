import React from "react";
import {
  ArrowRight,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import massageImage from "../assets/images_1.jpg";
import img2 from "../assets/images (2).jpg";

const slides = [
  {
    src: massageImage,
    alt: "Massage therapy session",
  },
  {
    src: img2,
    alt: "Outdoor massage setup",
    legend: "Outdoor Massage",
  },
];

export default function Herosection() {
  const navigate = useNavigate();

  const handleCall = () => {
    window.location.href = "tel:+251900000000";
  };

  return (
    <section className="relative mx-auto w-full bg-[#f7f5f0] px-4 py-3 sm:px-6 sm:py-5">
      
      {/* MAIN WHITE CONTAINER */}
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[28px] bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-7 lg:p-8">

        {/* CONTENT */}
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-5 pb-20 lg:space-y-6 lg:pb-24">

            <div className="space-y-3">
              <h1 className="font-[Georgia] text-[2rem] font-bold leading-tight tracking-[-0.03em] text-[#071b16] sm:text-[2.75rem]">
                Professional

                <span className="block text-[#d5a13a]">
                  Massage Therapy
                </span>
              </h1>

              <h2 className="text-[1.3rem] font-semibold text-[#075e54] sm:text-[1.75rem]">
                <span className="inline-block border-b-4 border-[#075e54] pb-1">
                  Where You Are
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-relaxed text-slate-600">
              Indoor & Outdoor Massage Services
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

              {/* BOOK NOW */}
              <button
                type="button"
                onClick={() => navigate("/booking")}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  bg-[#075e54]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_8px_20px_rgba(7,94,84,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#06483f]
                  hover:shadow-lg
                  active:scale-95
                "
              >
                Book Now

                <span
                  className="
                    inline-flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#075e54]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight size={18} />
                </span>
              </button>

              {/* CALL US */}
              <button
                type="button"
                onClick={handleCall}
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  rounded-full
                  border-2
                  border-[#d5a13a]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-[#d5a13a]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#d5a13a]
                  hover:text-white
                  active:scale-95
                "
              >
                Call Us

                <Phone
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-6"
                />
              </button>

            </div>
          </div>

          {/* RIGHT SIDE - CAROUSEL */}
          <div className="relative w-full min-w-0 px-1 sm:px-2 lg:px-0">

            <div className="carousel relative">

              {/* RADIO BUTTONS */}
              <input
                type="radio"
                name="carousel"
                id="slide-0"
                className="carousel-radio"
                defaultChecked
              />

              <input
                type="radio"
                name="carousel"
                id="slide-1"
                className="carousel-radio"
              />

              {/* CAROUSEL FRAME */}
              <div className="w-full overflow-hidden rounded-[24px] bg-slate-100 shadow-md">

                <div className="carousel-track">

                  {slides.map((slide, index) => (
                    <div
                      className="carousel-slide"
                      key={index}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="
                          block
                          h-[350px]
                          w-full
                          object-cover
                          sm:h-[400px]
                          md:h-[430px]
                          lg:h-[440px]
                        "
                      />

                      {slide.legend && (
                        <p
                          className="
                            absolute
                            bottom-16
                            left-1/2
                            -translate-x-1/2
                            whitespace-nowrap
                            rounded-full
                            bg-black/50
                            px-4
                            py-1
                            text-sm
                            text-white
                            backdrop-blur-sm
                          "
                        >
                          {slide.legend}
                        </p>
                      )}
                    </div>
                  ))}

                </div>
              </div>

              {/* PREVIOUS */}
              <label
                htmlFor="slide-0"
                className="
                  carousel-prev
                  absolute
                  left-3
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  shadow-lg
                  transition
                  hover:scale-105
                  sm:left-4
                  sm:h-12
                  sm:w-12
                "
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </label>

              {/* NEXT */}
              <label
                htmlFor="slide-1"
                className="
                  carousel-next
                  absolute
                  right-3
                  top-1/2
                  flex
                  h-10
                  w-10
                  -translate-y-1/2
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-white/90
                  shadow-lg
                  transition
                  hover:scale-105
                  sm:right-4
                  sm:h-12
                  sm:w-12
                "
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </label>

              {/* DOTS */}
              <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">

                <label
                  htmlFor="slide-0"
                  className="
                    carousel-dot
                    dot-0
                    h-2
                    w-2
                    cursor-pointer
                    rounded-full
                    bg-white/90
                  "
                />

                <label
                  htmlFor="slide-1"
                  className="
                    carousel-dot
                    dot-1
                    h-2
                    w-2
                    cursor-pointer
                    rounded-full
                    bg-white/90
                  "
                />

              </div>

            </div>
          </div>
        </div>

        {/* GREEN + YELLOW SVG */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-0 w-full overflow-hidden">

          <svg
            viewBox="0 0 1440 150"
            className="block h-[65px] w-full sm:h-[80px] md:h-[90px]"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#075e54"
              d="M0,90 C320,140 500,20 800,60 C1100,100 1200,120 1440,70 V150H0Z"
            />

            <path
              fill="#d5a13a"
              opacity="0.85"
              d="M0,120 C320,70 600,130 900,90 C1200,50 1300,100 1440,80 V150H0Z"
            />
          </svg>

        </div>
      </div>

      {/* CAROUSEL CSS */}
      <style>{`
        .carousel {
          width: 100%;
        }

        .carousel-radio {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .carousel-track {
          display: flex;
          width: 200%;
          transition: transform 0.5s ease-in-out;
        }

        .carousel-slide {
          position: relative;
          width: 50%;
          flex-shrink: 0;
        }

        #slide-0:checked ~ div .carousel-track {
          transform: translateX(0%);
        }

        #slide-1:checked ~ div .carousel-track {
          transform: translateX(-50%);
        }

        .carousel-dot {
          display: block;
          transition:
            width 0.3s ease,
            background-color 0.3s ease;
        }

        #slide-0:checked ~ div .dot-0,
        #slide-1:checked ~ div .dot-1 {
          width: 2rem;
          background-color: #d5a13a;
        }

        .carousel-prev,
        .carousel-next {
          z-index: 20;
        }
      `}</style>

    </section>
  );
}