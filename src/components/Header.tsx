"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Header = () => {

  const pathname = usePathname();

  const [sidebar,setSidebar]=useState(false);

  const closeSidebar=()=>{
    setSidebar(false)
  }

  return (
    <>
      <header className="px-2 py-2 relative sm:static rounded-lg border border-[#EBEBEB] flex items-center sm:items-start justify-between text-sm sm:text-xs md:text-sm lg:text-base">
        <section className="p-2 border-r flex items-center justify-center">
          <div className="slate-text-gradient text-lg sm:text-lg md:text-xl lg:text-2xl font-medium">
            Privacy <span className="violet-text-gradient">Cards</span>
          </div>
        </section>
        <section className="hidden sm:flex items-center justify-center">
          <nav className="flex items-center gap-8 font-semibold text-[#3D3D3D]">
            <Link
              href="/"
              className={`flex flex-col items-center ${
                pathname !== "/mycards" && pathname !== "/purchase" && pathname !== "/spent" && "text-[#1111FF]"
              }`}
            >
              <div
                className={`${
                  pathname !== "/mycards" && pathname !== "/purchase" && pathname !== "/spent" ? " bg-[#1111FF] " : "bg-transparent"
                } w-2 h-2 rounded-full`}
              />
              <div>Cards</div>
            </Link>
            <Link
              href="/mycards"
              className={`flex flex-col items-center ${
                pathname === "/mycards" && "text-[#1111FF]"
              }`}
            >
              <div
                className={`${
                  pathname === "/mycards" ? " bg-[#1111FF] " : "bg-transparent"
                } w-2 h-2 rounded-full`}
              />
              <div>My Cards</div>
            </Link>
            <Link
              href="/purchase"
              className={`flex flex-col items-center ${
                pathname === "/purchase" && "text-[#1111FF]"
              }`}
            >
              <div
                className={`${
                  pathname === "/purchase" ? " bg-[#1111FF] " : "bg-transparent"
                } w-2 h-2 rounded-full`}
              />
              <div>Purchase</div>
            </Link>
            <Link
              href="/spent"
              className={`flex flex-col items-center ${
                pathname === "/spent" && "text-[#1111FF]"
              }`}
            >
              <div
                className={`${
                  pathname === "/spent" ? " bg-[#1111FF] " : "bg-transparent"
                } w-2 h-2 rounded-full`}
              />
              <div>Spent</div>
            </Link>
          </nav>
        </section>
        <section className="hidden sm:flex items-center justify-center">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg violet-bg-gradient font-semibold text-[#ffffff]"
          >
            Login
          </Link>
        </section>
        {/* Mobile */}
        <section className="block sm:hidden ">
          <RxHamburgerMenu onClick={()=>setSidebar(true)} className="p-2  w-10 h-10 rounded-full text-[#3333DC] hover:bg-[#f1f1f1]" />
        </section>
        {sidebar && (
          <Sidebar closeSidebar={closeSidebar} />
        )}
      </header>
    </>
  );
};

export default Header;
