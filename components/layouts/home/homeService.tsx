import { FadeInBack } from "@/components/elements/observer/fadeInBack"

export default function HomeService () {
    return(
        <div
        className="
        h-[1000px]
        bg-gray-300
        flex justify-center items-center
        "
        >
            <FadeInBack>
            <p>事業案内</p>
            <p>Our Service</p>
            </FadeInBack>
        </div>
    )
}