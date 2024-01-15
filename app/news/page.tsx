
import NewsList from "@/components/layouts/news/newsList";
import NewsPagenation from "@/components/layouts/news/newsPagenation";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ニュース',
  description: 'ニュース一覧 | 埼玉県川口市の梱包材企業：段ボールの企画・製造・配送・販売、お気軽にご相談ください。',
}

export default function News() {
  
  return(
    <>
      <NewsList/>
      <NewsPagenation/>
    </>
  )
}
  