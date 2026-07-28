// NEW FILE: your BottomNavBar had a "Contact" nav item but no matching
// section to scroll to. This fills that gap, styled to match your other cards.
import React from "react";
import { Mail, MapPin, Phone as PhoneIcon } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="bg-[#f7f5f0] min-h-screen flex justify-center px-4 py-6 sm:px-6 sm:py-8">
    <section className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-5">
      <div className="relative w-full rounded-[28px] p-4 sm:p-5">
        <div className="flex flex-col items-center gap-2 text-center">
          <PhoneIcon className="h-5 w-5 text-[#075e54]" strokeWidth={1.8} />
          <span className="text-sm font-semibold text-[#071b16]">Call</span>
          <span className="text-sm text-slate-600">+251 900 000 000</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <Mail className="h-5 w-5 text-[#075e54]" strokeWidth={1.8} />
          <span className="text-sm font-semibold text-[#071b16]">Email</span>
          <span className="text-sm text-slate-600">hello@ethiomassage.com</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <MapPin className="h-5 w-5 text-[#075e54]" strokeWidth={1.8} />
          <span className="text-sm font-semibold text-[#071b16]">Area</span>
          <span className="text-sm text-slate-600">Addis Ababa, Ethiopia</span>
        </div>
      </div>
    </section>
    </div>
  );
}