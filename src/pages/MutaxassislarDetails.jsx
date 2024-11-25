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

        <div className='flex mb-7'>
          <img className='w-[500px] h-auto mr-10 rounded-xl shadow-lg shadow-Mos-Purple object-cover' src={TopilganMutaxassis.img} alt="Mutaxassis image" />

          <div className='space-y-7 mt-6'>
            <h2 className='text-3xl font-bold'>{TopilganMutaxassis.name}</h2>

            <div>
              <p className='text-2xl'><b>Yoshi:</b> {TopilganMutaxassis.age} </p>
              <p className='text-2xl'><b>Kasbi:</b> {TopilganMutaxassis.job} </p>
            </div>

            <ul className='ml-4 flex justify-between'>
              <li>
                <p className='-ml-4 font-semibold text-xl'>{TopilganMutaxassis.aboutJop2.kasalliklari}</p>
                <p className='text-lg'>{TopilganMutaxassis.aboutJop2.bir}</p>
                <p className='text-lg'>{TopilganMutaxassis.aboutJop2.ikki}</p>
                <p className='text-lg'>{TopilganMutaxassis.aboutJop2.uch}</p>
                <p className='text-lg'>{TopilganMutaxassis.aboutJop2.tort}</p>
                <p className='text-lg'>{TopilganMutaxassis.aboutJop2.besh}</p>
              </li>

              <li>
                <p className='-ml-4 font-semibold text-xl'>{TopilganMutaxassis.aboutJop3.kasalliklari}</p>
                <p className='text-lg'>{TopilganMutaxassis.aboutJop3.bir}</p>
                <p className='text-lg'>{TopilganMutaxassis.aboutJop3.ikki}</p>
                <p className='text-lg'>{TopilganMutaxassis.aboutJop3.uch}</p>
                <p className='text-lg'>{TopilganMutaxassis.aboutJop3.tort}</p>
                <p className='text-lg'>{TopilganMutaxassis.aboutJop3.besh}</p>
              </li>
            </ul>

            <p className='text-xl font-normal leading-8 text-black/80'>{TopilganMutaxassis.aboutJop}</p>
          </div>

        </div>

        <div className='space-y-7 text-xl font-normal leading-8 text-black/80'>
          <p>{TopilganMutaxassis.text1}</p>
          <p>{TopilganMutaxassis.text2}</p>
        </div>

      </div>

    </div>
  )
}

export default MutaxassislarDetails
