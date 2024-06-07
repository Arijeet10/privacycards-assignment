"use client";

import Link from "next/link";
import { SetStateAction } from "react";
import { IoClose } from "react-icons/io5";


const Sidebar=({closeSidebar}:{closeSidebar:()=>void})=>{

    return(
        <>
            <nav className="border border-black absolute sm:hidden top-0 right-0 z-50 w-[60vw] h-[60vh] bg-[#FFFFFF]">
                <div className=" flex items-center justify-end  ">
                    <IoClose onClick={closeSidebar} className="p-2 w-10 h-10 text-[#3333DC] rounded-full hover:bg-[#f1f1f1]" />
                </div>
                <div className="flex flex-col gap-4">
                    <Link onClick={closeSidebar} href='/'>Cards</Link>
                    <Link onClick={closeSidebar} href='/mycards'>My Cards</Link>
                    <Link onClick={closeSidebar} href='/purchase'>Purchase</Link>
                    <Link onClick={closeSidebar} href='/spent'>Spent</Link>
                </div>
            </nav>
        </>
    )
}

export default Sidebar;