import React from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactSection() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f7f5f0] px-4 pb-28 pt-6 sm:px-6 sm:pt-8">

      <section className="mx-auto w-full max-w-5xl">

        {/* Main Contact Container */}
        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-8">

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* LEFT SIDE */}
            <div className="px-1 sm:px-2">

              {/* Small Label */}
              <span className="inline-flex items-center rounded-full bg-[#075e54]/10 px-4 py-2 text-xs font-semibold tracking-wide text-[#075e54]">
                Get in Touch
              </span>

              {/* Heading */}
              <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-[#071b16] sm:text-5xl">
                Let's make time
                <br />
                <span className="text-[#075e54]">for you.</span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-lg text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Have a question, want to book a massage, or simply want to know
                more about our services? We're always happy to hear from you.
              </p>

              {/* Button */}
              <button
                onClick={() => navigate("/booking")}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#075e54] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#06483f] hover:shadow-lg active:scale-95"
              >
                Book a Massage

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-4">

              {/* PHONE */}
              <a
                href="tel:+251900000000"
                className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#fdfdfc] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#075e54]/20 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#075e54]/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#075e54]">
                  <Phone
                    className="h-5 w-5 text-[#075e54] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Call us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#071b16]">
                    +251 900 000 000
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:hello@ethiomassage.com"
                className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#fdfdfc] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#075e54]/20 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#075e54]/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#075e54]">
                  <Mail
                    className="h-5 w-5 text-[#075e54] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Email us
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#071b16]">
                    hello@ethiomassage.com
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <div
                className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-[#fdfdfc] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#075e54]/20 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#075e54]/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#075e54]">
                  <MapPin
                    className="h-5 w-5 text-[#075e54] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Our area
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#071b16]">
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}