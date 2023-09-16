
import Image from 'next/image'

export default function FooterContact () {
    return (
        <div 
        className='
        w-full lg:w-4/6 mx-auto
        flex justify-center-items-center
        '
        >
            <div 
            className='
            hidden lg:block
            h-auto lg:w-1/2 relative
            flex justify-center items-center
            '
            >
                <Image 
                className='inline-block aspect-[4/3]'
                src="/img/equipment.jpg" 
                alt="equipment" 
                fill
                style={{ objectFit: "cover" }}
                />
            </div>

            <div className="
            w-full lg:w-1/2 px-5 py-10 bg-red-200
            flex flex-col justify-center gap-10
            "
            >
                <div>
                    <p className="text-xl text-center">
                        お問い合わせ
                        <br/>
                        <span className="text-lg">CONTACT</span>
                    </p>
                </div>

                <div className="text-xs text-center">
                    <p>お客様のご要望に応じた様々なご提案が可能でございます。</p>
                    <p>お気軽にご相談ください。</p>
                </div>

                {/* メール問い合わせ */}
                <div className="text-center">
                    <p>お問い合わせはこちらから</p>
                </div>

                {/* 電話お問い合わせ */}
                <div className="text-center">
                    <p className="text-xs">電話でのお問い合わせはこちらから</p>
                    <p>048-287-8055</p>
                    <p className="text-xs">平日 9:00 ~ 17:30</p>
                </div>
            </div>
        </div>
    )
}