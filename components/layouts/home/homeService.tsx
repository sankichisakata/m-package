import BorderFull from "@/components/elements/border/borderFull"
import { FadeInBack } from "@/components/elements/observer/fadeInBack"

export default function HomeService () {
    return(
        <>
            <div 
            className='
            w-11/12 h-full mx-auto
            flex justify-center items-center
            bg-gray-300
            '
            >
                <div
                className=" 
                w-full h-auto
                flex flex-col
                "
                >

                    <div>
                        <p className="[font-size:_clamp(1.5rem,2vw,2rem)] font-semibold">エムパッケージの仕事とは？</p>
                    </div>
                
                
                    <div 
                    className="
                    w-full my-5 p-5
                    text-black border border-black rounded-md
                    ">
                        <p className="[font-size:_clamp(0.8rem,2vw,1.5rem)] font-medium">
                            先代から引き継いだ技術と3代目のパッションで段ボール業界に革命を起こします。
                            食品・精密機械や紙など守る者として日々奮闘して参りました。
                            これからも皆様の大事なものを守る者として、段ボールの可能性に挑戦していきます。
                        </p>
                    </div>
                        
                
                    
                    <div className="w-full">
                        <div className="w-full flex flex-col justify-center items-center gap-5 text-lg">
                            
                            {/* 事業内容 */}
                            <div 
                            className="
                            w-11/12 h-[8rem]
                            flex flex-col justify-center items-center gap-5
                            border border-black
                            ">
                                <div>
                                    <p>梱包材コンサル企業｜企画・製造・配送・販売をワンストップで行います。</p>
                                </div>
                                <div 
                                className="
                                w-full md:w-4/6 
                                text-center border rounded-full 
                                ">
                                    <p>事業内容</p>
                                    <p className="text-xs">Our Service</p>
                                </div>
                            </div>

                            {/* 設備一覧 */}
                            <div 
                            className="
                            w-11/12 h-[8rem]
                            flex flex-col justify-center items-center gap-5 
                            border border-black
                            ">
                                <div>
                                    <p>製造機器</p>
                                </div>
                                <div 
                                className="
                                w-full md:w-4/6
                                text-center border rounded-full 
                                ">
                                    
                                    <p>設備一覧</p>
                                    <p className="text-xs">Equipment</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div> 
        </>
    )
}