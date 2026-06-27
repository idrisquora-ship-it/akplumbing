import { Shield, Clock, DollarSign, Sparkles, ThumbsUp } from "lucide-react";
import { TRUST_ITEMS } from "@/lib/constants";

const icons = [Shield, Clock, DollarSign, Sparkles, ThumbsUp];

export function TrustBar() {
  return (
    <section id="trust-bar" className="bg-navy py-8">
      <div className="container-custom px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20">
                  <Icon className="text-gold" size={24} />
                </div>
                <p className="text-sm font-medium text-white md:text-base">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
