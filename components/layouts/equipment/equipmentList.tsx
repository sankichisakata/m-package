import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";
import { SlideInRight } from "@/components/elements/observer/slideInRight";


export default function EquipmentList () {
    return(
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
                    border-[0.2rem] border-sub-color
                    text-sub-color [font-size:_clamp(1.2rem,3vw,2.5rem)] font-bold
                    ">
                        <p>設備一覧</p>
                    </div>
                    </FadeInBack>

                    <FadeInBack>
                    <div className="
                    bg-sub-color
                    w-full lg:w-11/12 h-auto p-2 md:p-4 mx-auto
                    flex flex-col justify-center items-center
                    border-[0.2rem] border-sub-color
                    text-white text-[1.1rem] md:text-[1.5rem] lg:text-[1.8rem] font-bold
                    ">
                        <p>
                            お客様の製品を技術で丁寧に。
                        </p>
                    </div>
                    </FadeInBack>
                </div>

                <FadeInBack>
                <div className="
                    z-10 bg-white top-0
                    w-11/12 lg:w-10/12 max-w-5xl h-[10rem] p-8 md:p-10 my-10 md:my-14 lg:my-20 mx-auto
                    rounded-sm
                    flex flex-col justify-center items-center gap-2
                    text-xs md:text-sm lg:text-base font-semibold
                    ">
                        <p className="text-xxl">設備に対する熱意か設備情報のテーブルを記載する。</p>
                    <p>弊社では1人の営業がすべての工程を管理する<span className="text-vivid-color">「ノンステップ管理」</span>をしております。</p>
                    <p>必要な情報を迅速にお伝えし、最短でお客様の問題を解決致します。</p>
                </div>
                </FadeInBack>

                <div className="
                w-full h-auto 
                flex justify-center items-center 
                ">
                    {/* テーブル */}
                    <div className="
                    w-11/12 lg:w-10/12 h-auto py-10
                    flex flex-col md:flex-row flex-wrap justify-start items-center gap-2 md:gap-0
                    text-xs md:text-sm lg:text-base font-semibold
                    ">
                        {/* リスト① */}
                        <div className="
                        rounded-md
                        w-full md:w-1/2 
                        ">
                            <SlideInLeft>
                            <div className="
                            bg-white m-2
                            rounded-sm shadow-md
                            ">
                                <div className="
                                overflow-hidden
                                ">
                                    <div 
                                    className="
                                    w-full h-[16rem] md:h-[20rem] lg:h-[24rem]
                                    aspect-[4/6]
                                    rounded-t-sm
                                    bg-factory01 bg-center bg-cover
                                    flex justify-center items-center
                                    ">
                                    </div>
                                </div>
                                <div className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-1
                                ">
                                    <p className="
                                    pb-5
                                    text-vivid-color text-base md:text-lg lg:text-xl font-bold">【マシン名】</p>
                                    <div className="pl-2 md:pl-5 border-l-2 border-primary-color">
                                    <p>1何をする機械か？</p>
                                    <p>2何ができる機械か？</p>
                                    <p>マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明</p>
                                    <p>その他備考</p>
                                    </div>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>

                        {/* リスト② */}
                        <div className="
                        rounded-md
                        w-full md:w-1/2 
                        ">
                            <SlideInLeft>
                            <div className="
                            bg-white m-2
                            rounded-sm shadow-md
                            ">
                                <div className="
                                overflow-hidden
                                ">
                                    <div 
                                    className="
                                    w-full h-[16rem] md:h-[20rem] lg:h-[24rem]
                                    aspect-[4/6]
                                    rounded-t-sm
                                    bg-factory01 bg-center bg-cover
                                    flex justify-center items-center
                                    ">
                                    </div>
                                </div>
                                <div className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-1
                                ">
                                    <p className="
                                    pb-5
                                    text-vivid-color text-base md:text-lg lg:text-xl font-bold">【マシン名】</p>
                                    <div className="pl-2 md:pl-5 border-l-2 border-primary-color">
                                    <p>1何をする機械か？</p>
                                    <p>2何ができる機械か？</p>
                                    <p>マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明</p>
                                    <p>その他備考</p>
                                    </div>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>

                        {/* リスト③ */}
                        <div className="
                        rounded-md
                        w-full md:w-1/2 
                        "> 
                            <SlideInLeft>
                            <div className="
                            bg-white m-2
                            rounded-sm shadow-md
                            ">
                                <div className="
                                overflow-hidden
                                ">
                                    <div 
                                    className="
                                    w-full h-[16rem] md:h-[20rem] lg:h-[24rem]
                                    aspect-[4/6]
                                    rounded-t-sm
                                    bg-factory01 bg-center bg-cover
                                    flex justify-center items-center
                                    ">
                                    </div>
                                </div>
                                <div className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-1
                                ">
                                    <p className="
                                    pb-5
                                    text-vivid-color text-base md:text-lg lg:text-xl font-bold">【マシン名】</p>
                                    <div className="pl-2 md:pl-5 border-l-2 border-primary-color">
                                    <p>1何をする機械か？</p>
                                    <p>2何ができる機械か？</p>
                                    <p>マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明</p>
                                    <p>その他備考</p>
                                    </div>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>

                        {/* リスト④ */}
                        <div className="
                        rounded-md
                        w-full md:w-1/2 
                        ">
                            <SlideInLeft>
                            <div className="
                            bg-white m-2
                            rounded-sm shadow-md
                            ">
                                <div className="
                                overflow-hidden
                                ">
                                    <div 
                                    className="
                                    w-full h-[16rem] md:h-[20rem] lg:h-[24rem]
                                    aspect-[4/6]
                                    rounded-t-sm
                                    bg-factory01 bg-center bg-cover
                                    flex justify-center items-center
                                    ">
                                    </div>
                                </div>
                                <div className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-1
                                ">
                                    <p className="
                                    pb-5
                                    text-vivid-color text-base md:text-lg lg:text-xl font-bold">【マシン名】</p>
                                    <div className="pl-2 md:pl-5 border-l-2 border-primary-color">
                                    <p>1何をする機械か？</p>
                                    <p>2何ができる機械か？</p>
                                    <p>マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明</p>
                                    <p>その他備考</p>
                                    </div>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>


                        {/* リスト⑤ */}
                        <div className="
                        rounded-md
                        w-full md:w-1/2 
                        ">
                            <SlideInLeft>
                            <div className="
                            bg-white m-2
                            rounded-sm shadow-md
                            ">
                                <div className="
                                overflow-hidden
                                ">
                                    <div 
                                    className="
                                    w-full h-[16rem] md:h-[20rem] lg:h-[24rem]
                                    aspect-[4/6]
                                    rounded-t-sm
                                    bg-factory01 bg-center bg-cover
                                    flex justify-center items-center
                                    ">
                                    </div>
                                </div>
                                <div className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-1
                                ">
                                    <p className="
                                    pb-5
                                    text-vivid-color text-base md:text-lg lg:text-xl font-bold">【マシン名】</p>
                                    <div className="pl-2 md:pl-5 border-l-2 border-primary-color">
                                    <p>1何をする機械か？</p>
                                    <p>2何ができる機械か？</p>
                                    <p>マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明</p>
                                    <p>その他備考</p>
                                    </div>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>
                        


                    </div>
                </div>

            </div>
    )

}
