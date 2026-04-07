import Image from "next/image";


const AboutLiving = () => {
  return (
       <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex gap-5 flex-col items-center">

        <h1 className="text-center text-3xl font-bold lg:text-4xl">Living the aesthetic.</h1>
        <p  className="text-center font-semibold text-lg text-[#596064]">We believe that a peaceful workspace leads to powerful ideas.</p>
        </div>

        <div className="grid gap-5 mt-10 lg:grid-cols-[1fr_1fr]">
           
              <Image
                src="/images/image10.png"
                width={600}
                height={100}
                alt="Placeholder image"
                className="w-full h-auto object-cover"
              />

          <div className="grid gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
               <Image
                src="/images/image11.png"
                width={0}
                height={20}
                alt="Placeholder image"
                className="w-full h-auto rounded-xl object-cover"
              /> <Image
                src="/images/image11.png"
                width={600}
                height={320}
                alt="Placeholder image"
                className="w-full h-auto rounded-xl object-cover"
              />
 
            </div>

                <Image
                  src="/images/image12.png"
                  width={96}
                  height={96}
                  alt="Circle placeholder"
                  className="w-full h-full object-contain"
                />
              
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLiving;