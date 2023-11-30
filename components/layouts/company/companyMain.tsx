import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";

export default function CompanyMain () {
    return(
        <>
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
                          お客様を第一に 「親切・迅速・丁寧」を常に心掛けております。
                        </p>
                        </FadeInBack>

                        <div className="
                        text-xs md:text-sm lg:text-base font-semibold
                        flex flex-col justify-center gap-2
                        ">
                            <SlideInLeft>
                            <p>
                                埼玉で40年、お客様と共に段ボール業をさせていただいております。
                            </p>
                            </SlideInLeft>
                            <SlideInLeft>
                            <p>
                                先代から引き継いだ技術と熱意で、これからも皆様の隣でお手伝いさせていただけることに感謝いたします。
                            </p>
                            </SlideInLeft>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}