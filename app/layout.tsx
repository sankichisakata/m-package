
import './globals.css'
import Header from '@/components/layouts/header/header'
import Footer from '@/components/layouts/footer/footer'
import { Providers } from './providers';

import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import BreadCrumb from '@/components/elements/breadCrumb/breadCrumb';
import PageTitle from '@/components/elements/pageTitle/pageTitle';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'M-Package',
  description: '梱包材コンサル企業です | 企画・製造・配送・販売、お気軽にご相談ください。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header/>
        <BreadCrumb/>
        <PageTitle/>
        <main>
          <Providers>
          {children}
          </Providers>
        </main>
        <Footer/>
        </body>
    </html>
  )
}
