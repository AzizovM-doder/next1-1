const faqs = [
  {
    question: "How long does a typical design project take?",
    answer:
      "Project timelines vary based on scope, but most comprehensive design phases last between 4 to 12 weeks. We prioritize quality and architectural precision in every deliverable.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely. We leverage high-end digital collaboration tools to work seamlessly with clients across all time zones. Our process is optimized for remote architectural excellence.",
  },
  {
    question: "What are your project budget minimums?",
    answer:
      "We take on a limited number of projects each year to ensure high attention to detail. Please reach out for our pricing guide tailored to specific industry needs.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "While our aesthetic is versatile, we specialize in high-end lifestyle brands, boutique real estate, and professional service environments that value minimalism and clarity.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto p-5">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-[#386382] font-semibold">
            Knowledge Base
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Commonly Asked Questions
          </h2>
        </div>

        <div className="grid gap-5">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-[28px] bg-white p-6 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                <span className="text-slate-400 text-xl">▾</span>
              </div>
              <p className="mt-4 text-slate-600 leading-7">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;