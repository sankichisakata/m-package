import { SlideInLeft } from "@/components/elements/observer/slideInLeft";


export default function Bird () {
    return(
        <>
            {/* <!-- ②お問い合わせ完了メッセージ -start --> */}
            <div className="
            max-w-screen-lg w-full md:w-10/12 xl:w-8/12 
            mx-auto mt-6 md:mt-10 lg:mt-12 pb-20 md:pb-28 lg:pb-36
            ">
        
                <div className="
                w-11/12 mx-auto
                text-sub-color text-sm md:text-base lg:text-xl font-bold
                flex flex-col justify-center items-center
                ">
                    <div className="flex flex-col gap-2 md:gap-5 text-center">
                        <p>この度は、お問い合わせをいただきまして、誠にありがとうございます。</p>
                        <p>お問い合わせ内容を確認後、メールにてご連絡致します。</p>
                        <p>今しばらくお待ちくださいませ。</p>
                    </div>

                    <div className="mt-20 md:mt-28 flex flex-col gap-2 md:gap-5 text-center">
                        <p>なお、お急ぎのお客様は下記番号までご連絡ください。</p>
                        <p className="text-base md:text-xl lg:text-xxxl">048-287-8055</p>
                        <p>（営業時間 9:00 〜 17:30）</p>
                        <p>何卒よろしくお願い申し上げます。</p>
                    </div>
        
                </div>  
        
            </div>
            {/* <!-- ②お問い合わせ完了メッセージ -end --> */}
        
        </>
    )
    
}