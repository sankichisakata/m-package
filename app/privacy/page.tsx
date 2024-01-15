import PrivacyPolicy from "@/components/layouts/privacy/privacyPolicy";
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: '個人情報の取り扱いについて',
    description: '個人情報の取り扱いについて | 埼玉県川口市の梱包材企業：段ボールの企画・製造・配送・販売、お気軽にご相談ください。',
}

export default function Privacy () {
    return(
        <>
            <PrivacyPolicy/>
        </>
    )
}