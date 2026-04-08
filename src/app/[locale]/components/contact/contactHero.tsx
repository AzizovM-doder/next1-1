import { ArrowRight } from "lucide-react";
import Badge from "../badge";
import Button from "../button";
import Span from "../span";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ContactHero = () => {
  const t = useTranslations('ContactPage');
  return (
    <section className="max-w-7xl mx-auto p-5 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
      <aside className="flex flex-col gap-5 items-center text-center lg:text-start lg:items-start flex-1">
        <Badge text={t('badge')} />
        <h1 className="text-4xl lg:text-6xl font-bold">
          {t('title').replace('Touch', '').replace('with the Ethereal.', '')}
          <Span text="Touch" /> with the Ethereal.
        </h1>
        <p className="text-[#596064] lg:text-xl">
          {t('description')}
        </p>
      </aside>

      <div className="flex-1 w-full flex justify-center lg:justify-end">
        <Image
          src="/images/image13.png"
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

export default ContactHero;
