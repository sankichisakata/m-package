import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import Link from "next/link";
import { HiChevronDoubleRight, HiChevronRight, HiLogout } from "react-icons/hi";


export default function HomeService () {
    return(
        <>
            <div 
            className='
            w-full h-full mx-auto py-16 lg:py-24
            flex justify-center items-center
            '
            >
                <div
                className="
                w-11/12 h-auto
                flex flex-col justify-center items-center gap-6 md:gap-10
                "
                >
                    <FadeInBack>
                    <div className="mx-auto w-full lg:w-10/12 p-2 md:p-4 text-center border-4 border-green-700">
                        <p className="[font-size:_clamp(1.5rem,3vw,2.5rem)] font-bold text-green-700">エムパッケージの仕事</p>
                        <p className="[font-size:_clamp(1rem,3vw,1.1rem)] font-semibold text-green-700">まごころを込めて、守ります。</p>
                    </div>
                    </FadeInBack>
                
                    <FadeInBack>
                    <div 
                    className="
                    w-full lg:w-10/12 mx-auto pl-2 md:pl-4
                    font-semibold
                    border-l-4 border-green-700
                    ">
                        <p className="[font-size:_clamp(0.8rem,2vw,1.5rem)]">
                            先代から引き継いだ技術と3代目のパッションで段ボール業界に革命を起こします。
                        </p>
                        <p className="[font-size:_clamp(0.8rem,2vw,1.5rem)]">食品・精密機械や紙など守る者として日々奮闘して参りました。</p>
                        <p className="[font-size:_clamp(0.8rem,2vw,1.5rem)]">これからも皆様の大事なものを守る者として、段ボールの可能性に挑戦していきます。</p>
                    </div>
                    </FadeInBack>
                        
                
                    
                    <div className="w-full h-full flex flex-col items-center">
                        <div className="w-full lg:w-10/12 h-full flex flex-col md:flex-row justify-center items-center gap-5 text-md">
                            
                            {/* 事業内容 */}
                            <FadeInBack>
                            <div 
                            className="
                            group
                            w-full h-[15rem] lg:h-[20rem]
                            flex flex-col justify-around items-center gap-5 
                            bg-cardboard02 bg-center bg-cover
                            ">
                                <Link className="w-full h-full" href="/service">
                                <div className="
                                w-full h-full p-5
                                flex flex-col justify-center items-center gap-5 
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
                                    w-full md:w-3/6 h-[6rem]  
                                    lg:group-hover:text-white
                                    border lg:group-hover:border-green-600 rounded-full
                                    flex justify-center items-center gap-5
                                    font-semibold
                                    ">
                                        <HiChevronDoubleRight/>
                                        <p>詳しく見る</p>
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
                            bg-equipment02 bg-center bg-cover
                            ">
                                <Link className="w-full h-full" href="/equipment">
                                <div className="
                                w-full h-full p-5
                                flex flex-col justify-center items-center gap-5 
                                bg-slate-600/10
                                ">
                                    <div className="w-full h-full text-sm md:text-base text-white">
                                        <p className="font-semibold">設備一覧</p>
                                        <p className="text-xxs md:text-xs">Equipment</p>
                                    </div>
                                    <div 
                                    className="
                                    bg-white lg:group-hover:bg-green-600 transition duration-500
                                    w-full md:w-3/6 h-[6rem] 
                                    lg:group-hover:text-white
                                    border lg:group-hover:border-green-600 rounded-full
                                    flex justify-center items-center gap-5
                                    font-semibold
                                    ">
                                        <HiChevronDoubleRight/>
                                        <p>詳しく見る</p>
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