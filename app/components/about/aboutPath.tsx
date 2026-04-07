const timeline = [
  {
    year: "2018",
    title: "The Morning Mist",
    description:
      "Founded in a shared workspace in Seattle. Three designers and a mission to humanize the web.",
    active: true,
  },
  {
    year: "2020",
    title: "Remote Horizon",
    description:
      "Transitioned to a fully distributed global team. Expansion into three continents and diverse design perspectives.",
  },
  {
    year: "2022",
    title: "The Digital Greenhouse",
    description:
      "Launched our first internal product, The Ethereal CMS, setting a new standard for backend elegance.",
  },
  {
    year: "Today",
    title: "Clear Skies Ahead",
    description:
      "Scaling our impact while maintaining the same “day one” obsession with simplicity and light.",
    active: true,
  },
];

const AboutPath = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto p-5">
        <div className="text-center mb-12">
          <p className="text-3xl lg:text-5xl text-left font-bold">
            The Path to Presence
          </p>
        </div>

        <div className="">
          <div className="gap-12 items-start flex flex-col">
            {timeline.map((item) => {
              return (
                <div
                  key={item.year}
                  className={`md:grid md:grid-cols-2 md:items-start gap-40
                    md:justify-start
                  `}
                >
                  <div
                    className={`md:col-span-1 md:ml-auto  md:text-left `}
                  >
                    <div className="md:max-w-100">
                      <p className="text-sm font-semibold text-[#386382] uppercase tracking-[0.24em]">
                        {item.year}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-[#596064] leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span
                    className={` rounded-full border-4 h-5 w-5 bg-white shadow-sm ${
                      item.active
                        ? "border-[#386382] bg-[#386382]"
                        : "border-slate-200"
                    } md:left-1/2 md:-translate-x-1/2`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPath;
