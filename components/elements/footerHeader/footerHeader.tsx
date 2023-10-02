import Link from "next/link";
import { FadeInBack } from "../observer/fadeInBack";


export default function FooterHeader () {
    return(
        <div
        className='bg-white w-full h-full'
        >
            <div className="mx-auto w-11/12 md:w-8/12 lg:w-9/12">
                <div className='
                w-full
                py-5
                flex flex-col justify-start
                text-slate-600
                '
                >
                    <FadeInBack>
                        <Link href="/" className="w-56">
                            <p className="text-xxs md:text-xs">ダンボールのエムパッケージ</p>
                            <p className='text-base md:text-lg font-bold'>株式会社エムパッケージ</p>
                        </Link>
                    </FadeInBack>
                    
                    {/* <div className='text-xs'>
                        <p>〒332-0006&nbsp;埼玉県川口市末広2-7-15</p>
                        <p>TEL:048-287-8055</p>
                    </div>
                    <div className='text-xs'>
                        <p >加賀ICより車で10分</p>
                        <p >川口元郷駅2番出口より徒歩13分</p>
                    </div> */}
                </div>
                <div className="w-full flex items-center mx-auto">
                    <div className="flex-1 border-b-2 border-slate-500"></div>  
                </div>
                </div>
        </div>
        
    )
}