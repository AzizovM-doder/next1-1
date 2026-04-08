import { ArrowRight } from "lucide-react";
import Badge from "../badge";
import Button from "../button";
import Span from "../span";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HomeHero = () => {
   const t = useTranslations('HomePage');
  return (
    <section className="max-w-7xl mx-auto p-5 flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
      {/* <h1 className="text-7xl font-bold">{t('welcome')}</h1> */}
      <aside className="flex flex-col gap-5 items-center text-center lg:text-start lg:items-start flex-1">
        <Badge text={t('badge')} />
        <h1 className="text-4xl lg:text-6xl font-bold">
          {t('title').split(' Breathe, ')[0]} <Span text="Breathe" />, {t('title').split('Breathe, ')[1]}
        </h1>
        <p className="text-[#596064] lg:text-xl">
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <Button text={t('cta')} />
          <button className="flex text-[#386382] font-bold gap-3 items-center justify-center py-2 px-6">
            {t('secondary')}
            <ArrowRight size={20} />
          </button>
        </div>
      </aside>

      <div className="flex-1 w-full flex justify-center lg:justify-end">
        <Image 
          src="/images/image.png"  
          width={500} 
          height={500} 
          alt="The Ethereal" 
          priority  
          className="w-full max-w-[350px] lg:max-w-full h-auto object-contain" 
        />
      </div>
    </section>
  );
};

export default HomeHero;
