// NO CHANGES NEEDED: this file was already correct. Included here unchanged
// so you have the full matching set. Function name (WhyChooseEthiomassage) unchanged.
import React from "react";
import {
  Sparkles,
  User,
  Car,
  Clock,
  ShieldCheck,
  CreditCard,
  MapPin,
  ArrowRight,
  Star,
} from "lucide-react";
import saraImg from "../assets/Sara.jpg";
import helenImg from "../assets/Helen.jpg";
import liyaImg from "../assets/liya.jpg";

export default function WhyChooseEthiomassage() {
  return (
    <div className="relative mx-auto mt-0 max-w-5xl bg-[#f6f3ec] p-4 sm:p-6 pt-0">
      <div className="max-w-5xl mx-auto ">

        {/* Heading */}
        <div className="flex items-center justify-center mb-1">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <br></br>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            Why Choose Ethiomassage?
          </h2>
          
          <Sparkles className="w-5 h-5 text-amber-500" />
        </div>

        {/* Feature Icons Row */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 mb-0">

          <div className="flex flex-col items-center w-24 text-center">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3">
              <User className="w-6 h-6 text-gray-800" strokeWidth={1.8} />
            </div>
            <span className="text-sm text-gray-800">Professional Therapists</span>
          </div>

          <div className="flex flex-col items-center w-24 text-center">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3">
              <Car className="w-6 h-6 text-emerald-800" strokeWidth={1.8} />
            </div>
            <span className="text-sm text-gray-800">We Come To You</span>
          </div>

          <div className="flex flex-col items-center w-24 text-center">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3">
              <Clock className="w-6 h-6 text-emerald-800" strokeWidth={1.8} />
            </div>
            <span className="text-sm text-gray-800">24/7 Booking</span>
          </div>

          <div className="flex flex-col items-center w-24 text-center">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6 text-emerald-800" strokeWidth={1.8} />
            </div>
            <span className="text-sm text-gray-800">Safe & Private</span>
          </div>

          <div className="flex flex-col items-center w-24 text-center">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3">
              <CreditCard className="w-6 h-6 text-gray-800" strokeWidth={1.8} />
            </div>
            <span className="text-sm text-gray-800">Easy Payment</span>
          </div>

          <div className="flex flex-col items-center w-24 text-center">
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-3">
              <MapPin className="w-6 h-6 text-emerald-800" strokeWidth={1.8} />
            </div>
            <span className="text-sm text-gray-800">Addis Ababa Coverage</span>
          </div>

        </div>
        <br></br>

        {/* Our Therapists */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            Our Therapists
          </h3>
          <ArrowRight className="w-5 h-5 text-gray-900" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* Sara M. */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src={saraImg} alt="Sara M." className="w-full h-72 object-cover" />
            <div className="p-4 text-center">
              <p className="font-semibold text-gray-900 mb-1.5">Sara M.</p>
              <div className="flex items-center justify-center gap-1.5">
                <div className="flex gap-0.5">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <span className="text-sm text-gray-500">5.0</span>
              </div>
            </div>
          </div>

          {/* Helen T. */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src={helenImg} alt="Helen T." className="w-full h-72 object-cover" />
            <div className="p-4 text-center">
              <p className="font-semibold text-gray-900 mb-1.5">Helen T.</p>
              <div className="flex items-center justify-center gap-1.5">
                <div className="flex gap-0.5">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <span className="text-sm text-gray-500">5.0</span>
              </div>
            </div>
          </div>

          {/* Liya A. */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img src={liyaImg} alt="Liya A." className="w-full h-72 object-cover" />
            <div className="p-4 text-center">
              <p className="font-semibold text-gray-900 mb-1.5">Liya A.</p>
              <div className="flex items-center justify-center gap-1.5">
                <div className="flex gap-0.5">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <span className="text-sm text-gray-500">5.0</span>
              </div>
            </div>
          </div>

        </div>

      { /* What Our Clients Say */}
        <div className="flex items-center justify-center gap-3 mt-16 mb-9">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <Sparkles className="w-5 h-5 text-amber-500" />
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 
          {/* Elena Rostova */}
          <div className="bg-white rounded-2xl p-6 relative">
            <Sparkles className="w-5 h-5 text-amber-200 absolute top-6 right-6" />
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <span className="text-sm text-gray-500">5.0</span>
            </div>
            <p className="text-gray-700 mb-6">
              "Absolutely world-class service! The therapist arrived right on time at my hotel in Addis Ababa. Truly one of the best deep tissue massages I have ever had. Highly professional and deeply relaxing."
            </p>
            <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-semibold text-gray-800">
                E
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Elena Rostova</p>
                <p className="text-xs text-gray-500">DE Germany</p>
              </div>
            </div>
          </div>
 
          {/* Thomas Dubois */}
          <div className="bg-white rounded-2xl p-6 relative">
            <Sparkles className="w-5 h-5 text-amber-200 absolute top-6 right-6" />
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <span className="text-sm text-gray-500">4.9</span>
            </div>
            <p className="text-gray-700 mb-6">
              "Incredibly convenient and professional. Booking a premium massage straight to my room after a long business flight was a lifesaver. The attention to detail and technique was phenomenal."
            </p>
            <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-semibold text-gray-800">
                T
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Thomas Dubois</p>
                <p className="text-xs text-gray-500">FR France</p>
              </div>
            </div>
          </div>
 
          {/* Sofia Bianchi */}
          <div className="bg-white rounded-2xl p-6 relative">
            <Sparkles className="w-5 h-5 text-amber-200 absolute top-6 right-6" />
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <span className="text-sm text-gray-500">5.0</span>
            </div>
            <p className="text-gray-700 mb-6">
              "An exceptional luxury spa experience right in the comfort of my space. The team brings an atmosphere of pure tranquility. The aromatherapy and Swedish massage techniques were absolutely perfect."
            </p>
            <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-semibold text-gray-800">
                S
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Sofia Bianchi</p>
                <p className="text-xs text-gray-500">IT Italy</p>
              </div>
            </div>
          </div>
 
          {/* David Johansson */}
          <div className="bg-white rounded-2xl p-6 relative">
            <Sparkles className="w-5 h-5 text-amber-200 absolute top-6 right-6" />
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <span className="text-sm text-gray-500">4.9</span>
            </div>
            <p className="text-gray-700 mb-6">
              "Flawless service from start to finish! The therapist was highly skilled and completely respectful of my privacy. It felt like a 5-star resort spa experience brought directly to me."
            </p>
            <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-semibold text-gray-800">
                D
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">David Johansson</p>
                <p className="text-xs text-gray-500">SE Sweden</p>
              </div>
            </div>
          </div>
 
          {/* Emma Carrington */}
          <div className="bg-white rounded-2xl p-6 relative">
            <Sparkles className="w-5 h-5 text-amber-200 absolute top-6 right-6" />
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <span className="text-sm text-gray-500">5.0</span>
            </div>
            <p className="text-gray-700 mb-6">
              "The quality of care and professionalism is unmatched. It's incredibly rare to find such high-end mobile spa talent. They truly understand hospitality and premium therapeutic techniques."
            </p>
            <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-semibold text-gray-800">
                E
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Emma Carrington</p>
                <p className="text-xs text-gray-500">GB United Kingdom</p>
              </div>
            </div>
          </div>
 
          {/* Dawit Kebede */}
          <div className="bg-white rounded-2xl p-6 relative">
            <Sparkles className="w-5 h-5 text-amber-200 absolute top-6 right-6" />
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <span className="text-sm text-gray-500">5.0</span>
            </div>
            <p className="text-gray-700 mb-6">
              "በጣም አስደናቂ እና ፕሮፌሽናል አገልግሎት ነው! ወደ ቤት መጥተው የሚሰጡት ሰርቪስ እጅግ ምቹ ከመሆኑም በላይ የተጠቀሙባቸው ማሳጆች በጣም አርኪ ነበሩ። ለምትፈልጉት ሰው ሁሉ በፍጹም እመክራለሁ።"
            </p>
            <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-semibold text-gray-800">
                D
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Dawit Kebede</p>
                <p className="text-xs text-gray-500">ET Ethiopia</p>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
}