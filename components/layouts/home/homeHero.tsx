import HomeSwiper from "@/components/elements/swiper/homeSwiper";

export default function HomeHero () {
    return(
        <div className="h-screen w-screen  flex justify-center items-center">
            <div className="
            h-6/12 w-11/12          
            border border-gray-100
            ">
                <HomeSwiper/>
            </div>
        </div>
    )
}