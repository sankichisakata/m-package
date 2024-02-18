import HomeSwiper from "@/components/elements/swiper/homeSwiper";

export default function HomeHero () {
    return(
        <div className="
        w-full h-full h-screen
        flex justify-center items-center
        ">
            <div className="
            w-full z-[1]
            ">
                <HomeSwiper/>
            </div>
        </div>
    )
}