import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";
import Link from "next/link";
import { HiChevronDoubleRight, HiChevronRight, HiLogout } from "react-icons/hi";


export default function HomeService () {
    return(
        <>
            <div 
            className='
            relative
            w-full h-full mx-auto py-16 lg:py-24
            flex flex-col justify-center items-center gap-5 md:gap-8
            '
            >
                <p className="absolute z-[-1] md:[writing-mode:vertical-lr] text-slate-400/10 top-0 left-0 font-semibold text-[4rem] md:text-[6rem] lg:text-[9rem]">We work it</p>

                <div className="w-full">
                    <SlideInLeft>
                    <div className="
                    w-11/12 mx-auto relative

                    before:absolute
                    before:bg-white
                    before:bottom-[-1rem] before:md:bottom-[-1.5rem] 
                    before:left-[0.5rem] before:md:left-[1rem]
                    before:w-full before:lg:w-10/12
                    before:h-[3rem] before:md:h-[5rem]
                    before:border-[0.2rem] before:border-sub-color
                    before:z-[-10]
                    ">
                            <div className="mx-auto w-full lg:w-10/12 bg-sub-color">
                                <div className="p-2 md:p-4">
                                    <p className="[font-size:_clamp(1.2rem,3vw,2.5rem)] text-center font-bold text-white">エムパッケージの仕事</p>
                                </div>
                            </div>
                    </div>
                    </SlideInLeft>
                </div>
                
                <div className="w-11/12 h-auto">
                <FadeInBack>
                    <div className="mx-auto w-full lg:w-10/12">
                        <p className="text-base md:text-lg lg:text-xxl font-bold p-2 md:p-4">「まごころを込めて、守ります。」</p>
                    </div>
                </FadeInBack>
                </div>

                <div
                className="
                w-11/12 md:w-10/12 h-auto
                flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-20
                "
                >
                    <FadeInBack>
                    <div 
                    className="
                    w-full lg:w-10/12 mx-auto pl-2 md:pl-4
                    font-semibold
                    border-l-[0.2rem] border-primary-color
                    flex flex-col gap-3
                    text-xs md:text-sm lg:text-base
                    ">
                        <p>株式会社エムパッケージでは、<span className="text-vivid-color">ダンボールの設計・企画から製造、納品までを一貫して</span>行なっております。</p>
                        <p>先代から引き継いだ技術で<span className="text-vivid-color">質の高い段ボールとサービス</span>を提供することをお約束します。</p>
                        <p>オリジナルアイテムや梱包品に合わせたサイズの作成など、<span className="text-vivid-color">応えられないご要望はございません。</span></p>
                        <p>まずはお気軽にお問い合わせください。</p>
                    </div>
                    </FadeInBack>
                        
                
                    
                    <div className="w-full h-full flex flex-col items-center">
                        {/* 背景 */}
                        <div className="
                        w-full lg:w-10/12 h-full flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-14 text-md

                        before:absolute 
                        before:bottom-0 before:right-0
                        before:w-10/12 before:md:w-9/12
                        before:h-[40rem] before:md:h-[30rem]  before:lg:h-[40rem] 
                        before:bg-slate-400/20 before:z-[-10] before:rounded-l-lg
                        ">
                            
                            {/* 事業内容 */}
                            <FadeInBack>
                            <div 
                            className="
                            group
                            w-full h-[15rem] lg:h-[20rem]
                            flex flex-col justify-around items-center gap-5 
                            bg-cardboard02 bg-center bg-cover rounded-md shadow-lg
                            ">
                                <Link className="w-full h-full" href="/service">
                                <div className="
                                w-full h-full p-5
                                flex flex-col justify-center items-center gap-5 
                                rounded-md
                                bg-slate-600/20
                                ">
                                    <div className="w-full h-full text-sm md:text-base text-white">
                                        <p className="font-semibold">事業内容</p>
                                        <p className="text-xxs md:text-xs">Our Service</p>
                                        {/* <p>梱包材コンサル企業です。</p>
                                        <p>企画・製造・配送・販売をワンストップで行います。</p> */}
                                    </div>
                                    <div 
                                    className="
                                    bg-white lg:group-hover:bg-green-600 transition duration-500
                                    w-full md:w-3/6 h-[4rem]  
                                    lg:group-hover:text-white
                                    border lg:group-hover:border-green-600 rounded-full
                                    flex justify-center items-center gap-5
                                    font-semibold
                                    ">
                                        <p className="text-sm">詳しく見る</p>
                                        <HiChevronDoubleRight/>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            </FadeInBack>
                            
                            

                            {/* 設備一覧 */}
                            <FadeInBack>
                            <div 
                            className="
                            group
                            w-full h-[15rem] lg:h-[20rem]
                            flex flex-col justify-around items-center gap-5 
                            bg-equipment02 bg-center bg-cover rounded-md shadow-lg
                            ">
                                <Link className="w-full h-full" href="/equipment">
                                <div className="
                                w-full h-full p-5
                                flex flex-col justify-center items-center gap-5 
                                rounded-md
                                bg-slate-600/10
                                ">
                                    <div className="w-full h-full text-sm md:text-base text-white">
                                        <p className="font-semibold">設備一覧</p>
                                        <p className="text-xxs md:text-xs">Equipment</p>
                                    </div>
                                    <div 
                                    className="
                                    bg-white lg:group-hover:bg-green-600 transition duration-500
                                    w-full md:w-3/6 h-[4rem] 
                                    lg:group-hover:text-white
                                    border lg:group-hover:border-green-600 rounded-full
                                    flex justify-center items-center gap-5
                                    font-semibold
                                    ">
                                        <p className="text-sm">詳しく見る</p>
                                        <HiChevronDoubleRight/>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            </FadeInBack>
                        </div>
                    </div>

                </div>
            </div> 
        </>
    )
}