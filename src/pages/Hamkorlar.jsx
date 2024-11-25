import React, {useEffect} from 'react'
import Location from '../Location'

// images 
import Flower from '../img/Flower.webp'
import ClearWater from '../img/ClearWater.webp'
import Penstar from '../img/Penstar.webp'
import HeartStar from '../img/HeartStar.webp'
import Magnus from '../img/Magnus.webp'
import Wonder from '../img/Wonder.webp'
import { Link } from 'react-router-dom'

const Hamkorlar = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div className='py-7 xl:py-[62px]'>

            <div className="w-full max-w-base mx-auto px-5 navHiddenResp:px-7 lg:px-5">
                <Location />

                <h2 className='text-center text-3xl md:[40px] lg:text[45px] xl:text-[50px] font-semibold lg:font-bold mt-10 mb-5'>Hamkorlar</h2>

                <ul className='grid grid-cols-1 moreHiddenResp:grid-cols-2 navHiddenResp:grid-cols-3 xl:grid-cols-4 gap-y-7'>

                    {/* Flower */}
                    <li className='group'>
                        <Link to='https://infinitecolorpanel.com/?srsltid=AfmBOoqpqWmwC-7xHu-BdmU8lMzKWSEG-VHcvitUDTP8aorsKnnN5n1w'>
                            <img className='transform group-hover:scale-110 transition-transform duration-300' src={Flower} alt="flower img" />

                            <h3 className='mt-6 font-semibold lg:font-bold text-xl lg:text-2xl text-center group-hover:text-Mos-Purple transition-transform duration-300'>Hamkor №1</h3>
                        </Link>
                    </li>
                    
                    {/* ClearWater */}
                    <li className='group'>
                        <Link to='https://www.clearwatersystems.com/'>
                            <img className='transform group-hover:scale-110 transition-transform duration-300' src={ClearWater} alt="ClearWater img" />

                            <h3 className='mt-6 font-semibold lg:font-bold text-xl lg:text-2xl text-center group-hover:text-Mos-Purple transition-transform duration-300'>Hamkor №2</h3>
                        </Link>
                    </li>

                    {/* Penstar */}
                    <li className='group'>
                        <Link to='https://penstarwriters.com'>
                            <img className='transform group-hover:scale-110 transition-transform duration-300' src={Penstar} alt="Penstar img" />

                            <h3 className='mt-6 font-semibold lg:font-bold text-xl lg:text-2xl text-center group-hover:text-Mos-Purple transition-transform duration-300'>Hamkor №3</h3>
                        </Link>
                    </li>

                    {/* HeartStar */}
                    <li className='group'>
                        <Link to='https://heartstar.org/'>
                            <img className='transform group-hover:scale-110 transition-transform duration-300' src={HeartStar} alt="HeartStar img" />

                            <h3 className='mt-6 font-semibold lg:font-bold text-xl lg:text-2xl text-center group-hover:text-Mos-Purple transition-transform duration-300'>№4 hamkor</h3>
                        </Link>
                    </li>

                    {/* Magnus */}
                    <li className='group'>
                        <Link to='https://magnuscreative.studio/'>
                            <img className='transform group-hover:scale-110 transition-transform duration-300' src={Magnus} alt="Magnus img" />

                            <h3 className='mt-6 font-semibold lg:font-bold text-xl lg:text-2xl text-center group-hover:text-Mos-Purple transition-transform duration-300'>Hamkor №5</h3>
                        </Link>
                    </li>

                    {/* Wonder */}
                    <li className='group'>
                        <Link to='https://www.wondercreative.co.uk/'>
                            <img className='transform group-hover:scale-110 transition-transform duration-300' src={Wonder} alt="Wonder img" />

                            <h3 className='mt-6 font-semibold lg:font-bold text-xl lg:text-2xl text-center group-hover:text-Mos-Purple transition-transform duration-300'>Hamkor №</h3>
                        </Link>
                    </li>

                </ul>

            </div>

        </div>
    )
}

export default Hamkorlar
