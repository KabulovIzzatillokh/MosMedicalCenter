import React, {useEffect} from 'react'
import Location from '../Location'

import { Link } from 'react-router-dom'

// rasmlar 
import whatsUppLogo from '../img/whatsUppLogo.svg'
import telegramLogo from '../img/telegramLogo.svg'
import WKLogo from '../img/WKLogo.svg'
import OKLogo from '../img/OKLogo.svg'
import RLogo from '../img/RLogo.svg'

const Kontaktlar = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='py-[70px]'>

            <div className="w-full max-w-base mx-auto px-5">
                <Location />

                <h2 className='text-[50px] font-bold mb-[50px]'>Kontaktlar</h2>

                <div className='flex justify-between'>

                    {/* kontaktlar left */}
                    <div className='space-y-5'>

                        <div className='flex items-center space-x-5'>
                            <Link className='inline-block text-xl font-bold text-black/85'>+998 99  (781) - 32 - 81</Link>

                            <div className='flex items-center space-x-3'>
                                <Link to='https://api.whatsapp.com/send/?text=megagroup&type=custom_url&app_absent=0'>
                                    <img width='40' height='40' src={whatsUppLogo} alt="whatsUppLogo" />
                                </Link>
                                <Link to='https://t.me/kabuloff_8'>
                                    <img width='40' height='40' src={telegramLogo} alt="telegramLogo" />
                                </Link>
                            </div>
                        </div>

                        <div className='text-lg font-medium text-black/70 space-y-5'>
                            <p>Moskva, st. Leninskaya, uy 0, bino 0, ofis 0</p>
                            <p>Dushanba-Jum 11:00 dan 21:00 gacha</p>
                            <p>Shanba kuni yopiq</p>
                            <Link className='inline-block text-blue-500' to='/'>mail@company.ru</Link>
                            <p>INN 000000000 OGRN 000000000</p>
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

                    {/* kontaktlar right */}
                    <div className='shadow-md shadow-lime-400'>

                        <div className='relative overflow-hidden'>

                            <Link to="https://yandex.uz/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" className='text-[#eee] text-xs absolute top-0'></Link>

                            <Link to="https://yandex.uz/maps/geo/moskva/53000094/?ll=37.621966%2C55.750812&utm_medium=mapframe&utm_source=maps&z=12.22" className='text-[#eee] text-xs absolute top-4'>
                                Moscow — Yandex Xarita
                            </Link>

                            <iframe src="https://yandex.uz/map-widget/v1/?ll=37.621966%2C55.750812&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5NBIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg2GeBZCFQEGX0I%2C&z=12.22" width="903" height="460" className='relative hover:cursor-grab'></iframe>
                            {/* frameborder="1" allowfullscreen="true" */}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Kontaktlar
