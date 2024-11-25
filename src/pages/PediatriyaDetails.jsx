import React, { useEffect } from 'react'
import Location from '../Location'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pediatriyaDetailsImg1 from '../img/pediatriyaDetailsImg1.jpg'
import pediatriyaDetailsImg2 from '../img/pediatriyaDetailsImg2.jpg'
import pediatriyaDetailsImg3 from '../img/pediatriyaDetailsImg3.jpg'
import pediatriyaDetailsImg4 from '../img/pediatriyaDetailsImg4.jpg'
import pediatriyaDetailsImg5 from '../img/pediatriyaDetailsImg5.jpg'

const PediatriyaDetails = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 100
  }

  return (

    <div className='py-[60px]'>

      <div className="w-full max-w-base mx-auto px-5">
        <Location />
        <h2 className='text-[50px] font-bold mb-[50px]'>Pediatriya kafedrasi</h2>

        <div className="slider-container mb-14">
          <Slider {...settings}>
            <div className="relative">
              <img
                className="w-96 h-60 object-cover mx-auto"
                src={pediatriyaDetailsImg1}
                alt="Pediatriya Details Img"
              />
            </div>
            <div className="relative">
              <img
                className="w-96 h-60 object-cover mx-auto"
                src={pediatriyaDetailsImg2}
                alt="Pediatriya Details Img"
              />
            </div>
            <div className="relative">
              <img
                className="w-96 h-60 object-cover mx-auto"
                src={pediatriyaDetailsImg3}
                alt="Pediatriya Details Img"
              />
            </div>
            <div className="relative">
              <img
                className="w-96 h-60 object-cover mx-auto"
                src={pediatriyaDetailsImg4}
                alt="Pediatriya Details Img"
              />
            </div>
            <div className="relative">
              <img
                className="w-96 h-60 object-cover mx-auto"
                src={pediatriyaDetailsImg5}
                alt="Pediatriya Details Img"
              />
            </div>
          </Slider>
        </div>

        <div>
          <div className='mb-6'>

            <div className='text-xl font-normal text-black/90 leading-9 space-y-6'>
              <p>Megagroup kompaniyasi sizni kompaniyangiz veb-saytiga xush kelibsiz! <br />
                To'g'ri tanlov qilganingizdan xursandmiz, chunki veb-sayt yaratish orqali kompaniyangiz Internetning cheksiz maydonida o'z <br /> identifikatoriga ega bo'ldi! <br />
                Umid qilamizki, ushbu sayt tufayli potentsial mijozlaringiz sizni Internetda osongina topishadi va sayt tez orada daromad olishni <br /> boshlaydi.</p>

              <p>Sizning saytingizda boshqaruv tizimi (CMS-S3 MegaSite) mavjud bo'lib, u qulay foydalanuvchi interfeysi tufayli dasturlash ko'nikmalarisiz <br /> sayt mazmunini osongina boshqarish imkonini beradi.</p>

              <span className='block'>Sayt xususiyatlari:</span>
            </div>
          </div>

          {/* 1. Har xil joylashtirish darajasidagi matn sahifalarini joylashtirish */}
          <div className='mb-6'>

            <h3 className='text-3xl font-bold mb-4'>1. Har xil joylashtirish darajasidagi matn sahifalarini joylashtirish</h3>

            <div className='text-xl font-normal text-black/90 leading-9 space-y-6'>
              <p>Agar siz saytingiz nafaqat Internetda o'z o'rnini egallashini, balki qidiruv tizimlari tomonidan yaxshi qabul qilinishini istasangiz, Yandex bergan tavsiyalarni o'qishingiz mumkin - “Yuqori sifatli sayt va past sifatli sayt o'rtasidagi farq nima? Yandex nuqtai nazaridan."</p>

              <p>Shuni esda tutingki, saytdagi matn ma'lumotlari Yandex tavsiyalarida ko'rsatilganidek, boshqa Internet-resurslardan ko'chirilmasligi kerak:</p>

              <p>"Biz boshqa manbalardan ma'lumot ko'chiruvchi va original kontent yoki xizmat yaratmaydigan saytlarni indekslamaslikka yoki yuqori darajaga ko'tarmaslikka harakat qilamiz."</p>
            </div>

          </div>

          {/* 2. Tasvirlarni joylashtirish (individual fotosuratlar va foto galereya) */}
          <div className='mb-6'>

            <h3 className='text-3xl font-bold mb-4'>2. Tasvirlarni joylashtirish (individual fotosuratlar va foto galereya)</h3>

            <div className='text-xl font-normal text-black/90 leading-9'>
              <p>Saytda siz fotosuratlarni matn sahifalarida joylashtirishingiz va foto galereyalar yaratishingiz mumkin. Bizning boshqaruv tizimimiz sizga fotosuratlarni avtomatik ravishda qisqartirish imkonini beradi, ammo biz hali ham grafik muharrirlarda tasvirlar bilan ishlashda "Veb uchun saqlash" funksiyasidan foydalanishni tavsiya qilamiz. Bu sizga tasvir o'lchamlarini sezilarli darajada siqish imkonini beradi. Buning yordamida sayt tezroq yuklanadi va kamroq trafik sarflaydi, bu cheksiz Internetga kirish imkoniga ega bo'lmagan foydalanuvchilar uchun muhimdir.</p>
            </div>

          </div>

          {/* 3. Boshqaruv tizimida jadvallar yaratish yoki ularni Exceldan import qilish imkoniyati. */}
          <div>

            <h3 className='text-3xl font-bold mb-4'>3. Boshqaruv tizimida jadvallar yaratish yoki ularni Exceldan import qilish imkoniyati.</h3>

            <div className='text-xl font-normal text-black/90 leading-9'>
              <p>Excel-dan jadvallarni import qilishda ularning kengligi va o'lchamlariga e'tibor berish tavsiya etiladi. Jadval murakkab bo'lsa, monitorlar va brauzerlarning turli o'lchamlari tufayli saytga tashrif buyuruvchilar uchun yaxshi yuklanmasligi mumkin.</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default PediatriyaDetails
