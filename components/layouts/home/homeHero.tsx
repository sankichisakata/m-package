import HomeSwiper from "@/components/elements/swiper/homeSwiper";

export default function HomeHero () {
    return(
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="
            w-full z-[-5]
            ">
                <HomeSwiper/>
            </div>
        </div>
    )
}