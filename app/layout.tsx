
import './globals.css'
import Header from '@/components/layouts/header/header';
import Footer from '@/components/layouts/footer/footer';
import { Providers } from './providers';

import React, { Suspense } from "react";
import type { Metadata } from 'next';
import BreadCrumb from '@/components/elements/breadCrumb/breadCrumb';
import PageTitle from '@/components/elements/pageTitle/pageTitle';
import Loading from './loading';


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {

  title: {
    default: 'ダンボールのエムパッケージ',
    template: '%s | ダンボールのエムパッケージ',
  },
  description: '埼玉県川口市の梱包材企業：段ボールの企画・製造・配送・販売、お気軽にご相談ください。',
  // openGraph: {
  //   title: 'サイトのタイトル',
  //   description: 'サイトの説明',
  //   images: ['/path-to-your-image.jpg'],
  // },
  // icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
      <Header/>
      <Suspense fallback={<Loading />}>
          <main className='bg-white'>
            <BreadCrumb/>
            <PageTitle/>
              <Providers>
              {children}
              </Providers>
          </main>
          <Footer/>
        </Suspense>
      </body>
    </html>
  )
}

// export async function generateMetadata({ params }) {
//   return {
//     title: '...',
//   }
// }
