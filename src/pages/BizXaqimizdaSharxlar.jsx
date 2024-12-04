import React, { useState, useEffect } from 'react';
import Location from '../Location';
import { Link } from 'react-router-dom';

import Alexandra from '../img/Alexandra.webp';
import Alexandr from '../img/Alexandr.webp';
import Kirill from '../img/Kirill.webp';
import AnastasiyaRamonova from '../img/AnastasiyaRomanova.jpg'
import ArtemVolkov from '../img/ArtemVolkov.jpg'
import DmitriySokolov from '../img/DmitrySokolov.jpg'
import ElenaPetrove from '../img/ElenaPetrova.jpg'
import NikolayZharkov from '../img/NikolayZharkov.jpg'
import SergeyKuznetsov from '../img/SergeyKuznetsov.jpg'

const BizXaqimizdaSharxlar = () => {
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
        <div className="py-5 lg:py-[60px]">
            <div className="w-full max-w-base mx-auto px-5">
                <Location />

                <h2 className="text-3xl md:text-[37px] lg:text-[45px] xl:text-[50px] font-semibold mb-8 navHiddenResp:mb-10 lg:mb-[50px]">Biz haqimizda sharhlar</h2>

                <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 lg:gap-y-12 gap-x-10'>
                    <li className='group px-7 py-5 border-[3px] border-Mos-Purple/60 rounded-xl shadow-xl shadow-Mos-purple-light hover:translate-x-3 hover:scale-100 transition-all duration-300'>
                        <p className="h-[75px] lg:h-[85px] text-sm moreHiddenResp:text-base lg:text-lg font-normal text-black/70 mb-3 moreHiddenResp:mb-2 md:mb-5 line-clamp-4">
                            Mijozlarga do'stona munosabat va sodiqlikni ta'kidlamoqchiman va bu har doim jarayonini yoqimli va samarali qilishga yordam beradi...
                        </p>
                        <div className="flex items-center space-x-5">
                            <img className="object-cover h-[60px] w-[60px] rounded-full" src={Kirill} alt="Kirill" />
                            <h3 className="text-sm md:text-base font-semibold">Kirill Yakovlev</h3>
                        </div>
                    </li>

                    <li className='group px-7 py-5 border-[3px] border-Mos-Purple/60 rounded-xl shadow-xl shadow-Mos-purple-light hover:translate-x-3 hover:scale-100 transition-all duration-300'>
                        <p className="h-[75px] lg:h-[85px] text-sm moreHiddenResp:text-base lg:text-lg font-normal text-black/70 mb-3 moreHiddenResp:mb-2 md:mb-5 line-clamp-4">
                            Men bu erga birinchi marta kelishim emas va ishonch bilan ayta olamanki, siz juda yaxshi ish qilasiz!...
                        </p>
                        <div className="flex items-center space-x-5">
                            <img className="object-cover h-[60px] w-[60px] rounded-full" src={Alexandra} alt="Alexandra" />
                            <h3 className="text-sm md:text-base font-semibold">Aleksandra Somova</h3>
                        </div>
                    </li>

                    <li className='group px-7 py-5 border-[3px] border-Mos-Purple/60 rounded-xl shadow-xl shadow-Mos-purple-light hover:translate-x-3 hover:scale-100 transition-all duration-300'>
                        <p className="h-[75px] lg:h-[85px] text-sm moreHiddenResp:text-base lg:text-lg font-normal text-black/70 mb-3 moreHiddenResp:mb-2 md:mb-5 line-clamp-4">
                            Men bu erga birinchi marta kelishim. Menga iliq va professional yondashuv uchun juda minnatdorman...
                        </p>
                        <div className="flex items-center space-x-5">
                            <img className="object-cover h-[60px] w-[60px] rounded-full" src={Alexandr} alt="Alexandr" />
                            <h3 className="text-sm md:text-base font-semibold">Aleksandr Yagudin</h3>
                        </div>
                    </li>

                    <li className='group px-7 py-5 border-[3px] border-Mos-Purple/60 rounded-xl shadow-xl shadow-Mos-purple-light hover:translate-x-3 hover:scale-100 transition-all duration-300'>
                        <p className="h-[75px] lg:h-[85px] text-sm moreHiddenResp:text-base lg:text-lg font-normal text-black/70 mb-3 moreHiddenResp:mb-2 md:mb-5 line-clamp-4">
                            Klinikadan juda mamnunman! Shifokorlar professional va do'stona. Yaqinda bir muolajani o'tkazdim va juda tez tiklandim. Xizmat sifati a'lo darajada!
                        </p>
                        <div className="flex items-center space-x-5">
                            <img className="object-cover h-[60px] w-[60px] rounded-full" src={AnastasiyaRamonova} alt="AlAnastasiyaRamonovaexandr" />
                            <h3 className="text-sm md:text-base font-semibold">Anastasiya Romanova</h3>
                        </div>
                    </li>

                    <li className='group px-7 py-5 border-[3px] border-Mos-Purple/60 rounded-xl shadow-xl shadow-Mos-purple-light hover:translate-x-3 hover:scale-100 transition-all duration-300'>
                        <p className="h-[75px] lg:h-[85px] text-sm moreHiddenResp:text-base lg:text-lg font-normal text-black/70 mb-3 moreHiddenResp:mb-2 md:mb-5 line-clamp-4">
                            Xodimlar juda mehribon va tushunarli. Navbat biroz uzoq edi, ammo kutishga arziydi. Klinikaning ichki ko'rinishi va tozaligi yuqori darajada.
                        </p>
                        <div className="flex items-center space-x-5">
                            <img className="object-cover h-[60px] w-[60px] rounded-full" src={ArtemVolkov} alt="ArtemVolkov" />
                            <h3 className="text-sm md:text-base font-semibold">Artem Volkov</h3>
                        </div>
                    </li>

                    <li className='group px-7 py-5 border-[3px] border-Mos-Purple/60 rounded-xl shadow-xl shadow-Mos-purple-light hover:translate-x-3 hover:scale-100 transition-all duration-300'>
                        <p className="h-[75px] lg:h-[85px] text-sm moreHiddenResp:text-base lg:text-lg font-normal text-black/70 mb-3 moreHiddenResp:mb-2 md:mb-5 line-clamp-4">
                            Farzandimni bu yerga olib keldim, pediatr juda bilimli va bolalar bilan ishlashni biladi. Ularni professional yondashuvi uchun alohida rahmat aytmoqchiman!
                        </p>
                        <div className="flex items-center space-x-5">
                            <img className="object-cover h-[60px] w-[60px] rounded-full" src={DmitriySokolov} alt="DmitriySokolov" />
                            <h3 className="text-sm md:text-base font-semibold">Dmitry Sokolov</h3>
                        </div>
                    </li>

                    <li className='group px-7 py-5 border-[3px] border-Mos-Purple/60 rounded-xl shadow-xl shadow-Mos-purple-light hover:translate-x-3 hover:scale-100 transition-all duration-300'>
                        <p className="h-[75px] lg:h-[85px] text-sm moreHiddenResp:text-base lg:text-lg font-normal text-black/70 mb-3 moreHiddenResp:mb-2 md:mb-5 line-clamp-4">
                            Tish muolajasi uchun kelganman, ancha qo'rqardim, lekin stomatologning yondashuvi men uchun tinchlantiruvchi bo'ldi. Barchaga maslahat beraman!
                        </p>
                        <div className="flex items-center space-x-5">
                            <img className="object-cover h-[60px] w-[60px] rounded-full" src={ElenaPetrove} alt="ElenaPetrove" />
                            <h3 className="text-sm md:text-base font-semibold">Elena Petrova</h3>
                        </div>
                    </li>

                    <li className='group px-7 py-5 border-[3px] border-Mos-Purple/60 rounded-xl shadow-xl shadow-Mos-purple-light hover:translate-x-3 hover:scale-100 transition-all duration-300'>
                        <p className="h-[75px] lg:h-[85px] text-sm moreHiddenResp:text-base lg:text-lg font-normal text-black/70 mb-3 moreHiddenResp:mb-2 md:mb-5 line-clamp-4">
                            Klinika juda zamonaviy, barcha jihozlar yangilikka mos. Shifokorlar be'morlarni yaxshi tinglaydi va har bir savolga batafsil javob beradi. Xizmat narxi ham maqbul.
                        </p>
                        <div className="flex items-center space-x-5">
                            <img className="object-cover h-[60px] w-[60px] rounded-full" src={NikolayZharkov} alt="NikolayZharkov" />
                            <h3 className="text-sm md:text-base font-semibold">Nikolay Zharkov</h3>
                        </div>
                    </li>

                    <li className='group px-7 py-5 border-[3px] border-Mos-Purple/60 rounded-xl shadow-xl shadow-Mos-purple-light hover:translate-x-3 hover:scale-100 transition-all duration-300'>
                        <p className="h-[75px] lg:h-[85px] text-sm moreHiddenResp:text-base lg:text-lg font-normal text-black/70 mb-3 moreHiddenResp:mb-2 md:mb-5 line-clamp-4">
                            Klinika juda zamonaviy, barcha jihozlar yangilikka mos. Shifokorlar be'morlarni yaxshi tinglaydi va har bir savolga batafsil javob beradi. Xizmat narxi ham maqbul.
                        </p>
                        <div className="flex items-center space-x-5">
                            <img className="object-cover h-[60px] w-[60px] rounded-full" src={SergeyKuznetsov} alt="SergeyKuznetsov" />
                            <h3 className="text-sm md:text-base font-semibold">Sergey Kuznetsov</h3>
                        </div>
                    </li>
                </ul>

                <button
                    className="py-4 px-8 text-xl font-medium hover:font-semibold bg-blue-500 shadow-lg shadow-gray-500 hover:shadow-gray-800 rounded-lg hover:rounded-3xl text-white mt-10 lg:mt-16 xl:mt-20 hover:translate-x-5 hover:scale-105 transition-all duration-300"
                    onClick={() => openModal(true)}
                >
                    Fikr qoldiring
                </button>

                {isModalOpen && (
                    <div
                        className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-7 navHiddenResp:px-0"
                        onClick={() => closeModal(true)}
                    >
                        <form
                            className="relative w-[350px] md:w-[610px] py-5 px-6 md:py-6 md:px-10 xl:p-14 bg-white rounded-2xl shadow-lg"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-6 text-gray-800 text-5xl hover:rotate-90 transition-all duration-300"
                                onClick={() => closeModal(true)}
                            >
                                &times;
                            </button>

                            <h3 className="mb-3 lg:mb-6 block text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">Fikr qoldirish</h3>

                            <label className="block mb-2 text-sm md:text-base lg:text-lg font-normal text-black/70">Ism</label>
                            <input
                                type="text"
                                className="w-full border-2 p-2 lg:px-3 lg:py-5 mb-4 border-blue-300 rounded focus:bg-blue-50 focus:outline-none"
                                value={name}
                                onChange={(e) => setName(e.target.value.trim())}
                            />

                            <label className="block mb-2 text-sm md:text-base lg:text-lg font-normal text-black/70">Telefon raqamingiz</label>
                            <input
                                type="number"
                                className="w-full border-2 p-2 lg:px-3 lg:py-5 mb-4 border-blue-300 rounded focus:bg-blue-50 focus:outline-none"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <label className="block mb-2 text-sm md:text-base lg:text-lg font-normal text-black/70">Fikr matni</label>
                            <textarea
                                className="w-full border-2 p-2 lg:px-3 lg:py-5 mb-4 border-blue-300 rounded focus:bg-blue-50 focus:outline-none"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value.trim())}
                            />

                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                />
                                <label className='text-xs lg:text-base'>
                                    <Link to='/FoydalanuvchiShartnomasi' className="underline text-blue-600">
                                        Shaxsiy ma'lumotlarni qayta ishlash shartlarini
                                    </Link>{" "}
                                    qabul qilaman *
                                </label>
                            </div>

                            <button
                                className={`px-4 lg:px-7 xl:px-10 py-3 mt-1 lg:mt-5 text-sm lg:text-base xl:text-lg font-semibold bg-blue-500 text-white rounded-lg ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BizXaqimizdaSharxlar;
