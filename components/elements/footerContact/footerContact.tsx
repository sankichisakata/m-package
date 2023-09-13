
import Image from 'next/image'

const FooterContact = () => {
    return (
        <>
            {/* <div className='hidden'>
                <Image 
                className='absolute'
                src="/img/equipment.jpg" 
                alt="equipment" 
                width={500} 
                height={500} 
                objectFit="cover"
                objectPosition='center'
                />
            </div> */}

            <div className="
            w-full py-10
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
       </>
    )
}

export default FooterContact;