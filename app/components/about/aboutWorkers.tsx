import Image from "next/image";

const workers = [
  {
    name: "Marcus Chen",
    title: "Founder & Creative Director",
    image: "/images/image6.png",
  },
  {
    name: "Elena Rodriguez",
    title: "Head of Engineering",
    image: "/images/image7.png",
  },
  {
    name: "Julian Vance",
    title: "Lead UX Architect",
    image: "/images/image8.png",
  },
  {
    name: "Sarah Jenkins",
    title: "Client Experience Lead",
    image: "/images/image9.png",
  },
];

const AboutWorkers = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex flex-col items-start justify-between gap-6 mb-16 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              The minds behind the mist.
            </h2>
            <p className="mt-4 text-[#596064] text-base md:text-lg max-w-2xl">
              A collective of specialists dedicated to the art of the intentional.
            </p>
          </div>
          <p
            className="text-[#386382] font-semibold hover:text-[#254B6A] transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            View Openings
            <span>→</span>
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {workers.map((worker) => (
            <div key={worker.name} className="flex flex-col items-start text-center">
              <div className="w-full aspect-square h-100 rounded-2xl overflow-hidden bg-slate-100 mb-6">
                <Image
                  src={worker.image}
                  alt={worker.name}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {worker.name}
              </h3>
              <p className="mt-2 text-sm text-[#386382] font-semibold">
                {worker.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWorkers