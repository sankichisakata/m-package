import { client, homeList } from '@/components/elements/libs/microcms'
import { HiChevronDoubleRight } from 'react-icons/hi'
import Date from '@/components/elements/date-fns/date';
import { FadeInBack } from '@/components/elements/observer/fadeInBack';
import Link from 'next/link';

export default async function HomeNewsList() {
  const { contents } = await homeList();

  //コンテンツがない場合の表示
  if (!contents || contents.length === 0) {
    return <h3>新着情報はありません。</h3>;
  }

  return (
    <div className="
    w-full h-full flex flex-col items-center
    flex justify-center items-center">

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
              w-full max-w-[40rem] h-auto py-3 md:py-6 mx-auto
              flex flex-col
              text-white text-xs md:text-base lg:text-xl font-bold
              ">
                <div className="
                flex flex-col justify-center gap-1">

                    <div className="
                    flex justify-between items-center
                    ">
                        <p className="
                        bg-sub-color py-[0.1rem] px-3
                        text-white
                        border-[0.1rem] border-white
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