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
            autoplay={{
                delay: 10000,
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
                    <div className='
                    w-full h-screen bg-town01 bg-cover bg-center
                    '
                    >
                        <div className="
                        overflow-hidden bg-fixed bg-slate-600/30
                        w-full h-full 
                        bottom-0 left-0 right-0 top-0
                        rounded-md
                        "
                        >
                          <div className="
                            w-full h-full pt-5
                            font-semibold text-center
                            flex flex-col justify-center items-center gap-2
                            "
                            >
                                <p className='[font-size:_clamp(1.5rem,3vw,5rem)]'>「親切・迅速・丁寧」</p>
                                <p className='[font-size:_clamp(0.8rem,2vw,2rem)]'>エムパッケージの信念です。</p>
                          </div>

                        </div>

                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-screen bg-town02 bg-cover bg-center'>
                        <div className="
                            overflow-hidden bg-fixed bg-slate-600/10
                            w-full h-full  
                            bottom-0 left-0 right-0 top-0
                            rounded-md
                            "
                            >
                            <div className="
                                w-full h-full p-10
                                font-semibold text-center
                                flex flex-col justify-center items-center gap-2
                                "
                                >
                                    <p className='[font-size:_clamp(1.5rem,3vw,3rem)]'>ダンボールの総合会社</p>
                                    <p className='[font-size:_clamp(0.8rem,2vw,2rem)]'>ダンボールの製造・企画・加工・納品までを
                                        <span className='md:hidden'><br/></span>
                                        ワンストップで行います。
                                    </p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full h-screen bg-equipment01 bg-cover bg-center'>
                        <div className="
                            overflow-hidden bg-fixed bg-slate-600/40
                            w-full h-full 
                            bottom-0 left-0 right-0 top-0
                            rounded-md
                            "
                            >
                            <div className="
                                w-full h-full p-5
                                font-semibold text-center
                                flex flex-col justify-center items-center gap-2
                                "
                                >
                                    <p className='[font-size:_clamp(1rem,3vw,3rem)]'>お客様のご要望に真摯にお応え致します。
                                    </p>
                                    <p className='[font-size:_clamp(0.8rem,2vw,2rem)]'>当たり前を当たり前にする仕事。</p>
                            </div>
                        </div>
                    </div>
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