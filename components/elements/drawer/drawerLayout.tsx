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
            <a href="/" className='block px-5 py-3'>
                <p className='text-xs lg:text-sm text-slate-600 font-bold'>
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
        text-slate-600 text-xxs lg:text-sm font-semibold
        ">
            <li>
            <Link href="/service">
            <p className='p-5'>事業内容</p>
            </Link>
            </li>

            <li>
            <Link href="/equipment">
            <p className='p-5'>設備案内</p>
            </Link>
            </li>

            <li>
            <Link href="/company">
            <p className='p-5'>会社概要</p>
            </Link>
            </li>

            <li>
            <Link href="/news">
            <p className='p-5'>ニュース</p>
            </Link>
            </li>

        </ul>
        </div>
        <div className="transition-all duration-500 ease-out" style={{ display: !isOpen ? "block" : "none" }}>
            <ContactButton />
        </div>
        <div className='lg:hidden'>
            <DrawerContents isOpenChange={isOpenChange} />
        </div>
    </>
    )
}