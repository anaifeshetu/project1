// NO CHANGES NEEDED: this file was already correct. Included here unchanged
// so you have the full matching set. Function name (Herosection) unchanged.
import React from "react";
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react";

import massageImage from "../assets/images_1.jpg";
import img2 from "../assets/images (2).jpg";

const slides = [
  { src: massageImage, alt: "Massage therapy session" },
  { src: img2, alt: "Outdoor massage setup", legend: "Outdoor Massage" },
];

export default function Herosection() {
  return (
    <section className="relative mx-auto max-h-5xl w-full bg-[#f7f5f0] flex justify-center px-4 py-2 sm:px-5 sm:py-3 ">
      <div className="realtive w-full max-w-5xl overflow-hidden rounded-[28px] bg-white p-4 sm:p-5 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left column: text content */}
          <div className="space-y-5 lg:space-y-6">
            <div className="space-y-3">
              <h1 className="text-[2rem] font-[Georgia] font-bold tracking-[-0.03em] leading-tight text-[#071b16] sm:text-[2.75rem]">
                Professional
                <span className="block text-[#d5a13a]">Massage Therapy</span>
              </h1>
              <h2 className="text-[1.3rem] font-semibold text-[#075e54] sm:text-[1.75rem]">
                <span className="inline-block border-b-4 border-[#075e54] pb-1">
                  Where You Are
                </span>
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-slate-600 sm:text-sm">
              Indoor & Outdoor Massage Services
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#075e54] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#06483f]">
                Book Now
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#075e54]">
                  <ArrowRight size={18} />
                </span>
              </button>
              <button className="inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#d5a13a] px-6 py-3 text-sm font-semibold text-[#d5a13a] transition hover:bg-[#d5a13a] hover:text-white">
                Call Us
                <Phone size={18} />
              </button>
            </div>
          </div>

          {/* Right column: pure CSS carousel (no JS state, driven by radio inputs) */}
          <div className="carousel relative">
            {/* Hidden radio inputs hold the "current slide" state in CSS instead of JS */}
            <input type="radio" name="carousel" id="slide-0" className="carousel-radio" defaultChecked />
            <input type="radio" name="carousel" id="slide-1" className="carousel-radio" />

            <div className="overflow-hidden rounded-[24px] bg-slate-100 shadow-sm">
              <div className="carousel-track">
                {slides.map((slide, index) => (
                  <div className="carousel-slide" key={index}>
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-[440px] w-full object-cover sm:h-[480px]"
                    />
                    {slide.legend && (
                      <p className="legend absolute bottom-16 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-1 text-sm text-white">
                        {slide.legend}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Labels act as prev/next buttons, toggling the radios via CSS only */}
            <label
              htmlFor="slide-0"
              className="carousel-prev absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft />
            </label>
            <label
              htmlFor="slide-1"
              className="carousel-next absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight />
            </label>

            {/* Dots */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
              <label htmlFor="slide-0" className="carousel-dot dot-0 h-2 w-2 cursor-pointer rounded-full bg-white/90" />
              <label htmlFor="slide-1" className="carousel-dot dot-1 h-2 w-2 cursor-pointer rounded-full bg-white/90" />
            </div>
          </div>
        </div>

        <div className=" mx-auto max-w-5xl overflow-hidden absolute bottom-0 w-full flex items-center justify-between ">
          <svg viewBox="0 0 1440 150" className="h-24 w-full" preserveAspectRatio="none">
            <path
              fill="#075e54"
              d="M0,90 C320,140 500,20 800,60 C1100,100 1200,120 1440,70 V150H0Z"
            />
            <path
              fill="#d5a13a"
              opacity="0.8"
              d="M0,120 C320,70 600,130 900,90 C1200,50 1300,100 1440,80 V150H0Z"
            />
          </svg>
        </div>
      </div>

      <style>{`
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

        /* When slide-0 is checked, show first slide */
        #slide-0:checked ~ div .carousel-track {
          transform: translateX(0%);
        }

        /* When slide-1 is checked, show second slide */
        #slide-1:checked ~ div .carousel-track {
          transform: translateX(-50%);
        }

        /* Dot highlight state */
        .carousel-dot {
          transition: width 0.3s ease, background-color 0.3s ease;
        }
        #slide-0:checked ~ div .dot-0,
        #slide-1:checked ~ div .dot-1 {
          width: 2rem;
          background-color: #d5a13a;
        }

        .carousel-prev,
        .carousel-next {
          z-index: 2;
        }
      `}</style>
    </section>
  );
}