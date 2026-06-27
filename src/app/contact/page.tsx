import type { Metadata } from "next";
import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { PHONE, PHONE_LINK, WHATSAPP_LINK, BUSINESS_HOURS, OFFICE_ADDRESS } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "Contact Us | AK Plumbing Co.",
  description:
    "Contact AK Plumbing Co. for a free quote. Call 08154037226, WhatsApp us, or fill out our contact form. Head office: Osogbo, Osun State. Serving all of Nigeria.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy pb-16 pt-32 text-center text-white">
        <div className="container-custom px-4">
          <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Get in touch for a free quote or emergency service
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Get In Touch</h2>
            <p className="mt-3 text-gray-muted">
              We&apos;re here to help with all your plumbing needs. Reach out by phone, WhatsApp, or the form.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                  <Phone className="text-navy" size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-muted">Phone</p>
                  <a href={PHONE_LINK} className="text-lg font-semibold text-navy hover:text-gold">
                    {PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                  <MessageCircle className="text-navy" size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-muted">WhatsApp</p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-navy hover:text-gold"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                  <MapPin className="text-navy" size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-muted">Location</p>
                  <p className="text-lg font-semibold text-navy">{OFFICE_ADDRESS.full}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={PHONE_LINK} variant="call" size="md">
                <Phone size={18} /> Call Now
              </Button>
              <Button href={WHATSAPP_LINK} variant="whatsapp" size="md">
                <MessageCircle size={18} /> WhatsApp
              </Button>
            </div>

            <div className="mt-10 rounded-2xl border border-gray-100 p-6">
              <div className="mb-4 flex items-center gap-2">
                <Clock className="text-gold" size={22} />
                <h3 className="text-lg font-semibold text-navy">Business Hours</h3>
              </div>
              <ul className="space-y-2">
                {BUSINESS_HOURS.map((item) => (
                  <li key={item.day} className="flex justify-between text-sm">
                    <span className="text-gray-muted">{item.day}</span>
                    <span className="font-medium text-navy">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="AK Plumbing Co. Head Office - Osogbo, Osun State"
              src="https://maps.google.com/maps?q=Iyana+Camp+Otaefun+Osogbo+Osun+State+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <ContactForm title="Send Us a Message" subtitle="We'll respond as quickly as possible." />
    </>
  );
}
