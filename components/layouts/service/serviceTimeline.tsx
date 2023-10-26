import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";
import { SlideInRight } from "@/components/elements/observer/slideInRight";

export default function ServiceTimeline () {
    return(
        <>
            <div className="
            w-full h-full
            flex flex-col justify-center items-center
            ">

                <div className="

                w-full h-full
                py-10
                flex flex-col justify-center items-center
                font-bold
                text-[2rem] md:text-[2.5rem] lg:text-[3rem]
                ">
                    <p>業務工程</p>
                </div>

                <div className="
                bg-gray-100 relative
                w-11/12 lg:w-10/12 max-w-5xl h-full
                md:p-5 lg:p-10
                flex flex-col justify-center items-center gap-10
                overflow-hidden
                rounded-lg
                text-xs md:text-sm lg:text-base font-semibold
                ">


                    <div className="
                    z-[1] bg-white top-0
                    w-10/12 h-[10rem] p-5  m-10
                    rounded-md shadow-lg
                    flex flex-col justify-center items-center gap-5
                    ">
                        <p>全工程を一元管理。</p>
                        <p>お客様へ届くまでを逐一報告し、納品まで迅速に行います。</p>
                    </div>

                    {/* ボーダー */}
                    <div className="                    
                    absolute h-full
                    left-[12.5%] md:left-1/2
                    border-2-2 border-gray-500 border"></div>



                    {/* <!-- rightTimeline ① --> */}
                    <div className="w-full mb-8 flex justify-center items-center">

                        <div className="hidden md:block w-5/12 order-1 md:flex-2">
                        <SlideInLeft>
                            <div 
                            className="
                            w-full h-[10rem] md:h-[16rem] lg:h-[20rem]
                            aspect-[4/6]
                            bg-factory01 bg-center bg-cover
                            rounded-md shadow-lg
                            flex justify-center items-center
                            ">
                            </div>
                        </SlideInLeft>
                        </div>

                        
                        <div className="
                        z-[1] 
                        w-[25%] md:w-2/12 md:m-0
                        order-1 
                        ">
                            <FadeInBack>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                                </div>
                            </div>
                            </FadeInBack>
                        </div>

                        <div className="
                        w-[75%] md:w-5/12 p-3 md:p-0
                        order-1
                        ">
                            <SlideInRight>
                            <div className="
                            bg-white
                            rounded-lg shadow-xl">
                                <div className="
                                w-full p-3 md:p-5
                                flex flex-col items-center">
                                    
                                    <div className="w-full flex flex-col items-center">
                                        <h3 className="
                                        mb-3 
                                        text-base md:text-lg lg:text-xl font-bold">ご相談</h3>
                                        <div className="w-full border-2-black"></div>  
                                    </div>
                                    <p className="">長年段ボールに携わった経験と知識で最適なご提案を致します。</p>
                                </div>
                            </div>
                            </SlideInRight>
                        </div>
                    </div>



                    {/* <!-- rightTimeline ② --> */}
                    <div className="w-full mb-8 flex justify-center md:flex-row-reverse items-center">

                        <div className="hidden md:block w-5/12 order-1 md:flex-2">
                        <SlideInRight>
                            <div 
                            className="
                            w-full h-[10rem] md:h-[16rem] lg:h-[20rem]
                            aspect-[4/6]
                            bg-factory01 bg-center bg-cover
                            rounded-md shadow-lg
                            flex justify-center items-center
                            ">
                            </div>
                        </SlideInRight>
                        </div>


                        <div className="
                        z-[1] 
                        w-[25%] md:w-2/12 md:m-0
                        order-1 
                        ">
                            <FadeInBack>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                                </div>
                            </div>
                            </FadeInBack>
                        </div>

                        <div className="
                        w-[75%] md:w-5/12 p-3 md:p-0
                        order-1
                        ">
                            <SlideInLeft>
                            <div className="
                            bg-white
                            rounded-lg shadow-xl">
                                <div className="
                                w-full p-3 md:p-5
                                flex flex-col items-center">
                                    
                                    <div className="w-full flex flex-col items-center">
                                        <h3 className="
                                        mb-3 
                                        text-base md:text-lg lg:text-xl font-bold">お見積もり</h3>
                                        <div className="flex-1 border-b-2 border-slate-500"></div>  
                                    </div>
                                    <p>最短即日、お見積もりをお客様へお送りいたします！</p>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>
                    </div>


                    {/* <!-- rightTimeline ③ --> */}
                    <div className="w-full mb-8 flex justify-center items-center">

                        <div className="hidden md:block w-5/12 order-1 md:flex-2">
                        <SlideInLeft>
                            <div 
                            className="
                            w-full h-[10rem] md:h-[16rem] lg:h-[20rem]
                            aspect-[4/6]
                            bg-factory01 bg-center bg-cover
                            rounded-md shadow-lg
                            flex justify-center items-center
                            ">
                            </div>
                        </SlideInLeft>
                        </div>

                        
                        <div className="
                        z-[1] 
                        w-[25%] md:w-2/12 md:m-0
                        order-1 
                        ">
                            <FadeInBack>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                                </div>
                            </div>
                            </FadeInBack>
                        </div>

                        <div className="
                        w-[75%] md:w-5/12 p-3 md:p-0
                        order-1
                        ">
                            <SlideInRight>
                            <div className="
                            bg-white
                            rounded-lg shadow-xl">
                                <div className="
                                w-full p-3 md:p-5
                                flex flex-col items-center">
                                    
                                    <div className="w-full flex flex-col items-center">
                                        <h3 className="
                                        mb-3 
                                        text-base md:text-lg lg:text-xl font-bold">お見本作成</h3>
                                        <div className="flex-1 border-b-2 border-slate-500"></div>  
                                    </div>
                                    <p className="">お客様のニーズをカタチにします。</p>
                                </div>
                            </div>
                            </SlideInRight>
                        </div>
                    </div>

                    {/* <!-- rightTimeline ④ --> */}
                    <div className="w-full mb-8 flex justify-center md:flex-row-reverse items-center">

                        <div className="hidden md:block w-5/12 order-1 md:flex-2">
                        <SlideInRight>
                            <div 
                            className="
                            w-full h-[10rem] md:h-[16rem] lg:h-[20rem]
                            aspect-[4/6]
                            bg-factory01 bg-center bg-cover
                            rounded-md shadow-lg
                            flex justify-center items-center
                            ">
                            </div>
                        </SlideInRight>
                        </div>


                        <div className="
                        z-[1] 
                        w-[25%] md:w-2/12 md:m-0
                        order-1 
                        ">
                            <FadeInBack>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
                                </div>
                            </div>
                            </FadeInBack>
                        </div>

                        <div className="
                        w-[75%] md:w-5/12 p-3 md:p-0
                        order-1
                        ">
                            <SlideInLeft>
                            <div className="
                            bg-white
                            rounded-lg shadow-xl">
                                <div className="
                                w-full p-3 md:p-5
                                flex flex-col items-center">
                                    
                                    <div className="w-full flex flex-col items-center">
                                        <h3 className="
                                        mb-3 
                                        text-base md:text-lg lg:text-xl font-bold">企画提案</h3>
                                        <div className="flex-1 border-b-2 border-slate-500"></div>  
                                    </div>
                                    <p>最終調整を行い、生産へ参ります。</p>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>
                    </div>



                    {/* <!-- rightTimeline ⑤ --> */}
                    <div className="w-full mb-8 flex justify-center items-center">

                        <div className="hidden md:block w-5/12 order-1 md:flex-2">
                        <SlideInLeft>
                            <div 
                            className="
                            w-full h-[10rem] md:h-[16rem] lg:h-[20rem]
                            aspect-[4/6]
                            bg-factory01 bg-center bg-cover
                            rounded-md shadow-lg
                            flex justify-center items-center
                            ">
                            </div>
                        </SlideInLeft>
                        </div>

                        
                        <div className="
                        z-[1] 
                        w-[25%] md:w-2/12 md:m-0
                        order-1 
                        ">
                            <FadeInBack>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
                                </div>
                            </div>
                            </FadeInBack>
                        </div>

                        <div className="
                        w-[75%] md:w-5/12 p-3 md:p-0
                        order-1
                        ">
                            <SlideInRight>
                            <div className="
                            bg-white
                            rounded-lg shadow-xl">
                                <div className="
                                w-full p-3 md:p-5
                                flex flex-col items-center">
                                    
                                    <div className="w-full flex flex-col items-center">
                                        <h3 className="
                                        mb-3 
                                        text-base md:text-lg lg:text-xl font-bold">製造</h3>
                                        <div className="flex-1 border-b-2 border-slate-500"></div>  
                                    </div>
                                    <p>弊社の埼玉工場にて、熟練の職人が採寸・裁断を致します。</p>
                                </div>
                            </div>
                            </SlideInRight>
                        </div>
                    </div>


                    {/* <!-- rightTimeline ⑥ --> */}
                    <div className="w-full mb-8 flex justify-center md:flex-row-reverse items-center">

                        <div className="hidden md:block w-5/12 order-1 md:flex-2">
                        <SlideInRight>
                            <div 
                            className="
                            w-full h-[10rem] md:h-[16rem] lg:h-[20rem]
                            aspect-[4/6]
                            bg-factory01 bg-center bg-cover
                            rounded-md shadow-lg
                            flex justify-center items-center
                            ">
                            </div>
                        </SlideInRight>
                        </div>


                        <div className="
                        z-[1] 
                        w-[25%] md:w-2/12 md:m-0
                        order-1 
                        ">
                            <FadeInBack>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">6</h1>
                                </div>
                            </div>
                            </FadeInBack>
                        </div>

                        <div className="
                        w-[75%] md:w-5/12 p-3 md:p-0
                        order-1
                        ">
                            <SlideInLeft>
                            <div className="
                            bg-white
                            rounded-lg shadow-xl">
                                <div className="
                                w-full p-3 md:p-5
                                flex flex-col items-center">
                                    
                                    <div className="w-full flex flex-col items-center">
                                        <h3 className="
                                        mb-3 
                                        text-base md:text-lg lg:text-xl font-bold">梱包</h3>
                                        <div className="flex-1 border-b-2 border-slate-500"></div>  
                                    </div>
                                    <p>製造しました段ボールを無事お客様のところまでお届けできるよう、丁寧に梱包致します。</p>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>
                    </div>


                    {/* <!-- rightTimeline ⑦ --> */}
                    <div className="w-full mb-8 flex justify-center items-center">

                        <div className="hidden md:block w-5/12 order-1 md:flex-2">
                        <SlideInLeft>
                            <div 
                            className="
                            w-full h-[10rem] md:h-[16rem] lg:h-[20rem]
                            aspect-[4/6]
                            bg-factory01 bg-center bg-cover
                            rounded-md shadow-lg
                            flex justify-center items-center
                            ">
                            </div>
                        </SlideInLeft>
                        </div>

                        
                        <div className="
                        z-[1] 
                        w-[25%] md:w-2/12 md:m-0
                        order-1 
                        ">
                            <FadeInBack>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">7</h1>
                                </div>
                            </div>
                            </FadeInBack>
                        </div>

                        <div className="
                        w-[75%] md:w-5/12 p-3 md:p-0
                        order-1
                        ">
                            <SlideInRight>
                            <div className="
                            bg-white
                            rounded-lg shadow-xl">
                                <div className="
                                w-full p-3 md:p-5
                                flex flex-col items-center">
                                    
                                    <div className="w-full flex flex-col items-center">
                                        <h3 className="
                                        mb-3 
                                        text-base md:text-lg lg:text-xl font-bold">配送</h3>
                                        <div className="flex-1 border-b-2 border-slate-500"></div>  
                                    </div>
                                    <p className="">すぐお客様の声に応えられるよう自社で配送を行っております。</p>
                                </div>
                            </div>
                            </SlideInRight>
                        </div>
                    </div>



                    {/* <!-- rightTimeline ⑧ --> */}
                    <div className="w-full mb-8 flex justify-center md:flex-row-reverse items-center">

                        <div className="hidden md:block w-5/12 order-1 md:flex-2">
                        <SlideInRight>
                            <div 
                            className="
                            w-full h-[10rem] md:h-[16rem] lg:h-[20rem]
                            aspect-[4/6]
                            bg-factory01 bg-center bg-cover
                            rounded-md shadow-lg
                            flex justify-center items-center
                            ">
                            </div>
                        </SlideInRight>
                        </div>


                        <div className="
                        z-[1] 
                        w-[25%] md:w-2/12 md:m-0
                        order-1 
                        ">
                            <FadeInBack>
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">8</h1>
                                </div>
                            </div>
                            </FadeInBack>
                        </div>

                        <div className="
                        w-[75%] md:w-5/12 p-3 md:p-0
                        order-1
                        ">
                            <SlideInLeft>
                            <div className="
                            bg-white
                            rounded-lg shadow-xl">
                                <div className="
                                w-full p-3 md:p-5
                                flex flex-col items-center">
                                    
                                    <div className="w-full flex flex-col items-center">
                                        <h3 className="
                                        mb-3 
                                        text-base md:text-lg lg:text-xl font-bold">納品</h3>
                                        <div className="flex-1 border-b-2 border-slate-500"></div>  
                                    </div>
                                    <p>お客様のもとへ、ドライバーと共に段ボールが到着致します。</p>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>
                    </div>


                    



                    <div className="
                    z-[1] bg-white top-0
                    w-10/12 h-[10rem] p-5  m-10
                    rounded-md shadow-lg
                    flex flex-col justify-center items-center gap-5
                    ">
                        <p>1人の営業がすべての工程を管理「ノンステップ管理」するからこそできる迅速かつ正確な情報伝達。</p>
                        <p>必要な情報を迅速にお伝えし、最短でお客様の問題を解決致します。</p>
                    </div>

                </div>
            </div>
        </>
    )
}