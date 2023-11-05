
import GoogleMapsApi from "@/components/elements/GoogleMapsApi/googleMapsApi";
import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInRight } from "@/components/elements/observer/slideInRight";


export default function CompanyMap () {
    return(
        <>
        <div className="
        flex justify-center items-center
        mb-14 md:mb-20 lg:mb-24
        ">
            <FadeInBack>
            <div 
                className="
                w-full md:w-11/12 lg:w-10/12
                h-[30rem] md:h-[40rem] lg:h-[50rem]
                mx-auto
                ">
                <GoogleMapsApi/>
            </div>
            </FadeInBack>
        </div>
        </>
    )

}