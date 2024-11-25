import React, { useEffect } from 'react'
import Location from '../Location'

import Allergiya from '../img/Allergiya.webp'
import TezPishirish from '../img/TezPishirish.webp'

const Yangiliklar = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='py-[60px]'>

            <div className="w-full max-w-base mx-auto px-5">
                <Location />

                <h2 className='text-[50px] font-bold mb-[55px]'>Yangiliklar</h2>

                <div className='space-y-12'>

                    <div className='flex'>
                        <div className='mr-10'>
                            <img width='436' height='327' src={Allergiya} alt="Allergiya" />
                        </div>

                        <div className='w-[903px]'>
                            <p className='text-base font-normal text-black/70 mb-3'>29.05.2023 Borisov Valentin</p>

                            <h3 className='text-3xl font-bold mb-5'>Allergiyaga chalinganlar uchun eng yaxshi <br /> changyutgichni qanday tanlash mumkin</h3>

                            <p className='text-lg font-normal leading-7 text-black/70'>Chang allergiyasi - bu noqulaylik tug'diradigan va turli alomatlarga olib keladigan keng tarqalgan <br /> muammo. Ushbu muammoni hal qilishning usullaridan biri uyingizdagi chang va allergenlarni <br /> samarali ravishda olib tashlaydigan maxsus ishlab chiqilgan changyutgichdan foydalanishdir. Ushbu <br /> maqolada biz allergiyaga chalinganlar uchun eng yaxshi changyutgichni tanlashga yordam <br /> beradigan asosiy omillarni ko'rib chiqamiz.</p>
                        </div>
                    </div>

                    <div className='flex flex-row-reverse'>
                        <div className='ml-10'>
                            <img width='436' height='327' src={TezPishirish} alt="TezPishirish" />
                        </div>

                        <div className='w-[903px]'>
                            <p className='text-base font-normal text-black/70 mb-3'>29.05.2023 Pauchkova Valentina</p>

                            <h3 className='text-3xl font-bold mb-5'>Tez pishirish uchun mikroto'lqinli pechlar</h3>

                            <p className='text-lg font-normal leading-7 text-black/70'>Har bir daqiqa muhim bo'lgan bugungi tez sur'atda hayotda mikroto'lqinli pechlar ovqat <br /> pishirishning samarali usullarini izlayotganlar uchun haqiqiy najotdir. Qulay va innovatsion <br /> texnologiyalar tufayli ushbu qurilmalar pishirish jarayonini sezilarli darajada tezlashtirishga va uni <br /> iloji boricha soddalashtirishga va'da beradi. Keling, ushbu modellarning qanday funktsiyalari va <br /> xususiyatlari ularni eng mos kelishi haqida gapiraylik.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mr-10'>
                            <img width='436' height='327' src={Allergiya} alt="Allergiya" />
                        </div>

                        <div className='w-[903px]'>
                            <p className='text-base font-normal text-black/70 mb-3'>29.05.2023 Borisov Valentin</p>

                            <h3 className='text-3xl font-bold mb-5'>Allergiyaga chalinganlar uchun eng yaxshi <br /> changyutgichni qanday tanlash mumkin</h3>

                            <p className='text-lg font-normal leading-7 text-black/70'>Chang allergiyasi - bu noqulaylik tug'diradigan va turli alomatlarga olib keladigan keng tarqalgan <br /> muammo. Ushbu muammoni hal qilishning usullaridan biri uyingizdagi chang va allergenlarni <br /> samarali ravishda olib tashlaydigan maxsus ishlab chiqilgan changyutgichdan foydalanishdir. Ushbu <br /> maqolada biz allergiyaga chalinganlar uchun eng yaxshi changyutgichni tanlashga yordam <br /> beradigan asosiy omillarni ko'rib chiqamiz.</p>
                        </div>
                    </div>

                    <div className='flex flex-row-reverse'>
                        <div className='mr-10'>
                            <img width='436' height='327' src={TezPishirish} alt="TezPishirish" />
                        </div>

                        <div className='w-[903px]'>
                            <p className='text-base font-normal text-black/70 mb-3'>29.05.2023 Pauchkova Valentina</p>

                            <h3 className='text-3xl font-bold mb-5'>Tez pishirish uchun mikroto'lqinli pechlar</h3>

                            <p className='text-lg font-normal leading-7 text-black/70'>Har bir daqiqa muhim bo'lgan bugungi tez sur'atda hayotda mikroto'lqinli pechlar ovqat <br /> pishirishning samarali usullarini izlayotganlar uchun haqiqiy najotdir. Qulay va innovatsion <br /> texnologiyalar tufayli ushbu qurilmalar pishirish jarayonini sezilarli darajada tezlashtirishga va uni <br /> iloji boricha soddalashtirishga va'da beradi. Keling, ushbu modellarning qanday funktsiyalari va <br /> xususiyatlari ularni eng mos kelishi haqida gapiraylik.</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='mr-10'>
                            <img width='436' height='327' src={Allergiya} alt="Allergiya" />
                        </div>

                        <div className='w-[903px]'>
                            <p className='text-base font-normal text-black/70 mb-3'>29.05.2023 Borisov Valentin</p>

                            <h3 className='text-3xl font-bold mb-5'>Allergiyaga chalinganlar uchun eng yaxshi <br /> changyutgichni qanday tanlash mumkin</h3>

                            <p className='text-lg font-normal leading-7 text-black/70'>Chang allergiyasi - bu noqulaylik tug'diradigan va turli alomatlarga olib keladigan keng tarqalgan <br /> muammo. Ushbu muammoni hal qilishning usullaridan biri uyingizdagi chang va allergenlarni <br /> samarali ravishda olib tashlaydigan maxsus ishlab chiqilgan changyutgichdan foydalanishdir. Ushbu <br /> maqolada biz allergiyaga chalinganlar uchun eng yaxshi changyutgichni tanlashga yordam <br /> beradigan asosiy omillarni ko'rib chiqamiz.</p>
                        </div>
                    </div>

                    <div className='flex flex-row-reverse'>
                        <div className='mr-10'>
                            <img width='436' height='327' src={TezPishirish} alt="TezPishirish" />
                        </div>

                        <div className='w-[903px]'>
                            <p className='text-base font-normal text-black/70 mb-3'>29.05.2023 Pauchkova Valentina</p>

                            <h3 className='text-3xl font-bold mb-5'>Tez pishirish uchun mikroto'lqinli pechlar</h3>

                            <p className='text-lg font-normal leading-7 text-black/70'>Har bir daqiqa muhim bo'lgan bugungi tez sur'atda hayotda mikroto'lqinli pechlar ovqat <br /> pishirishning samarali usullarini izlayotganlar uchun haqiqiy najotdir. Qulay va innovatsion <br /> texnologiyalar tufayli ushbu qurilmalar pishirish jarayonini sezilarli darajada tezlashtirishga va uni <br /> iloji boricha soddalashtirishga va'da beradi. Keling, ushbu modellarning qanday funktsiyalari va <br /> xususiyatlari ularni eng mos kelishi haqida gapiraylik.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Yangiliklar

// {`${index % 2 ===  0 ? 'bg-black text-white border-2 border-white' : 'bg-white text-black border-2 border-black' } w-[400px] h-[274px] pt-6 rounded-xl`}
