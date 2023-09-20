
import Image from 'next/image'
import Link from 'next/link'
import { HiMail } from "react-icons/hi";
import equipment01 from '@/public/img/equipment01.jpg'
import { FadeInBack } from '../observer/fadeInBack';
import { SlideInLeft } from '../observer/slideInLeft';

export default function FooterContact () {
    return (
        
        <div 
        className='
        bg-slate-600 w-full mx-auto py-5
        '
        >
            <FadeInBack>
            <Link 
            href="/contact" 
            className="w-11/12 md:w-7/12 lg:w-9/12 mx-auto lg:p-5

            flex justify-center-items-center
            shadow-md rounded-md
            group transition-all duration-500
            bg-white hover:bg-slate-300
            ">
                
                <div 
                className='
                overflow-hidden
                hidden lg:block shadow-inner
                h-auto lg:w-1/2 relative
                flex justify-center items-center
                '
                >
                    <Image 
                    className='group-hover:scale-110 transition-all delay-100 duration-500 inline-block aspect-[4/3]'
                    src={equipment01}
                    alt="equipment" 
                    fill
                    placeholder='blur'
                    style={{ objectFit: "cover" }}
                    />
                </div>

                <div className="
                w-full lg:w-1/2 px-5 py-6 lg:py-10 text-slate-600
                flex flex-col justify-center gap-5 lg:gap-8
                "
                >
                    <SlideInLeft>
                    <div className='flex flex-col justify-center items-center font-semibold'>
                        <p className="text-base lg:text-lg text-center">お問い合わせ</p>
                        <p className="text-xs lg:text-sm">CONTACT</p>
                    </div>
                    </SlideInLeft>

                    <SlideInLeft>
                    <div className="text-xxs lg:text-xs text-center font-medium">
                        <p>お客様のご要望に応じた様々なご提案が可能でございます。</p>
                        <p>お気軽にご相談ください。</p>
                    </div>
                    </SlideInLeft>

                    <SlideInLeft>
                    {/* 電話お問い合わせ */}
                    <div className="text-center text-xxs lg:text-xs">
                        <p>電話でのお問い合わせ</p>
                        <p className="text-xs lg:text-sm font-semibold">048-287-8055</p>
                        <p>平日 9:00 ~ 17:30</p>
                    </div>
                    </SlideInLeft>

                    <SlideInLeft>
                    {/* メール問い合わせ */}
                    <div className="text-center">
                        <p className='text-xs lg:text-base font-semibold'>お問い合わせはこちらから</p>

                        <div className='w-40 lg:w-60 mx-auto py-2 lg:py-4'>
                                <div className="flex justify-center items-center border border-slate-500/20 rounded-full">
                                    <p className="px-3 lg:px-10 py-2 lg:py-4 text-sm lg:text-base font-semibold">お問い合わせ</p>
                                    <HiMail className="border-slate-800 rounded-full p-1 m-1 lg:m-2 bg-slate-800 text-white text-xxxl lg:text-[2rem]"/>
                                </div>
                        </div>
                    </div>
                    </SlideInLeft>


                </div>
               
                </Link>
                </FadeInBack>
            {/* <div className="w-full md:w-7/12 lg:w-9/12 flex items-center mx-auto pt-5">
                 <div className="flex-1 border-b-2 border-slate-500"></div>  
            </div> */}
        </div>
    )
}