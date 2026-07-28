// NEW FILE (put in src/data/services.js): single source of truth for every
// service. Each entry has enough detail for its own dedicated page —
// benefits, what-to-expect, and who it's ideal for — not just a title.
// Icon is stored as a string key (not a component) so this file stays plain
// data; ServicesPage.jsx and ServiceDetailPage.jsx map the key to the actual
// lucide-react icon.
export const services = [
  {
    slug: "swedish-massage",
    title: "Swedish Massage",
    icon: "Hand",
    duration: "60 min",
    price: "1,200 ETB",
    shortDescription:
      "A gentle, flowing massage using long strokes and kneading to ease everyday tension and leave you feeling calm and light.",
    whatToExpect:
      "Your therapist uses long, gliding strokes, kneading, and light circular movements over the whole body, with warm oil to reduce friction. Pressure stays light to medium throughout, and the pace is slow and rhythmic — designed to calm the nervous system as much as the muscles.",
    benefits: [
      "Improves blood circulation",
      "Eases everyday muscle tension",
      "Promotes deep relaxation and better sleep",
      "Reduces stress hormones",
    ],
    idealFor: [
      "First-time massage clients",
      "Anyone seeking gentle relaxation",
      "People with mild everyday tension",
    ],
  },
  {
    slug: "deep-tissue-massage",
    title: "Deep Tissue Massage",
    icon: "Activity",
    duration: "75 min",
    price: "1,500 ETB",
    shortDescription:
      "Firmer, targeted pressure that works into deeper muscle layers to release chronic knots and stiffness.",
    whatToExpect:
      "Your therapist works slowly into deeper muscle layers using firm pressure, forearms, and knuckles, focusing on areas you flag as tight — shoulders, lower back, or legs. Some tenderness during the session is normal as knots release; communicate your comfort level throughout.",
    benefits: [
      "Releases chronic muscle knots",
      "Improves range of motion",
      "Breaks down adhesions and scar tissue",
      "Relieves pain from repetitive strain",
    ],
    idealFor: [
      "Athletes and active individuals",
      "Those with chronic muscle pain",
      "People recovering from minor injury",
    ],
  },
  {
    slug: "relaxation-massage",
    title: "Relaxation Massage",
    icon: "Flower2",
    duration: "60 min",
    price: "1,200 ETB",
    shortDescription:
      "A slow, soothing treatment with soft music and warm oils, designed purely to melt away stress.",
    whatToExpect:
      "A slower, lighter-pressure session with soft ambient music, warm aromatic oils, and long soothing strokes. There's no deep muscle work here — the entire session is built around helping your mind and body fully switch off.",
    benefits: [
      "Lowers stress and anxiety",
      "Improves overall sense of wellbeing",
      "Encourages deep, restful sleep",
      "Gentle enough for sensitive skin and muscles",
    ],
    idealFor: [
      "Anyone feeling overwhelmed or burnt out",
      "Those who dislike firm pressure",
      "A calming treat before a big event",
    ],
  },
  {
    slug: "home-service",
    title: "Home Service",
    icon: "Home",
    duration: "Flexible",
    price: "No extra fee within Addis Ababa",
    shortDescription:
      "Our therapist brings the table, oils, and linens straight to your home, so you can unwind without leaving your space.",
    whatToExpect:
      "Your therapist arrives with a portable massage table, fresh linens, and all oils needed — just clear a quiet space of about 2x3 meters. Setup takes about 10 minutes, and everything is packed away afterward, leaving your space exactly as it was.",
    benefits: [
      "No travel or waiting room needed",
      "Fully private, comfortable setting",
      "Choose any of our massage types",
      "Ideal after a long day or workout",
    ],
    idealFor: [
      "Busy professionals",
      "Parents who can't easily leave home",
      "Anyone preferring the comfort of their own space",
    ],
  },
  {
    slug: "hotel-service",
    title: "Hotel Service",
    icon: "Building2",
    duration: "Flexible",
    price: "No extra fee within Addis Ababa",
    shortDescription:
      "Traveling in Addis Ababa? We come directly to your hotel room, fitting seamlessly into your itinerary.",
    whatToExpect:
      "Just share your hotel name and room number when booking. Your therapist checks in at the front desk and arrives at your room with a portable table and everything needed — no need to leave the hotel or interrupt your trip.",
    benefits: [
      "Fits around a packed travel schedule",
      "No need to find or book a spa",
      "Discreet, professional, and on time",
      "Great after a long flight or day of meetings",
    ],
    idealFor: [
      "Business travelers",
      "Tourists wanting to unwind after sightseeing",
      "Anyone with a tight itinerary",
    ],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);