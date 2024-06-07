"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const pathname = usePathname();

  return (
    <>
      <nav className="px-4 py-6  fixed sm:hidden top-0 right-0 z-50 w-[60vw] h-[100vh] bg-[#FFFFFF]  ">
        <div className="h-full flex flex-col ">
          <div className=" flex items-center justify-end  ">
            <IoClose
              onClick={closeSidebar}
              className="p-2 w-12 h-12 text-[#3333DC] rounded-full hover:bg-[#f1f1f1]"
            />
          </div>
          <div className="h-full flex flex-col items-center justify-around gap-4 text-2xl font-medium">
            <Link
              onClick={closeSidebar}
              href="/"
              className={`flex items-center gap-2 ${
                pathname !== "/mycards" &&
                pathname !== "/purchase" &&
                pathname !== "/spent" &&
                "text-[#1111FF]"
              } `}
            >
              <div
                className={`${
                  pathname !== "/mycards" &&
                  pathname !== "/purchase" &&
                  pathname !== "/spent"
                    ? " bg-[#1111FF] "
                    : "bg-transparent"
                } w-2 h-2 rounded-full`}
              />
              <div>Cards</div>
            </Link>
            <Link
              onClick={closeSidebar}
              href="/mycards"
              className={`flex items-center gap-2 ${
                pathname === "/mycards" && "text-[#1111FF]"
              } `}
            >
              <div
                className={`${
                  pathname === "/mycards" ? " bg-[#1111FF] " : "bg-transparent"
                } w-2 h-2 rounded-full`}
              />
              <div>My Cards</div>
            </Link>
            <Link
              onClick={closeSidebar}
              href="/purchase"
              className={`flex items-center gap-2 ${
                pathname === "/purchase" && "text-[#1111FF]"
              } `}
            >
              <div
                className={`${
                  pathname === "/purchase" ? " bg-[#1111FF] " : "bg-transparent"
                } w-2 h-2 rounded-full`}
              />
              <div>Purchase</div>
            </Link>
            <Link
              onClick={closeSidebar}
              href="/spent"
              className={`flex items-center gap-2 ${
                pathname === "/spent" && "text-[#1111FF]"
              } `}
            >
              <div
                className={`${
                  pathname === "/spent" ? " bg-[#1111FF] " : "bg-transparent"
                } w-2 h-2 rounded-full`}
              />
              <div>Spent</div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
