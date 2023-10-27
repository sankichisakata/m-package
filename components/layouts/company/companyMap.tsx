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
                    w-full lg:w-11/12 h-auto p-2 md:p-4 mx-auto
                    flex flex-col justify-center items-center
                    border-[0.2rem] border-primary-color
                    text-primary-color [font-size:_clamp(1.2rem,3vw,2.5rem)] font-bold
                    ">
                        <p>アクセス</p>
                    </div>
                    </FadeInBack>
                </div>

                
                <div className="
                    bg-red-100
                    w-11/12 lg:w-10/12 max-w-5xl 
                    p-8 md:p-10 my-10 md:my-14 lg:my-20 mx-auto
                    text-xs md:text-sm lg:text-base font-semibold
                    ">
                        <FadeInBack>
                        <div className="
                        w-11/12 h-auto mx-auto
                        flex flex-col justify-center items-center gap-5
                        ">
                            <div className="w-full flex flex-col justify-center items-start">
                                <p>株式会社エムパッケージ</p>
                                <p>〒332-0006&emsp;埼玉県川口市末広2-7-15</p>
                            </div>

                            <div className="flex flex-col justify-center items-start">
                                <p>・電車で来られる方</p>
                                <p>加賀ICより車で10分</p>
                            </div>
                            
                            <div className="flex flex-col justify-center items-start">
                                <p>・バスで来られる方</p>
                                <p>JR京浜東北線&nbsp;川口駅&emsp;峯八幡宮行より10分</p>
                                <p>「十二月田中学校」下車徒歩2分</p>
                            </div>
                        </div>
                        </FadeInBack>

                        <div 
                        className="
                        bg-gray-300
                        w-full h-[20rem] mt-10
                        ">
                            Google Map
                        </div>
                </div>
                

            </div>
        </>
    )

}