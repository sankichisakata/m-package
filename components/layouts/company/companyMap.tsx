
import GoogleMapsApi from "@/components/elements/GoogleMapsApi/googleMapsApi";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";


export default function CompanyMap () {
    return(
        <>
        <div className="
        flex justify-center items-center
        mb-14 md:mb-20 lg:mb-24
        ">
            <SlideInLeft>
            <div 
                className="
                w-full md:w-11/12 lg:w-10/12
                h-[20rem] md:h-[40rem] lg:h-[50rem]
                mx-auto
                ">
                <GoogleMapsApi/>
            </div>
            </SlideInLeft>
        </div>
        </>
    )

}