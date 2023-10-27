import { FadeInBack } from "@/components/elements/observer/fadeInBack";


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
                    bg-sub-color
                    w-full lg:w-11/12 h-auto p-2 md:p-4 mx-auto
                    flex flex-col justify-center items-center
                    border-[0.2rem] border-sub-color
                    text-white [font-size:_clamp(1.2rem,3vw,2.5rem)] font-bold
                    ">
                        <p>アクセス</p>
                    </div>
                    </FadeInBack>
                </div>

                <FadeInBack>
                <div className="
                    bg-white
                    w-11/12 lg:w-10/12 max-w-5xl h-[10rem] p-8 md:p-10 my-10 md:my-14 lg:my-20 mx-auto
                    flex flex-col justify-center items-center gap-2
                    text-xs md:text-sm lg:text-base font-semibold
                    ">
                        <div className="
                        w-11/12 h-auto">
                            GoogleMap
                        </div>
                </div>
                </FadeInBack>

                

            </div>
        </>
    )

}