import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Location from '../Location'

// rasmlar 
import XizmatlarImg1 from '../img/XizmatlarImg1.jpg'
import XizmatlarImg2 from '../img/XizmatlarImg2.jpg'
import XizmatlarImg4 from '../img/XizmatlarImg4.jpg'
import XizmatlarImg5 from '../img/XizmatlarImg5.jpg'
import XizmatlarImg6 from '../img/XizmatlarImg6.jpg'
import XizmatlarImg7 from '../img/XizmatlarImg7.jpg'

// lightGallery
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

const Xizmatlar = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const nextBtn = '>'

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <div className='py-10'>

      <div className="w-full max-w-base mx-auto px-5">
        <Location />

        {/* hero */}
        <div className='w-full flex flex-col items-center navHiddenResp:inline-block rounded-lg bg-XizmatlarHero bg-cover bg-center px-7 navHiddenResp:pl-20 py-32 navHiddenResp:py-48 mb-14'>

          <div className='w-full max-w-[600px] space-y-5 navHiddenResp:space-y-9 xl:space-y-14 text-white/95 text-center navHiddenResp:text-left'>

            <h1 className='text-4xl xl:text-5xl font-semibold'>Klinika xizmatlari haqida.</h1>

            <p className='text-lg navHiddenResp:xl xl:text-2xl font-medium navHiddenResp:leading-7 xl:leading-10'><span className='inline-block text-xl navHiddenResp:text-3xl mr-2 text-white'>Mos-Medical-Center</span> klinikamizning xizmatlari darajasi dunyo bo'yicha top 17 ga yetti. Shuningdek bizning shifoxanaga kelgan be'morlar ham xalovat topibdi, hayot ko'satkichi 56% bo'lgan be'morlar ham oyoqqa turib ketmoqda</p>

          </div>

        </div>

        {/* text content */}
        <div className='space-y-6 px-2 navHiddenResp:px-5 text-md navHiddenResp:lg xl:text-xl font-medium leading-6 navHiddenResp:leading-7 text-black/70 mb-16'>

          <p>Ushbu blokda mahsulot/xizmatlaringiz tavsifi, taklif etilayotgan mahsulotlarning xarakteristikalari haqida gapirib, biznesingizning vazifalariga mos keladigan har qanday qulay katalog tuzilmasini yaratishni o'z ichiga olgan to'liq katalogni joylashtirishni tavsiya qilamiz.</p>

          <p>Eslatma. Shuni esda tutingki, saytdagi matn ma'lumotlari individual bo'lishi kerak, boshqa Internet-resurslardan ko'chirilmasligi kerak, bu Yandex tavsiyalarida ta'kidlangan: "Biz boshqa manbalardan ma'lumotlarni nusxa ko'chiruvchi va original kontent yaratmaydigan yoki yuqori darajadagi saytlarni indekslamaslikka yoki reyting qilmaslikka harakat qilamiz. xizmat."</p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing. Cumque dicta autem quasi culpa assumenda dolor amet suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore deleniti voluptate ut expedita, ad quasi nobis nulla laboriosam hic! Dolorem voluptatem ab accusantium repellendus, vitae nostrum error fugit aliquam.</p>

          <p className='hidden navHiddenResp:inline-block'>Adipisicing elit. Doloribus, nostrum? Ut architecto, earum iusto porro quia excepturi dignissimos doloremque totam laudantium? Cumque dictauam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio atque fugit aperiam fugiat illum temporibus totam, sint voluptate maxime tempore dolorum eligendi asperiores impedit, rem exercitationem minus necessitatibus quisquam qui?  adipisicing elit. Ducimus ea, magni aliquid ipsum in doloremque similique nobis corporis illo illum voluptatem ipsam alias culpa. Autem sed tenetur iusto accusantium ab?</p>

        </div>

        {/* gallarey */}
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          <Link className='inline-block group overflow-hidden hover:rotate-[7deg] hover:translate-x-10 transition-all duration-200' to={XizmatlarImg1}>
            <img
              className="w-96 h-60 object-cover rounded-xl"
              alt="Xizmatlar image 1"
              src={XizmatlarImg1}
            />
          </Link>

          <Link className='inline-block group overflow-hidden hover:rotate-[7deg] hover:translate-x-10 transition-all duration-200' to={XizmatlarImg2}>
            <img
              className="w-96 h-60 object-cover rounded-xl"
              alt="Xizmatlar image 2"
              src={XizmatlarImg2}
            />
          </Link>

          <Link className='inline-block group overflow-hidden hover:rotate-[7deg] hover:translate-x-10 transition-all duration-200' to={XizmatlarImg4}>
            <img
              className="w-96 h-60 object-cover rounded-xl"
              alt="Xizmatlar image 4"
              src={XizmatlarImg4}
            />
          </Link>

          <Link className='inline-block group overflow-hidden hover:rotate-[7deg] hover:translate-x-10 transition-all duration-200' to={XizmatlarImg5}>
            <img
              className="w-96 h-60 object-cover rounded-xl"
              alt="Xizmatlar image 5"
              src={XizmatlarImg5}
            />
          </Link>

          <Link className='inline-block group overflow-hidden hover:rotate-[7deg] hover:translate-x-10 transition-all duration-200' to={XizmatlarImg6}>
            <img
              className="w-96 h-60 object-cover rounded-xl"
              alt="Xizmatlar image 6"
              src={XizmatlarImg6}
            />
          </Link>

          <Link className='inline-block group overflow-hidden hover:rotate-[7deg] hover:translate-x-10 transition-all duration-200' to={XizmatlarImg7}>
            <img
              className="w-96 h-60 object-cover rounded-xl"
              alt="Xizmatlar image 7"
              src={XizmatlarImg7}
            />
          </Link>
        </LightGallery>


        {/* Link content */}
        <ul className='w-full px-2 md:px-5 xl:p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20'>

          {/* Ginekologiya */}
          <li>
            <Link to='/Ginekologiya' className='flex items-center justify-between py-4 px-5 rounded-lg bg-Mos-purple-light opacity-60 hover:opacity-100 transition-all duration-300'>
              <p className='text-lg font-semibold'>Ginekologiya</p>

              <span className='text-2xl font-bold'>{nextBtn}</span>
            </Link>
          </li>

          {/* Nefrologiya */}
          <li>
            <Link to='/Nefrologiya' className='flex items-center justify-between py-4 px-5 rounded-lg bg-Mos-purple-light opacity-60 hover:opacity-100 transition-all duration-300'>
              <p className='text-lg font-semibold'>Nefrologiya</p>

              <span className='text-2xl font-bold'>{nextBtn}</span>
            </Link>
          </li>

          {/* Nevrologiya */}
          <li>
            <Link to='/Nevrologiya' className='flex items-center justify-between py-4 px-5 rounded-lg bg-Mos-purple-light opacity-60 hover:opacity-100 transition-all duration-300'>
              <p className='text-lg font-semibold'>Nevrologiya</p>

              <span className='text-2xl font-semibold'>{nextBtn}</span>
            </Link>
          </li>

          {/* Kardiologiya */}
          <li>
            <Link to='/Kardiologiya' className='flex items-center justify-between py-4 px-5 rounded-lg bg-Mos-purple-light opacity-60 hover:opacity-100 transition-all duration-300'>
              <p className='text-lg font-semibold'>Kardiologiya</p>

              <span className='text-2xl font-semibold'>{nextBtn}</span>
            </Link>
          </li>

          {/* Gastroenterologiya */}
          <li>
            <Link to='/Gastroenterologiya' className='flex items-center justify-between py-4 px-5 rounded-lg bg-Mos-purple-light opacity-60 hover:opacity-100 transition-all duration-300'>
              <p className='text-lg font-semibold'>Gastroenterologiya</p>

              <span className='text-2xl font-semibold'>{nextBtn}</span>
            </Link>
          </li>

          {/* Otorinolaringologiya */}
          <li>
            <Link to='/Otorinolaringologiya' className='flex items-center justify-between py-4 px-5 rounded-lg bg-Mos-purple-light opacity-60 hover:opacity-100 transition-all duration-300'>
              <p className='text-lg font-semibold'>Otorinolaringologiya</p>

              <span className='text-2xl font-semibold'>{nextBtn}</span>
            </Link>
          </li>

        </ul>

      </div>

    </div>
  )
}

export default Xizmatlar