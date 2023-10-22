import HomeSwiper from "@/components/elements/swiper/homeSwiper";

export default function HomeHero () {
    return(
        <div className="
        w-full h-full h-screen
        mt-16 md:mt-20 lg:mt-0
        flex justify-center items-center
        ">
            <div className="
            w-full z-[-5]
            ">
                
                <HomeSwiper/>
                    
            </div>
        </div>
    )
}