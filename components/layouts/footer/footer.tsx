'use client'

import { usePathname } from 'next/navigation';

import FooterMain from "@/components/elements/footerMain/footerMain";
import FooterContact from "../../elements/footerContact/footerContact";
import FooterHeader from '@/components/elements/footerHeader/footerHeader';
import FooterMap from '@/components/elements/footerMap/footerMap';

const Footer = () => {
    //URLが'/contact'時はfooterContactコンポーネントを表示しない。
    const searchPathName = usePathname();
    const isContact = searchPathName === ('/contact')
    return (
        <footer className="bg-white w-full h-full">
            {!isContact && <FooterContact/>}
            <div className='md:hidden'>
                <FooterMap/>
            </div>
            <FooterHeader/>
            <FooterMain/>
        </footer>
    )
}

export default Footer;