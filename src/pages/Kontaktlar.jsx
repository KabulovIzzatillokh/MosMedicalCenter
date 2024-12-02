import React, { useEffect, useState } from 'react'
import Location from '../Location'

import { Link } from 'react-router-dom'

// rasmlar 
import whatsUppLogo from '../img/whatsUppLogo.svg'
import telegramLogo from '../img/telegramLogo.svg'
import WKLogo from '../img/WKLogo.svg'
import OKLogo from '../img/OKLogo.svg'
import RLogo from '../img/RLogo.svg'

const Kontaktlar = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Xaritani yuklashni taqlid qiluvchi vaqt (asli API chaqiriladi)
        const loadMap = setTimeout(() => {
            setIsLoading(false); // Xarita yuklangach yuklanish animatsiyasini to'xtatish
        }, 2000); // 2 soniya kechikish

        return () => clearTimeout(loadMap); // Tozalash
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='py-7 xl:py-[62px]'>

            <div className="w-full max-w-base mx-auto px-5">
                <Location />


                <div className='flex flex-col navHiddenResp:flex-row navHiddenResp:justify-between'>

                    {/* kontaktlar left */}
                    <div className='space-y-5'>
                        <h2 className='text-[37px] lg:text-[45px] xl:text-[50px] font-semibold lg:font-bold mb-4 navHiddenResp:mb-10 lg:mb-[50px]'>Kontaktlar</h2>

                        <div className='flex items-center space-x-5'>
                            <Link className='inline-block text-base lg:text-xl font-bold text-black/85'>+998 99  (781) - 32 - 81</Link>

                            <div className='flex items-center space-x-3'>
                                <Link to='https://api.whatsapp.com/send/?text=megagroup&type=custom_url&app_absent=0'>
                                    <img width='40' height='40' src={whatsUppLogo} alt="whatsUppLogo" />
                                </Link>
                                <Link to='https://t.me/kabuloff_8'>
                                    <img width='40' height='40' src={telegramLogo} alt="telegramLogo" />
                                </Link>
                            </div>
                        </div>

                        <div className='text-base lg:text-lg font-medium text-black/70 space-y-5'>
                            <p>Moskva, st. Leninskaya, uy 0, bino 0, ofis 0</p>
                            <p>Dushanba-Jum 11:00 dan 21:00 gacha</p>
                            <p>Shanba kuni yopiq</p>
                            <Link className='inline-block text-blue-500' to='/'>mail@company.ru</Link>
                        </div>

                        <div className='flex items-center space-x-4'>
                            <Link className='inline-block' to='https://vk.com/?roistat_visit=30411845'>
                                <img className='rounded' width='50' height='50' src={WKLogo} alt="WKLogo" />
                            </Link>
                            <Link className='inline-block' to='https://ok.ru/?roistat_visit=30411845'>
                                <img className='rounded' width='50' height='50' src={OKLogo} alt="OKLogo" />
                            </Link>
                            <Link className='inline-block' to='https://rutube.ru/?roistat_visit=30411845'>
                                <img className='rounded' width='50' height='50' src={RLogo} alt="RLogo" />
                            </Link>
                        </div>

                    </div>

                    <div className='shadow-md shadow-lime-400 ml-0 mt-10 navHiddenResp:mt-0 navHiddenResp:ml-10'>

                        {isLoading && (
                            <div className="z-10">
                                <div className="text-lg text-gray-600 animate-pulse">
                                    yuklanmoqda...
                                </div>
                            </div>
                        )}

                        <div id="map"
                            className={`w-full h-full relative overflow-hidden ${isLoading ? "hidden" : "block"
                                } `}>
                            <Link to="https://yandex.uz/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" className='text-[#eee] text-xs absolute top-0'></Link>

                            <Link to="https://yandex.uz/maps/geo/moskva/53000094/?ll=37.621966%2C55.750812&utm_medium=mapframe&utm_source=maps&z=12.22" className='text-[#eee] text-xs absolute top-4'>
                                Moscow — Yandex Xarita
                            </Link>

                            <iframe src="https://yandex.uz/map-widget/v1/?ll=37.621966%2C55.750812&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5NBIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg2GeBZCFQEGX0I%2C&z=12.22" className='relative w-full navHiddenResp:w-[500px] navBirjaHiddenResp:w-[700px] xl:w-[903px] h-[440px] hover:cursor-grab'></iframe>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Kontaktlar
