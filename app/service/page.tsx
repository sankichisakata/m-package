import BorderPrimaryFull from "@/components/elements/border/borderPrimaryFull";
import ServiceMain from "@/components/layouts/service/serviceMain";
import ServiceTimeline from "@/components/layouts/service/serviceTimeline";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '事業内容',
    description: '事業内容 | 埼玉県川口市の梱包材企業：段ボールの企画・製造・配送・販売、お気軽にご相談ください。',
}

export default function Service () {
    return(
        <>
            <ServiceMain/>
            <BorderPrimaryFull/>
            <ServiceTimeline/>
        </>
    )
}