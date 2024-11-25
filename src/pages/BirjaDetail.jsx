import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Location from '../Location'
import { BirjalarData } from '../data';

const BirjaDetail = () => {

  const param = useParams();
  const BirjaTopish = BirjalarData.filter((Birja) => Birja.name === param.name);
  const TopilganBirja = BirjaTopish[0];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='pt-14 pb-8'>
      <div className="w-full max-w-base mx-auto px-5">
        <Location />

        <div className='flex items-center'>

          <div className={'w-[620px] mr-10 shadow-lg shadow-gray-700'}>
            <img src={TopilganBirja.img} alt="birja detail image" />
          </div>

          <div className='space-y-5'>
            <p className='text-lg font-semibold text-black/80 mb-2'>{TopilganBirja.data}</p>
            <p className='font-bold text-3xl'>{TopilganBirja.aksiya}</p>
            <p className='text-xl font-medium'>{TopilganBirja.text}</p>
            <p className='text-xl font-medium'>{TopilganBirja.text1}</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default BirjaDetail