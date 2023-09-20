'use client'

import Link from "next/link";
import { HiMail } from "react-icons/hi";

const ContactButton = () => {
    return(
        <div className='
        flex justify-center items-center
        '
        >
            <Link href="/contact" className="border border-slate-500/20 rounded-full">
              
                <div className="flex justify-center items-center">
                  <p className="px-3 md:px-4 py-1 md:py-2 text-slate-800 text-xs lg:text-sm font-semibold">お問い合わせ</p>
                  <HiMail className="border-slate-800 rounded-full p-1 m-1 bg-slate-800 text-xxl"/>
                  </div>
              
            </Link>
      
            
        </div>
    )
}

export default ContactButton;