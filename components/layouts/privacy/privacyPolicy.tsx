
import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";
import Link from "next/link";

export default function PrivacyPolicy () {
    return(
        <>
            <div className="
            w-full h-full
            flex flex-col justify-center items-center
            ">
                <FadeInBack>
                <div className="w-11/12 mx-auto">
                    
                            <div className="w-full mx-auto bg-sub-color">
                                <div className="p-2 md:p-4">
                                    <p className="[font-size:_clamp(1.2rem,3vw,2.5rem)] text-center font-bold text-white">個人情報の取り扱いについて</p>
                                </div>
                            </div>
                </div>
                </FadeInBack> 

                {/* テーブルコンテナ */}
                <div className="
                    w-11/12 lg:w-10/12 max-w-5xl h-auto pl-2 py-10 md:p-10 md:my-10 lg:my-16 mx-auto
                    flex flex-col justify-center items-center
                    text-xs md:text-base lg:text-xl font-bold
                    ">
                        {/* テーブル */}
                        <div className="
                        w-full h-auto
                        ">
                            <div className="
                            w-full h-auto
                            flex flex-col justify-center items-center gap-10 md:gap-16 lg:gap-20
                            ">

                                {/* サブタイトル */}
                                <FadeInBack>
                                <div className="
                                w-full h-auto
                                flex justify-center items-center
                                ">
                                    <p className="text-xl md:text-xxl lg:text-xxxl font-bold">個人情報保護方針</p>
                                </div>
                                </FadeInBack>

                                <div className="
                                w-full 
                                flex justify-center items-start
                                ">
                                    <div className="
                                    w-full
                                    flex justify-start items-center
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start items-center
                                        ">
                                            株式会社エムパッケージ（以下「弊社」）は、お客様に関する情報を適切に保護することが、社会的責務として重要であると認識しています。
                                            <br/>
                                            お客様が当社ウェブサイトを安心してご利用いただくため、以下の基本方針に基づき、当社ウェブサイトでご提供いただいたお客様の個人情報の取り扱いに万全を期して参ります。
                                        </p>
                                        </SlideInLeft>
                                    </div>
                                </div>

                                {/* サブタイトル */}
                                <FadeInBack>
                                <div className="
                                w-full h-auto
                                flex justify-center items-center
                                ">
                                    <p className="text-xl md:text-xxl lg:text-xxxl font-bold">個人情報の利用目的</p>
                                </div>
                                </FadeInBack>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    <div className="
                                    w-full
                                    flex justify-start items-center
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start items-center
                                        ">
                                            お客様からお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用致します。
                                        </p>
                                        </SlideInLeft>
                                    </div>
                                </div>

                                {/* サブタイトル */}
                                <FadeInBack>
                                <div className="
                                w-full h-auto
                                flex justify-center items-center
                                ">
                                    <p className="text-xl md:text-xxl lg:text-xxxl font-bold">個人情報の第三者への開示・提供の禁止</p>
                                </div>
                                </FadeInBack>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    <div className="
                                    w-full
                                    flex justify-start items-center
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start items-center
                                        ">
                                            当社は、お客様からお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示致しません。
                                        </p>
                                        </SlideInLeft>
                                    </div>
                                </div>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    <div className="
                                    w-full
                                    flex justify-start items-center
                                    ">
                                        <SlideInLeft>
                                        <div className="
                                        flex justify-start items-center
                                        ">
                                            <ul>
                                                <li>・お客様の同意がある場合</li>
                                                <li>・お客様が希望されるサービスを行うために当社が業務を委託する業者に対して開示する場合</li>
                                                <li>・法令に基づき開示することが必要である場合</li>
                                            </ul>
                                        </div>
                                        </SlideInLeft>
                                    </div>
                                </div>

                                {/* サブタイトル */}
                                <FadeInBack>
                                <div className="
                                w-full h-auto
                                flex justify-center items-center
                                ">
                                    <p className="text-xl md:text-xxl lg:text-xxxl font-bold">個人情報の安全対策</p>
                                </div>
                                </FadeInBack>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    <div className="
                                    w-full
                                    flex justify-start items-center
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start items-center
                                        ">
                                            当社は、個人情報の正確及び安全確保のために、セキュリティに万全の対策を講じています。
                                        </p>
                                        </SlideInLeft>
                                    </div>
                                </div>

                                {/* サブタイトル */}
                                <FadeInBack>
                                <div className="
                                w-full h-auto
                                flex justify-center items-center
                                ">
                                    <p className="text-xl md:text-xxl lg:text-xxxl font-bold">ご本人の照会</p>
                                </div>
                                </FadeInBack>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    <div className="
                                    w-full
                                    flex justify-start items-center
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start items-center
                                        ">
                                            お客様がご本人の個人情報の照会・修正・削除などを希望される場合には、ご本人であることを確認の上、対応させていただきます。
                                        </p>
                                        </SlideInLeft>
                                    </div>
                                </div>

                                {/* サブタイトル */}
                                <FadeInBack>
                                <div className="
                                w-full h-auto
                                flex justify-center items-center
                                ">
                                    <p className="text-xl md:text-xxl lg:text-xxxl font-bold">法令、規範の遵守と見直し</p>
                                </div>
                                </FadeInBack>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    <div className="
                                    w-full
                                    flex justify-start items-center
                                    ">
                                        <SlideInLeft>
                                        <p className="
                                        flex justify-start items-center
                                        ">
                                            当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
                                        </p>
                                        </SlideInLeft>
                                    </div>
                                </div>

                                {/* サブタイトル */}
                                <FadeInBack>
                                <div className="
                                w-full h-auto
                                flex justify-center items-center
                                ">
                                    <p className="text-xl md:text-xxl lg:text-xxxl font-bold">個人情報の取り扱いに関するお問い合わせ先</p>
                                </div>
                                </FadeInBack>

                                <div className="
                                w-full 
                                flex justify-center items-start gap-3
                                ">
                                    <div className="
                                    w-full
                                    flex justify-start items-center
                                    ">
                                        <SlideInLeft>
                                        <p>
                                            当社の個人情報の取り扱いに関するお問い合わせは<Link href={'/contact'}>こちら</Link>までご連絡ください。
                                        </p>
                                        </SlideInLeft>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )

}