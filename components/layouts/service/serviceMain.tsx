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
                        「まごころを込めて、守ります。」
                    </p>
                    </FadeInBack>

                    <div className="
                    text-xs md:text-sm lg:text-base font-semibold
                    flex flex-col justify-center gap-2
                    ">
                        <SlideInLeft>
                        <p>ダンボールに対して、真摯に取り組みます。</p>
                        </SlideInLeft>

                        <SlideInLeft>
                        <p>
                            株式会社エムパッケージでは、ダンボールの設計・企画から製造、納品までを一貫して行なっております。
                        </p>
                        </SlideInLeft>

                        <SlideInLeft>
                        <p>先代から引き継いだ技術で質の高い段ボールとサービスを提供することをお約束します。</p>
                        </SlideInLeft>
                            
                        <SlideInLeft>
                        <p>
                            オリジナルアイテムや梱包品に合わせたサイズの作成など、応えられないご要望はございません。
                        </p>
                        </SlideInLeft>
                    </div>
                </div>
            </div>
        </div>
    )
}