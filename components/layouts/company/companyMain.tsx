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
                        rounded-md shadow-lg
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
                            多種多様なご要望にお応えするべく、日々新しい機械の導入をしております。
                        </p>
                        </FadeInBack>

                        <div className="
                        text-xs md:text-sm lg:text-base font-semibold
                        flex flex-col justify-center gap-2
                        ">
                            <SlideInLeft>
                            <p>一般的な段ボール（※名前）をはじめ、弊社は梱包にまつわることは何でも行います。</p>
                            </SlideInLeft>

                            <SlideInLeft>
                            <p>食品から衣類、医療品や精密機械など、様々な商品に適した段ボールを製造することが可能でございます。</p>
                            </SlideInLeft>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}