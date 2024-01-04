import Link from "next/link";
import { FadeInBack } from "../observer/fadeInBack";


export default function FooterHeader () {
    return(
        <div
        className='bg-white w-full h-full'
        >
            <div className="
            w-11/12 md:w-10/12 lg:w-9/12
            mx-auto
            ">
                <div className='
                w-full
                pt-5
                flex flex-col justify-start
                text-sub-color
                '
                >
                    <FadeInBack>
                        <Link href="/" className="block w-72 p-1 md:p-2">
                            <div className="block flex flex-col gap-1 md:gap-2">
                                <p className="text-xs md:text-sm font-semibold">ダンボールのエムパッケージ</p>
                                <p className='text-xl md:text-xxxl font-bold'>株式会社エムパッケージ</p>
                            </div>
                        </Link>
                    </FadeInBack>
                </div>
                <div className="w-full pt-3 flex items-center mx-auto">
                    <div className="flex-1 border-b-2 border-sub-color"></div>  
                </div>
                </div>
        </div>
        
    )
}