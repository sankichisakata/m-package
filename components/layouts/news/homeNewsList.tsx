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
                <Link 
                  href={`/news/${post.id}/`}>
                  <div 
                  className="
                  w-full max-w-[60rem] h-auto py-3 md:py-6 mx-auto
                  flex flex-col 
                  rounded-xl
                  border-2 border-white
                  px-3 md:px-6 
                  py-3 md:py-6 
                  my-2 md:my-3
                  
                  text-sub-color text-xs md:text-base lg:text-lg font-bold
                  ">
                    <div className="
                      flex flex-col justify-center gap-3 md:gap-4">
                          <div className="
                          flex justify-between items-center
                          text-white
                          ">
                              <p className="
                              border-2 border-white py-[0.1rem] px-3
                              text-white 
                              ">{post.category}</p>
                              <Date dateString={post.date} />
                          </div>

                          
                          <div className="
                          flex justify-between items-center
                          text-white
                          ">
                              <p>{post.title}</p>
                              <HiChevronDoubleRight/>
                          </div>
                      </div>
                  </div>
                </Link>
            </li>
          )
        })}  
      </ul>
    </div>
  )
}