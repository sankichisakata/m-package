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
                          「いつも、身近に、皆様と共に。」
                        </p>
                        </FadeInBack>

                        <div className="
                        text-xs md:text-base lg:text-xl font-bold
                        flex flex-col justify-center gap-2 md:gap-5
                        ">
                            <SlideInLeft>
                            <p>
                                埼玉で50年、お客様と共に段ボール業をさせていただいております。
                            </p>
                            </SlideInLeft>

                            <SlideInLeft>
                            <p>
                                先代から引き継いだ技術と信頼で、これからも皆様の隣でお手伝いさせていただけることに感謝し、より一層精進して参ります。
                            </p>
                            </SlideInLeft>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}