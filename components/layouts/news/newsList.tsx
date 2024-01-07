import { client, getList } from '@/components/elements/libs/microcms'
import { HiChevronDoubleRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Date from '@/components/elements/date-fns/date';
import { FadeInBack } from '@/components/elements/observer/fadeInBack';
import Link from 'next/link';

export default async function NewsList() {
  const { contents } = await getList();

  return (
    <div className="
    w-full h-full flex flex-col items-center
    flex flex-col justify-center items-center">        
        <ul className="
        w-full
        flex flex-col justify-center
        ">
            {contents.map((post) => {
            return(
                
                <li key={post.id}>
                <FadeInBack>
                <div 
                className="
                w-11/12 max-w-[40rem] h-auto py-3 md:py-6 mx-auto
                flex flex-col
                text-sub-color text-xs md:text-base lg:text-xl font-bold
                ">
                    <div className="
                      flex flex-col justify-center gap-1">

                          <div className="
                          flex justify-between items-center
                          ">
                              <p className="
                              bg-sub-color py-[0.1rem] px-3
                              text-white
                              ">{post.category}</p>
                              <Date dateString={post.date} />
                          </div>

                          <Link href={`/news/${post.id}`}>
                            <div className="
                            py-2
                            flex justify-between items-center
                            ">
                                <p>{post.title}</p>
                                <HiChevronDoubleRight/>
                            </div>
                          </Link>
                      </div>
                </div>
                </FadeInBack>
                </li>
            )
            })}  
        </ul>
    </div>
  )
}