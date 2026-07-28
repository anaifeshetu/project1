// src/pages/ServicesPage.jsx
//
// Service cards pull from src/data/services.js. Each card links to its own
// detail page at /services/:slug. Below the grid, the Indoor/Outdoor image
// cards jump straight to /booking with that location pre-selected.
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Hand, Activity, Flower2, Home, Building2, TreePine,
  ArrowLeft, ArrowRight, Clock, Sparkles,
} from "lucide-react";
import { services } from "../data/Services";

import room from "../assets/room.jpg";
import outdoor from "../assets/outdoor.jpg";

const iconMap = { Hand, Activity, Flower2, Home, Building2 };

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f7f5f0] px-4 pb-28 pt-6 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <button
          onClick={() => navigate("/")}
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#075e54]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </button>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-8">
          {/* Heading */}
          <div className="mb-8 flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <h1 className="font-serif text-2xl font-bold text-[#071b16] sm:text-3xl">Our Services</h1>
            <Sparkles className="h-4 w-4 text-amber-500" />
          </div>
          <p className="mx-auto -mt-4 mb-8 max-w-lg text-center text-sm text-slate-500">
            Tap any service to see what's included, how it works, and who it's best for.
          </p>

          {/* Service cards -> each links to /services/:slug */}
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Hand;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-[#075e54]/30 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#075e54]/10">
                    <Icon className="h-6 w-6 text-[#075e54]" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#071b16]">{service.title}</h3>
                  <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {service.duration}
                    </span>
                    <span className="font-semibold text-[#075e54]">{service.price}</span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#075e54] transition-all group-hover:gap-3">
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Indoor / Outdoor image cards -> straight to booking */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div
              className="relative flex min-h-[320px] cursor-pointer items-end overflow-hidden rounded-[24px] bg-cover bg-center shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
              style={{ backgroundImage: `url(${room})` }}
              onClick={() => navigate("/booking", { state: { locationType: "indoor" } })}
            >
              <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg">
                <Home className="h-5 w-5 text-[#075e54]" strokeWidth={1.8} />
              </div>
              <div className="w-full bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6">
                <h3 className="font-serif text-xl font-bold text-white">Indoor / Hotel</h3>
                <p className="mt-1 text-sm text-gray-200">We come to your home or hotel room</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/booking", { state: { locationType: "indoor" } });
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 px-4 py-2 text-sm font-semibold text-amber-950 transition hover:brightness-105"
                >
                  Book Indoor
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              className="relative flex min-h-[320px] cursor-pointer items-end overflow-hidden rounded-[24px] bg-cover bg-center shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
              style={{ backgroundImage: `url(${outdoor})` }}
              onClick={() => navigate("/booking", { state: { locationType: "outdoor" } })}
            >
              <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg">
                <TreePine className="h-5 w-5 text-[#075e54]" strokeWidth={1.8} />
              </div>
              <div className="w-full bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6">
                <h3 className="font-serif text-xl font-bold text-white">Outdoor</h3>
                <p className="mt-1 text-sm text-gray-200">Garden, event, or open-air setting</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/booking", { state: { locationType: "outdoor" } });
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 px-4 py-2 text-sm font-semibold text-amber-950 transition hover:brightness-105"
                >
                  Book Outdoor
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}