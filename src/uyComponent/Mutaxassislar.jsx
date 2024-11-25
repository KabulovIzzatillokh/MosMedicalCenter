import React, { useRef, useCallback, useEffect } from 'react';

import Location from '../Location';
import { Link } from 'react-router-dom';
import { MutaxassislarData } from '../data';

// swipper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';


const Mutaxassislar = () => {

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
    <div className='w-full max-w-base mx-auto px-5 py-5 xl:py-[62px]'>

      <Location />
      <h2 className='text-[40px] xl:text-[61px] font-semibold mb-5 xl:mb-8'>Mutaxassislar</h2>

      <div className='relative Hero'>

        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={40}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
        >
          {MutaxassislarData.map((Mutaxassis) => {
            return (
              <SwiperSlide key={Mutaxassis.id} className='Mutaxassislar mb-14 group border-[3px] border-transparent shadow-md shadow-transparent hover:shadow-Mos-Purple hover:border-Mos-Purple hover:rounded-[30px]'>
                <Link to={`/Mutaxassislar/${Mutaxassis.name}`}>
                  <div className='transform group-hover:pb-6 group-hover:px-6 group-hover:pt-[30px] transition-all duration-500'>
                    <img className='rounded-[30px]' src={Mutaxassis.img} alt="Aleksandr Image" />
                  </div>
                  <div className='pt-6 px-6 pb-[30px]'>
                    <h3 className='text-xl font-bold xl:text-xl xl:font-semibold mb-2'>{Mutaxassis.name}</h3>
                    <p className='text-lg xl:text-base'>{Mutaxassis.job}</p>
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}

        </Swiper>

        <button
          className="hero-btn absolute top-52 z-10 -left-10 -translate-x-[40px] opacity-0 hidden navHiddenResp:block"
          onClick={PrevBtn}
        >
          {prevBtn}
        </button>

        <button
          className="hero-btn absolute top-52 z-10 -right-10 translate-x-[40px] opacity-0 hidden navHiddenResp:block"
          onClick={NextBtn}
        >
          {nextBtn}
        </button>

      </div>
    </div>
  )
}

export default Mutaxassislar;