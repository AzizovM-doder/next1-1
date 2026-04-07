import Image from "next/image";
import { Sparkles, PenTool, Droplet, Layers } from "lucide-react";

const HomeCapabilities = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[#386382] uppercase font-semibold tracking-[0.26em] text-sm">
              Capabilities
            </p>
            <h2 className="mt-3 text-4xl lg:text-5xl font-bold leading-tight">
              Precision in Every Component
            </h2>
          </div>
          <p className="mt-4 text-[#596064] text-base lg:text-lg lg:text-right lg:max-w-1/3">
            Crafted with the “Breathable Interface” philosophy to ensure
            long-term usability and aesthetic longevity.
          </p>
        </div>

        <div className="grid gap-5 mt-10 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[28px] bg-white border border-slate-200 shadow-sm p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-[#E7F1FA] text-[#386382] mb-6">
                <Sparkles size={22} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Atmospheric Depth</h3>
              <p className="text-[#596064] leading-7">
                Moving beyond flat design. We use tonal layers and light to
                create a sense of physical space and hierarchy without
                cluttering borders.
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-[28px] bg-slate-100">
              <Image
                src="/images/image2.png"
                width={600}
                height={320}
                alt="Placeholder image"
                className="w-full h-auto object-cover"
              />
            </div>
          </article>

          <div className="grid gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <article className="rounded-[28px] bg-white border border-slate-200 shadow-sm p-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-[#EFF7F8] text-[#386382] mb-4">
                  <PenTool size={20} />
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Editorial Typography
                </h4>
                <p className="text-[#596064] leading-7">
                  Manrope and Plus Jakarta Sans paired for structural authority.
                </p>
              </article>

              <article className="rounded-[28px] bg-white border border-slate-200 shadow-sm p-6">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-[#F5F5FF] text-[#386382] mb-4">
                  <Droplet size={20} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Tonal Palette</h4>
                <p className="text-[#596064] leading-7">
                  Soft blues and mineral grays for a calm, professional
                  environment.
                </p>
              </article>
            </div>

            <article className="rounded-[28px] bg-[#E8EEF3] border border-slate-200 shadow-sm p-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex items-center w-1/2 justify-center rounded-full bg-white  shadow-sm">
                <Image
                  src="/images/image3.png"
                  width={96}
                  height={96}
                  alt="Circle placeholder"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">
                  Performance Optimized
                </h4>
                <p className="text-[#596064] leading-7">
                  Lightweight code and optimized assets for an ethereal
                  experience that feels fast.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCapabilities;
