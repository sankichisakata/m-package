import { FadeInBack } from "@/components/elements/observer/fadeInBack";

export default function HomeCompany () {
    return(
        <div
        className="
        h-[1000px]
        bg-gray-500
        flex justify-center items-center
        "
        >
            <FadeInBack>
            <p>会社概要</p>
            <p>Company</p>
            </FadeInBack>
        </div>
    )
}
