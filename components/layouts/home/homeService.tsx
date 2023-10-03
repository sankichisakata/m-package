import Link from "next/link";
import { HiChevronDoubleRight, HiChevronRight, HiLogout } from "react-icons/hi";


export default function HomeService () {
    return(
        <>
            <div 
            className='
            w-11/12 h-full mx-auto
            flex justify-center items-center
            '
            >
                <div
                className=" 
                mx-5 my-10 md:my-20
                w-full h-auto
                flex flex-col gap-6 md:gap-10
                "
                >

                    <div className="mx-auto w-11/12 md:w-[30rem] p-2 md:p-4 text-center border-4 border-green-700">
                        <p className="[font-size:_clamp(1.3rem,2vw,1.8rem)] font-bold text-green-700">エムパッケージの仕事</p>
                        <p className="[font-size:_clamp(1rem,3vw,1.1rem)] font-semibold text-green-700">まごころを込めて、守ります。</p>
                    </div>
                
                
                    <div 
                    className="
                    w-full my-5
                    text-black font-semibold
                    ">
                        <p className="[font-size:_clamp(0.8rem,2vw,1.5rem)]">川口の町工場として長年地元の方やお客様と共に成長して参りました。</p>
                        <p className="[font-size:_clamp(0.8rem,2vw,1.5rem)]">
                            先代から引き継いだ技術と3代目のパッションで段ボール業界に革命を起こします。
                            食品・精密機械や紙など守る者として日々奮闘して参りました。
                            これからも皆様の大事なものを守る者として、段ボールの可能性に挑戦していきます。
                        </p>
                    </div>
                        
                
                    
                    <div className="w-full h-full">
                        <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-5 text-md">
                            
                            {/* 事業内容 */}
                            
                            <div 
                            className="
                            group
                            w-full lg:max-w-lg h-[15rem]
                            flex flex-col justify-around items-center gap-5 
                            bg-equipment02 bg-center bg-cover
                            ">
                                <Link className="w-full h-full" href="/service">
                                <div className="
                                w-full h-full p-5
                                flex flex-col justify-center items-center gap-5 
                                bg-slate-600/40
                                ">
                                    <div className="w-full h-1/2 text-sm md:text-base text-white">
                                        <p className="font-semibold">事業内容</p>
                                        <p className="text-xxs md:text-xs">Our Service</p>
                                        {/* <p>梱包材コンサル企業です。</p>
                                        <p>企画・製造・配送・販売をワンストップで行います。</p> */}
                                    </div>
                                    <div 
                                    className="
                                    bg-white lg:group-hover:bg-green-600 transition duration-500
                                    w-full md:w-1/2 h-2/6 
                                    group-hover:text-white
                                    border group-hover:border-green-600 rounded-full
                                    flex justify-center items-center gap-5
                                    ">
                                        <HiChevronDoubleRight/>
                                        <p>詳しく見る</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            
                            

                            {/* 設備一覧 */}
                            
                            <div 
                            className="
                            group
                            w-full lg:max-w-lg h-[15rem]
                            flex flex-col justify-around items-center gap-5 
                            bg-service01 bg-center bg-cover
                            ">
                                <Link className="w-full h-full" href="/equipment">
                                <div className="
                                w-full h-full p-5
                                flex flex-col justify-center items-center gap-5 
                                bg-slate-600/10
                                ">
                                    <div className="w-full h-1/2 text-sm md:text-base">
                                        <p className="font-semibold">設備一覧</p>
                                        <p className="text-xxs md:text-xs">Equipment</p>
                                    </div>
                                    <div 
                                    className="
                                    bg-white lg:group-hover:bg-green-600 transition duration-500
                                    w-full md:w-1/2 h-2/6 
                                    group-hover:text-white
                                    border group-hover:border-green-600 rounded-full
                                    flex justify-center items-center gap-5
                                    ">
                                        <HiChevronDoubleRight/>
                                        <p>詳しく見る</p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div> 
        </>
    )
}