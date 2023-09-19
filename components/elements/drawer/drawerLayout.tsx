'use client'

import Link from "next/link";
import DrawerContents from "./drawerContents";
import ContactButton from "../button/contactButton";
import { useState } from "react";

export default function DrawerLayout () {
    const [isOpen , setisOpen] =useState("")
    const isOpenChange = (newValue) => {
        setisOpen(newValue);
      };

    return(
        <>
        { !isOpen ? 
            <Link href="/" className='block p-3'>
                <p className='text-xxs lg:text-xs text-gray-800 font-bold'>
                    株式会社エムパッケージ
                </p>
            </Link>
        :
            <div className="block pl-3">
                <p className='text-xxs text-gray-800 font-semibold'>株式会社エムパッケージはお客様第一に活動しております。</p>
            </div>
        }
        


        <div className='
        mr-0 ml-auto pr-3
        flex justify-center items-center gap-10
        '
        >
        <ul className="
        hidden lg:flex justify-center items-center
        text-gray-800 text-xxs lg:text-xs font-semibold
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