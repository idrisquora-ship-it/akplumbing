export const SITE_NAME = "AK Plumbing Co.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://akplumbingco.com";
export const PHONE = process.env.NEXT_PUBLIC_PHONE || "08154037226";
export const PHONE_LINK = `tel:+234${PHONE.replace(/^0/, "")}`;
export const WHATSAPP_LINK = `https://wa.me/234${PHONE.replace(/^0/, "")}?text=${encodeURIComponent("Hi AK Plumbing Co., I need plumbing services.")}`;

export const OFFICE_ADDRESS = {
  street: "Iyana-Camp, Ota'efun Area",
  city: "Osogbo",
  state: "Osun State",
  country: "Nigeria",
  full: "Iyana-Camp, Ota'efun Area, Osogbo, Osun State, Nigeria",
};

export const OWNER = {
  name: "Fadilu Idris Akorede",
  experience: "3+ years",
  title: "Lead Plumber & Founder",
  description:
    "Experienced plumbing professional specializing in residential and commercial plumbing solutions with a focus on quality, speed, and reliability.",
};

export const BUSINESS_HOURS = [
  { day: "Monday – Friday", hours: "7:00 AM – 8:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "Emergency calls only" },
  { day: "Emergency Service", hours: "24/7 Available" },
];

export const TRUST_ITEMS = [
  "3+ Years Experience",
  "Fast Emergency Response",
  "Affordable Pricing",
  "Clean Professional Work",
  "Customer Satisfaction",
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Call or Message Us",
    description: "Reach out by phone, WhatsApp, or our online form. We respond quickly — even for emergencies.",
  },
  {
    step: 2,
    title: "Get a Free Quote",
    description: "We assess your plumbing needs and provide a clear, honest quote with no hidden charges.",
  },
  {
    step: 3,
    title: "Expert Service",
    description: "Our skilled team arrives on time, completes the job professionally, and keeps your space clean.",
  },
  {
    step: 4,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work. Your satisfaction is our priority on every single job.",
  },
];

export const SERVICE_AREAS = [
  { name: "Osogbo", description: "Our home base — full plumbing services across Osogbo including Ota'efun, Iyana-Camp, and surrounding areas." },
  { name: "Ibadan", description: "Residential and commercial plumbing across Ibadan and Oyo State." },
  { name: "Abuja", description: "Professional plumbing for homes, offices, and estates in the FCT." },
  { name: "Lagos", description: "Fast-response plumbing services across Lagos mainland and island." },
  { name: "Ilorin", description: "Reliable leak repairs, drain cleaning, and pipe installations in Kwara State." },
  { name: "Akure", description: "Complete bathroom, kitchen, and emergency plumbing in Ondo State." },
  { name: "Benin City", description: "Quality plumbing solutions for homes and businesses in Edo State." },
  { name: "Port Harcourt", description: "Expert pipe work and water heater services in Rivers State." },
  { name: "Enugu", description: "Trusted plumbing for residential and commercial properties in Enugu." },
  { name: "Kano", description: "Professional plumbing installations and repairs in Kano State." },
  { name: "Abeokuta", description: "Affordable, dependable plumbing across Ogun State." },
  { name: "Nationwide", description: "Serving clients across Nigeria — contact us to confirm availability in your area." },
];

export const SERVICES = [
  {
    slug: "leak-detection-repair",
    title: "Leak Detection & Repair",
    shortDescription: "Fast detection and permanent repair of water leaks to prevent damage and save money.",
    description:
      "Our expert team uses advanced techniques to locate hidden leaks in walls, floors, and pipes. We provide lasting repairs that protect your property from water damage and reduce your utility bills.",
    icon: "droplets",
    image: "/images/services/leak-repair.png",
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    shortDescription: "Clear clogged drains quickly with professional equipment and proven methods.",
    description:
      "From slow drains to complete blockages, we clear kitchen, bathroom, and main line drains efficiently. Our methods are safe for your pipes and deliver long-lasting results.",
    icon: "waves",
    image: "/images/services/drain-cleaning.png",
  },
  {
    slug: "pipe-installation",
    title: "Pipe Installation",
    shortDescription: "Quality pipe fitting and replacement for new builds and renovations.",
    description:
      "We install copper, PVC, and PEX piping for residential and commercial projects. Every installation meets safety standards and is built to last for years of reliable service.",
    icon: "wrench",
    image: "/images/services/pipe-installation.png",
  },
  {
    slug: "water-heater-services",
    title: "Water Heater Services",
    shortDescription: "Installation, repair, and maintenance for all water heater types.",
    description:
      "Whether you need a new water heater installed or your existing unit repaired, we handle electric and gas systems with precision. Enjoy consistent hot water year-round.",
    icon: "flame",
    image: "/images/services/water-heater.png",
  },
  {
    slug: "bathroom-plumbing",
    title: "Bathroom Plumbing",
    shortDescription: "Complete bathroom plumbing from fixtures to full renovations.",
    description:
      "We install and repair toilets, sinks, showers, bathtubs, and all bathroom fixtures. Our work combines functionality with a clean, professional finish.",
    icon: "bath",
    image: "/images/services/bathroom-plumbing.png",
  },
  {
    slug: "kitchen-plumbing",
    title: "Kitchen Plumbing",
    shortDescription: "Sink, faucet, and garbage disposal plumbing done right.",
    description:
      "From leaky faucets to full kitchen plumbing overhauls, we ensure your kitchen plumbing works flawlessly. Perfect for renovations and new installations.",
    icon: "utensils",
    image: "/images/services/kitchen-plumbing.png",
  },
  {
    slug: "emergency-plumbing",
    title: "Emergency Plumbing (24/7)",
    shortDescription: "Round-the-clock emergency response for burst pipes and urgent issues.",
    description:
      "Plumbing emergencies don't wait. Our 24/7 emergency service responds fast to burst pipes, severe leaks, and flooding. Call us anytime — we're ready to help.",
    icon: "siren",
    image: "/images/services/emergency-plumbing.png",
  },
];

export const HOME_SERVICES_PREVIEW = SERVICES.slice(0, 6).map((s) => ({
  title: s.title.replace(" (24/7)", "").replace("Leak Detection & Repair", "Leak Repair"),
  description: s.shortDescription,
  icon: s.icon,
  href: `/services#${s.slug}`,
}));
