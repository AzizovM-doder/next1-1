const HomeEvolve = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto p-5">
        <div className="rounded-[40px] bg-linear-to-br from-[#3A6A8F] to-[#254B6A] px-8 py-16 md:px-16 md:py-24 text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,300 Q250,100 500,300 T1000,300" stroke="white" strokeWidth="2" fill="none" opacity="0.5"/>
              <path d="M0,400 Q250,200 500,400 T1000,400" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Evolve Your Digital Identity?
            </h2>
            
            <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join over 100 brands that have embraced the power of breathable, professional design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-3 md:px-10 md:py-4 bg-white text-[#254B6A] font-semibold rounded-full hover:bg-slate-50 transition-colors">
                Get a Free Audit
              </button>
              <button className="px-8 py-3 md:px-10 md:py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeEvolve;
