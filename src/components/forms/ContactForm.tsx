"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface ContactFormProps {
  id?: string;
  showServiceField?: boolean;
  title?: string;
  subtitle?: string;
}

export function ContactForm({
  id = "quote-form",
  showServiceField = true,
  title = "Get Your Free Quote",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
}: ContactFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", service: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const supabase = createClient();
    if (!supabase) {
      setStatus("error");
      return;
    }

    const { error } = await supabase.from("contacts").insert({
      name: form.name,
      phone: form.phone,
      email: form.email || null,
      message: form.message,
      service: form.service || null,
    });

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm({ name: "", phone: "", email: "", message: "", service: "" });
  };

  return (
    <section id={id} className="section-padding bg-gray-50">
      <div className="container-custom mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">{title}</h2>
          <p className="mt-3 text-gray-muted">{subtitle}</p>
        </div>

        {status === "success" ? (
          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-green-50 p-8 text-center">
            <CheckCircle className="text-green-500" size={48} />
            <h3 className="text-xl font-semibold text-green-800">Quote Request Sent!</h3>
            <p className="text-green-700">Thank you! We&apos;ll contact you shortly.</p>
            <Button onClick={() => setStatus("idle")} variant="secondary" size="sm">
              Send Another Request
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-navy">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-navy">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  placeholder="08154037226"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-navy">
                Email (optional)
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                placeholder="your@email.com"
              />
            </div>

            {showServiceField && (
              <div>
                <label htmlFor="service" className="mb-1 block text-sm font-medium text-navy">
                  Service Needed
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                placeholder="Describe your plumbing needs..."
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-600">
                <AlertCircle size={18} />
                <span className="text-sm">Something went wrong. Please try again or call us directly.</span>
              </div>
            )}

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "loading"}>
              <Send size={18} />
              {status === "loading" ? "Sending..." : "Get Free Quote"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
