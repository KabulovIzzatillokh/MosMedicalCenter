import React, { useEffect, useState } from 'react';
import Location from '../Location';
import { BirjalarData } from '../data';

const BirjaDetail = () => {
  const [randomBirjalar, setRandomBirjalar] = useState([]);

  useEffect(() => {
    // Tasodifiy 3 ta birjani olish
    const shuffledBirjalar = [...BirjalarData].sort(() => 0.5 - Math.random());
    setRandomBirjalar(shuffledBirjalar.slice(0, 3));

    window.scrollTo(0, 0);
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className='py-7 xl:py-[62px]'>
      <div className="w-full max-w-base mx-auto px-5">
        <Location />

        <h2 className='text-2xl md:text-[37px] lg:text-[45px] xl:text-[50px] font-semibold mb-8 navHiddenResp:mb-10 lg:mb-[50px] text-center navHiddenResp:text-left '>Batafsil ma'lumotlar</h2>

        <ul className='w-full max-w-[1360px] mx-auto space-y-10 px-5 navHiddenResp:px-10 xl:px-16 mb-5 navHiddenResp:mb-8'>
          {randomBirjalar.map((birja) => {
            return (
              <li className={`${birja.id % 2 === 0 ? 'flex flex-col navHiddenResp:flex-row navHiddenResp:items-center navHiddenResp:justify-center bg-Mos-Purple/30' : 'flex flex-col navHiddenResp:flex-row-reverse navHiddenResp:items-center navHiddenResp:justify-center bg-Mos-purple-light'} shadow-lg p-5 lg:px-10 lg:py-10 rounded-xl group`} key={birja.id}>

                <div className='mb-2'>
                  <img className='h-[200px] navHiddenResp:h-[260px] w-full object-cover rounded-lg navHiddenResp:group-hover:rotate-6 transition-transform duration-200' src={birja.img} alt="birja image" />
                </div>

                <div className={`${birja.id % 2 === 0 ? 'm-0 navHiddenResp:ml-20' : 'm-0 navHiddenResp:mr-20'} px-3 navHiddenResp:p-0 w-full navHiddenResp:max-w-[600px]`}>
                  <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-3 navHiddenResp:mb-5 space-y-1 navHiddenResp:space-y-0'>
                    <p className='font-bold text-lg text-black/80 '>{birja.name}</p>
                    <p className='font-medium text-base text-black/80 mr-7'>{birja.data}</p>
                  </div>

                  <h3 className='text-lg navHiddenResp:text-xl xl:text-3xl leading-5 navHiddenResp:leading-none font-bold mb-2 navHiddenResp:mb-3'>{birja.aksiya}</h3>

                  <p className='text-sm navHiddenResp:text-base font-medium leading-5 navHiddenResp:leading-6 text-black/80 line-clamp-4 lg:line-clamp-none'>{birja.text}</p>
                </div>

              </li>

            )
          })}
        </ul>

        <div className='flex justify-center'>
          <button className='font-semibold text-base py-2 px-5 bg-transparent rounded-full text-Mos-Purple border-2 border-Mos-Purple hover:border-transparent hover:text-white hover:bg-Mos-Purple hover:scale-105 hover:shadow-2xl shadow-black transition-all duration-300' onClick={handleRefresh}>Boshqasiga almashtirish <span className='text-lg'>:)</span></button>
        </div>
      </div>
    </div>
  );
}

export default BirjaDetail;
