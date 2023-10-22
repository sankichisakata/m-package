"use client";

export default function Service () {
    return(
        <div className="
        w-full h-full
        mx-auto relative
        flex flex-col justify-center items-center
        ">

            <div 
            className="
            w-11/12 lg:max-w-7xl
            py-5 
            flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-10 lg:gap-20
            ">

                <div 
                className="
                w-full lg:w-4/12 h-[16rem] md:h-[20rem] lg:h-auto aspect-[4/6]
                bg-factory01 bg-center bg-cover
                rounded-md shadow-lg
                flex justify-center items-center
                ">
                    {/* <div className="
                    w-full h-full 
                    bg-slate-600/60
                    rounded-md
                    flex justify-center items-center
                    ">
                        <p className="lg:hidden text-xxl text-white">これからをどうしていくか</p>
                    </div> */}
                </div>

                <div
                className="
                w-full lg:w-8/12 h-auto
                flex flex-col justify-center gap-6 lg:gap-10
                ">
                    <p className="
                    text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]
                    text-bold
                    ">
                        「まごころを込めて、守ります。」
                    </p>

                    <div className="
                    text-sm md:text-base lg:text-lg
                    text-medium
                    ">
                        <p>ダンボールに対して、真摯に取り組みます。</p>
                        <p>
                            株式会社エムパッケージでは、ダンボールの設計・企画から製造、納品までを一貫して行なっております。
                            先代から引き継いだ技術で質の高い段ボールとサービスを提供することをお約束します。
                            オリジナルアイテムや梱包品に合わせたサイズの作成など、応えられないご要望はございません。
                            </p>
                            <p>先代から引き継いだ技術で質の高い段ボールとサービスを提供することをお約束します。</p>
                            <p>オリジナルアイテムや梱包品に合わせたサイズの作成など、応えられないご要望はございません。</p>
                        <p>まずはお気軽にお問い合わせください。</p>
                    </div>
                </div>

            </div>

            <div className="bg-green-500 h-screen w-full flex justify-center items-center">
                <h2 className="text-2xl">事業内容</h2>
            </div>

        </div>
    )
}