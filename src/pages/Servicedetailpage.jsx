// NEW FILE: dedicated detail page for a SINGLE service — this is what each
// service icon now links to, at /services/:slug (e.g. /services/swedish-massage).
// Reads the slug from the URL, looks it up in src/data/services.js, and shows
// the full professional breakdown: what to expect, benefits, and who it's for.
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Hand, Activity, Flower2, Home, Building2,
  ArrowLeft, ArrowRight, Clock, CheckCircle2, Users,
} from "lucide-react";
import { getServiceBySlug, services } from "../data/Services";

const iconMap = { Hand, Activity, Flower2, Home, Building2 };

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f7f5f0] px-4 text-center">
        <h1 className="font-serif text-2xl font-bold text-[#071b16]">Service Not Found</h1>
        <Link to="/services" className="text-sm font-semibold text-[#075e54] hover:underline">
          View All Services
        </Link>
      </div>
    );
  }

  const Icon = iconMap[service.icon] || Hand;

  return (
    <div className="min-h-screen bg-[#f7f5f0] px-4 pb-28 pt-6 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <button
          onClick={() => navigate("/services")}
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#075e54]"
        >
          <ArrowLeft className="h-4 w-4" />
          All Services
        </button>

        <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-8">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#075e54]/10">
              <Icon className="h-7 w-7 text-[#075e54]" strokeWidth={1.6} />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-[#071b16] sm:text-3xl">
                {service.title}
              </h1>
              <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {service.duration}
                </span>
                <span className="font-semibold text-[#075e54]">{service.price}</span>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            {service.shortDescription}
          </p>

          {/* What to expect */}
          <div className="mt-8">
            <h2 className="font-serif text-lg font-bold text-[#071b16]">What to Expect</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.whatToExpect}</p>
          </div>

          {/* Benefits */}
          <div className="mt-8">
            <h2 className="font-serif text-lg font-bold text-[#071b16]">Benefits</h2>
            <ul className="mt-3 space-y-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#075e54]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal for */}
          <div className="mt-8">
            <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-[#071b16]">
              <Users className="h-4 w-4 text-amber-500" /> Ideal For
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {service.idealFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#f7f5f0] px-3 py-1.5 text-xs font-medium text-[#0f3f2f]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Book button */}
          <button
            onClick={() => navigate("/booking", { state: { massageType: service.title } })}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#075e54] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#06483f]"
          >
            Book {service.title}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Other services */}
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold text-slate-500">Other Services</h3>
          <div className="flex flex-wrap gap-2">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 transition hover:border-[#075e54]/30 hover:text-[#075e54]"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}