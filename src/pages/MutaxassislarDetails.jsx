import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MutaxassislarData } from '../data';
import Location from '../Location'

const MutaxassislarDetails = () => {

  const param = useParams();
  const MutaxassislarTopish = MutaxassislarData.filter((Mutaxassis) => Mutaxassis.name === param.name);
  const TopilganMutaxassis = MutaxassislarTopish[0];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='py-[60px]'>

      <div className="w-full max-w-base mx-auto px-5">
        <Location />

        <div className='flex flex-col lg:flex-row mb-7'>
          <img className='w-[450px] h-full mr-10 rounded-xl shadow-lg shadow-Mos-Purple object-cover' src={TopilganMutaxassis.img} alt="Mutaxassis image" />

          <div className='space-y-7 mt-6'>
            <div>
              <h2 className='text-xl lg:text-3xl font-bold'>{TopilganMutaxassis.name}</h2>

              <div>
                <p className='text-lg lg:text-2xl'><b>Yoshi:</b> {TopilganMutaxassis.age} </p>
                <p className='text-lg lg:text-2xl'><b>Kasbi:</b> {TopilganMutaxassis.job} </p>
              </div>
            </div>

            <ul className='ml-4 flex flex-col-reverse bizhaqdaResp:flex-row bizhaqdaResp:justify-between'>
              <li className='mr-6 navHiddenResp:px-2 xl:px-0 text-md navHiddenResp:lg xl:text-xl font-normal leading-6 navHiddenResp:leading-7 text-black/80'>
                <p className='-ml-2 lg:-ml-4'>{TopilganMutaxassis.aboutJop2.kasalliklari}</p>
                <p className='text-md lg:text-lg'>{TopilganMutaxassis.aboutJop2.bir}</p>
                <p className='text-md lg:text-lg'>{TopilganMutaxassis.aboutJop2.ikki}</p>
                <p className='text-md lg:text-lg'>{TopilganMutaxassis.aboutJop2.uch}</p>
                <p className='text-md lg:text-lg'>{TopilganMutaxassis.aboutJop2.tort}</p>
                <p className='text-md lg:text-lg'>{TopilganMutaxassis.aboutJop2.besh}</p>
              </li>

              <li className='mb-4 bizhaqdaResp:mb-0 navHiddenResp:px-2 xl:px-0 text-md navHiddenResp:lg xl:text-xl font-normal leading-6 navHiddenResp:leading-7 text-black/80'>
                <p className='-ml-2 lg:-ml-4'>{TopilganMutaxassis.aboutJop3.kasalliklari}</p>
                <p className='text-md lg:text-lg'>{TopilganMutaxassis.aboutJop3.bir}</p>
                <p className='text-md lg:text-lg'>{TopilganMutaxassis.aboutJop3.ikki}</p>
                <p className='text-md lg:text-lg'>{TopilganMutaxassis.aboutJop3.uch}</p>
                <p className='text-md lg:text-lg'>{TopilganMutaxassis.aboutJop3.tort}</p>
                <p className='text-md lg:text-lg'>{TopilganMutaxassis.aboutJop3.besh}</p>
              </li>
            </ul>

            <p className='hidden bizhaqdaResp:inline-block navHiddenResp:px-2 xl:px-0 text-md navHiddenResp:lg xl:text-xl font-normal leading-6 navHiddenResp:leading-7 text-black/80'>{TopilganMutaxassis.aboutJop}</p>
          </div>

        </div>

        <div className='space-y-6 px-1 navHiddenResp:px-2 xl:px-0 text-md navHiddenResp:lg xl:text-xl font-normal leading-6 navHiddenResp:leading-7 text-black/80'>
          <p className='inline-block bizhaqdaResp:hidden'>{TopilganMutaxassis.aboutJop}</p>
          <p>{TopilganMutaxassis.text1}</p>
          <p>{TopilganMutaxassis.text2}</p>
        </div>

      </div>

    </div>
  )
}

export default MutaxassislarDetails
