import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";

export default function CompanyTable () {
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
                    border-[0.2rem] border-sub-color
                    text-sub-color [font-size:_clamp(1.2rem,3vw,2.5rem)] font-bold
                    ">
                        <p>会社概要</p>
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
                            <div className="
                            flex flex-col justify-center items-start">
                                <ul className="
                                w-full
                                flex flex-col md:flex-row justify-center items-denter">
                                    <li className="w-2/6">会社名</li>
                                    <li className="w-4/6">株式会社</li>
                                </ul>
                                <ul className="
                                w-full
                                flex flex-col md:flex-row justify-center items-denter">
                                    <li className="w-2/6">所在地</li>
                                    <li className="w-4/6">埼玉県</li>
                                </ul>
                                <ul className="
                                w-full
                                flex flex-col md:flex-row justify-center items-denter">
                                    <li className="w-2/6">設立</li>
                                    <li className="w-4/6">1900年10月10月</li>
                                </ul>
                            </div>
                        </div>
                </div>
                </FadeInBack>

                

            </div>
        </>
    )

}