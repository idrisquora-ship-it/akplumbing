import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, PHONE, PHONE_LINK, WHATSAPP_LINK, SITE_NAME, OFFICE_ADDRESS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom section-padding grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image src="/images/logo.png" alt={SITE_NAME} width={64} height={64} className="h-16 w-16 object-contain" />
            <div>
              <p className="text-lg font-bold">AK Plumbing Co.</p>
              <p className="text-sm text-gold">Built on Trust</p>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Reliable plumbing services you can trust. Fast, affordable, and professional solutions for homes and businesses across Nigeria.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-gold">Quick Links</h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-gold">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href={PHONE_LINK} className="flex items-center gap-2 hover:text-gold">
                <Phone size={16} className="text-gold" />
                {PHONE}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gold">
                <Mail size={16} className="text-gold" />
                WhatsApp Us
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              {OFFICE_ADDRESS.full}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-gold">Emergency?</h3>
          <p className="mb-4 text-sm text-gray-400">
            Available 24/7 for plumbing emergencies. Don&apos;t wait — call us now.
          </p>
          <a
            href={PHONE_LINK}
            className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-all hover:bg-gold-light btn-glow"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} AK Plumbing Co. All rights reserved.</p>
      </div>
    </footer>
  );
}
