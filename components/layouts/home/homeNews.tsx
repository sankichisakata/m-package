import { FadeInBack } from "@/components/elements/observer/fadeInBack";

export default function HomeNews () {
    return(
        <div
        className="
        relative bg-[#2c3e50]
        w-full h-full mx-auto py-16 lg:py-24
        flex justify-center items-center
        "
        >
            <p className="absolute text-slate-400/10 top-0 text-[4rem] md:text-[9rem] lg:text-[10rem]">News</p>
            <div className="
            before:absolute 
            before:top-0 before:right-0
            before:w-full 
            before:h-[0.5rem] 
            before:bg-white "></div>
            <div 
            className="
            w-11/12 h-auto
            flex flex-col justify-center items-center gap-8 md:gap-10 lg:gap-28
            ">
                <FadeInBack>
                        <div className="mx-auto w-full lg:w-10/12">
                            <div className="p-2 md:p-4 border-[0.2rem] border-white">
                                <p className="[font-size:_clamp(1.2rem,3vw,2.5rem)] text-center font-bold text-white">ニュース</p>
                            </div>
                        </div>
                    </FadeInBack>
                        
            </div>
        </div>
    )
}
