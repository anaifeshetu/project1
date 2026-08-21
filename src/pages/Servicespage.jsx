import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Hand,
  Activity,
  Flower2,
  Home,
  Building2,
  TreePine,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

import { services } from "../data/Services";

import room from "../assets/room.jpg";
import outdoor from "../assets/outdoor.jpg";

const iconMap = {
  Hand,
  Activity,
  Flower2,
  Home,
  Building2,
};

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f7f5f0] px-4 pb-28 pt-2 sm:px-6 sm:pt-3">
      <div className="mx-auto w-full max-w-5xl">

        {/* Main Card */}
        <div
          className="
            rounded-[28px]
            bg-white
            p-6
            shadow-[0_20px_45px_rgba(15,23,42,0.08)]
            sm:p-8
          "
        >

          {/* =========================================================
              HEADER
          ========================================================== */}
          <div className="text-center">

            {/* Our Services Title */}
            <div className="flex items-center justify-center gap-3">

              {/* Left Icon */}
              <Sparkles
                className="
                  h-5 w-5
                  text-[#d5a13a]
                  sm:h-6 sm:w-6
                "
                strokeWidth={1.8}
              />

              <h1
                className="
                  font-serif
                  text-3xl
                  font-bold
                  text-[#071b16]
                  sm:text-4xl
                "
              >
                Our Services
              </h1>

              {/* Right Icon */}
              <Sparkles
                className="
                  h-5 w-5
                  text-[#d5a13a]
                  sm:h-6 sm:w-6
                "
                strokeWidth={1.8}
              />

            </div>

            <p
              className="
                mx-auto
                mt-3
                max-w-lg
                text-sm
                leading-6
                text-slate-500
              "
            >
              Choose the massage experience that feels right for you.
              Explore our services and find your perfect session.
            </p>

          </div>

          {/* =========================================================
              SERVICES GRID
          ========================================================== */}
          <div
            className="
              mt-8
              grid
              gap-5
              sm:grid-cols-2
              md:grid-cols-3
            "
          >

            {services.map((service) => {
              const Icon = iconMap[service.icon] || Hand;

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="
                    group
                    flex
                    min-h-[330px]
                    flex-col
                    rounded-[22px]
                    border
                    border-slate-200
                    bg-[#fdfdfc]
                    p-5

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#d5a13a]/40
                    hover:bg-white
                    hover:shadow-[0_15px_35px_rgba(213,161,58,0.13)]

                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#d5a13a]/40
                  "
                >

                  {/* =================================================
                      ICON
                  ================================================= */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-amber-100

                      transition-all
                      duration-300

                      group-hover:scale-105
                      group-hover:bg-[#075e54]
                    "
                  >
                    <Icon
                      className="
                        h-6
                        w-6
                        text-[#075e54]

                        transition-all
                        duration-300

                        group-hover:text-[#fff4d6]
                      "
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}
                  <div className="mt-4">

                    {/* Title */}
                    <h3
                      className="
                        font-serif
                        text-lg
                        font-bold
                        text-[#071b16]

                        transition-colors
                        duration-300

                        group-hover:text-[#075e54]
                      "
                    >
                      {service.title}
                    </h3>

                    {/* Duration + Price */}
                    <div
                      className="
                        mt-2
                        flex
                        items-center
                        gap-3
                        text-xs
                        text-slate-500
                      "
                    >

                      <span
                        className="
                          flex
                          items-center
                          gap-1
                        "
                      >
                        <Clock
                          className="
                            h-3.5
                            w-3.5
                            text-[#d5a13a]
                          "
                        />

                        {service.duration}
                      </span>

                      <span
                        className="
                          font-semibold
                          text-[#075e54]
                        "
                      >
                        {service.price}
                      </span>

                    </div>

                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}
                  <p
                    className="
                      mt-4
                      flex-1
                      text-sm
                      leading-6
                      text-slate-600
                    "
                  >
                    {service.shortDescription}
                  </p>

                  {/* =================================================
                      VIEW DETAILS - BOTTOM
                  ================================================= */}
                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-[#075e54]

                        transition-colors
                        duration-300

                        group-hover:text-[#d5a13a]
                      "
                    >
                      View Details
                    </span>

                    {/* Circular Arrow */}
                    <span
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-amber-100
                        text-[#075e54]

                        transition-all
                        duration-300

                        group-hover:bg-[#075e54]
                        group-hover:text-[#fff4d6]
                        group-hover:translate-x-1
                      "
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>

                  </div>

                </Link>
              );
            })}

          </div>

          {/* =========================================================
              LOCATION SECTION
          ========================================================== */}
          <div className="mt-10">

            <div className="mb-5 text-center">

              <h2
                className="
                  font-serif
                  text-2xl
                  font-bold
                  text-[#071b16]
                "
              >
                Choose Your Setting
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  text-slate-500
                "
              >
                Enjoy your massage wherever you feel most comfortable.
              </p>

            </div>

            {/* Indoor / Outdoor */}
            <div
              className="
                grid
                gap-5
                md:grid-cols-2
              "
            >

              {/* =====================================================
                  INDOOR
              ====================================================== */}
              <div
                className="
                  group
                  relative
                  flex
                  min-h-[320px]
                  cursor-pointer
                  overflow-hidden
                  rounded-[24px]
                  bg-cover
                  bg-center

                  shadow-[0_20px_45px_rgba(15,23,42,0.08)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_25px_50px_rgba(15,23,42,0.14)]
                "
                style={{
                  backgroundImage: `url(${room})`,
                }}
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      locationType: "indoor",
                    },
                  })
                }
              >

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-black/55
                    via-black/10
                    to-black/70

                    transition-all
                    duration-300

                    group-hover:from-black/60
                    group-hover:to-black/75
                  "
                />

                {/* Icon */}
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-lg

                    transition-all
                    duration-300

                    group-hover:scale-110
                  "
                >
                  <Home
                    className="
                      h-5
                      w-5
                      text-[#d5a13a]
                    "
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <div
                  className="
                    absolute
                    left-5
                    right-5
                    top-5
                    pl-14
                  "
                >
                  <h3
                    className="
                      font-serif
                      text-xl
                      font-bold
                      text-white
                    "
                  >
                    Indoor / Hotel
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-gray-200
                    "
                  >
                    We come to your home or hotel room
                  </p>
                </div>

                {/* Button */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    p-6
                  "
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      navigate("/booking", {
                        state: {
                          locationType: "indoor",
                        },
                      });
                    }}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full

                      bg-gradient-to-b
                      from-amber-300
                      to-amber-500

                      px-4
                      py-2

                      text-sm
                      font-semibold
                      text-amber-950

                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:from-amber-200
                      hover:to-amber-400
                      hover:shadow-lg

                      active:scale-95
                    "
                  >
                    Book Indoor

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </div>

              </div>

              {/* =====================================================
                  OUTDOOR
              ====================================================== */}
              <div
                className="
                  group
                  relative
                  flex
                  min-h-[320px]
                  cursor-pointer
                  overflow-hidden
                  rounded-[24px]
                  bg-cover
                  bg-center

                  shadow-[0_20px_45px_rgba(15,23,42,0.08)]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_25px_50px_rgba(15,23,42,0.14)]
                "
                style={{
                  backgroundImage: `url(${outdoor})`,
                }}
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      locationType: "outdoor",
                    },
                  })
                }
              >

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-black/55
                    via-black/10
                    to-black/70

                    transition-all
                    duration-300

                    group-hover:from-black/60
                    group-hover:to-black/75
                  "
                />

                {/* Icon */}
                <div
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-lg

                    transition-all
                    duration-300

                    group-hover:scale-110
                  "
                >
                  <TreePine
                    className="
                      h-5
                      w-5
                      text-[#d5a13a]
                    "
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <div
                  className="
                    absolute
                    left-5
                    right-5
                    top-5
                    pl-14
                  "
                >
                  <h3
                    className="
                      font-serif
                      text-xl
                      font-bold
                      text-white
                    "
                  >
                    Outdoor
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-gray-200
                    "
                  >
                    Garden, event, or open-air setting
                  </p>
                </div>

                {/* Button */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    p-6
                  "
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      navigate("/booking", {
                        state: {
                          locationType: "outdoor",
                        },
                      });
                    }}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full

                      bg-gradient-to-b
                      from-amber-300
                      to-amber-500

                      px-4
                      py-2

                      text-sm
                      font-semibold
                      text-amber-950

                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:from-amber-200
                      hover:to-amber-400
                      hover:shadow-lg

                      active:scale-95
                    "
                  >
                    Book Outdoor

                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}