"use client";

import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";

export default function ServiceMain () {
    return(
        <div className="
        w-full h-full
        mx-auto relative
        flex flex-col justify-center items-center
        ">


            <div 
            className="
            w-11/12 lg:max-w-7xl
            pb-10 lg:pb-14
            flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-10 lg:gap-20
            ">
                <div className=" w-full lg:w-4/12 h-[16rem] md:h-[20rem] lg:h-auto">
                    <FadeInBack>
                    <div 
                    className="
                    w-full h-[16rem] md:h-[20rem] lg:h-auto
                    aspect-[4/6]
                    bg-factory01 bg-center bg-cover
                    flex justify-center items-center
                    ">
                    </div>
                    </FadeInBack>
                </div>

                <div
                className="
                w-full lg:w-8/12 h-auto
                flex flex-col justify-center gap-6 lg:gap-10
                ">
                    <FadeInBack>
                    <p className="
                    text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem]
                    font-bold
                    ">
                        「まごころを込めて、作ります。」
                    </p>
                    </FadeInBack>

                    <div className="
                    text-xs md:text-sm lg:text-base font-semibold
                    flex flex-col justify-center gap-2
                    ">
                        <SlideInLeft>
                        <p>
                            株式会社エムパッケージでは、ダンボールの設計・企画から製造、納品までを一貫して行なっております。
                        </p>
                        </SlideInLeft>

                        <SlideInLeft>
                        <p>
                            企画品（A式、C式、ヤッコ型等）はもちろんのこと、規格外のオーダーメイドの段ボールも承ります。
                        </p>
                        </SlideInLeft>

                        <SlideInLeft>
                        <p>
                            手作業でのこだわりもあり、機械では製造できない規格外の製品（極端に大きい・小さい）にも対応しております。
                        </p>
                        </SlideInLeft>

                        <SlideInLeft>
                        <p>
                            小ロット～多ロット（大口）まで多種多様な段ボールの生産が可能です。※ロットは最小1c/sから可能。
                        </p>
                        </SlideInLeft>
                    </div>
                </div>
            </div>
        </div>
    )
}