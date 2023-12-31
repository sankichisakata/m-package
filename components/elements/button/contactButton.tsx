'use client'

import Link from "next/link";
import { HiMail } from "react-icons/hi";

const ContactButton = () => {
    return(
        <div className='
        flex justify-center items-center
        mx-2
        '
        >
            <Link 
            href="/contact" 
            className="
            bg-sub-color active:bg-sub-color/80 hover:bg-sub-color/80
            border border-sub-color 
            rounded-full 
            shadow-lg active:shadow-none hover:shadow-none
            ">
              
                <div className="flex justify-center items-center">
                  <p className="px-3 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 text-white text-xs md:text-base lg:text-xl font-semibold">
                    お問い合わせ
                </p>
                  <HiMail className="border-white rounded-full p-1 m-1 md:m-2 bg-white text-sub-color text-xxl lg:text-[2rem]"/>
                  </div>
              
            </Link>
      
            
        </div>
    )
}

export default ContactButton;