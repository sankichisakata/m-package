'use client'

import Link from "next/link";
import { EmailIcon } from "@chakra-ui/icons"
import { Link as ChakraLink } from '@chakra-ui/react';

const ContactButton = () => {
    return(
        <div className='
        flex justify-center items-center
        '
        >
            <Link href="/contact" className="border border-slate-500/20 rounded-full">
              
                <div className="flex justify-center items-center">
                  <p className="px-2 py-2 text-slate-800 text-xxs lg:text-sm">お問い合わせ</p>
                  <EmailIcon
                    className="border-slate-800 rounded-full p-1 m-1 bg-slate-800 text-white"
                    w={22} h={22}
                    />
                  </div>
              
            </Link>
      
            
        </div>
    )
}

export default ContactButton;