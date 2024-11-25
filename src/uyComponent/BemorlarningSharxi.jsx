import React, { useRef, useCallback, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

const BemorlarningSharxi = () => {

    const swiperRef = useRef(null);

    const PrevBtn = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    }, []);

    const NextBtn = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    }, []);

    const nextBtn = '>';
    const prevBtn = '<';

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='py-[60px] relative Hero'>
            <h2 className='text-[40px] leading-10 xl:leading-none xl:text-[61px] font-semibold mb-8'>Bemorlarning sharhlari</h2>

            <Swiper
                loop={true}
                slidesPerView={2}
                spaceBetween={100}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    800: { slidesPerView: 2 }
                }}
            >
                <SwiperSlide className='block mb-10 xl:mb-20'>
                    <div className='w-[400px] xl:w-[630px]'>
                        <p className='text-lg font-medium mb-8 text-black/80'>Yuqori sifatli, batafsil ko'rib chiqish mahsulotning asosiy mezonlarini qamrab oladi va foydalanish shartlarini aniqlash imkonini beradi. Bu biznes strategiyasining birinchi samarali vositasi bo'lib, potentsial mijozlarga tanlov qilishga yordam beradi va xaridni rag'batlantiradi.</p>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold'>Muxin Aleksiy</h3>
                        <p className='text-lg font-medium mb-8 text-black/80'>Sport Ustasi</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='block mb-20'>
                    <div className='w-[400px] xl:w-[630px]'>
                        <p className='text-lg font-medium mb-8 text-black/80'>Yuqori sifatli, batafsil ko'rib chiqish mahsulotning asosiy mezonlarini qamrab oladi va foydalanish shartlarini aniqlash imkonini beradi. Bu biznes strategiyasining birinchi samarali vositasi bo'lib, potentsial mijozlarga tanlov qilishga yordam beradi va xaridni rag'batlantiradi.</p>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold'>Juravleva Mariya</h3>
                        <p className='text-lg font-medium mb-8 text-black/80'>Menejer</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='block mb-20'>
                    <div className='w-[400px] xl:w-[630px]'>
                        <p className='text-lg font-medium mb-8 text-black/80'>Yuqori sifatli, batafsil ko'rib chiqish mahsulotning asosiy mezonlarini qamrab oladi va foydalanish shartlarini aniqlash imkonini beradi. Bu biznes strategiyasining birinchi samarali vositasi bo'lib, potentsial mijozlarga tanlov qilishga yordam beradi va xaridni rag'batlantiradi.</p>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold'>Tropinkina Lidiya</h3>
                        <p className='text-lg font-medium mb-8 text-black/80'>Interyer dizayneri</p>
                    </div>
                </SwiperSlide>
            </Swiper>

            <button
                className="hidden lg:inline-block hero-btn absolute top-60 z-10 -left-10 -translate-x-[40px] opacity-0"
                onClick={PrevBtn}
            >
                {prevBtn}
            </button>

            <button
                className="hidden lg:inline-block hero-btn absolute top-60 z-10 -right-10 translate-x-[40px] opacity-0"
                onClick={NextBtn}
            >
                {nextBtn}
            </button>
        </div>
    )
}

export default BemorlarningSharxi;
