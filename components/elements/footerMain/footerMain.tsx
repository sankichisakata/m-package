
import Link from 'next/link';
import { HiChevronRight, HiMail, HiOutlineMenu, HiOutlineX} from "react-icons/hi";
import MenuList from '../menuList/menuList';

export default function FooterMain () {
    return(
        <div
        className='bg-gray-900 w-full h-full'
        >

            <div className="
                bg-tell01 bg-cover bg-top
                w-10/12 md:w-8/12 h-auto mx-auto 
                rounded-md
                ">                        
                </div>

                <nav className='
                w-11/12 mx-auto
                flex flex-col justify-center items-center
                '
                >

                    <ul className="
                    w-full md:w-8/12 pt-6
                    text-sm
                    flex flex-col justify-center items-center
                    "
                    >
                        <li className="w-full h-10">
                        <Link href="/service"
                        className="
                        w-full h-full inline-block 
                        flex justify-center items-center">
                        <div className="w-full flex justify-start items-center gap-5">
                            <HiChevronRight className="text-slate-600 text-xxxl" />
                            <p className='text-slate-600 font-semibold'>事業内容</p>
                        </div>
                        </Link>
                        </li>

                        <div className="w-full flex items-center">
                        <div className="flex-1 border-b border-slate-500-20"></div>  
                        </div>

                        <li className="w-full h-10">
                        <Link href="/equipment"
                        className="
                        w-full h-full inline-block
                        flex justify-center items-center
                        ">
                        <div className="w-full flex justify-start items-center gap-5">
                        <HiChevronRight className="text-slate-600 text-xxxl" />
                            <p className='text-slate-600 font-semibold'>設備案内</p>
                        </div>
                        </Link>
                        </li>

                        <div className="w-full flex items-center">
                        <div className="flex-1 border-b border-slate-500-20"></div>  
                        </div>

                        <li className="w-full h-10">
                        <Link href="/company"
                        className="
                        w-full h-full inline-block
                        flex justify-center items-center">
                        <div className="w-full flex justify-start items-center gap-5">
                        <HiChevronRight className="text-slate-600 text-xxxl" />
                            <p className='text-slate-600 font-semibold'>会社概要</p>
                        </div>
                        </Link>
                        </li>

                        <div className="w-full flex items-center">
                        <div className="flex-1 border-b border-slate-500-20"></div>  
                        </div>

                        <li className="w-full h-10">
                        <Link href="/contact"
                        className="
                        w-full h-full inline-block
                        flex justify-center items-center
                        ">
                        <div className="w-full flex justify-start items-center gap-5">
                        <HiChevronRight className="text-slate-600 text-xxxl" />
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
                                    <p className='text-xxs text-slate-600'>プライバシーポリシー</p>
                        </Link>
                        <small className='text-xxs text-slate-400'><span className="text-slate-400">©</span>&nbsp;2023&nbsp;株式会社エムパッケージ</small>
                    </div>

                </nav>
            
        </div>
        
    )
}