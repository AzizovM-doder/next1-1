import { Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";

const ContactDetails = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto p-5">
        <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-sm sm:p-10">
            <div className="mb-8">
              <p className="text-3xl font-bold text-slate-900">Send a Message</p>
            </div>
            <div className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-3 h-12 w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 text-slate-900 outline-none transition focus:border-[#386382] focus:ring-2 focus:ring-[#386382]/20"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">Email</span>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="mt-3 h-12 w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 text-slate-900 outline-none transition focus:border-[#386382] focus:ring-2 focus:ring-[#386382]/20"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Subject</span>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="mt-3 h-12 w-full rounded-2xl border border-slate-200 bg-slate-100 px-4 text-slate-900 outline-none transition focus:border-[#386382] focus:ring-2 focus:ring-[#386382]/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Message</span>
                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="mt-3 w-full rounded-[28px] border border-slate-200 bg-slate-100 px-4 py-4 text-slate-900 outline-none transition focus:border-[#386382] focus:ring-2 focus:ring-[#386382]/20"
                />
              </label>

              <button
                className="inline-flex items-center justify-center rounded-full bg-[#386382] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#254b6a]"
              >
                Send Inquiry
              </button>
            </div>
          </div>

          <aside className="rounded-[32px] bg-slate-100 p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-slate-900">Contact Details</h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#D9EDFF] text-[#386382] shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Our Studio</p>
                  <p className="mt-1 text-sm text-slate-600 leading-6">
                    124 Architectural Way
                    <br /> Creative District, NY 10012
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#D9EDFF] text-[#386382] shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Call Us</p>
                  <p className="mt-1 text-sm text-slate-600 leading-6">
                    +1 (555) 012–3456
                    <br /> Mon – Fri, 9am – 6pm EST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-3xl bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#D9EDFF] text-[#386382] shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email Us</p>
                  <p className="mt-1 text-sm text-slate-600 leading-6">studio@ethereal.design</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-400">
                <Share2 size={18} />
              </button>
              <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-400">
                <Globe size={18} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
