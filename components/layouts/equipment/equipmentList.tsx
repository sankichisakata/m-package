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
                    w-full h-auto p-2 md:p-4 mx-auto
                    flex flex-col justify-center items-center
                    border-[0.2rem] border-sub-color
                    text-sub-color [font-size:_clamp(1.2rem,3vw,2.5rem)] font-bold
                    ">
                        <p>設備一覧</p>
                    </div>
                    <div className="
                    bg-sub-color
                    w-full h-auto p-2 md:p-4 mx-auto
                    flex flex-col justify-center items-center
                    border-[0.2rem] border-sub-color
                    text-white [font-size:_clamp(1.2rem,3vw,2.5rem)] font-bold
                    ">
                        <p>
                            お客様の製品を技術で丁寧に。
                        </p>
                    </div>
                    </FadeInBack>
                </div>

                <div className="
                w-full h-auto 
                flex justify-center items-center 
                ">
                    {/* テーブル */}
                    <div className="
                    w-11/12 xl:w-9/12 h-auto py-10
                    flex flex-col md:flex-row flex-wrap justify-start items-center gap-2 md:gap-0
                    text-xs md:text-base lg:text-xl font-bold
                    ">
                        {/* リスト① */}
                        <div className="
                        rounded-md
                        w-full lg:w-1/2 
                        ">
                            <SlideInLeft>
                            <div className="
                            bg-white m-5
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
                                    bg-PrinterSlotter bg-center bg-cover
                                    flex justify-center items-center
                                    ">
                                    </div>
                                </div>
                                <div className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-3 md:gap-5
                                ">
                                    <p className="
                                    flex justify-center items-center
                                    pl-2 md:pl-3
                                    border-l-[0.2rem] border-sub-color
                                    text-sub-color text-base md:text-lg lg:text-xl font-bold
                                    ">プリンタースロッター</p>
                                    <div className="">
                                        <p>自由に動く刃物により希望の寸法に切り込みと罫線を入れる事ができる。一般的なA式(みかん箱タイプ)に裁断する。同時にカラー印刷(2色)ができ、商品名やロゴなど細かい印刷ができる。</p>
                                    </div>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>

                        {/* リスト② */}
                        <div className="
                        rounded-md
                        w-full lg:w-1/2 
                        ">
                            <SlideInLeft>
                            <div className="
                            bg-white m-5
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
                                    bg-RotarySlitterBig bg-center bg-cover
                                    flex justify-center items-center
                                    ">
                                    </div>
                                </div>
                                <div className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-3 md:gap-5
                                ">
                                    <p className="
                                   flex justify-center items-center
                                   pl-2 md:pl-3
                                   border-l-[0.2rem] border-sub-color
                                    text-sub-color text-base md:text-lg lg:text-xl font-bold
                                    ">ロータリースリッター</p>
                                    <div className="">
                                        <p>板状の段ボールシートに罫線を入れたり、パット・仕切りなど指定の寸法に断裁することができる。大小のロータリーパンチを使用して小ロットや特殊な形状の箱を作ることができる。</p>
                                    </div>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>

                        {/* リスト③ */}
                        <div className="
                        rounded-md
                        w-full lg:w-1/2 
                        "> 
                            <SlideInLeft>
                            <div className="
                            bg-white m-5
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
                                    bg-Punch bg-center bg-cover
                                    flex justify-center items-center
                                    ">
                                    </div>
                                </div>
                                <div className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-3 md:gap-5
                                ">
                                    <p className="
                                    flex justify-center items-center
                                    pl-2 md:pl-3
                                    border-l-[0.2rem] border-sub-color
                                    text-sub-color text-base md:text-lg lg:text-xl font-bold
                                    ">パンチ</p>
                                    <div className="">
                                        <p>罫線に合わせて切り込みを入れる。</p>
                                    </div>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>

                        {/* リスト④ */}
                        <div className="
                        rounded-md
                        w-full lg:w-1/2 
                        ">
                            <SlideInLeft>
                            <div className="
                            bg-white m-5
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
                                    bg-SemiAutoGluer bg-center bg-cover
                                    flex justify-center items-center
                                    ">
                                    </div>
                                </div>
                                <div className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-3 md:gap-5
                                ">
                                    <p className="
                                    flex justify-center items-center
                                    pl-2 md:pl-3
                                    border-l-[0.2rem] border-sub-color
                                    text-sub-color text-base md:text-lg lg:text-xl font-bold
                                    ">セミオートグルアー</p>
                                    <div className="">
                                        <p>裁断、印刷した段ボールの接合部を糊付けする。</p>
                                    </div>
                                </div>
                            </div>
                            </SlideInLeft>
                        </div>


                        {/* リスト⑤ */}
                        <div className="
                        rounded-md
                        w-full lg:w-1/2
                        ">
                            <SlideInLeft>
                            <div className="
                            bg-white m-5
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
                                    bg-ArmStitcher bg-center bg-cover
                                    flex justify-center items-center
                                    ">
                                    </div>
                                </div>
                                <div className="
                                w-full p-5 lg:p-10
                                flex flex-col justify-center items-start gap-3 md:gap-5
                                ">
                                    <p className="
                                    flex justify-center items-center
                                    pl-2 md:pl-3
                                    border-l-[0.2rem] border-sub-color
                                    text-sub-color text-base md:text-lg lg:text-xl font-bold                                   
                                    ">アームステッチャー</p>
                                    <div className="">
                                        <p>段ボールケースの接合部をワイヤーで留める機械。</p>
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
