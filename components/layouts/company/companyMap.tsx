import GoogleMap from "@/components/elements/googleMap/googleMap";
import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { SlideInRight } from "@/components/elements/observer/slideInRight";


export default function CompanyMap () {
    return(
        <>
        <div className="
        flex justify-center items-center
        mb-10 md:mb-14 lg:mb-20
        ">
            <div 
                className="
                w-full md:w-11/12 max-w-5xl h-[20rem] md:h-[30rem] lg:h-[40rem]
                ">
                <GoogleMap/>
            </div>
        </div>
        </>
    )

}