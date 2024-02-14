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
        <div className="whitespace-nowrap px-2 md:px-3">
            <a href="/" className=' lex flex-col mx-2'>
                <p className="
                block
                bg-white
                w-15
                p-[0.1rem] md:p-[0.2rem]
                text-center text-xxs md:text-xs lg:text-base font-bold
                border-sub-color border-t-2 border-l-2 border-r-2
                ">
                {/* border-sub-color border-t-2 border-l-2 border-b-2  */}
                    ダンボールの
                </p>
                <p className="
                bg-sub-color
                p-[0.1rem] md:p-[0.2rem]
                text-center text-white font-bold 
                text-xxs md:text-xs lg:text-base
                border-2 border-sub-color
                ">
                    エムパッケージ
                </p>
            </a>
        </div>

        <div
        style={{ display: !isOpen ? "none" : "block" }} 
        className="
        mx-auto"
        >
            <p className='break-words text-left text-xxs md:txet-xs text-primary-color font-bold'>
                (株)エムパッケージは、
                <span className="md:hidden"><br/></span>
                お客様第一を掲げております。
            </p>
        </div>

        <div className='
        mr-0 ml-auto pr-3
        flex justify-center items-center gap-10
        '
        >
        <ul className="
        hidden lg:flex justify-center items-center
        text-sub-color lg:text-xl font-bold
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