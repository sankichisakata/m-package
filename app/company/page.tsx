import BorderPrimaryFull from "@/components/elements/border/borderPrimaryFull";
import CompanyAccess from "@/components/layouts/company/companyAccess";
import CompanyMain from "@/components/layouts/company/companyMain";
import CompanyMap from "@/components/layouts/company/companyMap";
import CompanyOverview from "@/components/layouts/company/companyOverview";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '会社情報',
    description: '会社情報 | 埼玉県川口市の梱包材企業：段ボールの企画・製造・配送・販売、お気軽にご相談ください。',
  }

export default function Company () {
    return(
        <>
            <CompanyMain/>
            <BorderPrimaryFull/>
            <CompanyOverview/>
            <CompanyAccess/>
            <CompanyMap/>
        </>
    )
}