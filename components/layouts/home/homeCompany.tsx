import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import Link from "next/link";
import { HiChevronDoubleRight } from "react-icons/hi";

export default function HomeCompany () {
    return(
        <>
            <div 
            className='
            bg-stone-200
            w-full h-full mx-auto py-10 lg:py-20
            flex justify-center items-center
            '
            >
                <div
                className="
                w-11/12 h-auto
                flex flex-col justify-center items-center gap-6 md:gap-10
                "
                >
                    <FadeInBack>
                    <div 
                    className="
                    w-full lg:w-10/12 mx-auto  p-2 md:p-4 
                    text-center border-4 border-green-700
                    ">
                        <p className="[font-size:_clamp(1rem,5vw,2rem)] font-bold text-green-700">株式会社エムパッケージについて</p>
                        <p className="[font-size:_clamp(1rem,3vw,1.1rem)] font-semibold text-green-700">常に、皆様と共に。</p>
                    </div>
                    </FadeInBack>
                
                    <div className="lg:w-10/12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">

                    
                        <FadeInBack>
                        <div 
                        className="
                        w-full mx-auto pl-2 md:pl-4 md:pr-6
                        font-semibold
                        border-l-4 border-green-700
                        ">
                            <p className="[font-size:_clamp(0.8rem,2vw,1.5rem)]">川口の段ボール工場として長年営業させていただき、地元の方・お客様のおかげでここまで成長して参りました。</p>
                            <p className="[font-size:_clamp(0.8rem,2vw,1.5rem)]">
                                皆様の大事なものを守る身近な存在として、これからも共に成長して参ります。
                            </p>
                        </div>
                        </FadeInBack>
                        
                
                    
                    <div className="w-full h-full flex flex-col items-center">
                            
                        {/* 会社概要 */}
                        <FadeInBack>
                        <div 
                        className="
                        group
                        w-full h-[15rem] lg:h-[20rem]
                        flex flex-col justify-around items-center gap-5 
                        bg-service01 bg-center bg-cover
                        ">
                            <Link className="w-full h-full" href="/company">
                            <div className="
                            w-full h-full p-5
                            flex flex-col items-center gap-5 
                            bg-slate-600/20
                            ">
                                <div className="w-full h-full text-sm md:text-base">
                                    <p className="font-semibold">会社概要</p>
                                    <p className="text-xxs md:text-xs">Company</p>
                                </div>
                                <div 
                                className="
                                bg-white lg:group-hover:bg-green-600 transition duration-500
                                w-full md:w-3/6 h-[6rem] 
                                lg:group-hover:text-white
                                border lg:group-hover:border-green-600 rounded-full
                                flex justify-center items-center gap-5
                                font-semibold
                                ">
                                    <div className=" flex justify-center items-center gap-5">
                                        <HiChevronDoubleRight/>
                                        <p>詳しく見る</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        </FadeInBack>
                    </div>
                    </div>

                </div>
            </div> 
        </>
    )
}
