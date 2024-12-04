import React, {useEffect} from 'react'
import PediatriyaImg from '../img/PediatriyaImg.jpg'
import { Link } from 'react-router-dom'

const Pediatriya = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='py-5 lg:py-[60px]'>
            <h2 className='text-[50px] xl:text-[61px] font-semibold mb-3 xl:mb-8 ml-2'>Pediatriya</h2>

            <div className="flex-col xl:relative xl:flex justify-center items-center">
                <img className="h-[300px] xl:h-[761px] w-full rounded-t-[28px] xl:rounded-[33px] object-cover" src={PediatriyaImg} alt="Pediatriya image" />

                <div className="w-full pt-10 pb-14 pl-8 pr-4 xl:absolute xl:left-16 xl:py-16 xl:pr-14 xl:pl-10 xl:w-[661px] rounded-b-3xl xl:rounded-[30px] bg-Mos-Purple text-white">
                    <h1 className="text-2xl xl:text-4xl font-bold leading-[45px] mb-3">Pediatriya kafedrasi</h1>
                    <p className="text-xl xl:text-2xl font-medium mb-4 xl:mb-8">Ro'yxatga olishning qulay shakli navbatlarni va uzoq kutishlarni butunlay yo'q qiladi</p>

                    <Link to='/PediatriyaDetails' className="inline-block bg-purple-btn-color border-purple-btn-color py-3 px-5 xl:py-5 xl:px-8 rounded-2xl text-base xl:text-lg font-semibold blur-[5px] hover:blur-none transition-all duration-500">Pediatriya bo'limiga o'tish</Link>

                </div>

            </div>

        </div>
    )
}

export default Pediatriya
