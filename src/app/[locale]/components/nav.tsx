"use client";
import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import Button from "./button";
import { Link } from "@/src/i18n/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'tj', name: 'Тоҷикӣ' }
  ];

  const handleLanguageChange = (newLocale: string) => {
    router.push(pathname, { locale: newLocale });
    setIsLangOpen(false);
  };

  const navLinks = [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl m-auto p-5 flex items-center justify-between">
        <Link href={'/'}>
        <img src="/image.png" width={130} alt="The Ethereal" />
        </Link>
        <ul className="hidden lg:flex gap-5 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? "text-[#0369A1] font-semibold border-b-2 border-[#0369A1] pb-1" : "text-[#64748B] hover:text-[#0369A1] font-semibold"}
                >
                  {t(`nav.${link.key}`)}
                </Link>
              </li>
            );
          })}
          
          {/* Language Selector */}
          <li className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-[#64748B] hover:text-[#0369A1] font-semibold"
            >
              {locale.toUpperCase()}
              <ChevronDown size={16} />
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg min-w-40">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 hover:bg-slate-100 ${
                      locale === lang.code ? 'bg-blue-50 text-[#0369A1] font-semibold' : 'text-[#64748B]'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </li>
        </ul>
        <div className="flex items-center gap-3">
          {/* Mobile Language Selector */}
          <div className="lg:hidden relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 text-[#64748B] hover:text-[#0369A1] font-semibold text-sm"
            >
              {locale.toUpperCase()}
              <ChevronDown size={14} />
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg min-w-40">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 hover:bg-slate-100 text-sm ${
                      locale === lang.code ? 'bg-blue-50 text-[#0369A1] font-semibold' : 'text-[#64748B]'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <Button text={t("nav.getInTouch")} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;