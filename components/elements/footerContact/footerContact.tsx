
import Image from 'next/image'
import Link from 'next/link'
import { HiMail } from "react-icons/hi";

export default function FooterContact () {
    return (
        <div 
        className='
        mx-auto w-11/12 md:w-full py-5
        '
        >
            <div className='
            bg-slate-800 w-full md:w-7/12 lg:w-9/12 mx-auto lg:p-5
            flex justify-center-items-center
            shadow-md rounded-md
            '>
            <div 
            className='
            hidden lg:block
            h-auto lg:w-1/2 relative
            flex justify-center items-center
            '
            >
                <Image 
                className='inline-block aspect-[4/3]'
                src="/img/equipment.jpg" 
                alt="equipment" 
                fill
                style={{ objectFit: "cover" }}
                />
            </div>

            <div className="
            w-full lg:w-1/2 px-5 py-6 lg:py-10
            flex flex-col justify-center gap-5 lg:gap-8
            "
            >
                <div className='flex flex-col justify-center items-center font-semibold'>
                    <p className="text-base lg:text-lg text-center">お問い合わせ</p>
                    <p className="text-xs lg:text-sm">CONTACT</p>
                </div>

                <div className="text-xxs lg:text-xs text-center font-medium">
                    <p>お客様のご要望に応じた様々なご提案が可能でございます。</p>
                    <p>お気軽にご相談ください。</p>
                </div>

                {/* 電話お問い合わせ */}
                <div className="text-center text-xxs lg:text-xs">
                    <p>電話でのお問い合わせはこちらから</p>
                    <p  className="text-xs lg:text-sm font-semibold">048-287-8055</p>
                    <p>平日 9:00 ~ 17:30</p>
                </div>

                {/* メール問い合わせ */}
                <div className="text-center">
                    <p className='text-xs lg:text-base font-semibold'>お問い合わせはこちらから</p>

                    <div className='w-full flex justify-center items-center py-3'>
                        <Link href="/contact" className="bg-white rounded-full shadow-md">
                            <div className="flex justify-center items-center">
                                <p className="px-8 lg:px-10 py-2 lg:py-3 text-black text-xs lg:text-base font-semibold">お問い合わせ</p>
                                <HiMail className="border-slate-800 rounded-full p-1 m-1 lg:m-2 bg-slate-800 text-xxxl lg:text-[2rem]"/>
                            </div>
                        </Link>
                    </div>
                </div>


            </div>

            </div>
        </div>
    )
}