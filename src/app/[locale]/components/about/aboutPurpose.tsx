import Image from "next/image";
import { Sparkles, PenTool, Droplet, Layers, CheckCircle, User, Leaf } from "lucide-react";

const AboutPurpose = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex flex-col items-center text-center">
          <h2 className="mt-3 text-3xl lg:text-4xl text-center font-bold">
            Purpose driven, design led.
          </h2>

          <p className="mt-4 text-[#596064] text-base">
            Our principles guide every pixel we place and every line of code we
            write.
          </p>
        </div>

        <div className="grid gap-5 mt-10 lg:grid-cols-[0.70fr_1.30fr]">
          <article className="rounded-[28px] bg-white border border-slate-200 shadow-sm p-8 flex flex-col justify-between">
            <div>
              <Sparkles
                className="inline-flex items-center justify-center h-10 w-10 rounded-2xl   text-[#386382] mb-6"
                size={22}
              />

              <h3 className="text-3xl font-bold mb-4">
                Intentional Simplicity
              </h3>
              <p className="text-[#596064] leading-7">
                We strip away the noise to find the essence of a product. If
                it's not adding value, it's in the way.
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-[28px] bg-slate-100">
              <Image
                src="/images/image5.png"
                width={600}
                height={320}
                alt="image"
                className="w-full h-auto object-cover"
              />
            </div>
          </article>

          <div className="grid gap-5">
            <article className="rounded-[28px] bg-[#386382] border border-slate-200 shadow-sm p-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <div>
                <h4 className="text-2xl text-white font-bold mb-2">
                  Uncompromising Quality
                </h4>
                <p className="text-[#AFD9FECC] leading-7">
                  Our standard is excellence. We don't ship "good enough"—we
                  ship "perfect for right now."
                </p>
              </div>
              <div className="flex items-center w-1/2 h-full justify-center rounded-xl bg-[#4C728E]  shadow-sm">
                <CheckCircle className="text-white" />
              </div>
            </article>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <article className="rounded-[28px] bg-[#DCE4E8] shadow-sm p-6">
                
                  <User  className="h-8 w-8 rounded-2xl  text-[#386382] mb-4" size={20} />
                <h4 className="text-xl font-semibold mb-2">
                  Human Centricity
                </h4>
                <p className="text-[#596064] leading-7">
                 Design is about empathy. We build for real
people with real problems, not just personas.
                </p>
              </article>

              <article className="rounded-[28px] bg-white border border-slate-200 shadow-sm p-6">
                  <Leaf className="h-8 w-8 rounded-2xl  text-[#386382] mb-4" size={20} />
                <h4 className="text-xl font-semibold mb-2">Sustainable Growth</h4>
                <p className="text-[#596064] leading-7">
                 We believe in building things that last—
environmentally and technologically.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPurpose;
