import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { NarxlarRoyxatiData } from '../data.js'
import Location from '../Location.jsx'

const NarxlarRoyxati = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='pt-10'>

            <div className="w-full max-w-base mx-auto px-5">
                <Location />

                <h2 className='text-5xl font-bold mb-14'>Narxlar ro'yxati</h2>

                <ul className='px-3 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 xl:gap-10 pb-28'>

                    {NarxlarRoyxatiData.map((NarxRoyxatiData) => {

                        return (

                            <li className='group' key={NarxRoyxatiData.id}>

                                <div className='mb-5 overflow-hidden rounded-md'>
                                    <img className='group-hover:scale-110 transition-all duration-300' src={NarxRoyxatiData.img} alt='Narxlarroyxati image' />
                                </div>

                                <div className='px-3 py-2 rounded-lg group-hover:shadow-md group-hover:shadow-Mos-Purple transition-all duration-300'>

                                    <h3 className='text-[26px] font-semibold mb-5'>{NarxRoyxatiData.name}</h3>

                                    <div className='h-[170px]'>

                                        <p className='text-black/80 text-base font-medium mb-6'>{NarxRoyxatiData.title}</p>

                                        <div className='text-black/80 font-medium text-base mb-10'>
                                            <span className='block'>{NarxRoyxatiData.xonaKengligi}</span>

                                            <span className='block'>{NarxRoyxatiData.xonaMaydoni}</span>
                                        </div>

                                    </div>

                                    <div className='mb-4'>
                                        <span className='block text-black/80 font-medium text-sm mb-1'>{NarxRoyxatiData.kunlikXarajatText}</span>

                                        <span className='block text-3xl font-bold'>{NarxRoyxatiData.kunlikXarajat}</span>
                                    </div>

                                    <div>
                                        <Link to={`/NarxlarRoyxati/${NarxRoyxatiData.name}`} className='block py-2 px-8 mb-3 rounded-lg text-lg font-medium text-center bg-Mos-purple-light text-black/80 hover:bg-blue-500 hover:text-Mos-purple-light transition-all duration-300'>{NarxRoyxatiData.bottomLink}</Link>
                                    </div>

                                </div>

                            </li>

                        )

                    })}

                </ul>

            </div>

        </div>
    )
}

export default NarxlarRoyxati
