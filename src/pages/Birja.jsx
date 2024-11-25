import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Location from '../Location'
import { BirjalarData } from '../data'

const Birja = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='py-[60px]'>

            <div className="w-full max-w-base mx-auto px-5">
                <Location />

                <h2 className='text-[50px] font-bold mb-[55px]'>Birja</h2>

                <ul className='grid grid-cols-3 gap-7'>

                    {BirjalarData.map((birja) => {
                        return (
                            <li className='group' key={birja.id}>
                                <div className='mb-2 overflow-hidden'>
                                    <img className='h-[260px] w-full object-cover group-hover:scale-[1.2] transition-transform duration-300' src={birja.img} alt="birja image" />
                                </div>

                                <div>
                                    <p className='text-base font-medium text-black/80 mb-2'>{birja.data}</p>

                                    <h3 className='text-3xl font-bold mb-3'>{birja.aksiya}</h3>

                                    <p className='text-base font-medium leading-6 text-black/80'>{birja.text}</p>

                                    <Link to={`/Birja/${birja.name}`} className='inline-block text-center mt-16 w-full py-2 px-8 rounded-lg text-lg font-semibold text-white bg-blue-500 hover:bg-transparent border-[3px] border-transparent hover:border-Mos-Purple hover:text-Mos-Purple transition-all duration-300'>{birja.btn}</Link>
                                </div>
                            </li>
                        )
                    })}

                </ul>

            </div>

        </div>
    )
}

export default Birja
