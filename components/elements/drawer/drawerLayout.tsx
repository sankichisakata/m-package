'use client'

import Link from "next/link";
import DrawerContents from "./drawerContents";
import ContactButton from "../button/contactButton";
import React, { useState } from "react";

export default function DrawerLayout () {
    const [isOpen , setisOpen] =useState("")
    const isOpenChange = (newValue) => {
        setisOpen(newValue);
      };

    // const isClose = () => {
    //     const newisOpen = isOpen;
    //     setisOpen(newisOpen);
    // }
    // onClick={() => isClose()} 

    return(
        <>  
        <div>
            <a href="/" className='flex flex-col mx-2'>
                <p className="
                block
                bg-white
                w-15
                p-[0.1rem]
                text-center text-xxs md:text-xs lg:text-sm font-bold
                border-sub-color border-t-2 border-l-2 border-r-2
                ">
                {/* border-sub-color border-t-2 border-l-2 border-b-2  */}
                    ダンボールの
                </p>
                <p className="
                bg-sub-color
                p-[0.1rem]
                text-center text-white font-bold 
                text-xxs md:text-xs lg:text-sm
                border-2 border-sub-color
                ">
                    エムパッケージ
                </p>
            </a>
        </div>

        <div className='
        mr-0 ml-auto pr-3
        flex justify-center items-center gap-10
        '
        >
        <ul className="
        hidden lg:flex justify-center items-center
        text-slate-600 text-xxs md:text-sm lg:text-base font-semibold
        ">
            <li>
            <Link href="/service">
            <p className='p-4'>事業内容</p>
            </Link>
            </li>

            <li>
            <Link href="/equipment">
            <p className='p-4'>設備案内</p>
            </Link>
            </li>

            <li>
            <Link href="/company">
            <p className='p-4'>会社情報</p>
            </Link>
            </li>

            <li>
            <Link href="/news">
            <p className='p-4'>ニュース</p>
            </Link>
            </li>

        </ul>
        </div>
        <div className="transition-all duration-500 ease-out" style={{ display: !isOpen ? "block" : "none" }}>
            <ContactButton />
        </div>
        <div className="lg:hidden">
            <DrawerContents isOpenChange={isOpenChange} />
        </div>
    </>
    )
}