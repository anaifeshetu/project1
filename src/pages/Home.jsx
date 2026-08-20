// src/pages/Home.jsx
//
// UPDATED: added a "Get in Touch" section with individual Call / Email /
// Area cards, styled like the ServicesPage cards. All three link to the
// same /contact page (unlike Services, Contact stays a single page — this
// grid is just a richer, clickable preview of it on the home page).
import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarCheck, Hand, ArrowRight,
  Phone as PhoneIcon, Mail, MapPin,
} from "lucide-react";

import Header from "../componenet/Header";
import Herosection from "../componenet/Herosection";
import OurServices from "./Ourservice";
import BookingPage from "./Bookingpage";
import ContactSection from "./Contactsection";
import WhyChooseEthiomassage from "../pages/Whychoseethiomassage";
import ServicesPage from "./Servicespage";

function Teaser({ icon: Icon, title, description, to, cta }) {
  return (
    <div className="flex flex-col items-center rounded-[28px] bg-white p-6 text-center shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-8">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#075e54]/10">
        <Icon className="h-6 w-6 text-[#075e54]" strokeWidth={1.8} />
      </div>
      <h2 className="font-serif text-xl font-bold text-[#071b16]">{title}</h2>
      <p className="mx-auto mt-2 max-w-sm text-sm text-slate-600">{description}</p>
      <Link
        to={to}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#075e54] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#06483f]"
      >
        {cta}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function ContactCard({ icon: Icon, label, value }) {
  return (
    <Link
      to="/contact"
      className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-[#075e54]/30 hover:shadow-lg"
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#075e54]/10">
        <Icon className="h-6 w-6 text-[#075e54]" strokeWidth={1.6} />
      </div>
      <h3 className="font-serif text-base font-bold text-[#071b16]">{label}</h3>
      <p className="mt-1 text-sm text-slate-600">{value}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#075e54] transition-all group-hover:gap-2">
        Contact Us
        <ArrowRight className="h-3 w-3" />
      </span>
    </Link>
  );
}

export default function Home() {
  return (
    <div className=" min-h-screen bg-[#f7f5f0] pb-28">
      
      

      <div id="home">
        <Herosection />
         
      <WhyChooseEthiomassage />
      <ServicesPage/>
      <BookingPage />
      <ContactSection/>

      </div>

      
      {/* <WhyChooseEthiomassage /> */}

      {/* Services + Booking teasers */}
      {/* <section className="flex justify-center px-4 py-8 sm:px-6">
        <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2">
          <Teaser
            icon={Hand}
            title="Our Services"
            description="Swedish, deep tissue, and relaxation massage — with pricing, duration, and indoor or outdoor options."
            to="/services"
            cta="View Services"
          />
          <Teaser
            icon={CalendarCheck}
            title="Book a Session"
            description="Tell us your name, address, and preferred time — we'll confirm your booking."
            to="/booking"
            cta="Start Booking"
          />
        </div>
      </section> */}

      {/* Get in touch — Call / Email / Area cards, all leading to /contact */}
      {/* <section className="flex justify-center px-4 pb-8 sm:px-6">
        <div className="w-full max-w-5xl">
          <h2 className="mb-6 text-center font-serif text-2xl font-bold text-[#071b16]">
            Get in Touch
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <ContactCard icon={PhoneIcon} label="Call" value="+251 900 000 000" />
            <ContactCard icon={Mail} label="Email" value="hello@ethiomassage.com" />
            <ContactCard icon={MapPin} label="Area" value="Addis Ababa, Ethiopia" />
          </div>
        </div>
      </section> */}
    </div>
  );
}