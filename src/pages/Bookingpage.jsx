// BookingPage.jsx

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Home as HomeIcon,
  TreePine,
  CheckCircle2,
  Sparkles,
  CalendarDays,
  Clock3,
  User,
  Phone,
  MessageSquare,
  Heart,
} from "lucide-react";

const massageTypes = [
  "Swedish Massage",
  "Deep Tissue Massage",
  "Relaxation Massage",
];

export default function BookingPage() {
  const navigate = useNavigate();
  const routerLocation = useLocation();

  // Receive values from ServicesPage
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

  const update = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // ============================================================
  // SUCCESS SCREEN
  // ============================================================

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f7f2e9] px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto flex min-h-[80vh] w-full max-w-5xl items-center justify-center">
          <div
            className="
              relative
              w-full
              max-w-2xl
              overflow-hidden
              rounded-[32px]
              bg-white
              px-6
              py-10
              text-center
              shadow-[0_25px_70px_rgba(7,94,84,0.12)]
              sm:px-12
              sm:py-14
            "
          >
            {/* Decorative circles */}
            <div
              className="
                absolute
                -right-20
                -top-20
                h-40
                w-40
                rounded-full
                bg-[#fff0c7]
                opacity-70
              "
            />

            <div
              className="
                absolute
                -bottom-24
                -left-20
                h-48
                w-48
                rounded-full
                bg-[#075e54]/5
              "
            />

            <div className="relative">
              {/* Success Icon */}
              <div
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-[#fff1c9]
                  shadow-inner
                "
              >
                <CheckCircle2
                  className="h-11 w-11 text-[#075e54]"
                  strokeWidth={1.7}
                />
              </div>

              {/* Title */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <Sparkles className="h-5 w-5 text-[#d5a13a]" />

                <h1
                  className="
                    font-serif
                    text-3xl
                    font-bold
                    text-[#071b16]
                    sm:text-4xl
                  "
                >
                  Request Received
                </h1>

                <Sparkles className="h-5 w-5 text-[#d5a13a]" />
              </div>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-600">
                Thank you{" "}
                <span className="font-semibold text-[#075e54]">
                  {form.name || "friend"}
                </span>
                . Your massage request has been received successfully.
              </p>

              {/* Summary */}
              <div
                className="
                  mx-auto
                  mt-7
                  max-w-md
                  rounded-2xl
                  border
                  border-[#075e54]/10
                  bg-[#f7f5f0]
                  p-5
                  text-left
                "
              >
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0c7]">
                    <Phone className="h-4 w-4 text-[#a87820]" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      We'll contact you at
                    </p>

                    <p className="text-sm font-semibold text-[#071b16]">
                      {form.phone || "your number"}
                    </p>
                  </div>
                </div>

                {/* Session */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#075e54]/10">
                    {form.locationType === "indoor" ? (
                      <HomeIcon className="h-4 w-4 text-[#075e54]" />
                    ) : (
                      <TreePine className="h-4 w-4 text-[#075e54]" />
                    )}
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Session</p>

                    <p className="text-sm font-semibold text-[#071b16]">
                      {form.massageType} ·{" "}
                      {form.locationType === "indoor"
                        ? "Indoor"
                        : "Outdoor"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Home Button */}
              <button
                onClick={() => navigate("/")}
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#075e54]
                  px-7
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#075e54]/15
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#06483f]
                  hover:shadow-xl
                "
              >
                Back to Home

                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ============================================================
  // BOOKING PAGE
  // ============================================================

  return (
    <main className="min-h-screen bg-[#f7f2e9] px-4 pb-20 pt-2 sm:px-6 sm:pt-3">
      <div className="mx-auto w-full max-w-5xl">

        {/* ========================================================
            TOP NAV
        ========================================================= */}
        <div className="mb-5 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              px-3
              py-2
              text-sm
              font-medium
              text-[#075e54]
              transition-all
              duration-300
              hover:bg-white
              hover:shadow-sm
            "
          >
            <ArrowLeft
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Back
          </button>

          {/* Small premium badge */}
          <div
            className="
              hidden
              items-center
              gap-2
              rounded-full
              bg-[#fff1c9]
              px-4
              py-2
              sm:flex
            "
          >
            <Heart className="h-4 w-4 text-[#a87820]" />

            <span className="text-xs font-semibold text-[#8d681e]">
              Premium Mobile Massage
            </span>
          </div>
        </div>

        {/* ========================================================
            BOOKING TITLE
        ========================================================= */}
        <div className="mb-6 px-1">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#fff1c9]
              px-4
              py-2
            "
          >
            <Sparkles className="h-4 w-4 text-[#d5a13a]" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-[#a87820]
              "
            >
              Relax · Restore · Reconnect
            </span>
          </div>

          <h1
            className="
              mt-4
              font-serif
              text-3xl
              font-bold
              leading-tight
              text-[#071b16]
              sm:text-4xl
            "
          >
            Book Your Perfect{" "}
            <span className="text-[#075e54]">
              Massage Experience
            </span>
          </h1>

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-6
              text-slate-600
              sm:text-base
            "
          >
            Tell us where and how you'd like your session.
            We'll take care of the rest and confirm your appointment.
          </p>
        </div>

        {/* ========================================================
            FORM CARD
        ========================================================= */}
        <div
          className="
            rounded-[30px]
            bg-white
            p-5
            shadow-[0_20px_50px_rgba(15,23,42,0.08)]
            sm:p-8
          "
        >
          <form onSubmit={handleSubmit} className="space-y-7">

            {/* ====================================================
                PERSONAL INFORMATION
            ===================================================== */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#fff1c9]
                  "
                >
                  <User
                    className="h-5 w-5 text-[#a87820]"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h2
                    className="
                      font-serif
                      text-xl
                      font-bold
                      text-[#071b16]
                    "
                  >
                    Your Information
                  </h2>

                  <p className="text-xs text-slate-500">
                    Let us know how to reach you.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {/* Name */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b16]">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      className="
                        absolute
                        left-4
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-[#d5a13a]
                      "
                    />

                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="e.g. Selam Tesfaye"
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-[#fdfdfc]
                        py-3
                        pl-11
                        pr-4
                        text-sm
                        text-[#071b16]
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-[#075e54]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#075e54]/5
                      "
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b16]">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      className="
                        absolute
                        left-4
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-[#d5a13a]
                      "
                    />

                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+251 9XX XXX XXX"
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-[#fdfdfc]
                        py-3
                        pl-11
                        pr-4
                        text-sm
                        text-[#071b16]
                        outline-none
                        transition-all
                        placeholder:text-slate-400
                        focus:border-[#075e54]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#075e54]/5
                      "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ====================================================
                LOCATION
            ===================================================== */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#075e54]/10
                  "
                >
                  <MapPin
                    className="h-5 w-5 text-[#075e54]"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h2
                    className="
                      font-serif
                      text-xl
                      font-bold
                      text-[#071b16]
                    "
                  >
                    Where Should We Come?
                  </h2>

                  <p className="text-xs text-slate-500">
                    Choose your preferred massage setting.
                  </p>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-[#071b16]">
                  Address
                </label>

                <div className="relative">
                  <MapPin
                    className="
                      absolute
                      left-4
                      top-1/2
                      h-4
                      w-4
                      -translate-y-1/2
                      text-[#d5a13a]
                    "
                  />

                  <input
                    required
                    type="text"
                    value={form.address}
                    onChange={update("address")}
                    placeholder="Home address or hotel name & room number"
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-[#fdfdfc]
                      py-3
                      pl-11
                      pr-4
                      text-sm
                      outline-none
                      transition-all
                      placeholder:text-slate-400
                      focus:border-[#075e54]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#075e54]/5
                    "
                  />
                </div>
              </div>

              {/* Location buttons */}
              <div className="mt-4">
                <label className="mb-2 block text-sm font-semibold text-[#071b16]">
                  Session Location
                </label>

                <div className="grid gap-3 sm:grid-cols-2">

                  {/* Indoor */}
                  <button
                    type="button"
                    onClick={() =>
                      setForm((p) => ({
                        ...p,
                        locationType: "indoor",
                      }))
                    }
                    className={`
                      group
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      p-4
                      text-left
                      transition-all
                      duration-300

                      ${
                        form.locationType === "indoor"
                          ? "border-[#075e54] bg-[#075e54]/5 shadow-sm"
                          : "border-slate-200 bg-white hover:border-[#d5a13a] hover:bg-[#fffaf0]"
                      }
                    `}
                  >
                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all

                        ${
                          form.locationType === "indoor"
                            ? "bg-[#075e54] text-[#fff1c9]"
                            : "bg-[#fff1c9] text-[#a87820] group-hover:bg-[#075e54] group-hover:text-[#fff1c9]"
                        }
                      `}
                    >
                      <HomeIcon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#071b16]">
                        Indoor / Hotel
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Home or hotel room
                      </p>
                    </div>
                  </button>

                  {/* Outdoor */}
                  <button
                    type="button"
                    onClick={() =>
                      setForm((p) => ({
                        ...p,
                        locationType: "outdoor",
                      }))
                    }
                    className={`
                      group
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      p-4
                      text-left
                      transition-all
                      duration-300

                      ${
                        form.locationType === "outdoor"
                          ? "border-[#075e54] bg-[#075e54]/5 shadow-sm"
                          : "border-slate-200 bg-white hover:border-[#d5a13a] hover:bg-[#fffaf0]"
                      }
                    `}
                  >
                    <div
                      className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        transition-all

                        ${
                          form.locationType === "outdoor"
                            ? "bg-[#075e54] text-[#fff1c9]"
                            : "bg-[#fff1c9] text-[#a87820] group-hover:bg-[#075e54] group-hover:text-[#fff1c9]"
                        }
                      `}
                    >
                      <TreePine className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#071b16]">
                        Outdoor
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Garden or open-air setting
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* ====================================================
                MASSAGE + SCHEDULE
            ===================================================== */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#fff1c9]
                  "
                >
                  <CalendarDays
                    className="h-5 w-5 text-[#a87820]"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h2
                    className="
                      font-serif
                      text-xl
                      font-bold
                      text-[#071b16]
                    "
                  >
                    Session Details
                  </h2>

                  <p className="text-xs text-slate-500">
                    Choose your massage and preferred schedule.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">

                {/* Massage */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b16]">
                    Massage Type
                  </label>

                  <select
                    value={form.massageType}
                    onChange={update("massageType")}
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-[#fdfdfc]
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition-all
                      focus:border-[#075e54]
                      focus:ring-4
                      focus:ring-[#075e54]/5
                    "
                  >
                    {massageTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b16]">
                    Preferred Date
                  </label>

                  <div className="relative">
                    <CalendarDays
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-[#d5a13a]
                      "
                    />

                    <input
                      required
                      type="date"
                      value={form.date}
                      onChange={update("date")}
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-[#fdfdfc]
                        py-3
                        pl-11
                        pr-3
                        text-sm
                        outline-none
                        transition-all
                        focus:border-[#075e54]
                        focus:ring-4
                        focus:ring-[#075e54]/5
                      "
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-[#071b16]">
                    Preferred Time
                  </label>

                  <div className="relative">
                    <Clock3
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        h-4
                        w-4
                        -translate-y-1/2
                        text-[#d5a13a]
                      "
                    />

                    <input
                      required
                      type="time"
                      value={form.time}
                      onChange={update("time")}
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-[#fdfdfc]
                        py-3
                        pl-11
                        pr-3
                        text-sm
                        outline-none
                        transition-all
                        focus:border-[#075e54]
                        focus:ring-4
                        focus:ring-[#075e54]/5
                      "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ====================================================
                NOTES
            ===================================================== */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-[#d5a13a]" />

                <label className="text-sm font-semibold text-[#071b16]">
                  Additional Notes
                </label>

                <span className="text-xs text-slate-400">
                  Optional
                </span>
              </div>

              <textarea
                value={form.notes}
                onChange={update("notes")}
                rows={4}
                placeholder="Any preferences or access instructions..."
                className="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-slate-200
                  bg-[#fdfdfc]
                  px-4
                  py-3
                  text-sm
                  leading-6
                  outline-none
                  transition-all
                  placeholder:text-slate-400
                  focus:border-[#075e54]
                  focus:bg-white
                  focus:ring-4
                  focus:ring-[#075e54]/5
                "
              />
            </div>

            {/* ====================================================
                INFORMATION MESSAGE
            ===================================================== */}
            <div
              className="
                rounded-2xl
                border
                border-[#d5a13a]/20
                bg-[#fffaf0]
                p-4
              "
            >
              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#fff1c9]
                  "
                >
                  <Sparkles className="h-4 w-4 text-[#a87820]" />
                </div>

                <p className="text-xs leading-5 text-slate-600">
                  Your request will be reviewed by our team. We'll
                  contact you to confirm availability and your
                  appointment details.
                </p>
              </div>
            </div>

            {/* ====================================================
                SUBMIT BUTTON
            ===================================================== */}
            <button
              type="submit"
              className="
                group
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#075e54]
                px-6
                py-4
                text-sm
                font-bold
                text-white
                shadow-[0_12px_25px_rgba(7,94,84,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#06483f]
                hover:shadow-[0_18px_30px_rgba(7,94,84,0.22)]
                active:scale-[0.99]
              "
            >
              Confirm Booking Request

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f7d98a]
                  text-[#075e54]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}