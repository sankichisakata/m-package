"use client"

import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'

export default function HomeSwiper () {
    return(
        <>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
            loop={true}
            slidesPerView={1}
            spaceBetween={50}
            autoplay={{
                delay: 5000,
                disableOnInteraction: true,
              }} 
            //切り替わる速度
            speed={2000}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            >

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
                            font-semibold text-center text-white
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
                                font-semibold text-center text-white
                                flex flex-col justify-center items-center gap-2
                                "
                                >
                                    <p className='[font-size:_clamp(1.5rem,3vw,3rem)]'>いつも、身近に、皆様と共に。</p>
                                    <p className='[font-size:_clamp(0.8rem,2vw,2rem)]'>段ボールの製造・企画・加工・納品までを
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
                                font-semibold text-center text-white
                                flex flex-col justify-center items-center gap-2
                                "
                                >
                                    <p className='[font-size:_clamp(1rem,3vw,3rem)]'>お客様のご要望に真摯にお応え致します。
                                    </p>
                                    <p className='[font-size:_clamp(0.8rem,2vw,2rem)]'></p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>


        </>
    )
}