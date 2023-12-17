import GoogleMapsApi from "../GoogleMapsApi/googleMapsApi";

export default function FooterMap () {
    return(
        
            <div className='
            w-full h-full mx-auto
            flex flex-col justify-center items-center
            '
            >
                <div className="
                w-full 
                h-[20rem] md:h-full
                text-sub-color font-bold text-xs 
                flex flex-col lg:flex-row justify-center items-center
                "
                >
                    <GoogleMapsApi/>
                </div>
            </div>
    )
}