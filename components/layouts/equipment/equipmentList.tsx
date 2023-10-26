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
                <FadeInBack>
                <div className="
                w-11/12 lg:w-10/12 h-auto p-2 md:p-4 mx-auto
                flex flex-col justify-center items-center
                border-b-[0.2rem] border-primary-color
                text-primary-color text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] font-bold
                ">
                    <p>設備一覧</p>
                </div>
                </FadeInBack>

                <div className="
                w-full h-auto 
                flex justify-center items-center 
                ">
                    {/* テーブル */}
                    <div className="
                    w-11/12 lg:w-10/12 h-auto py-10
                    flex flex-col md:flex-row flex-wrap justify-center items-center gap-2 md:gap-0
                    text-xs md:text-sm lg:text-base font-semibold
                    ">
                        {/* リスト① */}
                        
                        <div className="
                        bg-white
                        rounded-lg
                        w-full md:w-1/2
                        ">
                            <SlideInLeft>
                            <div className="
                            rounded-lg shadow-lg
                            ">
                                <div className="
                                overflow-hidden
                                ">
                                    <div 
                                    className="
                                    w-full h-[16rem] md:h-[20rem] lg:h-[30rem]
                                    aspect-[4/6]
                                    rounded-t-lg
                                    bg-factory01 bg-center bg-cover
                                    flex justify-center items-center
                                    ">
                                    </div>
                                </div>
                                <div className="
                                w-full p-2 lg:p-5
                                flex flex-col justify-center items-start gap-1
                                ">
                                    <p className="
                                    py-5
                                    text-vivid-color text-base md:text-lg lg:text-xl font-bold">【マシン名】</p>
                                    <p>1何をする機械か？</p>
                                    <p>2何ができる機械か？</p>
                                    <p>マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明</p>
                                    <p>その他備考</p>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>

                        {/* リスト② */}
                        <div className="
                        w-full md:w-1/2
                        ">
                            <SlideInRight>
                            <div className="
                            p-5 md:m-2 lg:m-5
                            shadow-lg">
                            <div 
                            className="
                            w-full h-[16rem] md:h-[20rem] lg:h-[30rem]
                            aspect-[4/6]
                            bg-factory01 bg-center bg-cover
                            rounded-md shadow-lg
                            flex justify-center items-center
                            ">
                            </div>
                            <div className="
                            py-10
                            flex flex-col justify-center items-start gap-1
                            ">
                                <p className="
                                pb-5
                                text-base md:text-lg lg:text-xl font-bold">【マシン名】</p>
                                <p>1何をする機械か？</p>
                                <p>2何ができる機械か？</p>
                                <p>マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明マシン説明</p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                            </div>
                            </SlideInRight>
                        </div>
                        


                    </div>
                </div>

                {/* <FadeInBack>
                <div className="
                    z-10 bg-white top-0
                    w-11/12 lg:w-10/12 max-w-5xl h-[10rem] p-8 md:p-10 my-10 md:my-14 lg:my-20 mx-auto
                    rounded-md shadow-lg
                    flex flex-col justify-center items-center
                    text-xs md:text-sm lg:text-base font-semibold
                    ">
                    <p className="
                    pb-5 md:ob-0
                    text-base md:text-lg lg:text-xl font-bold
                    ">
                    <span className="text-vivid-color">「ノンステップ管理」</span>で迅速かつ正確な情報伝達を。
                    </p>
                    <p>弊社では1人の営業がすべての工程を管理する「ノンステップ管理」をしております。</p>
                    <p>必要な情報を迅速にお伝えし、最短でお客様の問題を解決致します。</p>
                </div>
                </FadeInBack> */}

            </div>
    )

}
