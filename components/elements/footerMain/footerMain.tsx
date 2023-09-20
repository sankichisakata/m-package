
import Link from 'next/link';
import { HiChevronRight } from "react-icons/hi";

export default function FooterMain () {
    return(
        <div
        className='bg-white w-full h-full pb-10'
        >

                <nav className='
                w-fullmx-auto
                flex flex-col justify-center items-center
                '
                >

                    <ul className="
                    w-11/12 md:w-7/12 lg:max-w-xxl pt-6
                    text-xs md:text-sm lg:text-base
                    flex flex-col lg:flex-row justify-center items-center
                    "
                    >
                        <li className="w-full h-10">
                        <Link href="/service"
                        className="
                        w-full h-full inline-block 
                        flex justify-center items-center">
                        <div className="w-full flex justify-start lg:justify-center items-center gap-5 lg:gap-2">
                            <HiChevronRight className="text-slate-600 text-xl md:text-xxl lg:text-xxxl" />
                            <p className='text-slate-600 font-semibold'>事業内容</p>
                        </div>
                        </Link>
                        </li>

                        <div className="lg:hidden w-full flex items-center">
                            <div className="flex-1 border-b border-slate-500-20"></div>  
                        </div>

                        <li className="w-full h-10">
                        <Link href="/equipment"
                        className="
                        w-full h-full inline-block
                        flex justify-center items-center
                        ">
                        <div className="w-full flex justify-start lg:justify-center items-center gap-5 lg:gap-2">
                            <HiChevronRight className="text-slate-600 text-xl md:text-xxl lg:text-xxxl" />
                            <p className='text-slate-600 font-semibold'>設備案内</p>
                        </div>
                        </Link>
                        </li>

                        <div className="lg:hidden w-full flex items-center">
                        <div className="flex-1 border-b border-slate-500-20"></div>  
                        </div>

                        <li className="w-full h-10">
                        <Link href="/company"
                        className="
                        w-full h-full inline-block
                        flex justify-center items-center">
                        <div className="w-full flex justify-start lg:justify-center items-center gap-5 lg:gap-2">
                        <HiChevronRight className="text-slate-600 text-xl md:text-xxl lg:text-xxxl" />
                            <p className='text-slate-600 font-semibold'>会社概要</p>
                        </div>
                        </Link>
                        </li>

                        <div className="lg:hidden w-full flex items-center">
                        <div className="flex-1 border-b border-slate-500-20"></div>  
                        </div>

                        <li className="w-full h-10">
                        <Link href="/news"
                        className="
                        w-full h-full inline-block
                        flex justify-center items-center">
                        <div className="w-full flex justify-start lg:justify-center items-center gap-5 lg:gap-2">
                        <HiChevronRight className="text-slate-600 text-xl md:text-xxl lg:text-xxxl" />
                            <p className='text-slate-600 font-semibold'>ニュース</p>
                        </div>
                        </Link>
                        </li>

                        <div className="lg:hidden w-full flex items-center">
                        <div className="flex-1 border-b border-slate-500-20"></div>  
                        </div>

                        <li className="w-full h-10">
                        <Link href="/contact"
                        className="
                        w-full h-full inline-block
                        flex justify-center items-center
                        ">
                        <div className="w-full flex justify-start lg:justify-center items-center gap-5 lg:gap-2">
                        <HiChevronRight className="text-slate-600 text-xl md:text-xxl lg:text-xxxl" />
                            <p className='text-slate-600 font-semibold'>お問い合わせ</p>
                        </div>
                        </Link>
                        </li>
                    </ul>

                    <div className='
                    pt-6 mb-2
                    flex flex-col justify-center items-center gap-2
                    '>
                        <Link href="#">
                            <p className='text-xxs lg:text-xs text-slate-600'>プライバシーポリシー</p>
                        </Link>
                        <small className='text-xxs lg:text-xs text-slate-400'><span className="text-slate-400">©</span>&nbsp;2023&nbsp;株式会社エムパッケージ</small>
                    </div>

                </nav>
            
        </div>
        
    )
}