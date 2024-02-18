
import GoogleMapsApi from "@/components/elements/GoogleMapsApi/googleMapsApi";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";


export default function CompanyMap () {
    return(
        <>
        <div className="
        bg-gray-100
        py-14 md:py-20
        md:hidden
        flex justify-center items-center
        ">
            <SlideInLeft>
            <div 
                className="
                w-full md:w-11/12 lg:w-10/12
                h-[24rem] md:h-[40rem] lg:h-[50rem]
                mx-auto
                ">
                <GoogleMapsApi/>
            </div>
            </SlideInLeft>
        </div>
        </>
    )

}