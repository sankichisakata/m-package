import BorderPrimaryFull from "@/components/elements/border/borderPrimaryFull";
import EquipmentList from "@/components/layouts/equipment/equipmentList";
import EquipmentMain from "@/components/layouts/equipment/equipmentMain";
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: '設備案内',
    description: '設備案内 | 埼玉県川口市の梱包材企業：段ボールの企画・製造・配送・販売、お気軽にご相談ください。',
}

export default function Equipment () {
    return(
        <>
            <EquipmentMain/>
            <BorderPrimaryFull/>
            <EquipmentList/>           
        </>
    )
}