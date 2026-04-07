"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";

const Nav = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl m-auto p-5 flex items-center justify-between">
        <Link href={'/'}>
        <img src="/image.png" width={130} alt="The Ethereal" />
        </Link>
        <ul className="hidden lg:flex gap-5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? "text-[#0369A1] font-semibold border-b-2 border-[#0369A1] pb-1" : "text-[#64748B] hover:text-[#0369A1] font-semibold"}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button text="Get in touch" />
      </div>
      
        <ul className="lg:hidden justify-center flex gap-5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? "text-[#0369A1] font-semibold border-b-2 border-[#0369A1] pb-1" : "text-[#64748B] hover:text-[#0369A1] font-semibold"}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
    </nav>
  );
};

export default Nav;