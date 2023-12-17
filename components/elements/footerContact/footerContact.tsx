
import Image from 'next/image'
import Link from 'next/link'
import { HiMail } from "react-icons/hi";
import equipment01 from '@/public/img/equipment01.jpg'
import { SlideInLeft } from '../observer/slideInLeft';
import FooterMap from '../footerMap/footerMap';

export default function FooterContact () {
    return (
        
        <div 
        className='
        w-full mx-auto py-5
        '
        >
            <SlideInLeft>
            <div
            className="
            w-11/12 lg:w-10/12 mx-auto
            flex justify-center-items-center
            border-2 border-primary-color
            shadow-lg rounded-md
            bg-white
            "
            >
                
                {/* <div 
                className='
                overflow-hidden
                hidden md:block shadow-inner
                h-auto md:w-1/2 relative
                flex justify-center items-center
                '
                >
                    <Image 
                    className='group-hover:scale-110 transition-all delay-100 duration-500 inline-block aspect-[4/3]'
                    src={equipment01}
                    alt="equipment" 
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    placeholder='blur'
                    style={{ objectFit: "cover" }}
                    />
                </div> */}
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
                href="/contact"
                className="
                w-full md:w-1/2 px-5 py-6 lg:py-10 
                flex flex-col justify-center gap-5 lg:gap-8
                hover:bg-sub-color/10 text-slate-600
                rounded-r-md
                transition-all duration-500
                "
                >
                    
                    <div className='flex flex-col justify-center items-center font-semibold'>
                        <p className="text-xl lg:text-xxxl text-center">お問い合わせ</p>
                        <p className="text-xs">CONTACT</p>
                    </div>
                    

                    
                    <div className="text-xl lg:text-xxl text-center font-bold">
                        <p>お気軽にご相談ください</p>
                    </div>
                   

                    
                    {/* 電話お問い合わせ */}
                    <div className="text-center text-xs lg:text-sm">
                        <p>お急ぎの方は、電話でお問い合わせ</p>
                        <p className="text-base lg:text-lg font-semibold">048-287-8055</p>
                        <p>平日 9:00 ~ 17:30</p>
                    </div>

                    {/* メール問い合わせ */}
                    <div className="text-center">
                        <p className='text-xs lg:text-sm font-semibold'>お問い合わせはこちらから</p>

                        <div className='w-full lg:w-[20rem] mx-auto pt-4 lg:pt-6'>
                                <div className="flex justify-center items-center bg-sub-color border border-sub-color rounded-full">
                                    <p className="px-3 lg:px-10 py-3 lg:py-4 text-white text-base lg:text-lg font-semibold">お問い合わせ</p>
                                    <HiMail className="border-slate-800 rounded-full p-1 m-1 lg:m-2 bg-white text-xxxl lg:text-[2rem]"/>
                                </div>
                        </div>
                    </div>



                </Link>
               
                </div>
            {/* <div className="w-full md:w-7/12 lg:w-9/12 flex items-center mx-auto pt-5">
                 <div className="flex-1 border-b-2 border-slate-500"></div>  
            </div> */}
            </SlideInLeft>
        </div>
    )
}