import { FadeInBack } from "@/components/elements/observer/fadeInBack";

export default function HomeEquipment () {
    return(
        <div
        className="
        h-[1000px]
        bg-gray-400
        flex justify-center items-center
        "
        >
            <FadeInBack>
            <p>設備案内</p>
            <p>Equipment</p>
            </FadeInBack>
        </div>
    )
}