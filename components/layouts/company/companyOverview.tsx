import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";
import { SlideInRight } from "@/components/elements/observer/slideInRight";

export default function CompanyOverview () {
    return(
        <>
            <div className="
            bg-gray-100
            overflow-hidden
            w-full h-full 
            pt-14 md:pt-20
            flex flex-col justify-center items-center
            ">
                <div className="w-11/12 mx-auto">
                            <div className="w-full mx-auto bg-sub-color">
                                <div className="p-2 md:p-4 border-[0.2rem] border-sub-color">
                                    <p className="[font-size:_clamp(1.2rem,3vw,2.5rem)] text-center font-bold text-white">会社概要</p>
                                </div>
                            </div>
                            <div className="
                            bg-white
                            w-full h-auto p-2 md:p-4 mx-auto
                            flex flex-col justify-center items-center
                            border-x-[0.2rem] border-b-[0.2rem] border-sub-color
                            text-sub-color [font-size:_clamp(1.2rem,3vw,2.5rem)] text-center font-bold
                            ">
                                <p>
                                    Overview
                                </p>
                        </div>
                </div>

                {/* テーブルコンテナ */}
                <div className="
                    w-11/12 lg:w-10/12 max-w-5xl h-auto pl-2 py-10 md:p-10 md:my-10 lg:my-16 mx-auto
                    flex flex-col justify-center items-center
                    text-xs md:text-base lg:text-xl font-bold
                    ">
                        {/* テーブル */}
                        <div className="
                        w-full h-auto
                        ">
                            <div className="
                            w-full h-auto
                            flex flex-col justify-center items-center gap-10 md:gap-16 lg:gap-20
                            ">
                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    {/* 空ボックス */}
                                    <div className="hidden md:block w-1/12"></div>
                                    
                                    <div className="
                                    w-3/12 md:w-3/12
                                    flex justify-center 
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start
                                        ">
                                           社名
                                        </p>
                                        </SlideInLeft>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            株式会社エムパッケージ
                                        </p>
                                        </FadeInBack>
                                    </div>
                                </div>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    {/* 空ボックス */}
                                    <div className="hidden md:block w-1/12"></div>
                                    
                                    <div className="
                                    w-3/12 md:w-3/12
                                    flex justify-center 
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start
                                        ">
                                           所在地
                                        </p>
                                        </SlideInLeft>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            埼玉県川口市末広2-7-15
                                        </p>
                                        </FadeInBack>
                                    </div>
                                </div>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    {/* 空ボックス */}
                                    <div className="hidden md:block w-1/12"></div>
                                    
                                    <div className="
                                    w-3/12 md:w-3/12
                                    flex justify-center 
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start
                                        ">
                                           電話番号
                                        </p>
                                        </SlideInLeft>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            （代表）048-287-8055
                                        </p>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            &emsp;FAX&emsp;048-287-8056
                                        </p>
                                        </FadeInBack>
                                    </div>
                                </div>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    {/* 空ボックス */}
                                    <div className="hidden md:block w-1/12"></div>
                                    
                                    <div className="
                                    w-3/12 md:w-3/12
                                    flex justify-center 
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start
                                        ">
                                           設立
                                        </p>
                                        </SlideInLeft>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            2022年1月
                                        </p>
                                        </FadeInBack>
                                    </div>
                                </div>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    {/* 空ボックス */}
                                    <div className="hidden md:block w-1/12"></div>
                                    
                                    <div className="
                                    w-3/12 md:w-3/12
                                    flex justify-center 
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start
                                        ">
                                           代表取締役
                                        </p>
                                        </SlideInLeft>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            渡辺&emsp;久人
                                        </p>
                                        </FadeInBack>
                                    </div>
                                </div>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    {/* 空ボックス */}
                                    <div className="hidden md:block w-1/12"></div>
                                    
                                    <div className="
                                    w-3/12 md:w-3/12
                                    flex justify-center 
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start
                                        ">
                                           資本金
                                        </p>
                                        </SlideInLeft>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            200万円
                                        </p>
                                        </FadeInBack>
                                    </div>
                                </div>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    {/* 空ボックス */}
                                    <div className="hidden md:block w-1/12"></div>
                                    
                                    <div className="
                                    w-3/12 md:w-3/12
                                    flex justify-center 
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start
                                        ">
                                           事業内容
                                        </p>
                                        </SlideInLeft>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            段ボール製品の製造・加工及び販売、紙加工製品の設計及びコンサルティング業務、梱包・物流業務
                                        </p>
                                        </FadeInBack>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )

}