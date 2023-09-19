'use client'

import { usePathname } from 'next/navigation';

import FooterMain from "@/components/elements/footerMain/footerMain";
import FooterContact from "../../elements/footerContact/footerContact";
import FooterHeader from '@/components/elements/footerHeader/footerHeader';

const Footer = () => {
    //URLが'/contact'時はfooterContactコンポーネントを表示しない。
    const searchPathName = usePathname();
    const isContact = searchPathName === ('/contact')
    return (
        <footer className="w-full h-full">
            {!isContact && <FooterContact/>}
            <FooterHeader/>
            <FooterMain/>
        </footer>
    )
}

export default Footer;