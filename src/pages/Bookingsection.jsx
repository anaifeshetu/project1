// NEW FILE: your BottomNavBar had a "Booking" nav item but no matching
// section to scroll to. This fills that gap, styled to match your other cards.
import React from "react";
import { CalendarCheck } from "lucide-react";


export default function BookingSection() {
  return (
    <section className=" min-h-screen mx-auto max-w-5xl flex justify-center bg-[#f7f5f0] px-4 py-6 sm:px-6 sm:py-8">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-5 ">
        <div className="relative w-full rounded-[28px] p-4 sm:p-5">
          <CalendarCheck className="h-6 w-6 text-[#075e54]" strokeWidth={1.8} />
        </div>
        <h2 className="font-serif text-2xl font-bold text-[#071b16]">Book a Session</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
          Choose a time that works for you and we'll send a therapist to your home or hotel in Addis Ababa.
        </p>
        <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#075e54] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#06483f]">
          Check Availability
        </button>
      </div>
    </section>
  );
}