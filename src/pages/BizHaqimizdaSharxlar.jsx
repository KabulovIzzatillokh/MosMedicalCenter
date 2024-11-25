import React, { useState, useEffect } from 'react';
import Location from '../Location';
import { Link } from 'react-router-dom';

import Alexandra from '../img/Alexandra.webp';
import Alexandr from '../img/Alexandr.webp';
import Kirill from '../img/Kirill.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Birja = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isModalOpen, setIsOpenModal] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
        setName('')
        setPhone('')
        setFeedback('')
    }

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                closeModal(true);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const isFormValid = name && phone && feedback && isChecked;

    const sendToTelegram = async () => {
        const botToken = "7699128704:AAGNXZ_OoWRa8AW_xxAMdzeggVWgPzfWxvY";
        const chatId = "-1002454081390"; // Kanal ID ni `-100` prefiksi bilan
        const telegramAPI = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const message = `
            🔔 Yangi Sharh:

            👤 Ism: ${name}
            📞 Telefon: ${phone}
            📝 Fikr: ${feedback}
        `;

        try {
            const response = await fetch(telegramAPI, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: "Markdown"
                })
            });

            if (response.ok) {
                alert("Sharhingiz muvaffaqiyatli yuborildi!");
            } else {
                const error = await response.json();
                alert("Xato yuz berdi: " + (error.description || "Noma'lum xato."));
            }
        } catch (error) {
            alert("Xato yuz berdi: " + error.message);
        }
    };

    return (
        <div className="py-[60px]">
            <div className="w-full max-w-base mx-auto px-5">
                <Location />

                <h2 className="text-[40px] xl:text-[61px] font-semibold xl:font-bold mb-5 xl:mb-8">Biz haqimizda sharhlar</h2>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={70}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    <SwiperSlide className='mb-20 px-3'>

                        <p className="h-[85px] text-lg font-normal text-black/70 mb-10">
                            Mijozlarga do'stona munosabat va sodiqlikni ta'kidlamoqchiman va bu har doim jarayonini yoqimli va samarali qilishga yordam beradi...
                        </p>
                        <div className="flex items-center space-x-7">
                            <img width="80" height="80" className="rounded-full" src={Kirill} alt="Kirill" />
                            <h3 className="text-lg font-bold">Kirill Yakovlev</h3>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='mb-20 px-3'>

                        <p className="h-[85px] text-lg font-normal text-black/70 mb-10">
                            Men bu erga birinchi marta kelishim emas va ishonch bilan ayta olamanki, siz juda yaxshi ish qilasiz!...
                        </p>
                        <div className="flex items-center space-x-7">
                            <img width="80" height="80" className="rounded-full" src={Alexandra} alt="Alexandra" />
                            <h3 className="text-lg font-bold">Aleksandra Somova</h3>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='mb-20 px-3'>
                        <p className="h-[85px] text-lg font-normal text-black/70 mb-10">
                            Men bu erga birinchi marta kelishim. Menga iliq va professional yondashuv uchun juda minnatdorman...
                        </p>
                        <div className="flex items-center space-x-7">
                            <img width="80" height="80" className="rounded-full" src={Alexandr} alt="Alexandr" />
                            <h3 className="text-lg font-bold">Aleksandr Yagudin</h3>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide className='mb-20 px-3'>

                        <p className="h-[85px] text-lg font-normal text-black/70 mb-10">
                            Mijozlarga do'stona munosabat va sodiqlikni ta'kidlamoqchiman va bu har doim jarayonini yoqimli va samarali qilishga yordam beradi...
                        </p>
                        <div className="flex items-center space-x-7">
                            <img width="80" height="80" className="rounded-full" src={Kirill} alt="Kirill" />
                            <h3 className="text-lg font-bold">Kirill Yakovlev</h3>
                        </div>

                    </SwiperSlide>

                </Swiper>

                <button
                    className="pt-3 pb-4 px-8 text-xl font-normal bg-blue-500 rounded-md text-white mt-5"
                    onClick={() => openModal(true)}
                >
                    Fikr qoldiring
                </button>

                {isModalOpen && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
                        onClick={() => closeModal(true)}
                    >
                        <div
                            className="bg-white py-20 px-16 rounded-md max-w-[700px] w-full relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-6 text-gray-800 text-5xl hover:rotate-90 transition-all duration-300"
                                onClick={() => closeModal(true)}
                            >
                                &times;
                            </button>

                            <h3 className="text-4xl font-bold mb-6">Fikr qoldirish</h3>

                            <label className="block mb-2 text-lg font-normal text-black/70">Ism</label>
                            <input
                                type="text"
                                className="w-full px-3 py-4 mb-4 border-2 border-blue-300 rounded focus:bg-blue-50 focus:outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <label className="block mb-2">Telefon raqamingiz</label>
                            <input
                                type="tel"
                                className="w-full px-3 py-4 mb-4 border-2 border-blue-300 rounded focus:bg-blue-50 focus:outline-none"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <label className="block mb-2">Fikr matni</label>
                            <textarea
                                className="w-full px-3 py-4 mb-4 border-2 border-blue-300 rounded focus:bg-blue-50 focus:outline-none"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />

                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                />
                                <label>
                                    <Link to='/FoydalanuvchiShartnomasi' className="underline text-blue-600">
                                        Shaxsiy ma'lumotlarni qayta ishlash shartlarini
                                    </Link>{" "}
                                    qabul qilaman *
                                </label>
                            </div>

                            <button
                                className={`px-10 py-3 bg-blue-500 text-white rounded ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={() => {
                                    if (isFormValid) {
                                        sendToTelegram();
                                        closeModal(true);
                                    }
                                }}
                                disabled={!isFormValid}
                            >
                                Yuborish
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Birja;
