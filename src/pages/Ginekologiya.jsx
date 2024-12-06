import React, { useEffect } from 'react'
import Location from '../Location'

// rasmlar
import Ginekologiya1 from '../img/Ginekologiya1.jpg'
import Ginekologiya2 from '../img/Ginekologiya2.jpg'
import Ginekologiya3 from '../img/Ginekologiya3.jpg'
import Ginekologiya4 from '../img/Ginekologiya4.jpg'
import Ginekologiya5 from '../img/Ginekologiya5.jpg'
import Ginekologiya6 from '../img/Ginekologiya6.webp'

const Ginekologiya = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='py-7 xl:py-[62px]'>

            <div className="w-full max-w-base mx-auto px-5 navHiddenResp:px-7 lg:px-5">
                <Location />

                <h2 className='text-3xl md:text-[37px] lg:text-[45px] xl:text-[50px] font-semibold mb-8 navHiddenResp:mb-10 lg:mb-[50px]'>Ginekologiya</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-6 lg:mb-10'>
                    <div className='overflow-hidden rounded-lg'>
                        <img className='object-cover rounded-lg w-[444px] h-[297px] hover:scale-110 transition-all duration-300' src={Ginekologiya2} alt="Ginekologiya2 image" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <img className='object-cover rounded-lg w-[444px] h-[297px] hover:scale-110 transition-all duration-300' src={Ginekologiya3} alt="Ginekologiya3 image" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <img className='object-cover rounded-lg w-[444px] h-[297px] hover:scale-110 transition-all duration-300' src={Ginekologiya4} alt="Ginekologiya4 image" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <img className='object-cover rounded-lg w-[444px] h-[297px] hover:scale-110 transition-all duration-300' src={Ginekologiya1} alt="Ginekologiya1 image" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <img className='object-cover rounded-lg w-[444px] h-[297px] hover:scale-110 transition-all duration-300' src={Ginekologiya5} alt="Ginekologiya5 image" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <img className='object-cover rounded-lg w-[444px] h-[297px] hover:scale-110 transition-all duration-300' src={Ginekologiya6} alt="Ginekologiya6 image" />
                    </div>
                </div>

                <div className='space-y-6 px-1 navHiddenResp:px-2 xl:px-0 text-md navHiddenResp:lg xl:text-xl font-medium leading-6 navHiddenResp:leading-7 text-black/70 mb-0 lg:mb-16'>

                    <p>Ushbu blokda mahsulot/xizmatlaringiz tavsifi, taklif etilayotgan mahsulotlarning xarakteristikalari haqida gapiradigan va biznesingizning vazifalariga mos keladigan har qanday qulay katalog tuzilmasini yaratishni o'z ichiga olgan to'liq katalogni joylashtirishni tavsiya qilamiz.</p>

                    <p>Eslatma. Shuni esda tutingki, saytdagi matn ma'lumotlari individual bo'lishi kerak, boshqa Internet-resurslardan ko'chirilmasligi kerak, bu Yandex tavsiyalarida ta'kidlangan: "Biz boshqa manbalardan ma'lumotlarni nusxa ko'chiruvchi va original kontent yaratmaydigan yoki yuqori darajadagi saytlarni indekslamaslikka yoki reyting qilmaslikka harakat qilamiz. xizmat."</p>

                    <span className='inline-block'>Sahifani to'ldirishga misol:</span>

                    <p>Kompaniyaning asosiy faoliyati - ishlab chiqarish va sotish ... (Kompaniyangiz faoliyat sohasini ko'rsating). "..." (Kompaniya nomini kiriting) kompaniyasining mahsulotlari ... sohasida keng qo'llaniladi (Faoliyat sohasini ko'rsating). Biz eng talabchan iste'molchining ehtiyojlarini qondirishga qodirmiz, chunki taklif etilayotgan barcha mahsulotlar Yevropa sifatiga ega va mahsulotlarning keng assortimenti hech kimni befarq qoldirmaydi.</p>

                    <p>Ishonchlilik va sifatga e'tibor qaratgan holda, bizning narxlarimiz yoqimli pastligicha qolmoqda. Barcha mahsulotlar sertifikatlangan va xavfsizlik talablariga javob beradi / sifat standartlariga / GOSTlarga javob beradi.</p>

                    <p>Kompaniyaning asosiy faoliyati - bu... sohasida xizmatlar ko'rsatish (kompaniyangiz faoliyat sohasini ko'rsating). Barcha ishlar ko'p yillik tajribaga ega bo'lgan professionallar jamoasi tomonidan amalga oshiriladi ... (kompaniyangiz tomonidan taqdim etiladigan maxsus xizmatlarni ko'rsating).</p>

                    <p>Bunday arzon narxlarda biz sizga eng qisqa vaqt, qulay vaqt va beqiyos sifatni taklif qilmoqchimiz!</p>

                </div>

            </div>

        </div>
    )
}

export default Ginekologiya
