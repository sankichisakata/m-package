

import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";


export default function EquipmentMain () {
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
                md:pt-14 lg:pt pb-10 md:pb-24 lg:pb-32
                flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-10 lg:gap-20
                ">
                    <div
                    className="
                    w-full lg:w-8/12 h-auto
                    flex flex-col justify-center gap-6 lg:gap-10
                    ">
                        <FadeInBack>
                        <p className="
                        text-sub-color text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem]
                        font-bold
                        ">
                            「多種多様なご要望にお応え致します。」
                        </p>
                        </FadeInBack>

                        <div className="
                        text-sub-color text-xs md:text-base lg:text-xl font-bold
                        flex flex-col justify-center gap-2 md:gap-5
                        ">
                            <SlideInLeft>
                                <p>
                                弊社は、梱包にまつわることは何でもお手伝い可能でございます。
                                </p>
                            </SlideInLeft>

                            <SlideInLeft>
                                <p>
                                    食品から衣類、医療品や精密機械など、様々な商品に適した段ボールを製造してきました。
                                </p>
                            </SlideInLeft>

                            <SlideInLeft>
                                <p>
                                一般的な段ボール（A式、C式、ヤッコ型等）や規格外のオーダーメイドの段ボールも製造可能な設備が整っております。
                                </p>
                            </SlideInLeft>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
