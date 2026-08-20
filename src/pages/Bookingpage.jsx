// NEW FILE: dedicated booking page (own route: /booking), not a scroll
// section. Clicking "Booking" in BottomNavBar now navigates here directly,
// on any page, in any browser — real page navigation via React Router.
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, MapPin, Home as HomeIcon, TreePine, CheckCircle2 } from "lucide-react";
import Header from "../componenet/Header";

const massageTypes = ["Swedish Massage", "Deep Tissue Massage", "Relaxation Massage"];

export default function BookingPage() {
  const navigate = useNavigate();
  const routerLocation = useLocation();
  // Pre-fill from ServicesPage ("Book This" / "Book Indoor" / "Book Outdoor")
  const preselected = routerLocation.state || {};

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    locationType: preselected.locationType || "indoor",
    massageType: preselected.massageType || massageTypes[0],
    date: "",
    time: "",
    notes: "",
  });

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — this just confirms the request was captured.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex justify-center bg-[#f7f5f0] px-4 py-6 sm:px-6 sm:py-8">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-white p-4 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-5">
          <div className="relative w-full rounded-[28px] p-4 sm:p-5 ">
            <CheckCircle2 className="h-7 w-7 text-[#075e54]" strokeWidth={1.8} />
          </div>
          <h1 className="font-serif text-2xl font-bold text-[#071b16]">Request Received</h1>
          <p className="mt-2 text-sm text-slate-600">
            Thank you, {form.name || "friend"}. We'll contact you at {form.phone || "your number"} to confirm your{" "}
            {form.locationType} {form.massageType.toLowerCase()} session.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#075e54] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#06483f]"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

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
          <h1 className="font-serif text-2xl font-bold text-[#071b16] sm:text-3xl">
            Book Your Massage
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Tell us where and how you'd like your session, and we'll confirm the details.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {/* Name + Phone */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-[#071b16]">Full Name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="e.g. Selam Tesfaye"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#075e54]"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-[#071b16]">Phone Number</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="e.g. +251 9XX XXX XXX"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#075e54]"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="mb-1 flex items-center gap-1.5 text-sm font-medium text-[#071b16]">
                <MapPin className="h-4 w-4 text-[#075e54]" /> Address
              </label>
              <input
                required
                type="text"
                value={form.address}
                onChange={update("address")}
                placeholder="Home address or hotel name & room number"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#075e54]"
              />
            </div>

            {/* Indoor / Outdoor */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#071b16]">Session Location</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, locationType: "indoor" }))}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                    form.locationType === "indoor"
                      ? "border-[#075e54] bg-[#075e54]/5 text-[#075e54]"
                      : "border-slate-200 text-slate-600 hover:border-[#075e54]/30"
                  }`}
                >
                  <HomeIcon className="h-4 w-4" /> Indoor
                </button>
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, locationType: "outdoor" }))}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                    form.locationType === "outdoor"
                      ? "border-[#075e54] bg-[#075e54]/5 text-[#075e54]"
                      : "border-slate-200 text-slate-600 hover:border-[#075e54]/30"
                  }`}
                >
                  <TreePine className="h-4 w-4" /> Outdoor
                </button>
              </div>
            </div>

            {/* Massage type */}
            <div>
              <label className="mb-1 block text-sm font-medium text-[#071b16]">Massage Type</label>
              <select
                value={form.massageType}
                onChange={update("massageType")}
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#075e54]"
              >
                {massageTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Date + Time */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-[#071b16]">Preferred Date</label>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={update("date")}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#075e54]"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-[#071b16]">Preferred Time</label>
                <input
                  required
                  type="time"
                  value={form.time}
                  onChange={update("time")}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#075e54]"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="mb-1 block text-sm font-medium text-[#071b16]">Additional Notes (optional)</label>
              <textarea
                value={form.notes}
                onChange={update("notes")}
                rows={3}
                placeholder="Any preferences, allergies, or access instructions"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#075e54]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#075e54] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#06483f]"
            >
              Confirm Booking Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}