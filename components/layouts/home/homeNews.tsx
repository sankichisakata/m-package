import { FadeInBack } from "@/components/elements/observer/fadeInBack";

import { HiChevronDoubleRight } from "react-icons/hi";
import HomeNewsList from "../news/homeNewsList";
import Link from "next/link";

export default function HomeNews () {
    return(
        <div
        className="
        relative bg-sub-color
        w-full h-full mx-auto pt-10 pb-16 lg:py-24
        flex flex-col justify-center items-center gap-5 md:gap-8
        "
        >
            <p className="
            absolute text-slate-400/10 top-0 font-semibold text-[4rem] md:text-[6rem] lg:text-[9rem]
            ">
                News
            </p>

            {/* hero画面とコンテンツ境の白ボーダー */}
            <div className="
            before:absolute 
            before:top-0 
            before:right-0
            before:w-full 
            before:h-1
            before:bg-white ">
            </div>
            
            <div 
            className="
            w-11/12 h-auto 
            flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-28
            ">
                        <div className="mx-auto w-full">
                            <div className="p-2 md:p-4 border-2 border-white">
                                <p className="[font-size:_clamp(1.2rem,3vw,2.5rem)] text-center font-bold text-white">ニュース</p>
                            </div>
                        </div>
            </div>

            <div
                className="
                w-full h-auto
                mt-6 md:mt-10
                flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-20
                "
                >
                    <div className="w-11/12 xl:w-10/12 flex flex-col justify-center items-center gap-4 md:gap-10">

                        <div className="w-full h-full">
                            <HomeNewsList/>
                        </div>

                        <div className="
                        w-full h-full
                        pt-10
                        ">
                            <div
                            className="
                            w-48 md:w-60 lg:w-72 h-[3.5rem] md:h-[5rem] mx-auto
                            border-white border-2 rounded-full shadow-md
                            flex justify-center items-center
                            text-white text-xs md:text-base lg:text-xl font-bold
                            ">
                                <div className="
                                w-full h-full
                                ">
                                    <Link 
                                    href="/news/"
                                    className="
                                    w-full h-full
                                    flex justify-center items-center gap-5"
                                    >
                                        <p>ニュース一覧</p>
                                        <HiChevronDoubleRight/>
                                    </Link>
                                </div> 
                            </div>
                        </div>

                    </div>

                </div>
        </div>

    )
}
