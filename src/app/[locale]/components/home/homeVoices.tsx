import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "The Ethereal transformed our complex dashboard into a workspace that feels like a calm morning. Our team's productivity has never been higher.",
    name: "Julian Vane",
    title: "Director, Nexus Architects",
    avatar: "/images/avatar-1.svg",
  },
  {
    quote:
      "A rare design partner that understands both the technical constraints and the emotional resonance of high-end digital products.",
    name: "Elena Thorne",
    title: "Founder, Luminous Tech",
    avatar: "/images/avatar-2.svg",
  },
];

const HomeVoices = () => {
  return (
    <section className="bg-[#F4F7FB] py-20">
      <div className="max-w-7xl mx-auto p-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">Voices of Excellence</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[28px] bg-white p-8 shadow-sm border border-slate-200"
            >
              <div className="flex gap-1 mb-6 text-[#0F172A]">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} className="text-[#0F172A] opacity-90" />
                ))}
              </div>
              <p className="text-[#334155] text-lg leading-8 italic">"{review.quote}"</p>
              <div className="flex items-center gap-4 mt-8">
                <div className="h-14 w-14 rounded-full overflow-hidden bg-slate-100">
                  <Image
                    src={review.avatar}
                    width={56}
                    height={56}
                    alt={review.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-sm text-[#64748B]">{review.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeVoices;
