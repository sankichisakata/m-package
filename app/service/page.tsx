"use client";

export default function Service () {
    return(
        <>
        <div className="
        w-full h-full
        mx-auto relative
        flex flex-col justify-center items-center
        ">
          
            <div 
            className="
            w-full h-[16rem] md:h-[24rem] lg:h-[36rem]
            bg-factory01 bg-center bg-cover
            flex justify-center items-center
            ">
                <div className="
                w-full h-full 
                bg-slate-600/60
                flex justify-center items-center
                ">
                    <p className="lg:hidden text-xxl text-white">これからをどうしていくか</p>
                </div>
            </div>

            <div className="bg-green-500 h-screen w-full flex justify-center items-center">
                <h2 className="text-2xl">事業内容</h2>
            </div>

        </div>
            
        </>
    )
}