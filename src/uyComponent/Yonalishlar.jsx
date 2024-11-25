import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

// Yonalishlar image lari 
import GinekologiyaImg from '../img/Ginekologiya.png'
import NefrologiyaImg from '../img/Nefrologiya.png'
import NevrologiyaImg from '../img/Nevrologiya.png'
import KardiologiyaImg from '../img/Kardiologiya.png'
import GastroenterologiyaImg from '../img/Gastroenterologiya.png'
import OtorinolaringologiyaImg from '../img/Otorinolaringologiya.png'
import DermatologiyaImg from '../img/Dermatologiya.png'
import TravmatologiyaImg from '../img/Travmatologiya.png'
import JarrohlikImg from '../img/Jarrohlik.png'
import FlebologiyaImg from '../img/Flebologiya.png'
import UrologiyaImg from '../img/Urologiya.png'
import EndokrinologiyaImg from '../img/Endokrinologiya.png'

const Yonalishlar = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='xl:py-[62px]'>

      {/* yonalinshlar */}
      <div>

        <h2 className='text-4xl lg:text-[48px] xl:text-[61px] font-semibold mb-4 xl:mb-8'>Yo'nalishlar</h2>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-4 py-2 xl:py-5'>

          {/* Ginekologiya */}
          <Link to='/Ginekologiya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={GinekologiyaImg} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='text-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Ginekologiya</h2>
              </div>

            </li>
          </Link>

          {/* Nefrologiya */}
          <Link to='/Nefrologiya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={NefrologiyaImg} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='text-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Nefrologiya</h2>
              </div>

            </li>
          </Link>

          {/* Nevrologiya */}
          <Link to='/Nevrologiya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={NevrologiyaImg} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='text-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Nevrologiya</h2>
              </div>

            </li>
          </Link>

          {/* kardiologiya */}
          <Link to='/Kardiologiya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={KardiologiyaImg} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='text-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Kardiologiya</h2>
              </div>

            </li>
          </Link>

          {/* Gastroenterologiya */}
          <Link to='/Gastroenterologiya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={GastroenterologiyaImg} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='text-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Gastroenterologiya</h2>
              </div>

            </li>
          </Link>

          {/* Otorinolaringologiya */}
          <Link to='/Otorinolaringologiya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={OtorinolaringologiyaImg} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='text-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Otorinolaringologiya</h2>
              </div>

            </li>
          </Link>

          {/* Dermatologiya */}
          <Link to='/Dermatologiya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={DermatologiyaImg} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='text-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Dermatologiya</h2>
              </div>

            </li>
          </Link>

          {/* Travmatologiya */}
          <Link to='/Travmatologiya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={TravmatologiyaImg} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='text-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Travmatologiya</h2>
              </div>

            </li>
          </Link>

          {/* Jarrohlik */}
          <Link to='/Jarrohlik'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={JarrohlikImg} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='text-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Jarrohlik</h2>
              </div>

            </li>
          </Link>

          {/* Flebologiya */}
          <Link to='/Flebologiya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={FlebologiyaImg} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='text-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Flebologiya</h2>
              </div>

            </li>
          </Link>

          {/* Urologiya */}
          <Link to='/Urologiya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={UrologiyaImg} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='text-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Urologiya</h2>
              </div>

            </li>
          </Link>

          {/* Endokrinologiya */}
          <Link to='/Endokrinologiya'>
            <li className='flex items-center py-6 px-5 rounded-[30px] border-2 border-transparent hover:border-Mos-Purple hover:shadow-md hover:shadow-Mos-Purple transition-all duration-500'>

              <div className='flex items-center justify-center mr-5 py-1 w-[80px] h-[80px] rounded-3xl bg-Mos-purple-light '>
                <div className='w-[60px] h-[60px]'>
                  <img width='60' height='43' src={EndokrinologiyaImg} alt="img" />
                </div>
              </div>

              <div>
                <h2 className='text-xl lg:text-2xl xl:text-xl font-semibold text-black/80'>Endokrinologiya</h2>
              </div>

            </li>
          </Link>

        </ul>

      </div>

    </div>
  )
}

export default Yonalishlar  