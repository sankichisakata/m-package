import BorderPrimaryFull from "@/components/elements/border/borderPrimaryFull";
import EquipmentList from "@/components/layouts/equipment/equipmentList";
import EquipmentMain from "@/components/layouts/equipment/equipmentMain";

export default function Equipment () {
    return(
        <>
            <EquipmentMain/>
            <BorderPrimaryFull/>
            <EquipmentList/>           
        </>
    )
}