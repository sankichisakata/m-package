
import { notFound } from 'next/navigation';
import { client, getList, getDetail } from '@/components/elements/libs/microcms'
import parse from "html-react-parser";
import { FadeInBack } from '@/components/elements/observer/fadeInBack'
import { HiChevronDoubleRight } from 'react-icons/hi'
import Link from 'next/link';
import Date from '@/components/elements/date-fns/date';

export async function generateStaticParams() {
    const { contents } = await getList();

    const paths = contents.map((post) => {
    return {
        postId: post.id,
    };
    });
    
    return [...paths];
};

export default async function NewsListPages({
    params: { postId },
   }: {
    params: { postId: string };
   }
)
{const post = await getDetail(postId);

if (!post) {
    notFound();
}

return (
    <>
    <li 
    className="list-none" 
    key={post.id}>
            <div 
            className="
            w-11/12 md:w-10/12 max-w-[75rem] h-auto mx-auto
            flex flex-col
            ">
                <div 
                className="
                px-5 md:px-10 lg:px-16 
                flex flex-col justify-center gap-10 md:gap-16 lg:gap-20
                rounded-xl">
                    <FadeInBack>
                    <div className="
                    flex justify-between items-center
                    text-xs md:text-base lg:text-xl font-bold
                    ">
                        <p className="
                        bg-sub-color py-1 px-3
                        text-white
                        ">{post.category}</p>
                        <Date dateString={post.date} />
                    </div>
                    </FadeInBack>

                    <FadeInBack>
                    <div className="
                    flex flex-col justify-center items-first 
                    pl-2 md:pl-4 md:pr-6
                    [font-size:_clamp(1rem,3vw,2.5rem)] font-bold text-sub-color
                    border-l-2 border-sub-color
                    ">
                        <h1>{post.title}</h1>
                    </div>
                    </FadeInBack>
                    
                    <FadeInBack>
                        <div className="text-xs md:text-base lg:text-xl font-bold">{parse(post.contents)}</div>
                    </FadeInBack>
                    
                </div>
                <div className="
                w-full h-full
                pt-10 md:pt-18 lg:pt-24
                pb-16 md:pb-20 lg:pb-32
                ">
                    <FadeInBack>
                        <div
                        className="
                        w-full md:w-3/6 max-w-[24rem] h-[3.5rem] md:h-[5rem] mx-auto
                        border-sub-color border-2 rounded-full
                        flex justify-center items-center
                        text-sub-color text-xs md:text-base lg:text-xl font-bold
                        ">
                            <Link 
                            href="/news"
                            className="w-full h-full"
                            >
                                <div className="
                                w-full h-full
                                flex justify-center items-center gap-5
                                ">
                                    <p>お知らせ一覧</p>
                                    <HiChevronDoubleRight/>
                                </div>
                            </Link>
                            
                        </div>
                    </FadeInBack>
                </div>
            </div>
    </li>

    </>

    
)};



//     //コンテンツがない場合の表示
//     if (!contents || contents.length === 0) {
//       return <h3>新着情報はありません。</h3>;
//     }
  

//   return (
//     <div className="
//     w-full h-full flex flex-col items-center
//     flex justify-center items-center">
//         <ul className="
//             w-full
//             flex flex-col justify-center
//             ">
//               {contents.map((post) => {
//                 return(
                  
//                   <li key={post.id}>
//                     <FadeInBack>
//                     <div 
//                     className="
//                     w-full max-w-[40rem] h-auto py-3 md:py-6 mx-auto
//                     flex flex-col
//                     text-white text-xxs md:text-sm lg:text-lg font-bold
//                     ">
//                       <div className="
//                       flex flex-col justify-center gap-3">
//                           <div className="
//                           flex justify-between items-center
//                           ">
//                               <p className="
//                               bg-white
//                               text-sub-color
//                               border-2 border-white px-1
//                               ">{post.category}</p>
//                               <Date dateString={post.date} />
//                               {/* <p>{post.date}</p> */}
//                           </div>
//                           <div className="
//                           flex justify-between items-center
//                           ">
//                               <p>{post.title}</p>
//                               <HiChevronDoubleRight/>
//                           </div>
//                       </div>
//                     </div>
//                     </FadeInBack>
//                   </li>
//                 )
//               })}  
//             </ul>
//     </div>
//   )
