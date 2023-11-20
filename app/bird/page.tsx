
export default function Bird () {
    return(
        <>
        <div className="
        bg-primary-color
        text-white
        ">
            {/* <!-- ②お問い合わせ完了メッセージ -start --> */}
            <div className="mx-auto mt-6 md:mt-10 lg:mt-12 pb-20 md:pb-28 lg:pb-36 max-w-screen-lg w-full md:w-10/12 xl:w-8/12 transition">
        
                <div className="w-11/12 mx-auto text-sm md:text-base">
        
                    <div className="flex flex-col gap-1 md:gap-2 text-center">
                        <p>この度は、お問い合わせをいただきまして、誠にありがとうございます。</p>
                        <p>お問い合わせ内容を確認次第、メールにてご連絡致します。</p>
                        <p>今しばらくお待ちくださいませ。</p>
                    </div>

                    <div className="mt-20 md:mt-28 flex flex-col gap-1 md:gap-2 text-center">
                        <p>なお、お急ぎのお客様は下記番号までご連絡ください。</p>
                        <p>048-287-8055 </p>
                        <p>（営業時間 10:00 〜 22:00）</p>
                        <p>何卒よろしくお願い申し上げます。</p>
                    </div>
        
                </div>  
        
            </div>
      {/* <!-- ②お問い合わせ完了メッセージ -end --> */}
        </div>
        </>
    )
    
}