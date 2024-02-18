'use client'

import Link from "next/link";
import { HiMail } from "react-icons/hi";

const ContactButton = () => {
    return(
        <div className='
        flex justify-center items-center
        lg:mx-2
        '
        >
            <Link 
            href="/contact/" 
            className="
            flex flex-col justify-center items-center
            w-16 md:w-auto h-16 md:h-auto
            rounded-full 
            ">
              
                <div 
                className="
                flex justify-center items-center
                bg-sub-color active:bg-sub-color/80 hover:bg-sub-color/80
                rounded-full 
                ">
                    <p className="
                    hidden md:inline-block px-3 lg:px-5 py-2 lg:py-3 
                    text-white text-xs md:text-sm lg:text-base font-semibold"
                    >
                        お問い合わせ
                    </p>
                    <HiMail className="border border-sub-color rounded-full p-1 md:m-2 bg-white text-sub-color text-xxl lg:text-[2rem]"/>
                </div>
                <p className="pt-1 md:hidden text-sub-color text-xxxs font-semibold">
                    お問い合わせ
                </p>
              
            </Link>
      
            
        </div>
    )
}

export default ContactButton;