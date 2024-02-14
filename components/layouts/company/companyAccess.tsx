
import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";


export default function CompanyAccess () {
    return(
        <>
            <div className="
            w-full h-full overflow-hidden
            py-4 md:py-10 lg:py-20
            flex flex-col justify-center items-center
            ">
                <div className="w-11/12 mx-auto">
                    <div className="mx-auto w-full bg-white">
                        <div className="p-2 md:p-4 border-x-[0.2rem] border-t-[0.2rem] border-sub-color">
                            <p className="[font-size:_clamp(1.2rem,3vw,2.5rem)] text-center font-bold text-sub-color">アクセス</p>
                        </div>
                    </div>
                    <div className="
                    bg-sub-color
                    w-full h-auto p-2 md:p-4 mx-auto
                    flex flex-col justify-center items-center
                    border-[0.2rem] border-sub-color
                    text-white text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold
                    ">
                        <p>
                            Access
                        </p>
                    </div>
                </div>

                
                <div className="
                    w-11/12 lg:w-10/12 max-w-5xl 
                    pl-2 md:p-10 my-10 md:my-14 lg:my-20 mx-auto
                    flex flex-col justify-center items-center gap-10 md:gap-16 lg:gap-20
                    text-xs md:text-base lg:text-xl font-bold
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
                                    所在地
                                </p>
                                </SlideInLeft>
                            </div>

                            <div className="
                            w-9/12 md:w-8/12
                            flex justify-start items-center
                            ">
                                <FadeInBack>
                                <div className="
                                flex justify-start items-start
                                text-xl md:text-xxl lg:text-xxxl font-bold
                                ">
                                    <p>〒332-0006
                                        <span className="md:hidden"><br/></span>
                                        <span className="hidden md:inline-block">&emsp;</span>埼玉県川口市末広2-7-15
                                    </p>
                                </div>
                                
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
                                    車
                                </p>
                                </SlideInLeft>
                            </div>

                            <div className="
                            w-9/12 md:w-8/12
                            flex justify-start items-center
                            ">                              
                                <FadeInBack>
                                <div className="
                                flex flex-col justify-start items-start
                                text-xl md:text-xxl lg:text-xxxl font-bold
                                ">
                                    <p>加賀ICより車で10分</p>
                                    <p>鹿浜橋ICより車で12分</p>
                                </div>
                                
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
                                    バス
                                </p>
                                </SlideInLeft>
                            </div>

                            <div className="
                            w-9/12 md:w-8/12
                            flex justify-start items-center
                            ">
                                <FadeInBack>
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
                                
                                </FadeInBack>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )

}