import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import Link from "next/link";
import { HiChevronDoubleRight, HiChevronRight, HiLogout } from "react-icons/hi";


export default function HomeService () {
    return(
        <>
            <div 
            className='
            bg-white
            relative overflow-hidden
            w-full h-full mx-auto py-16 lg:py-24
            flex flex-col justify-center items-center gap-5 md:gap-8
            '
            >
                <p className="absolute z-[1] md:[writing-mode:vertical-lr] text-slate-400/10 top-0 left-0 font-semibold text-[4rem] md:text-[6rem] lg:text-[9rem]">We work it</p>

                <div className="z-[2] w-full">
                    
                    <div className="
                    w-11/12 mx-auto
                    ">
                            <div className="w-full mx-auto bg-sub-color">
                                <div className="p-2 md:p-4">
                                    <p className="[font-size:_clamp(1.2rem,3vw,2.5rem)] text-center font-bold text-white">エムパッケージの仕事</p>
                                </div>
                            </div>
                        
                            <div className="
                            bg-white
                            w-full h-auto p-2 md:p-4 mx-auto
                            flex flex-col justify-center items-center
                            border-x-2 border-b-2 border-sub-color
                            text-sub-color text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold
                            ">
                                <p>
                                「まごころを込めて、作ります。」
                                </p>
                        </div>
                    </div>
                    
                </div>
                
                <div
                className="
                w-11/12 xl:w-10/12  h-auto
                md:mt-10 lg:mt-20
                flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-20
                "
                >
                    <div 
                    className="
                    w-full mx-auto pl-2 md:pl-4
                    border-l-2 border-sub-color
                    flex flex-col gap-3
                    text-sub-color text-xs md:text-base lg:text-xl font-bold
                    ">
                        <p>株式会社エムパッケージでは、<span className="text-vivid-color">ダンボールの設計・企画から製造、納品までを一貫して</span>行なっております。</p>
                        <p>先代から引き継いだ技術で<span className="text-vivid-color">質の高い段ボールとサービス</span>を提供することをお約束します。</p>
                        <p>オリジナルアイテムや梱包品に合わせたサイズの作成など、<span className="text-vivid-color">応えられないご要望はございません。</span></p>
                        <p>まずはお気軽にお問い合わせください。</p>
                    </div>
                        
                
                    
                    <div className="w-full h-full flex flex-col items-center">
                        {/* 背景 */}
                        <div className="
                        z-[1]
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
                            w-full h-[15rem] lg:h-[24rem]
                            flex flex-col justify-around items-center gap-5 
                            bg-cardboard02 bg-center bg-cover rounded-md shadow-lg
                            ">
                                <Link 
                                className="w-full h-full" 
                                href="/service/"
                                >
                                <div className="
                                w-full h-full p-5
                                flex flex-col items-center gap-5 
                                bg-slate-600/20 rounded-md
                                ">
                                    <div className="w-full h-full text-sm md:text-base text-white">
                                        <p className="font-semibold">事業内容</p>
                                        <p className="text-xxs md:text-xs">Our Service</p>
                                    </div>
                                    <div 
                                    className="
                                    bg-white lg:group-hover:bg-sub-color transition duration-500
                                    w-48 md:w-60 lg:w-72 h-[3rem] md:h-[4rem] lg:h-[5rem] mx-auto
                                    lg:group-hover:text-white
                                    rounded-full
                                    text-sub-color text-xs md:text-base lg:text-lg font-bold
                                    flex justify-center items-center
                                    ">
                                        <div className="
                                        w-full h-full
                                        flex justify-center items-center gap-5
                                        ">
                                            <p>詳しく見る</p>
                                            <HiChevronDoubleRight/>
                                        </div>
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
                            w-full h-[15rem] lg:h-[24rem]
                            flex flex-col justify-around items-center gap-5 
                            bg-equipment02 bg-center bg-cover rounded-md shadow-lg
                            ">
                                <Link 
                                className="w-full h-full" 
                                href="/equipment/"
                                >
                                <div className="
                                w-full h-full p-5
                                flex flex-col items-center gap-5 
                                bg-slate-600/20 rounded-md
                                ">
                                    <div className="w-full h-full text-sm md:text-base text-white">
                                        <p className="font-semibold">設備一覧</p>
                                        <p className="text-xxs md:text-xs">Equipment</p>
                                    </div>
                                    <div 
                                    className="
                                    bg-white lg:group-hover:bg-sub-color transition duration-500
                                    w-48 md:w-60 lg:w-72 h-[3rem] md:h-[4rem] lg:h-[5rem] mx-auto
                                    lg:group-hover:text-white
                                    rounded-full
                                    text-sub-color text-xs md:text-base lg:text-lg font-bold
                                    flex justify-center items-center
                                    ">
                                        <div className="
                                        w-full h-full
                                        flex justify-center items-center gap-5
                                        ">
                                            <p>詳しく見る</p>
                                            <HiChevronDoubleRight/>
                                        </div>
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