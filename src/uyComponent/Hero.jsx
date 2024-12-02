import React, { useRef, useCallback, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination, } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "react-router-dom";

import heroImg1 from '../img/heroImg1.jpg';
import heroImg2 from '../img/heroImg2.jpg';
import heroImg3 from '../img/heroImg3.jpg';

const Hero = () => {

    // ============ Swipperning ikki btni ==============
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

    // ============== Modal funksiyalari ================

    const [OpenModal, setOpenModal] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    // Escape tugmasi bosilganda modalni yopish
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                setOpenModal(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        // Tozalash: komponent unmount bo'lganda hodisani olib tashlash
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Modalni ochish funksiyasi
    const openModal = () => {
        setOpenModal(true);
    };

    // Modalni yopish funksiyasi
    const closeModal = () => {
        setOpenModal(false);
        setMessage('')
        setPhone('')
        setName('')
    };

    // Modal tashqarisini bosganda modalni yopish
    const handleClickOutside = (e) => {
        if (e.target.id === 'modal-overlay') {
            closeModal();
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="pb-[70px] relative Hero">
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                loop={true}
                spaceBetween={30}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper h-[640px] bg-top rounded-[30px]"
            >
                <SwiperSlide>
                    <div className="relative flex justify-center items-center h-full bg-heroImg1 bg-cover xl:bg-none">
                        <img className="hidden xl:block w-full h-full object-cover" src={heroImg1} alt="hero image" />

                        <div className="absolute left-0 navHiddenResp:left-10 md:max-w-[800px] xl:left-32 xl:max-w-[800px] xl:bg-white py-8 lg:py-16 px-6 lg:px-10 rounded-3xl text-center lg:text-left">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight lg:leading-[45px] mb-5 text-white xl:text-black/80">
                                Tashkilotlar va jismoniy shaxslar uchun tibbiy ko'rik
                            </h1>
                            <p className="text-base md:text-lg lg:text-2xl font-medium mb-6 lg:mb-10 text-white xl:text-black/80">
                                Konsultatsiya, instrumental va laboratoriya diagnostikasi
                            </p>

                            <button onClick={openModal} className="medical-btn purple-btn text-lg lg:text-2xl">
                                Uchrashuv belgilang
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative flex justify-center items-center h-full bg-heroImg2 bg-cover xl:bg-none">
                        <img className="hidden xl:block w-full h-full object-cover" src={heroImg2} alt="hero image" />

                        <div className="absolute left-0 navHiddenResp:left-10 md:max-w-[800px] xl:left-32 xl:max-w-[800px] xl:bg-white py-8 lg:py-16 px-6 lg:px-10 rounded-3xl text-center lg:text-left">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight lg:leading-[45px] mb-5 text-white xl:text-black/80">
                                Qalqonsimon bezni kompleks tekshirish RUR 1950
                            </h1>
                            <p className="text-base md:text-lg lg:text-2xl font-medium mb-6 lg:mb-10 text-white xl:text-black/80">
                                Qalqonsimon bezning ultratovush tekshiruvi gormon testlari bilan birgalikda
                            </p>

                            <button onClick={openModal} className="medical-btn purple-btn text-lg lg:text-2xl">
                                Ro'yxatdan o'tish
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative flex justify-center items-center h-full bg-heroImg3 bg-cover xl:bg-none">
                        <img className="hidden xl:block w-full h-full object-cover" src={heroImg3} alt="hero image" />

                        <div className="absolute left-0 navHiddenResp:left-10 md:max-w-[800px] xl:left-32 xl:max-w-[800px] xl:bg-white py-8 lg:py-16 px-6 lg:px-10 rounded-3xl text-center lg:text-left">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight lg:leading-[45px] mb-5 text-white xl:text-black/80 line-clamp-3">
                                Flebolog bilan maslahatlash + oyoq tomirlarining ultratovush tekshiruvi 2000 rubl
                            </h1>
                            <p className="text-base md:text-lg lg:text-2xl font-medium mb-6 lg:mb-10 text-white xl:text-black/80">
                                Oyoqlarning arterial va venoz tomirlarining tuzilishi va holayini batafsil o'rganish, diagnostika, terapiya
                            </p>

                            <button onClick={openModal} className="medical-btn purple-btn text-lg lg:text-2xl">
                                Ro'yxatdan o'ting
                            </button>

                        </div>

                    </div>
                </SwiperSlide>

                {OpenModal && (
                    <div
                        id="modal-overlay"
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-8 lg:px-0"
                        onClick={handleClickOutside}
                    >
                        {/* Modal */}
                        <form
                            className="relative w-[350px] md:w-[610px] py-5 px-6 md:py-6 md:px-10 xl:p-14 bg-white rounded-2xl shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Chiqish tugmasi (X belgi) */}
                            <button
                                onClick={closeModal}
                                className="absolute top-5 right-7 font-bold text-2xl lg:text-3xl text-purple-btn-color hover:rotate-180 transition-all duration-300"
                            >
                                X
                            </button>

                            <h2 className="mb-3 lg:mb-6 block text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">Qo'ng'iroq so'rovi</h2>
                            <p className="text-sm lg:text-base mb-3">
                                Menejerimiz siz uchun qulay vaqtda siz bilan bog'lanadi
                            </p>

                            <div className="flex flex-col">
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm md:text-base lg:text-lg font-bold text-black/70">Ismingiz:</label>
                                    <input
                                        type="text"
                                        placeholder="Ismingiz"
                                        value={name}
                                        onChange={(e) => setName(e.target.value.trim())}
                                        className="w-full border border-gray-300 rounded-xl px-3 py-2 lg:py-5  focus:outline-none focus:ring-1 focus:ring-Mos-Purple"
                                        required
                                    />
                                    {!name && (
                                        <p className="text-red-500 text-xs ml-2 md:text-sm mt-1">Bu qator toʻldirilmagan</p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-sm md:text-base lg:text-lg font-bold text-black/70">Telefon:</label>
                                    <input
                                        type="number"
                                        placeholder="+ 998 __ (___) __ __"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl px-3 py-2 lg:py-5 focus:outline-none focus:ring-1 focus:ring-Mos-Purple"
                                        required
                                    />
                                    {!phone && (
                                        <p className="text-red-500 text-xs ml-2 md:text-sm mt-1">Bu qator toʻldirilmagan</p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label className="block mb-2 text-sm md:text-base lg:text-lg font-bold text-black/70">Kirish maydoni:</label>
                                    <textarea
                                        placeholder="Kirish maydoni"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value.trim())}
                                        className="w-full border border-gray-300 rounded-xl px-3 py-2 lg:py-5 focus:outline-none focus:ring-1 focus:ring-Mos-Purple"
                                        required
                                    ></textarea>
                                    {!message && (
                                        <p className="text-red-500 text-xs ml-2 md:text-sm mt-1">Bu qator toʻldirilmagan</p>
                                    )}
                                </div>

                                <div className="mb-4 flex items-center">
                                    <input
                                        type="checkbox"
                                        id="userAgreement"
                                        checked={isChecked}
                                        onChange={() => setIsChecked(!isChecked)}
                                        className="mr-2"
                                    />
                                    <label htmlFor="userAgreement" className="text-xs md:text-sm lg:text-base">
                                        <Link to='/FoydalanuvchiShartnomasi' className="underline cursor-pointer"><b>Men foydalanuvchi shartnomasini</b></Link> o'qib
                                        chiqdim *
                                    </label>
                                </div>

                                {/* Submit tugmasi */}
                                <button
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        closeModal();
                                        if (name && phone && message && isChecked) {
                                            try {
                                                const botToken = "7699128704:AAGNXZ_OoWRa8AW_xxAMdzeggVWgPzfWxvY";
                                                const chatId = "-1002454081390"; // Masalan: "-1001234567890"
                                                const telegramAPI = `https://api.telegram.org/bot${botToken}/sendMessage`;

                                                const text = `
🔔 Yangi Murojaat:
👤 Ism: ${name}
📞 Telefon: ${phone}
📝 Xabar: ${message}
                                `;

                                                const response = await fetch(telegramAPI, {
                                                    method: "POST",
                                                    headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify({
                                                        chat_id: chatId,
                                                        text,
                                                        parse_mode: "Markdown",
                                                    }),
                                                });

                                                if (response.ok) {
                                                    alert("Xabaringiz yuborildi!");
                                                } else {
                                                    const error = await response.json();
                                                    alert("Xatolik yuz berdi: " + (error.description || "Noma'lum xato."));
                                                }
                                            } catch (err) {
                                                alert("Xato yuz berdi: " + err.message);
                                            }
                                        }
                                    }}
                                    disabled={!name || !phone || !message || !isChecked}
                                    className={`w-28 md:w-36 mt-0 md:mt-7 rounded-xl text-base md:text-lg text-center text-white font-medium py-2 px-4 md:py-5 md:px-4 ${!name || !phone || !message || !isChecked
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-purple-btn-color hover:opacity-80 transition-all duration-300'
                                        }`}
                                >
                                    Yuborish
                                </button>
                            </div>
                        </form>
                    </div>
                )}


            </Swiper>

            <button
                className="hero-btn absolute top-1/2 z-10 -left-10 -translate-x-[40px] opacity-0 lg:opacity-0 hidden navHiddenResp:block"
                onClick={PrevBtn}
            >
                {prevBtn}
            </button>

            <button
                className="hero-btn absolute top-1/2 z-10 -right-10 translate-x-[40px] opacity-0 lg:opacity-0 hidden navHiddenResp:block"
                onClick={NextBtn}
            >
                {nextBtn}
            </button>
        </div>

    );
};

export default Hero;