
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
  title: 'M-Package',
  description: '埼玉県川口市の梱包材企業です | 段ボールの企画・製造・配送・販売、お気軽にご相談ください。',
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
          <main>
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
