const AboutClarity = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto p-5">
        <div className="rounded-[36px] border border-slate-200 bg-slate-100/80 p-8 py-20 lg:py-30 shadow-sm backdrop-blur-sm ">
          <div className="flex flex-col gap-10 items-center text-center">
            <div className="max-w-3xl">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                Ready to find your clarity?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-8">
                Whether you’re looking for a partner in design or a place to build your career, we’d love to talk.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <p 
                className="inline-flex justify-center rounded-full bg-[#386382] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#254b6a]"
              >
                Start a Project
              </p>
              <p 
                className="inline-flex justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Join the Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClarity;