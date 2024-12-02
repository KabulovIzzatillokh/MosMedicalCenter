import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Location from '../Location';
import { BirjalarData } from '../data';

const Birja = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='py-7 xl:py-[62px]'>
            <div className="w-full max-w-base mx-auto px-5 navHiddenResp:px-7 xl:px-5">
                <Location />

                <h2 className='text-3xl md:[37px] lg:text[45px] xl:text-[50px] font-semibold mb-8 navHiddenResp:mb-10 lg:mb-[50px]'>Birja</h2>

                <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-12'>
                    {BirjalarData.map((birja) => (
                        <li className='group' key={birja.id}>
                            <div className='mb-4 rounded-lg overflow-hidden'>
                                <img
                                    className='h-[260px] w-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-300'
                                    src={birja.img}
                                    alt="birja image"
                                />
                            </div>

                            <div className='px-2'>
                                <div className='flex items-center justify-between mb-5'>
                                    <p className='font-bold text-lg text-black/80 '>{birja.name}</p>
                                    <p className='font-medium text-base text-black/80 '>{birja.data}</p>
                                </div>

                                <h3 className='text-xl navHiddenResp:text-2xl font-bold mb-3'>{birja.aksiya}</h3>

                                <p className='text-base font-medium leading-6 text-black/80 line-clamp-3'>{birja.text}</p>

                                <Link
                                    to={`/Birja/BirjaDetail`}
                                    className='inline-block text-center mt-7 navHiddenResp:mt-10 w-full py-2 px-8 rounded-lg text-lg font-bold text-white bg-gradient-to-tr from-violet-200 to-violet-500 hover:from-violet-500 hover:to-indigo-950 hover:shadow-md hover:shadow-black transition-all duration-500'
                                >
                                    {birja.btn}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Birja;
