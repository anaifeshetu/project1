// UPDATED: added a "description" field to each service and an activeIndex
// state — clicking a service pill now shows a detail panel with a full
// paragraph about that service, instead of just the icon + title.
// Function name (OurServices) and the image cards below are unchanged.
import React, { useState } from "react";
import {
  Hand,
  Activity,
  Flower2,
  Home,
  Building2,
  TreePine,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import WhyChooseEthiomassage from "../pages/Whychoseethiomassage";

import room from "../assets/room.jpg";
import outdoor from "../assets/outdoor.jpg";

const services = [
  {
    title: "Swedish Massage",
    icon: Hand,
    description:
      "A gentle, flowing massage using long strokes and kneading to ease everyday tension, boost circulation, and leave you feeling calm and light.",
  },
  {
    title: "Deep Tissue Massage",
    icon: Activity,
    description:
      "Firmer, targeted pressure that works into deeper muscle layers to release chronic knots and stiffness from work, training, or travel.",
  },
  {
    title: "Relaxation Massage",
    icon: Flower2,
    description:
      "A slow, soothing treatment with soft music and warm oils, designed purely to melt away stress and restore balance to body and mind.",
  },
  {
    title: "Home Service",
    icon: Home,
    description:
      "Our therapist brings the table, oils, and linens straight to your home, so you can unwind fully without leaving your own space.",
  },
  {
    title: "Hotel Service",
    icon: Building2,
    description:
      "Traveling through Addis Ababa? We come directly to your hotel room, fitting seamlessly around your schedule wherever you're staying.",
  },
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="services" className="flex justify-center bg-[#f7f5f0] px-4 py-6 sm:px-6 sm:py-8">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-5">
        <div className="relative w-full rounded-[28px] p-4 sm:p-5">
          {/* Heading */}
          
             <WhyChooseEthiomassage/>

          
          <div className="mb-8 flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <h2 className="font-serif text-2xl font-bold text-[#071b16]">Our Services</h2>
            <Sparkles className="h-4 w-4 text-amber-500" />
          </div>

          {/* Service Pills — click one to see its detail below */}
          <div className="flex flex-wrap items-stretch justify-center gap-4 sm:flex-nowrap">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex min-w-[150px] flex-1 flex-col items-center gap-3 rounded-full border px-4 py-6 text-center transition duration-300 hover:-translate-y-1 ${
                    isActive
                      ? "-translate-y-1 border-[#075e54] bg-[#075e54]/5 shadow-lg"
                      : "border-slate-200 bg-white hover:border-[#075e54]/30 hover:shadow-lg"
                  }`}
                >
                  <Icon className="h-6 w-6 text-[#075e54]" strokeWidth={1.6} />
                  <h3 className="whitespace-nowrap text-[15px] font-semibold leading-tight text-[#0f3f2f]">
                    {service.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Detail panel for the selected service */}
          <div className="mt-8 flex justify-center">
            <div className="flex w-full max-w-2xl items-start gap-4 rounded-2xl bg-[#f7f5f0] p-6 text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow">
                <ActiveIcon className="h-5 w-5 text-[#075e54]" strokeWidth={1.8} />
              </div>
              <div>
                <h4 className="mb-1 font-serif text-lg font-bold text-[#071b16]">
                  {active.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">{active.description}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-[#075e54] hover:text-[#075e54]">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Indoor / Outdoor image cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div
            className="relative flex min-h-420 max-h-5 mx-auto items-end overflow-hidden rounded-[28px] bg-cover bg-center shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
            style={{ backgroundImage: `url(${room})` }}
          >
            <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
              <Home className="h-5 w-5 text-[#075e54]" strokeWidth={1.8} />
            </div>
            <div className="w-full bg-gradient-to- from-black/85 via-black/30 to-transparent p-8">
              <h3 className="font-serif text-2xl font-bold text-white">Indoor Massage</h3>
              <p className="mt-2 text-sm text-gray-200">We come to your Home or Hotel</p>
              <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient- from-amber-400 to-amber-600 px-5 py-2 text-sm font-semibold text-amber-950 transition hover:brightness-105">
                Book Now
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#075e54]">
                  <ArrowRight className="h-4 w-4 text-white" />
                </span>
              </button>
            </div>
          </div>

          <div
            className="relative flex min-h-420 items-end overflow-hidden rounded-[28px] bg-cover bg-center shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
            style={{ backgroundImage: `url(${outdoor})` }}
          >
            <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
              <TreePine className="h-5 w-5 text-[#075e54]" strokeWidth={1.8} />
            </div>
            <div className="w-full bg-gradient-to from-black/85 via-black/30 to-transparent p-8">
              <h3 className="font-serif text-2xl font-bold text-white">Outdoor Massage</h3>
              <p className="mt-2 text-sm text-gray-200">Garden, Event or Open Space</p>
              <button className="mt-6 inline-flex items-center gap-3 rounded-full bg-gradient- from-amber-400 to-amber-600 px-5 py-2 text-sm font-semibold text-amber-950 transition hover:brightness-105">
                Book Now
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#075e54]">
                  <ArrowRight className="h-4 w-4 text-white" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}