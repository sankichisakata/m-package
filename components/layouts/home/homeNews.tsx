import { FadeInBack } from "@/components/elements/observer/fadeInBack";

export default function HomeNews () {
    return(
        <div
        className="
        h-[1000px]
        bg-gray-800
        flex justify-center items-center
        "
        >
            <FadeInBack>
            <p>ニュース</p>
            <p>News</p>
            </FadeInBack>
        </div>
    )
}
