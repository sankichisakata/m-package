'use client'

import Link from "next/link";
import DrawerContents from "./drawerContents";
import ContactButton from "../button/contactButton";
import React, { useState } from "react";
import { Logo } from "../icon";

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
        {/* ロゴボタン */}
        <div className="whitespace-nowrap">
            <a href="/" className='flex'>
                <div className="flex justify-center items-center">

                    <Logo 
                    className="
                    w-[40px] md:w-[60px] lg:w-[70px] h-[40px] md:h-[60px] lg:h-[70px]
                    mr-2 md:mr-3
                    "/>
                    <div className="block flex flex-col justify-center items-left gap-[0.15rem] md:gap-[0.2rem] lg:gap-[0.3rem]">
                        <p className="
                        text-[0.4rem] md:text-xxs lg:text-xxs xl:text-xs font-semibold">
                            ダンボールのエムパッケージ
                        </p>
                        <p className="
                        text-xxs md:text-base lg:text-lg xl:text-xl font-bold
                        ">
                            株式会社エムパッケージ
                        </p>
                    </div>
                </div>
            </a>
        </div>

        <div className='
        mr-0 ml-auto pr-3
        flex justify-center items-center gap-10
        '
        >
        <ul className="
        hidden lg:flex justify-center items-center
        text-sub-color lg:text-base font-bold
        ">
            <li>
            <Link href="/service/">
            <p className='p-4'>事業内容</p>
            </Link>
            </li>

            <li>
            <Link href="/equipment/">
            <p className='p-4'>設備案内</p>
            </Link>
            </li>

            <li>
            <Link href="/company/">
            <p className='p-4'>会社情報</p>
            </Link>
            </li>

            <li>
            <Link href="/news/">
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