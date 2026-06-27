"use client";

import Image from "next/image";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import { PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/logo.png"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-navy/75" />

      <div className="relative z-10 container-custom px-4 text-center">
        <div className="animate-fade-in mb-8 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="AK Plumbing Co."
            width={180}
            height={180}
            className="h-32 w-32 object-contain drop-shadow-2xl md:h-44 md:w-44"
            priority
          />
        </div>

        <h1 className="animate-slide-up text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl" style={{ animationDelay: "0.2s" }}>
          Reliable Plumbing Services{" "}
          <span className="text-gold">You Can Trust</span>
        </h1>

        <p
          className="animate-slide-up mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl"
          style={{ animationDelay: "0.4s" }}
        >
          Fast, affordable, and professional plumbing solutions for homes and businesses.
        </p>

        <div
          className="animate-slide-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.6s" }}
        >
          <Button href={PHONE_LINK} variant="call" size="lg">
            <Phone size={20} />
            Call Now
          </Button>
          <Button href={WHATSAPP_LINK} variant="whatsapp" size="lg">
            <MessageCircle size={20} />
            WhatsApp Chat
          </Button>
          <Button href="#quote-form" variant="primary" size="lg">
            Get Free Quote
          </Button>
        </div>
      </div>

      <a
        href="#trust-bar"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/70"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
