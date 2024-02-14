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
                    <SlideInLeft>
                    <div 
                    className="
                    w-full h-[16rem] md:h-[20rem] lg:h-auto
                    aspect-[4/6]
                    bg-factory01 bg-center bg-cover
                    flex justify-center items-center
                    ">
                    </div>
                    </SlideInLeft>
                </div>

                <div
                className="
                w-full lg:w-8/12 h-auto
                flex flex-col justify-center gap-6 lg:gap-10
                ">
                    <p className="
                    text-sub-color text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem]
                    font-bold
                    ">
                        「まごころを込めて、作ります。」
                    </p>

                    <div className="
                    text-sub-color text-xs md:text-base lg:text-xl font-bold
                    flex flex-col justify-center gap-2 md:gap-5
                    ">
                        <p>
                            弊社では、ダンボールの設計・企画から製造、納品までを一貫して行なっております。
                        </p>
                        <p>
                            多種多様な企画品（A式、C式、ヤッコ型等）に対応していることはもちろんのこと、
                        </p>
                        <p>
                            手作業でのこだわりもあり、機械では製造できない規格外の製品（極端に大きい・小さい）にも多数対応しております。
                        </p>
                        <p>
                            小ロット～多ロット（大口）まで多種多様な段ボールの生産が可能です。※ロットは最小1c/sから可能。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}