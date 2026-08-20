// src/pages/ServicesPage.jsx

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Hand,
  Activity,
  Flower2,
  Home,
  Building2,
  TreePine,
  ArrowLeft,
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
    <main className="min-h-screen bg-[#f7f5f0] px-4 pb-28 pt-6 sm:px-6 sm:pt-8">

      <div className="mx-auto w-full max-w-5xl">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="group mb-5 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-white hover:text-[#075e54] hover:shadow-sm"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </button>

        {/* Main Card */}
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-8">

          {/* Header */}
          <div className="text-center">

            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2">
              <Sparkles className="h-4 w-4 text-amber-500" />

              <span className="text-xs font-semibold tracking-wide text-amber-700">
                What We Offer
              </span>
            </div>

            <h1 className="mt-4 font-serif text-3xl font-bold text-[#071b16] sm:text-4xl">
              Our Services
            </h1>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
              Choose the massage experience that feels right for you.
              Explore our services and find your perfect session.
            </p>

          </div>

          {/* Services Grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3">

            {services.map((service) => {
              const Icon = iconMap[service.icon] || Hand;

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="
                    group flex flex-col rounded-[22px]
                    border border-slate-200
                    bg-[#fdfdfc]
                    p-5
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-amber-200
                    hover:bg-amber-50/40
                    hover:shadow-[0_15px_35px_rgba(245,158,11,0.12)]
                  "
                >

                  {/* Icon */}
                  <div
                    className="
                      mb-4 flex h-12 w-12 items-center justify-center
                      rounded-full bg-[#075e54]/10
                      transition-all duration-300
                      group-hover:scale-105
                      group-hover:bg-amber-100
                    "
                  >
                    <Icon
                      className="h-6 w-6 text-[#075e54] transition-colors duration-300 group-hover:text-amber-600"
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-[#071b16] transition-colors duration-300 group-hover:text-amber-700">
                    {service.title}
                  </h3>

                  {/* Duration + Price */}
                  <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">

                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {service.duration}
                    </span>

                    <span className="font-semibold text-[#075e54] transition-colors duration-300 group-hover:text-amber-600">
                      {service.price}
                    </span>

                  </div>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {service.shortDescription}
                  </p>

                  {/* View Details */}
                  <span
                    className="
                      mt-5 inline-flex items-center gap-2
                      text-sm font-semibold text-[#075e54]
                      transition-all duration-300
                      group-hover:gap-3
                      group-hover:text-amber-600
                    "
                  >
                    View Details

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>

                </Link>
              );
            })}

          </div>

          {/* Location Section */}
          <div className="mt-10">

            <div className="mb-5 text-center">

              <h2 className="font-serif text-2xl font-bold text-[#071b16]">
                Choose Your Setting
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Enjoy your massage wherever you feel most comfortable.
              </p>

            </div>

            {/* Indoor / Outdoor */}
            <div className="grid gap-5 md:grid-cols-2">

              {/* Indoor */}
              <div
                className="
                  group relative flex min-h-[320px]
                  cursor-pointer items-end overflow-hidden
                  rounded-[24px]
                  bg-cover bg-center
                  shadow-[0_20px_45px_rgba(15,23,42,0.08)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_25px_50px_rgba(15,23,42,0.14)]
                "
                style={{ backgroundImage: `url(${room})` }}
                onClick={() =>
                  navigate("/booking", {
                    state: { locationType: "indoor" },
                  })
                }
              >

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 transition-all duration-300 group-hover:bg-black/20" />

                {/* Icon */}
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 group-hover:scale-110">
                  <Home
                    className="h-5 w-5 text-[#075e54]"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <div className="relative w-full bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 pt-20">

                  <h3 className="font-serif text-xl font-bold text-white">
                    Indoor / Hotel
                  </h3>

                  <p className="mt-1 text-sm text-gray-200">
                    We come to your home or hotel room
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      navigate("/booking", {
                        state: { locationType: "indoor" },
                      });
                    }}
                    className="
                      mt-4 inline-flex items-center gap-2
                      rounded-full
                      bg-gradient-to-b from-amber-300 to-amber-500
                      px-4 py-2
                      text-sm font-semibold text-amber-950
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:from-amber-200
                      hover:to-amber-400
                      hover:shadow-lg
                      active:scale-95
                    "
                  >
                    Book Indoor

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                </div>

              </div>

              {/* Outdoor */}
              <div
                className="
                  group relative flex min-h-[320px]
                  cursor-pointer items-end overflow-hidden
                  rounded-[24px]
                  bg-cover bg-center
                  shadow-[0_20px_45px_rgba(15,23,42,0.08)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_25px_50px_rgba(15,23,42,0.14)]
                "
                style={{ backgroundImage: `url(${outdoor})` }}
                onClick={() =>
                  navigate("/booking", {
                    state: { locationType: "outdoor" },
                  })
                }
              >

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 transition-all duration-300 group-hover:bg-black/20" />

                {/* Icon */}
                <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 group-hover:scale-110">
                  <TreePine
                    className="h-5 w-5 text-[#075e54]"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <div className="relative w-full bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 pt-20">

                  <h3 className="font-serif text-xl font-bold text-white">
                    Outdoor
                  </h3>

                  <p className="mt-1 text-sm text-gray-200">
                    Garden, event, or open-air setting
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();

                      navigate("/booking", {
                        state: { locationType: "outdoor" },
                      });
                    }}
                    className="
                      mt-4 inline-flex items-center gap-2
                      rounded-full
                      bg-gradient-to-b from-amber-300 to-amber-500
                      px-4 py-2
                      text-sm font-semibold text-amber-950
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:from-amber-200
                      hover:to-amber-400
                      hover:shadow-lg
                      active:scale-95
                    "
                  >
                    Book Outdoor

                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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