"use client";

import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeSwiper() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
        slidesPerView={1}
        spaceBetween={50}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        //切り替わる速度
        speed={3000}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        <SwiperSlide>
          <div
            className="
                    w-full h-screen bg-town01 bg-cover bg-center
                    "
          >
            <div
              className="
                        overflow-hidden bg-fixed bg-slate-600/30
                        w-full h-full 
                        bottom-0 left-0 right-0 top-0
                        "
            >
              <div
                className="
                            w-full h-full
                            font-semibold text-center text-white
                            flex flex-col justify-center items-center gap-2
                            "
              >
                <p className="[font-size:_clamp(1.5rem,3vw,5rem)]">
                  毎日、目にする当たり前を。
                </p>
                <p className="[font-size:_clamp(0.8rem,2vw,2rem)]">
                  弊社はダンボールの製造・加工・販売を行っております。
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen bg-town02 bg-cover bg-center">
            <div
              className="
                            overflow-hidden bg-fixed bg-slate-600/10
                            w-full h-full  
                            bottom-0 left-0 right-0 top-0
                            "
            >
              <div
                className="
                                w-full h-full
                                font-semibold text-center text-white
                                flex flex-col justify-center items-center gap-2
                                "
              >
                <p className="[font-size:_clamp(1.5rem,3vw,5rem)]">
                  多種多様なご要望に
                  <span className="md:hidden">
                    <br />
                  </span>
                  お応え致します。
                </p>
                <p className="[font-size:_clamp(0.8rem,2vw,2rem)]">
                  梱包にまつわることは何でもお手伝い可能でございます。
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-screen bg-equipment01 bg-cover bg-center">
            <div
              className="
                            overflow-hidden bg-fixed bg-slate-600/40
                            w-full h-full 
                            bottom-0 left-0 right-0 top-0
                            rounded-md
                            "
            >
              <div
                className="
                                w-full h-full
                                font-semibold text-center text-white
                                flex flex-col justify-center items-center gap-2
                                "
              >
                <p className="[font-size:_clamp(1.5rem,3vw,5rem)]">
                  いつも、身近に、皆様と共に。
                </p>
                <p className="[font-size:_clamp(0.8rem,2vw,2rem)]">
                  これからも皆様の大事なモノを守り続けます。
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
