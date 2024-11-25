import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { NarxlarRoyxatiData } from '../data';
import Location from '../Location';

const NarxlarRoyxatiDetail = () => {

    const param = useParams();
    const NarxlarniTopish = NarxlarRoyxatiData.filter((Narx) => Narx.name === param.name);
    const TopilganNarx = NarxlarniTopish[0];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className=''>
            <div className="w-full max-w-base mx-auto px-5">
                <Location />

                <div className='flex items-end'>
                    <img className='mr-10 rounded-lg shadow-lg shadow-Mos-Purple hover:scale-105 transition-all duration-300' src={TopilganNarx.img} alt="Narxlar royxati data img" />

                    <div>
                        <h2 className='text-[50px] font-bold mb-6'>{TopilganNarx.name} xonasi</h2>

                        <p className='font-medium text-2xl mb-3'>{TopilganNarx.title}</p>

                        <div className='mb-3 ml-3'>
                            <p className='font-medium text-xl'>{TopilganNarx.xonaKengligi}</p>
                            <p className='font-medium text-xl'>{TopilganNarx.xonaMaydoni}</p>
                        </div>

                        <p className='mb-7 ml-3 text-xl font-normal leading-8 text-black/80'>{TopilganNarx.text}</p>

                        <div className='flex space-x-3 font-medium text-xl'>
                            <p>{TopilganNarx.kunlikXarajatText}</p>
                            <p className='text-Mos-Purple font-bold text-2xl outline-dotted'>{TopilganNarx.kunlikXarajat}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default NarxlarRoyxatiDetail
