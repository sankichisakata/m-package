"use client"

import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'

// SwiperCore.use([Pagination, Autoplay, EffectFade])

// カルーセルにする画像のソースをリストにします
// const images = ['/img/equipment.jpg', '/img/town01.jpg', '/img/town02.jpg']

export default function HomeSwiper () {
    return(
        <>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
            loop={true}
            slidesPerView={1}
            spaceBetween={50}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 6000,
                disableOnInteraction: true,
              }} 
            speed={1000}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            >

        {/* {images.map((src: string, index: number) => {
        return (
            <SwiperSlide key={`${index}`}>
                <Image src={src} layout="responsive" width={1000} height={1000} alt="test_image" />
            </SwiperSlide>
            )
        })} */}

                <SwiperSlide>
                    <div className='w-screen h-screen bg-town01 bg-cover bg-center'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-screen h-screen bg-town02 bg-cover bg-center'></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-screen h-screen bg-equipment01 bg-cover bg-center'></div>
                </SwiperSlide>
            </Swiper>






             {/* <div
                className='
                bg-gray-200 text-gray-800 
                px-5
                flex flex-col justify-center items-center gap-10
                '
            >

                <div className='flex flex-col justify-center items-center gap-4'>
                <p className='text-[30px]'>「親切・迅速・丁寧」</p>
                <p className='text-xl'>私たちの信念です。</p>
                </div>

                <div className='text-center text-base'>
                <p>ダンボールの製造・企画・加工・納品までをワンストップで行い、お客様のご要望にお応え致します。</p>
                <p>当たり前を当たり前に。</p>
                </div>
                <p>HERO</p>
            <p>swiper</p>

            </div> */}
        </>
    )
}