
import { notFound } from 'next/navigation';
import { client, getList, getDetail } from '@/components/elements/libs/microcms'
import parse from "html-react-parser";
import { FadeInBack } from '@/components/elements/observer/fadeInBack'
import { HiChevronDoubleRight } from 'react-icons/hi'
import Link from 'next/link';
import Date from '@/components/elements/date-fns/date';
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = params.id
   
    // fetch data
    const product = await fetch(`https://m-package.com/news/${id}`).then((res) => res.json())
   
    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: product.title,
    //   openGraph: {
    //     images: ['/some-specific-page-image.jpg', ...previousImages],
    //   },
    }
  }

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
                        <div 
                        className="
                        text-sub-color text-xs md:text-base lg:text-xl font-bold
                        ">
                            {parse(post.contents)}
                        </div>
                    </FadeInBack>
                    
                </div>

                <div className="
                w-full h-full
                pt-14 md:pt-18 lg:pt-24
                pb-16 md:pb-24 lg:pb-28
                ">
                    <FadeInBack>
                        <div
                        className="
                        w-48 md:w-60 lg:w-72 h-[3.5rem] md:h-[5rem] mx-auto
                        border-sub-color border-2 rounded-full shadow-md
                        flex justify-center items-center
                        text-sub-color text-xs md:text-base lg:text-xl font-bold
                        ">
                            <div className="
                            w-full h-full
                            ">
                                <Link 
                                href="/news"
                                className="
                                w-full h-full
                                flex justify-center items-center gap-5"
                                >
                                    <p>ニュース一覧</p>
                                    <HiChevronDoubleRight/>
                                </Link>
                            </div> 
                        </div>
                    </FadeInBack>
                </div>
            </div>
    </li>

    </>

    
)};
