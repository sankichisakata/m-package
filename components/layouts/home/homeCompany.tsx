import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";
import { SlideInRight } from "@/components/elements/observer/slideInRight";
import Link from "next/link";
import { HiChevronDoubleRight } from "react-icons/hi";

export default function HomeCompany () {
    return(
        <>
            <div 
            className='
            relative overflow-hidden
            w-full h-full mx-auto py-16 lg:py-24
            flex flex-col justify-center items-center gap-5 md:gap-8
            
            before:absolute 
            before:bottom-0 before:left-0
            before:w-10/12 before:md:w-9/12
            before:h-[30rem] before:md:h-[20rem]  before:lg:h-[25rem] 
            before:bg-slate-400/20 before:z-[-10] before:rounded-r-lg 
            '
            >
                <p className="
                absolute z-[-5] md:mt-[-3rem] md:[writing-mode:vertical-lr] text-slate-400/10 top-0 right-0 font-semibold text-[4rem] md:text-[6rem] lg:text-[9rem]
                ">Company</p>

                
                <div className="w-full">
                    <div className="
                    w-11/12 lg:w-10/12 mx-auto
                    ">
                            <SlideInLeft>
                            <div className="mx-auto w-full bg-white">
                                <div className="p-2 md:p-4 border-[0.2rem] border-sub-color">
                                    <p className="[font-size:_clamp(1.2rem,3vw,2.5rem)] text-center font-bold text-sub-color">株式会社エムパッケージについて</p>
                                </div>
                            </div>
                            </SlideInLeft>

                            <SlideInLeft>
                            <div className="
                            bg-sub-color
                            w-full h-auto p-2 md:p-4 mx-auto
                            flex flex-col justify-center items-center
                            border-[0.2rem] border-sub-color
                            text-white text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold
                            ">
                                <p>
                                「いつも、身近に、皆様と共に。」
                                </p>
                        </div>
                        </SlideInLeft>
                    </div>
                </div>

                <div
                className="
                w-11/12 md:w-10/12 h-auto
                flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-20
                "
                >
                    <div className="w-full lg:w-10/12 flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-14">

                    
                    
                    <div 
                    className="
                    w-full h-auto mx-auto pl-2 md:pl-4 md:pr-6
                    font-semibold
                    border-l-[0.2rem] border-primary-color
                    text-xs md:text-sm lg:text-base
                    ">
                        <FadeInBack>
                        <div className="flex flex-col justify-center gap-3">
                            <p>先代から引き継いだ技術と3代目のパッションで段ボール業界に革命を起こします。</p>
                            <p>食品・精密機械や紙など守る者として日々奮闘して参りました。</p>
                            <p>これからも皆様の大事なものを守る者として、段ボールへ<span className="text-vivid-color">真摯に向き合って参ります。</span></p>
                        </div>
                        </FadeInBack>
                    </div>
                        
                
                    
                    <div className="w-full h-full flex flex-col items-center">
                            
                        {/* 会社概要 */}
                        <FadeInBack>
                        <div 
                        className="
                        group
                        w-full h-[15rem] lg:h-[20rem]
                        flex flex-col justify-around items-center gap-5 
                        bg-service01 bg-center bg-cover rounded-md shadow-lg
                        ">
                            <Link className="w-full h-full" href="/company">
                            <div className="
                            w-full h-full p-5
                            flex flex-col items-center gap-5 
                            bg-slate-600/20 rounded-md
                            ">
                                <div className="w-full h-full text-sm md:text-base">
                                    <p className="font-semibold">会社概要</p>
                                    <p className="text-xxs md:text-xs">Company</p>
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
                                    <div className=" flex justify-center items-center gap-5">
                                        <p className="text-sm">詳しく見る</p>
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
