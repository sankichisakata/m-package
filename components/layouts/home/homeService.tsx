import { SlideInRight } from "@/components/elements/observer/slideInRight"

export default function HomeService () {
    return(
        <div
        className="
        h-[1000px]
        bg-gray-300
        flex justify-center items-center
        "
        >
            <SlideInRight>
            <p>事業案内</p>
            <p>Our Service</p>
            </SlideInRight>
        </div>
    )
}