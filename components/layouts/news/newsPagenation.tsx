
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function NewsPagenation() {


    return (
    <>
    {/* ページネーション */}
    <div className="
    flex justify-center items-center
    pt-10 md:pt-14 lg:pt-20
    pb-12 md:pb-16 lg:pb-28
    ">
        <nav 
        className="
        inline-flex gap-3 md:gap-6 lg:gap-10
        text-sub-color text-xs md:text-base lg:text-xl font-bold
        " 
        aria-label="Pagination">
            <Link 
            href="#" 
            className="
            relative inline-flex items-center p-2
            text-base md:text-base lg:text-xxxl font-bold
            ">
                <span className="sr-only">Previous</span>
                <HiChevronLeft/>
            </Link>

            <Link 
            href="#" 
            aria-current="page" 
            className="
            relative inline-flex items-center p-2
            ">1</Link>

            <Link 
            href="#" 
            aria-current="page" 
            className="
            relative inline-flex items-center p-2
            ">2</Link>

            <Link 
            href="#" 
            aria-current="page" 
            className="
            relative inline-flex items-center p-2
            ">3</Link>
            

            <Link 
            href="#" 
            className="
            relative inline-flex items-center p-2
            text-base md:text-base lg:text-xxxl font-bold
            ">
                <span className="sr-only">Next</span>
                <HiChevronRight/>
            </Link>
        </nav>
    </div>
    </>
)};