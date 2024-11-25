import React, {useEffect} from 'react'
import Location from '../Location'

const FoydalanuvchiShartnomasi = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className='py-7 xl:py-[62px]'>

            <div className="w-full max-w-base mx-auto px-5 navHiddenResp:px-7 lg:px-5">
                <Location />

                <h2 className='text-3xl md:[37px] lg:text[45px] xl:text-[50px] font-semibold lg:font-bold mb-8 navHiddenResp:mb-10 lg:mb-[50px]'>Foydalanuvchi shartnomasi</h2>

                <div className='navHiddenResp:px-2 xl:px-0 text-md navHiddenResp:lg xl:text-xl font-medium navHiddenResp:leading-7 text-black/70 mb-16 leading-6 lg:leading-7 space-y-4'>
                    <p>Men shaxsiy ma'lumotlarimni qayta ishlashga roziman</p>

                    <p>Men o'z xohishim bilan va o'z manfaatlarimni ko'zlab, o'z shaxsiy ma'lumotlarimni ____ mas'uliyati cheklangan jamiyatining ____ (TIN_________, OGRN__________, bundan keyin Operator deb yuritiladi) Internet-saytiga joylashtirishda (kirishda) roziligimni tasdiqlayman. Operator tomonidan ko'rsatilgan xizmatlarga nisbatan so'rovlar, so'rovnomalar, reklama va marketing tadqiqotlarini o'tkazish maqsadida xizmatlarni, Operator tomonidan taklif qilinadigan yangi xizmatlarni taklif qilish maqsadida men tomonidan ko'rsatilgan shaxsiy ma'lumotlarni qayta ishlashga. Operator, shu jumladan, ushbu veb-saytda men ko'rsatgan aloqa vositalari orqali men bilan to'g'ridan-to'g'ri aloqa o'rnatish orqali ushbu huquq (rozilik) mening shaxsiy ma'lumotlarimga nisbatan yuqorida ko'rsatilgan maqsadlarga erishish uchun zarur bo'lgan har qanday harakatlarni amalga oshirish uchun taqdim etiladi. shu jumladan, cheklovlarsiz, to'plash, tizimlashtirish, to'plash, saqlash, aniqlashtirish (yangilash, o'zgartirish), foydalanish, uzatish, shaxsiylashtirish, blokirovka qilish va yo'q qilish, bu men tomonidan ushbu veb-saytda ko'rsatilgan barcha ma'lumotlarni anglatadi.
                        Shu bilan men Operator tomonidan shaxsiy ma'lumotlarga ishlov berish har qanday usulda, shu jumladan avtomatlashtirish vositalaridan (shu jumladan dasturiy ta'minot) va avtomatlashtirish vositalaridan foydalanmasdan (har xil moddiy tashuvchilar, shu jumladan qog'oz tashuvchilardan foydalangan holda) amalga oshirilganligi haqida xabar berilganligini tasdiqlayman. .</p>
                </div>

            </div>

        </div>
    )
}

export default FoydalanuvchiShartnomasi
