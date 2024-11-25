import React, { useEffect } from 'react'
import Location from '../Location'
import { Link } from 'react-router-dom';

import LightGallery from 'lightgallery/react';
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// rasmlar
import Sertifikat1 from '../img/Sertifikat1.webp'
import Sertifikat2 from '../img/Sertifikat2.webp'
import Sertifikat3 from '../img/Sertifikat3.webp'
import Sertifikat4 from '../img/Sertifikat4.webp'
import Sertifikat5 from '../img/Sertifikat5.webp'
import Sertifikat6 from '../img/Sertifikat6.webp'
import Sertifikat7 from '../img/Sertifikat7.webp'
import Sertifikat8 from '../img/Sertifikat8.webp'
import Sertifikat9 from '../img/Sertifikat9.webp'
import Sertifikat10 from '../img/Sertifikat10.webp'
import Sertifikat11 from '../img/Sertifikat11.webp'
import Sertifikat12 from '../img/Sertifikat12.webp'

const Sertifikatlar = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className='py-10 xl:py-[62px]'>

            <div className="w-full max-w-base mx-auto px-5 navHiddenResp:px-7 lg:px-5 space-y-5 navHiddenResp:space-y-7 xl:space-y-10">
                <Location />

                <h2 className='text-3xl md:[37px] lg:text[45px] xl:text-[50px] font-semibold mb-8 navHiddenResp:mb-10 lg:mb-[50px]'>Sertifikatlar</h2>

                <p className='text-xl px-1 navHiddenResp:px-2 xl:px-0 text-md navHiddenResp:lg xl:text-xl font-medium leading-6 navHiddenResp:leading-7 text-black/70'>Ushbu blokda mahsulot/xizmatlaringiz tavsifi, taklif etilayotgan mahsulotlarning xarakteristikalari haqida gapirib, biznesingizning vazifalariga mos keladigan har qanday qulay katalog tuzilmasini yaratishni o'z ichiga olgan to'liq katalogni joylashtirishni tavsiya qilamiz.</p>

                <div className="App">
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        elementClassNames="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-x-8 lg:gap-y-10"
                    >
                        <Link className='inline-block border-2 py-4 px-5 rounded-lg border-Mos-Purple overflow-hidden group' to="../src/img/Sertifikat1.webp">
                            <img className='w-[435px] h-[246px] object-cover group-hover:scale-110 transition-all duration-300' alt="Sertifikat1" src={Sertifikat1} />
                        </Link>
                        <Link className='inline-block border-2 py-4 px-5 rounded-lg border-Mos-Purple overflow-hidden group' to="../src/img/Sertifikat2.webp">
                            <img className='w-[435px] h-[246px] object-cover group-hover:scale-110 transition-all duration-300' alt="Sertifikat2" src={Sertifikat2} />
                        </Link>
                        <Link className='inline-block border-2 py-4 px-5 rounded-lg border-Mos-Purple overflow-hidden group' to="../src/img/Sertifikat3.webp">
                            <img className='w-[435px] h-[246px] object-cover group-hover:scale-110 transition-all duration-300' alt="Sertifikat3" src={Sertifikat3} />
                        </Link>
                        <Link className='inline-block border-2 py-4 px-5 rounded-lg border-Mos-Purple overflow-hidden group' to="../src/img/Sertifikat4.webp">
                            <img className='w-[435px] h-[246px] object-cover group-hover:scale-110 transition-all duration-300' alt="Sertifikat4" src={Sertifikat4} />
                        </Link>
                        <Link className='inline-block border-2 py-4 px-5 rounded-lg border-Mos-Purple overflow-hidden group' to="../src/img/Sertifikat5.webp">
                            <img className='w-[435px] h-[246px] object-cover group-hover:scale-110 transition-all duration-300' alt="Sertifikat5" src={Sertifikat5} />
                        </Link>
                        <Link className='inline-block border-2 py-4 px-5 rounded-lg border-Mos-Purple overflow-hidden group' to="../src/img/Sertifikat6.webp">
                            <img className='w-[435px] h-[246px] object-cover group-hover:scale-110 transition-all duration-300' alt="Sertifikat6" src={Sertifikat6} />
                        </Link>
                        <Link className='inline-block border-2 py-4 px-5 rounded-lg border-Mos-Purple overflow-hidden group' to="../src/img/Sertifikat7.webp">
                            <img className='w-[435px] h-[246px] object-cover group-hover:scale-110 transition-all duration-300' alt="Sertifikat7" src={Sertifikat7} />
                        </Link>
                        <Link className='inline-block border-2 py-4 px-5 rounded-lg border-Mos-Purple overflow-hidden group' to="../src/img/Sertifikat8.webp">
                            <img className='w-[435px] h-[246px] object-cover group-hover:scale-110 transition-all duration-300' alt="Sertifikat8" src={Sertifikat8} />
                        </Link>
                        <Link className='inline-block border-2 py-4 px-5 rounded-lg border-Mos-Purple overflow-hidden group' to="../src/img/Sertifikat9.webp">
                            <img className='w-[435px] h-[246px] object-cover group-hover:scale-110 transition-all duration-300' alt="Sertifikat9" src={Sertifikat9} />
                        </Link>
                        <Link className='inline-block border-2 py-4 px-5 rounded-lg border-Mos-Purple overflow-hidden group' to="../src/img/Sertifikat10.webp">
                            <img className='w-[435px] h-[246px] object-cover group-hover:scale-110 transition-all duration-300' alt="Sertifikat10" src={Sertifikat10} />
                        </Link>
                        <Link className='inline-block border-2 py-4 px-5 rounded-lg border-Mos-Purple overflow-hidden group' to="../src/img/Sertifikat11.webp">
                            <img className='w-[435px] h-[246px] object-cover group-hover:scale-110 transition-all duration-300' alt="Sertifikat11" src={Sertifikat11} />
                        </Link>
                        <Link className='inline-block border-2 py-4 px-5 rounded-lg border-Mos-Purple overflow-hidden group' to="../src/img/Sertifikat12.webp">
                            <img className='w-[435px] h-[246px] object-cover group-hover:scale-110 transition-all duration-300' alt="Sertifikat12" src={Sertifikat12} />
                        </Link>
                    </LightGallery>
                </div>

                <p className='text-xl px-1 navHiddenResp:px-2 xl:px-0 text-md navHiddenResp:lg xl:text-xl font-medium leading-6 navHiddenResp:leading-7 text-black/70'>Shuni esda tutingki, saytdagi matn ma'lumotlari individual bo'lishi kerak, boshqa Internet-resurslardan ko'chirilmasligi kerak, bu Yandex tavsiyalarida ta'kidlangan: "Biz boshqa manbalardan ma'lumot nusxa ko'chiruvchi va original kontent yaratmaydigan yoki yuqori darajadagi saytlarni indekslamaslikka yoki reyting qilmaslikka harakat qilamiz. xizmat."</p>
            </div>

        </div>
    )
}

export default Sertifikatlar;
