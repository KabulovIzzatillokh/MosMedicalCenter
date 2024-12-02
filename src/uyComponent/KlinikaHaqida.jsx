import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

// rasmlar 
import QulayShifoxona from '../img/QulayShifoxona.webp'
import MalakaliMuxassislar from '../img/MalakaliMuxassislar.webp'
import ZamonaviyOperatsiya from '../img/ZamonaviyOperatsiya.webp'

const KlinikaHaqida = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='py-8 xl:py-[62px]'>

            {/* KlinikaHaqida top */}
            <div className='pb-8'>

                <div className='mb-10'>
                    <h2 className='text-[40px] xl:text-[61px] font-semibold mb-3'>Klinika haqida</h2>

                    <p className='text-xl font-medium xl:text-2xl xl:font-semibold'>Uyga yaqin va arzon narxlarda sifatli tibbiy xizmatlar</p>
                </div>

                <div className='text-lg font-normal leading-5 space-y-5 xl:text-xl xl:font-medium xl:leading-7 xl:space-y-7'>

                    <p>Bizning klinikamiz turli sohalarda tibbiy xizmatlar ko'rsatishga ixtisoslashgan: ginekologiya, jarrohlik, travmatologiya, stomatologiya va boshqalar.</p>

                    <p>Bundan tashqari, bizning klinikamizda statsionar va uyda parvarishlash bo'limi, klinik diagnostika laboratoriyasi va rentgen xonasi mavjud.</p>

                    <p>Biz bilan siz to'liq tibbiy xizmatlar, yuqori sifatli diagnostika va davolashni olishingiz mumkin.</p>

                    <Link className='block text-Mos-Purple' to='/KompaniyaHaqida'>Batafsil ma'lumot</Link>

                </div>

            </div>

            {/* KlinikaHaqida bootom */}
            <div>

                {/* bottom top */}
                <div className='hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-y-10 py-14'>

                    {/* 15 */}
                    <div className='relative'>
                        <div className='mb-1'>
                            <p className='text-6xl font-bold text-Mos-Purple'>15+</p>
                            <span className='block absolute -top-2 left-12 -z-10 h-7 w-7 bg-Mos-purple-light rounded-lg'></span>
                        </div>
                        <p className='text-base font-medium text-black/80'>oliy toifali shifokorlar</p>
                    </div>

                    {/* 8 */}
                    <div className='relative'>
                        <div className='mb-1'>
                            <p className='text-6xl font-bold text-Mos-Purple'>8+</p>
                            <span className='block absolute -top-1 left-8 -z-10 h-7 w-7 bg-Mos-purple-light rounded-lg'></span>
                        </div>
                        <p className='text-base font-medium text-black/80'>tibbiyot fanlari doktorlari</p>
                    </div>

                    {/* 12 */}
                    <div className='relative'>
                        <div className='mb-1'>
                            <p className='text-6xl font-bold text-Mos-Purple'>12+</p>
                            <span className='block absolute -top-1 left-12 -z-10 h-7 w-7 bg-Mos-purple-light rounded-lg'></span>
                        </div>
                        <p className='text-base font-medium text-black/80'>yillar davomida sog'ligingiz <br /> uchun xizmat qiladi</p>
                    </div>

                    {/* 30+ */}
                    <div className='relative'>
                        <div className='mb-1'>
                            <p className='text-6xl font-bold text-Mos-Purple'>30+</p>
                            <span className='block absolute -top-2 left-16 -z-10 h-7 w-7 bg-Mos-purple-light rounded-lg'></span>
                        </div>
                        <p className='text-base font-medium text-black/80'>tibbiy mutaxassisliklar</p>
                    </div>

                </div>

                {/* bottom bottom */}
                <div className='inline:block space-y-10 xl:space-y-0 xl:grid grid-cols-3 gap-10'>

                    {/* QulayShifoxona */}
                    <div className='group md:flex items-center space-x-10 w-full xl:flex-col'>
                        <div className='overflow-hidden rounded-[28px]'>
                            <img
                                width='450'
                                height='323'
                                className='object-cover transform group-hover:scale-110 transition duration-300 ease-in-out'
                                src={QulayShifoxona}
                                alt='QulayShifoxona'
                            />
                        </div>
                        
                        <div className='w-full max-w-[270px] lg:max-w-[370px] pt-[30px] pb-6'>
                            <h3 className='text-xl lg:text-3xl xl:text-xl font-semibold mb-2'>Qulay shifoxona</h3>
                            <p className='text-base md:text-lg lg:text-xl xl:text-base font-medium text-black/70'>
                                Biz ko'rsatmalarga muvofiq terapiyani tanlab, samarali davolanishni ta'minlaymiz
                            </p>
                        </div>  
                    </div>  

                    {/* MalakaliMutaxassislar */}
                    <div className='group md:flex items-center space-x-10 w-full xl:flex-col'>
                        <div className='overflow-hidden rounded-[28px]'>
                            <img
                                width='450'
                                height='323'
                                className='object-cover transform group-hover:scale-110 transition duration-300 ease-in-out'
                                src={MalakaliMuxassislar}
                                alt='MalakaliMuxassislar'
                            />
                        </div>
                        
                        <div className='w-full max-w-[270px] lg:max-w-[370px] pt-[30px] pb-6'>
                            <h3 className='text-xl lg:text-3xl xl:text-xl font-semibold mb-2'>Malakali mutaxassislar</h3>
                            <p className='text-base md:text-lg lg:text-xl xl:text-base font-medium text-black/70'>
                                o'z kasbiga ishtiyoqli mutaxassislar va tibbiyot xodimlari
                            </p>
                        </div>
                    </div>

                    {/* ZamonaviyOperatsiya */}
                    <div className='group md:flex items-center space-x-10 w-full xl:flex-col'>
                        <div className='overflow-hidden rounded-[28px]'>
                            <img
                                width='450'
                                height='323'
                                className='object-cover transform group-hover:scale-110 transition duration-300 ease-in-out'
                                src={ZamonaviyOperatsiya}
                                alt='ZamonaviyOperatsiya'
                            />
                        </div>
                        <div className='w-full max-w-[270px] lg:max-w-[370px] pt-[30px] pb-6'>
                            <h3 className='text-xl lg:text-3xl xl:text-xl font-semibold mb-2'>Zamonaviy operatsiya</h3>
                            <p className='text-base md:text-lg lg:text-xl xl:text-base font-medium text-black/70'>
                                zamonaviy uskunalar bilan jihozlangan, bu esa asoratlar xavfini kamaytiradi
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default KlinikaHaqida
