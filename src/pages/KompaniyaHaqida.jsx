import React, {useEffect} from 'react'
import Location from '../Location'
import { Link } from 'react-router-dom'

const KompaniyaHaqida = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const nextBtn = '>'
    return (
        <div className='py-9 lg:py-12 xl:py-[62px]'>

            <div className="w-full max-w-base mx-auto px-5">
                <Location />

                {/* hero */}
                <div className='bg-KompaniyaHaqidaHero-Background bg-cover bg-bottom h-[600px] xl:h-[700px] relative rounded-2xl mb-5'>

                    <div className='flex flex-col items-center pt-28 moreHiddenResp:pt-36 xl:pt-40'>
                        <div className='absolute text-center py-4 px-5 text-white'>
                            <h2 className='mb-6 md:mb-9 xl:mb-12 text-4xl md:text-5xl xl:text-7xl font-bold'>Mos Medical Center</h2>

                            <p className='text-2xl md:text-3xl xl:text-5xl leading-9 md:leading-[45px] xl:leading-[70px] px-3 md:px-5 lg:px-0'>Bizning Kompaniya Sog'liqni Saqlashda <br /> Innovatsiyalarni Taqdim Etadi.</p>
                        </div>
                    </div>

                </div>

                <div className='py-5 navHiddenResp:py-8 xl:py-11'>

                    {/* Kompaniya Haqida */}
                    <div className='mb-3 navHiddenResp:mb-4 xl:mb-6'>
                        <h2 className='text-3xl md:[37px] lg:text[45px] xl:text-[50px] font-semibold xl:font-bold mb-5 lg:mb-8'>Kompaniya haqida</h2>

                        <div className='px-1 navHiddenResp:px-2 xl:px-0 text-base navHiddenResp:text-lg xl:text-xl font-medium leading-6 navHiddenResp:leading-7 text-black/70 mb-16 lg:leading-9 space-y-6'>
                            <p>Megagroup kompaniyasi sizni kompaniyangiz veb-saytiga xush kelibsiz! <br />
                                To'g'ri tanlov qilganingizdan xursandmiz, chunki veb-sayt yaratish orqali kompaniyangiz Internetning cheksiz maydonida o'z <br /> identifikatoriga ega bo'ldi! <br />
                                Umid qilamizki, ushbu sayt tufayli potentsial mijozlaringiz sizni Internetda osongina topishadi va sayt tez orada daromad olishni <br /> boshlaydi.</p>

                            <p>Sizning saytingizda boshqaruv tizimi (CMS-S3 MegaSite) mavjud bo'lib, u qulay foydalanuvchi interfeysi tufayli dasturlash ko'nikmalarisiz <br /> sayt mazmunini osongina boshqarish imkonini beradi.</p>

                        </div>
                    </div>

                    {/* 1. Har xil joylashtirish darajasidagi matn sahifalarini joylashtirish */}
                    <div className='mb-3 navHiddenResp:mb-4 xl:mb-6'>

                        <h3 className='text-lg navHiddenResp:text-xl xl:text-3xl font-semibold lg:font-bold mb-4'>1. Har xil joylashtirish darajasidagi matn sahifalarini joylashtirish</h3>

                        <div className='px-1 navHiddenResp:px-2 xl:px-0 text-base navHiddenResp:text-lg xl:text-xl font-medium leading-6 navHiddenResp:leading-7 text-black/70 mb-16 lg:leading-9 space-y-4 lg:space-y-6'>
                            <p>Agar siz saytingiz nafaqat Internetda o'z o'rnini egallashini, balki qidiruv tizimlari tomonidan yaxshi qabul qilinishini istasangiz, Yandex bergan tavsiyalarni o'qishingiz mumkin - “Yuqori sifatli sayt va past sifatli sayt o'rtasidagi farq nima? Yandex nuqtai nazaridan."</p>

                            <p>Shuni esda tutingki, saytdagi matn ma'lumotlari Yandex tavsiyalarida ko'rsatilganidek, boshqa Internet-resurslardan ko'chirilmasligi kerak:</p>

                            <p>"Biz boshqa manbalardan ma'lumot ko'chiruvchi va original kontent yoki xizmat yaratmaydigan saytlarni indekslamaslikka yoki yuqori darajaga ko'tarmaslikka harakat qilamiz."</p>
                        </div>

                    </div>

                    {/* 2. Tasvirlarni joylashtirish (individual fotosuratlar va foto galereya) */}
                    <div className='mb-3 navHiddenResp:mb-4 xl:mb-6'>

                        <h3 className='text-lg navHiddenResp:text-xl xl:text-3xl font-semibold lg:font-bold mb-4'>2. Tasvirlarni joylashtirish (individual fotosuratlar va foto galereya)</h3>

                        <div className='px-1 navHiddenResp:px-2 xl:px-0 text-base navHiddenResp:text-lg xl:text-xl font-medium leading-6 navHiddenResp:leading-7 text-black/70 mb-16 lg:leading-9 space-y-4 lg:space-y-6'>
                            <p>Saytda siz fotosuratlarni matn sahifalarida joylashtirishingiz va foto galereyalar yaratishingiz mumkin. Bizning boshqaruv tizimimiz sizga fotosuratlarni avtomatik ravishda qisqartirish imkonini beradi, ammo biz hali ham grafik muharrirlarda tasvirlar bilan ishlashda "Veb uchun saqlash" funksiyasidan foydalanishni tavsiya qilamiz. Bu sizga tasvir o'lchamlarini sezilarli darajada siqish imkonini beradi. Buning yordamida sayt tezroq yuklanadi va kamroq trafik sarflaydi, bu cheksiz Internetga kirish imkoniga ega bo'lmagan foydalanuvchilar uchun muhimdir.</p>
                        </div>

                    </div>

                    {/* 3. Boshqaruv tizimida jadvallar yaratish yoki ularni Exceldan import qilish imkoniyati. */}
                    <div>

                        <h3 className='text-lg navHiddenResp:text-xl xl:text-3xl font-semibold lg:font-bold mb-4'>3. Boshqaruv tizimida jadvallar yaratish yoki ularni Exceldan import qilish imkoniyati.</h3>

                        <div className='px-1 navHiddenResp:px-2 xl:px-0 text-base navHiddenResp:text-lg xl:text-xl font-medium leading-6 navHiddenResp:leading-7 text-black/70 mb-16 lg:leading-9 space-y-4 lg:space-y-6'>
                            <p>Excel-dan jadvallarni import qilishda ularning kengligi va o'lchamlariga e'tibor berish tavsiya etiladi. Jadval murakkab bo'lsa, monitorlar va brauzerlarning turli o'lchamlari tufayli saytga tashrif buyuruvchilar uchun yaxshi yuklanmasligi mumkin.</p>
                        </div>

                    </div>

                </div>

                {/* Link content */}
                <ul className='w-full px-2 md:px-5 xl:p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>

                    {/* Sertifikatlar */}
                    <li>
                        <Link to='/Sertifikatlar' className='flex items-center justify-between py-4 px-5 rounded-lg bg-Mos-purple-light opacity-60 hover:opacity-100 transition-all duration-300'>
                            <p className='text-lg font-semibold'>Sertifikatlar</p>

                            <span className='text-2xl font-bold'>{nextBtn}</span>
                        </Link>
                    </li>

                    {/* Hamkorlar */}
                    <li>
                        <Link to='/Hamkorlar' className='flex items-center justify-between py-4 px-5 rounded-lg bg-Mos-purple-light opacity-60 hover:opacity-100 transition-all duration-300'>
                            <p className='text-lg font-semibold'>Hamkorlar</p>

                            <span className='text-2xl font-bold'>{nextBtn}</span>
                        </Link>
                    </li>

                    {/* Fotogalareya */}
                    <li>
                        <Link to='/Fotogalareya' className='flex items-center justify-between py-4 px-5 rounded-lg bg-Mos-purple-light opacity-60 hover:opacity-100 transition-all duration-300'>
                            <p className='text-lg font-semibold'>Fotogalareya</p>

                            <span className='text-2xl font-semibold'>{nextBtn}</span>
                        </Link>
                    </li>

                    {/* Mutaxassislar */}
                    <li>
                        <Link to='/Mutaxassislar' className='flex items-center justify-between py-4 px-5 rounded-lg bg-Mos-purple-light opacity-60 hover:opacity-100 transition-all duration-300'>
                            <p className='text-lg font-semibold'>Mutaxassislar</p>

                            <span className='text-2xl font-semibold'>{nextBtn}</span>
                        </Link>
                    </li>

                </ul>

            </div>

        </div>
    )
}

export default KompaniyaHaqida
