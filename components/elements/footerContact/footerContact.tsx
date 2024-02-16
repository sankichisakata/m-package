
import Link from 'next/link'
import { HiArrowRight, HiMail } from "react-icons/hi";
import FooterMap from '../footerMap/footerMap';
import { FadeInBack } from '../observer/fadeInBack';

export default function FooterContact () {
    return (
        
        <div 
        className='
        w-full mx-auto py-5
        '
        >
            <FadeInBack>
            <div
            className="
            w-full mx-auto
            bg-sub-color
            flex justify-center-items-center
            "
            >
                <div className="
                overflow-hidden
                hidden md:block
                rounded-l-md shadow-inner
                h-auto md:w-1/2
                flex justify-center items-center
                ">
                    <FooterMap/>
                </div>

                <Link 
                href="/contact/"
                className="
                w-full md:w-1/2 px-5 py-10 md:py-14 lg:py-24
                flex flex-col justify-center gap-5 lg:gap-8
                hover:bg-sub-color/10 text-slate-600
                rounded-r-md
                transition-all duration-500
                "
                >
                    
                    <div className='flex flex-col justify-center items-center text-white'>
                        <p className="[font-size:_clamp(1.2rem,3vw,2.5rem)] text-center font-bold">お気軽にご相談ください</p>
                        {/* <p className="text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold">CONTACT</p> */}
                    </div>
                    

                    
                    <div className="text-center text-white text-xs md:text-base lg:text-xl font-bold">
                        <p>梱包から配送まで</p>
                        <p>エムパッケージにお任せください。</p>
                    </div>
                   

                    
                    {/* 電話お問い合わせ */}
                    <div className="text-center text-white text-xxs md:text-sm lg:text-lg">
                        <p>お急ぎの方は、電話でお問い合わせ</p>
                        <p className="text-base lg:text-lg font-semibold">048-287-8055</p>
                        <p>平日 9:00 ~ 17:30</p>
                    </div>

                    {/* 問い合わせボタン */}
                    <div className="
                    w-full md:w-4/6 max-w-[24rem] h-[3.5rem] md:h-[5rem] mx-auto
                    text-white text-sm md:text-base lg:text-xl font-bold
                    ">
                        <div className="
                        flex justify-between items-center 
                        px-3 md:px-5
                        bg-white 
                        border border-sub-color rounded-full shadow-lg
                        text-sub-color
                        ">
                            <HiMail className="rounded-full p-1 bg-sub-color border-2 border-sub-color text-white text-xxxl lg:text-[2rem]"/>
                            <p className="py-4 lg:py-6 font-bold">お問い合わせ</p>
                            <HiArrowRight className="text-sub-color text-xl lg:text-xxxl" />
                        </div>
                    </div>

                </Link>
               
                </div>
            </FadeInBack>
        </div>
    )
}