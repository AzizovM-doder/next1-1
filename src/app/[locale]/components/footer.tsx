"use client";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 py-12 mt-20">
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-bold text-[#1F4A63]">
              {t('company')}
            </h3>
            <p className="text-sm text-[#64748B]">
              © {year} The Ethereal Studio. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <p className="text-[#64748B] hover:text-[#386382] font-medium transition-colors">
              {t('privacy')}
            </p>
            <p className="text-[#64748B] hover:text-[#386382] font-medium transition-colors">
              {t('terms')}
            </p>
            <p className="text-[#64748B] hover:text-[#386382] font-medium transition-colors">
              {t('linkedin')}
            </p>
            <p className="text-[#64748B] hover:text-[#386382] font-medium transition-colors">
              {t('instagram')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
