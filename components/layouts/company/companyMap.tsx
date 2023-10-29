import GoogleMap from "@/components/elements/googleMap/googleMap";
import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInRight } from "@/components/elements/observer/slideInRight";


export default function CompanyMap () {
    return(
        <>
            <div className="
            bg-gray-100
            w-full h-full
            py-14 md:py-20
            flex flex-col justify-center items-center
            ">
                <div className="w-11/12 mx-auto">
                    <FadeInBack>
                    <div className="
                    w-full lg:w-11/12 h-auto p-2 md:p-4 mx-auto
                    flex flex-col justify-center items-center
                    border-[0.2rem] border-primary-color
                    text-primary-color [font-size:_clamp(1.2rem,3vw,2.5rem)] font-bold
                    ">
                        <p>アクセス</p>
                    </div>
                    </FadeInBack>
                </div>

                
                <div className="
                    w-11/12 lg:w-10/12 max-w-5xl 
                    pl-2 md:p-10 my-10 md:my-14 lg:my-20 mx-auto
                    flex flex-col justify-center items-center gap-10 md:gap-16 lg:gap-20
                    text-xs md:text-sm lg:text-base font-semibold
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
                                    所在地
                                </p>
                                </FadeInBack>
                            </div>

                            <div className="
                            w-9/12 md:w-8/12
                            flex justify-start items-center
                            ">
                                <SlideInRight>
                                <div className="
                                flex justify-start items-start
                                text-xl md:text-xxl lg:text-xxxl font-bold
                                ">
                                    <p>〒332-0006
                                        <span className="md:hidden"><br/></span>
                                        <span className="hidden md:inline-block">&emsp;</span>埼玉県川口市末広2-7-15
                                    </p>
                                </div>
                                
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
                                    電車
                                </p>
                                </FadeInBack>
                            </div>

                            <div className="
                            w-9/12 md:w-8/12
                            flex justify-start items-center
                            ">
                                <SlideInRight>
                                <div className="
                                flex flex-col justify-start items-start
                                text-xl md:text-xxl lg:text-xxxl font-bold
                                ">
                                    <p>加賀ICより車で10分</p>
                                </div>
                                
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
                                    バス
                                </p>
                                </FadeInBack>
                            </div>

                            <div className="
                            w-9/12 md:w-8/12
                            flex justify-start items-center
                            ">
                                <SlideInRight>
                                <div className="
                                flex flex-col justify-start items-start
                                text-xl md:text-xxl lg:text-xxxl font-bold
                                ">
                                    <p>JR京浜東北線&nbsp;川口駅
                                        <span className="md:hidden"><br/></span>
                                        <span className="hidden md:inline-block">&emsp;</span>
                                        峯八幡宮行きバス
                                    </p>
                                    <p>「十二月田中学校」バス停
                                        <span className="md:hidden"><br/></span>
                                        <span className="hidden md:inline-block">&emsp;</span>
                                        下車すぐ
                                    </p>
                                </div>
                                
                                </SlideInRight>
                            </div>
                        </div>
                </div>

                <div 
                    className="
                    w-full md:w-11/12 max-w-5xl h-[20rem] md:h-[30rem] lg:h-[40rem]
                    ">
                    <GoogleMap/>
                </div>
            

            </div>
        </>
    )

}