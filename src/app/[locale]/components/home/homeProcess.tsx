const HomeProcess = () => {
  const processSteps = [
    {
      num: 1,
      title: "Distillation",
      description:
        "We strip away the noise to find the core message of your product, ensuring every pixel serves a purpose.",
    },
    {
      num: 2,
      title: "Architecture",
      description:
        "Building intuitive paths through intentional whitespace and structural typography hierarchies.",
    },
    {
      num: 3,
      title: "Resonance",
      description:
        "Finalizing with subtle gradients and glass textures that give your interface a premium, ethereal soul.",
    },
  ];
  const cards = (data: any) => {
    return data.map((item: any, index: number) => {
      return (
        <div key={index} className="flex flex-col  gap-3 p-10">
          <h1 className="text-7xl font-bold text-[#ACB3B733]">0{item.num}</h1>
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-[#596064]">{item.description}</p>
        </div>
      );
    });
  };
  return (
    <section className="bg-[#F0F4F7] py-20">
      <div className="max-w-7xl m-auto p-5">
        <div className="flex flex-col text-center gap-5">
          <p className="text-[#386382] uppercase font-semibold text-center">
            Our Process
          </p>
          <h1 className="text-5xl font-bold mb-5">The Editorial Approach</h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          {cards(processSteps)}
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
