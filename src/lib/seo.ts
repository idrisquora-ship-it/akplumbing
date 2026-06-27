import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, OFFICE_ADDRESS } from "./constants";

type PageSEO = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "" }: PageSEO): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_NG",
      type: "website",
      images: [{ url: `${SITE_URL}/images/logo.png`, width: 512, height: 512, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: { canonical: url },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: SITE_NAME,
    image: `${SITE_URL}/images/logo.png`,
    telephone: "+2348154037226",
    url: SITE_URL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: OFFICE_ADDRESS.street,
      addressLocality: OFFICE_ADDRESS.city,
      addressRegion: OFFICE_ADDRESS.state,
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 7.771,
      longitude: 4.556,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    description:
      "Reliable plumbing services across Nigeria. Based in Osogbo, Osun State. Fast, affordable, and professional plumbing solutions for homes and businesses. Emergency 24/7 service available.",
    sameAs: [],
  };
}
