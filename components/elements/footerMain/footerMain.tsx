
import Link from 'next/link';
import { HiChevronRight } from "react-icons/hi";
import { SlideInLeft } from '../observer/slideInLeft';
import { FadeInBack } from '../observer/fadeInBack';

export default function FooterMain () {
    return(
        <div
        className='bg-white w-full h-full pb-10'
        >

                <nav className='
                w-full mx-auto
                flex flex-col justify-center items-center
                '
                >

                    <ul className="
                    w-11/12 md:w-10/12 lg:w-9/12 pt-6
                    text-sub-color font-bold text-xs md:text-base lg:text-xl
                    flex flex-col lg:flex-row justify-center items-center
                    "
                    >
                        
                        <li className="w-full h-10">
                        <Link href="/service"
                        className="
                        w-full h-full inline-block 
                        flex items-center lg:justify-center
                        ">
                            <SlideInLeft>
                                <div className="w-full flex justify-start lg:justify-center items-center gap-5 lg:gap-2">
                                    <HiChevronRight className="text-sub-color text-xl md:text-xxl lg:text-xxxl" />
                                    <p>事業内容</p>
                                </div>
                            </SlideInLeft>
                        </Link>
                        </li>
                        
                        <div className="lg:hidden w-full flex items-center">
                            <div className="flex-1 border-b border-slate-500-20"></div>  
                        </div>

                        <li className="w-full h-10">
                        <Link href="/equipment"
                        className="
                        w-full h-full inline-block
                        flex items-center lg:justify-center
                        ">
                            <SlideInLeft>
                                <div className="w-full flex justify-start lg:justify-center items-center gap-5 lg:gap-2">
                                
                                    <HiChevronRight className="text-sub-color text-xl md:text-xxl lg:text-xxxl" />
                                    <p>設備案内</p>
                                
                                </div>
                                </SlideInLeft>
                        </Link>
                        </li>

                        <div className="lg:hidden w-full flex items-center">
                            <div className="flex-1 border-b border-slate-500-20"></div>  
                        </div>

                        <li className="w-full h-10">
                        <Link href="/company"
                        className="
                        w-full h-full inline-block
                        flex items-center lg:justify-center
                        ">
                            <SlideInLeft>
                                <div className="w-full flex justify-start lg:justify-center items-center gap-5 lg:gap-2">
                                    <HiChevronRight className="text-sub-color text-xl md:text-xxl lg:text-xxxl" />
                                    <p>会社情報</p>
                                </div>
                            </SlideInLeft>
                        </Link>
                        </li>

                        <div className="lg:hidden w-full flex items-center">
                            <div className="flex-1 border-b border-slate-500-20"></div>  
                        </div>

                        <li className="w-full h-10">
                        <Link href="/news"
                        className="
                        w-full h-full inline-block
                        flex items-center lg:justify-center
                        ">
                            <SlideInLeft>
                                <div className="w-full flex justify-start lg:justify-center items-center gap-5 lg:gap-2">
                                    <HiChevronRight className="text-sub-color text-xl md:text-xxl lg:text-xxxl" />
                                    <p>ニュース</p>
                                </div>
                            </SlideInLeft>
                        </Link>
                        </li>

                        <div className="lg:hidden w-full flex items-center">
                            <div className="flex-1 border-b border-slate-500-20"></div>  
                        </div>

                        <li className="w-full h-10">
                        <Link href="/contact"
                        className="
                        w-full h-full inline-block
                        flex items-center lg:justify-center
                        ">
                            <SlideInLeft>
                                <div className="w-full flex justify-start lg:justify-center items-center gap-5 lg:gap-2">
                                    <HiChevronRight className="text-sub-color text-xl md:text-xxl lg:text-xxxl" />
                                    <p>お問い合わせ</p>
                                </div>
                            </SlideInLeft>
                        </Link>
                        </li>
                    </ul>

                </nav>
                    
                <FadeInBack>
                    <div className='
                    pt-10 mb-2
                    flex flex-col justify-center items-center gap-2 md:gap-5
                    '>
                        <Link href="/privacy">
                            <p className='text-xxs md:text-xs lg:text-sm text-sub-color'>プライバシーポリシー</p>
                        </Link>
                        
                    </div>
                </FadeInBack>

                <div className='
                mb-2
                flex flex-col justify-center items-center
                '>
                    <small className='text-xxxs md:text-xxs lg:text-xs text-sub-color'>©&nbsp;2023&nbsp;株式会社エムパッケージ</small>
                </div>
        </div>
        
    )
}