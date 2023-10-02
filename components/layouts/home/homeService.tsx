import BorderFull from "@/components/elements/border/borderFull"
import { FadeInBack } from "@/components/elements/observer/fadeInBack"

export default function HomeService () {
    return(
        <FadeInBack>
        <div className="
        w-11/12 h-[50rem] mx-auto
        flex justify-center items-center
        bg-gray-300
        ">    
     
            <div 
            className='
            relative
            w-11/12 h-auto
            '
            >
            </div> 
            
            <div
            className="
            absolute 
            w-11/12 h-auto
            flex flex-col
            "
            >

                <div>
                    <p className="text-black [font-size:_clamp(1rem,2vw,2rem)] font-semibold">エムパッケージとは</p>
                </div>
            
            
                <div 
                className="
                w-5/6 my-5 p-5
                text-black border rounded-md
                ">
                    <p className="[font-size:_clamp(0.5rem,2vw,1.3rem)] font-medium">
                        先代から引き継いだ技術と3代目のパッションで段ボール業界に革命を起こします。
                        食品・精密機械や紙など守る者として日々奮闘して参りました。
                        これからも皆様の大事なものを守る者として、段ボールの可能性に挑戦していきます。
                    </p>
                </div>
                    
               
                
                <div className="w-full">
                    <div className="w-full flex flex-col gap-5">
                        <div className="border w-1/2">
                            <p>事業内容</p>
                            <p>Our Service</p>
                        </div>
                        <div className="border w-1/2">
                            <p>設備一覧</p>
                            <p>Equipment</p>
                        </div>
                    </div>
                </div>

            </div>
           
        </div>
        </FadeInBack>

    )
}