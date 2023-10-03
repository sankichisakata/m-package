'use client'

import Link from "next/link";
import { HiMail } from "react-icons/hi";

const ContactButton = () => {
    return(
        <div className='
        flex justify-center items-center
        '
        >
            <Link href="/contact" className="bg-green-600 border border-green-600 rounded-full">
              
                <div className="flex justify-center items-center">
                  <p className="px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3 text-white text-xs md;text-sm lg:text-base font-semibold">お問い合わせ</p>
                  <HiMail className="border-slate-800 rounded-full p-1 m-1 bg-white text-xxl lg:text-xxxl"/>
                  </div>
              
            </Link>
      
            
        </div>
    )
}

export default ContactButton;