import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Location from '../Location'

import RentgenNurlari from '../img/RentgenNurlari.png'
import MRI from '../img/MRI.png'
import Labaratoriya from '../img/Labaratoriya.png'
import Ultratovush from '../img/Ultratovush.png'
import Funktsional from '../img/Funktsional.png'
import AsalKomissiya from '../img/AsalKomissiya.png'

const Diagnostikalar = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='xl:py-[62px]'>

      {/* diagnostikalar */}
      <div className='w-full max-w-base mx-auto px-5'>
        <Location />

        <h2 className='text-4xl lg:text-[48px] xl:text-[61px] font-semibold mb-4 xl:mb-8'>Diagnostikalar</h2>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 py-2 xl:py-5'>

          {/* RentgenNurlari */}
          <Link to='/RentgenNurlari'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={RentgenNurlari} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='ext-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>RentgenNurlari</h2>
              </div>

            </li>
          </Link>

          {/* MRI */}
          <Link to='/MRI'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={MRI} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='ext-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>MRI</h2>
              </div>

            </li>
          </Link>

          {/* Laboratoriya */}
          <Link to='/Labaratoriya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={Labaratoriya} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='ext-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Labaratoriya</h2>
              </div>

            </li>
          </Link>

          {/* Ultratovush */}
          <Link to='/Ultratovush'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={Ultratovush} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='ext-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Ultratovush</h2>
              </div>

            </li>
          </Link>

          {/* Funktsional */}
          <Link to='/Funktsional'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={Funktsional} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='ext-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Funktsional Diagnostika</h2>
              </div>

            </li>
          </Link>

          {/* AsalKomissiya */}
          <Link to='/AsalKomissiya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={AsalKomissiya} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='ext-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>AsalKomissiya</h2>
              </div>

            </li>
          </Link>

        </ul>

      </div>

    </div>
  )
}

export default Diagnostikalar  