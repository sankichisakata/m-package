
export default function ServiceTimeline () {
    return(
        <>
            <div className="
            w-full h-full
            flex flex-col justify-center items-center
            ">

                <div className="

                w-full h-full
                p-10
                flex flex-col justify-center items-center
                font-bold
                text-[2rem] md:text-[2.5rem] lg:text-[3rem]
                ">
                    <p>業務工程</p>
                </div>

                <div className="
                bg-gray-100 relative
                w-11/12 lg:w-10/12 max-w-5xl h-full
                md:p-10 lg:p-0 m-4 md:m-6 lg:m-10 
                flex flex-col justify-center items-center gap-5
                rounded-lg
                ">
                    {/* ボーダー */}
                    <div className="
                    absolute h-full
                    left-1/4 md:left-1/2
                    border-2-2 border-opacity-20 border-gray-700 border"></div>

                    {/* <!-- rightTimeline ① --> */}
                    <div className="w-full mb-8 flex justify-center items-center right-timeline">

                            <div className="hidden md:block w-5/12 order-1 bg-red-400 md:flex-2"></div>

                            <div className="z-[1] w-1/2 md:w-2/12 order-1 flex justify-center items-center">
                                <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                                </div>
                            </div>

                            <div className="
                            w-1/2 md:w-5/12 order-1 bg-gray-400 
                            rounded-lg shadow-xl">
                                <div className="w-full p-5">
                                    <h3 className="mb-3 font-bold text-gray-800 text-xl">ご相談</h3>
                                    <p className="text-sm text-gray-900 text-opacity-100">長年段ボールに携わった経験と知識で最適なご提案を致します。</p>
                                </div>
                            </div>
                    </div>




                    {/* <!-- leftTimeline ② --> */}
                    <div className="w-full mb-8 flex justify-center md:flex-row-reverse items-center right-timeline">

                        <div className="hidden md:block w-5/12 order-1 bg-red-400 md:flex-2"></div>

                        <div className="z-[1] w-1/2 md:w-2/12 order-1 flex justify-center items-center">
                            <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                            </div>
                        </div>

                        <div className="
                        w-1/2 md:w-5/12 order-1 bg-gray-400 
                        rounded-lg shadow-xl">
                            <div className="w-full p-5">
                                <h3 className="mb-3 font-bold text-gray-800 text-xl">お見積もり</h3>
                                <p className="text-sm text-gray-900 text-opacity-100">午前中にいただいたお問い合わせは即日ご連絡致します。</p>
                            </div>
                        </div>

                    </div>

                    {/* <!-- rightTimeline ③ --> */}
                    <div className="w-full mb-8 flex justify-center items-center right-timeline">

                            <div className="hidden md:block w-5/12 order-1 bg-red-400 md:flex-2"></div>

                            <div className="z-[1] w-1/2 md:w-2/12 order-1 flex justify-center items-center">
                                <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                                </div>
                            </div>

                            <div className="
                            w-1/2 md:w-5/12 order-1 bg-gray-400 
                            rounded-lg shadow-xl">
                                <div className="w-full p-5">
                                    <h3 className="mb-3 font-bold text-gray-800 text-xl">お見本作成</h3>
                                    <p className="text-sm text-gray-900 text-opacity-100">お客様のニーズをカタチにします。</p>
                                </div>
                            </div>

                    </div>


                    {/* <!-- leftTimeline ④ --> */}
                    <div className="w-full mb-8 flex justify-center md:flex-row-reverse items-center right-timeline">

                        <div className="hidden md:block w-5/12 order-1 bg-red-400 md:flex-2"></div>

                        <div className="z-[1] w-1/2 md:w-2/12 order-1 flex justify-center items-center">
                            <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
                            </div>
                        </div>

                        <div className="
                        w-1/2 md:w-5/12 order-1 bg-gray-400 
                        rounded-lg shadow-xl">
                            <div className="w-full p-5">
                                <h3 className="mb-3 font-bold text-gray-800 text-xl">企画提案</h3>
                                <p className="text-sm text-gray-900 text-opacity-100">微調整をし、製造へ移っていきます。</p>
                            </div>
                        </div>

                    </div>

                    {/* <!-- rightTimeline ① --> */}
                    <div className="w-full mb-8 flex justify-center items-center right-timeline">

                            <div className="hidden md:block w-5/12 order-1 bg-red-400 md:flex-2"></div>

                            <div className="z-[1] w-1/2 md:w-2/12 order-1 flex justify-center items-center">
                                <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                                </div>
                            </div>

                            <div className="
                            w-1/2 md:w-5/12 order-1 bg-gray-400 
                            rounded-lg shadow-xl">
                                <div className="w-full p-5">
                                    <h3 className="mb-3 font-bold text-gray-800 text-xl">ご相談</h3>
                                    <p className="text-sm text-gray-900 text-opacity-100">長年段ボールに携わった経験と知識で最適なご提案を致します。</p>
                                </div>
                            </div>
                    </div>




                    {/* <!-- leftTimeline ② --> */}
                    <div className="w-full mb-8 flex justify-center md:flex-row-reverse items-center right-timeline">

                        <div className="hidden md:block w-5/12 order-1 bg-red-400 md:flex-2"></div>

                        <div className="z-[1] w-1/2 md:w-2/12 order-1 flex justify-center items-center">
                            <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">2</h1>
                            </div>
                        </div>

                        <div className="
                        w-1/2 md:w-5/12 order-1 bg-gray-400 
                        rounded-lg shadow-xl">
                            <div className="w-full p-5">
                                <h3 className="mb-3 font-bold text-gray-800 text-xl">お見積もり</h3>
                                <p className="text-sm text-gray-900 text-opacity-100">午前中にいただいたお問い合わせは即日ご連絡致します。</p>
                            </div>
                        </div>

                    </div>

                    {/* <!-- rightTimeline ③ --> */}
                    <div className="w-full mb-8 flex justify-center items-center right-timeline">

                            <div className="hidden md:block w-5/12 order-1 bg-red-400 md:flex-2"></div>

                            <div className="z-[1] w-1/2 md:w-2/12 order-1 flex justify-center items-center">
                                <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                                </div>
                            </div>

                            <div className="
                            w-1/2 md:w-5/12 order-1 bg-gray-400 
                            rounded-lg shadow-xl">
                                <div className="w-full p-5">
                                    <h3 className="mb-3 font-bold text-gray-800 text-xl">お見本作成</h3>
                                    <p className="text-sm text-gray-900 text-opacity-100">お客様のニーズをカタチにします。</p>
                                </div>
                            </div>

                    </div>


                    {/* <!-- leftTimeline ④ --> */}
                    <div className="w-full mb-8 flex justify-center md:flex-row-reverse items-center right-timeline">

                        <div className="hidden md:block w-5/12 order-1 bg-red-400 md:flex-2"></div>

                        <div className="z-[1] w-1/2 md:w-2/12 order-1 flex justify-center items-center">
                            <div className="flex justify-center items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                <h1 className="mx-auto font-semibold text-lg text-white">4</h1>
                            </div>
                        </div>

                        <div className="
                        w-1/2 md:w-5/12 order-1 bg-gray-400 
                        rounded-lg shadow-xl">
                            <div className="w-full p-5">
                                <h3 className="mb-3 font-bold text-gray-800 text-xl">企画提案</h3>
                                <p className="text-sm text-gray-900 text-opacity-100">微調整をし、製造へ移っていきます。</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

            <div className="h-screen w-full flex justify-center items-center">
                <h2 className="text-2xl">事業内容</h2>
            </div>
        </>
    )
}