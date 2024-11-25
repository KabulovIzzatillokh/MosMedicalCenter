import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const PNF = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='h-screen flex items-center justify-center bg-PNF-Background bg-top bg-contain'>

            <div className='-mt-10 text-center'>
                <h1 className='text-7xl font-bold text-[#CADCFC]'>Sahifa Topilmadi <span className='inline-block text-purple-btn-color'>):</span></h1>

                {/* <p className='text-5xl font-semibold text-[#E7E8D1]'>404 Tolilmadi</p> */}

                <Link className='inline-block mt-9 pt-2 pb-4 pl-9 pr-10 text-3xl font-semibold text-[#CADCFC] border-[5px] border-[#CADCFC] rounded-xl hover:bg-[#CADCFC] hover:text-Mos-Purple hover:border-Mos-Purple transition-all duration-300' to='/'>← Uy ga qaytish</Link>
            </div>


        </div>
    )
}

export default PNF