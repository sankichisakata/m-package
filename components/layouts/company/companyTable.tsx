import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";
import { SlideInRight } from "@/components/elements/observer/slideInRight";

export default function CompanyTable () {
    return(
        <>
            <div className="
            overflow-hidden
            w-full h-full 
            pt-14 md:pt-20
            flex flex-col justify-center items-center
            ">
                <div className="w-11/12 mx-auto">
                    <FadeInBack>
                        <div className="
                        bg-primary-color
                        w-full lg:w-11/12 h-auto p-2 md:p-4 mx-auto
                        flex flex-col justify-center items-center
                        text-white [font-size:_clamp(1.2rem,3vw,2.5rem)] font-bold
                        ">
                            <p>会社概要</p>
                        </div>
                        <div className="
                            w-full lg:w-11/12 mx-auto relative
                            
                            before:absolute 
                            before:bg-white
                            before:border-[0.2rem] before:border-primary-color
                            before:top-[-2rem] before:md:top-[-3rem] 
                            before:left-[0.5rem] before:md:left-[1rem]
                            before:w-full
                            before:h-[3rem] before:md:h-[5rem]
                            before:z-[-1]
                            ">
                        </div>
                    </FadeInBack>
                </div>

                {/* テーブルコンテナ */}
                <div className="
                    w-11/12 lg:w-10/12 max-w-5xl h-auto pl-2 py-10 md:p-10 md:my-10 lg:my-16 mx-auto
                    flex flex-col justify-center items-center
                    text-xs md:text-sm lg:text-base font-semibold
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
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start
                                        ">
                                           社名
                                        </p>
                                        </FadeInBack>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <SlideInRight>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            株式会社エムパッケージ
                                        </p>
                                        </SlideInRight>
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
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start
                                        ">
                                           所在地
                                        </p>
                                        </FadeInBack>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <SlideInRight>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            埼玉県川口市末広2-7-15
                                        </p>
                                        </SlideInRight>
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
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start
                                        ">
                                           設立
                                        </p>
                                        </FadeInBack>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <SlideInRight>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            2022年4月
                                        </p>
                                        </SlideInRight>
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
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start
                                        ">
                                           代表取締役
                                        </p>
                                        </FadeInBack>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <SlideInRight>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            渡辺&emsp;久人
                                        </p>
                                        </SlideInRight>
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
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start
                                        ">
                                           資本金
                                        </p>
                                        </FadeInBack>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <SlideInRight>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            100万円
                                        </p>
                                        </SlideInRight>
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
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start
                                        ">
                                           従業員数
                                        </p>
                                        </FadeInBack>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <SlideInRight>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            4名
                                        </p>
                                        </SlideInRight>
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
                                        <FadeInBack>
                                        <p className="
                                        flex justify-start
                                        ">
                                           事業内容
                                        </p>
                                        </FadeInBack>
                                    </div>

                                    <div className="
                                    w-9/12 md:w-8/12
                                    flex justify-start items-center
                                    ">
                                        <SlideInRight>
                                        <p className="
                                        flex justify-start items-center
                                        text-xl md:text-xxl lg:text-xxxl font-bold
                                        ">
                                            段ボール製品の製造・加工及び販売、紙加工製品の設計及びコンサルティング業務、梱包・物流業務の代行
                                        </p>
                                        </SlideInRight>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )

}