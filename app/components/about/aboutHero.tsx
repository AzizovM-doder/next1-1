import { ArrowRight } from "lucide-react";
import Badge from "../badge";
import Button from "../button";
import Span from "../span";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="max-w-7xl mx-auto p-5 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
      <aside className="flex flex-col gap-5 items-center text-center lg:text-start lg:items-start flex-1">
        <Badge text="OUR STORY" />
        <h1 className="text-4xl lg:text-6xl font-bold">
          Crafting digital <Span text="tranquility" /> since 2018.
        </h1>
        <p className="text-[#596064] lg:text-xl">
          We started in a small sun-drenched studio with a single mission: to
          prove that professional software doesn't have to be cold. It should
          feel like a breath of fresh air.
        </p>
      </aside>

      <div className="flex-1 w-full flex justify-center lg:justify-end">
        <Image
          src="/images/image4.png"
          width={500}
          height={500}
          alt="The Ethereal"
          priority
          className="w-full max-w-85 lg:max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default AboutHero;
