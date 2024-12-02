import React from 'react'
import { Link } from 'react-router-dom'

// rasmlar importi
import telegramIcon from '../img/telegramIcon.png'
import VKIcon from '../img/VKIcon.png'
import OKIcon from '../img/OKIcon.png'

const Footer = () => {
  const prevBtn = '<';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className='bg-footer-bg mt-16 xl:mt-20'>


      <div className="w-full max-w-base mx-auto px-5 relative">
        <button onClick={scrollToTop} className="absolute -top-8 right-10 rotate-90 h-[58px] px-5 rounded-2xl text-3xl font-bold  text-Mos-Purple bg-Mos-purple-light hover:bg-Mos-Purple hover:text-white transition-all duration-300">{prevBtn}</button>

        <div className='flex items-center justify-between pt-16 pb-9'>

          {/* footer left */}
          <div className='text-white/90 mr-5'>

            <h3 className='font-semibold text-[50px] mb-5'>Kontaktlar</h3>

            {/* qong'iroqlar */}
            <div className='mb-5'>

              <div>
                <span className='block text-gray-300 mb-1'>Registir:</span>

                <div className='flex items-center space-x-4 mb-3'>
                  <Link to='tel:+998997813281' className='font-bold text-2xl hover:opacity-70 transition-all duration-200'>+998 94 842 04 45</Link>
                  <Link to='https://telegram.org/?roistat_visit=30313990'>
                    <img className='w-10 h-10 hover:opacity-70 transition-all duration-200' src={telegramIcon} alt="telegramIcon" />
                  </Link>
                </div>

                <span className='block text-gray-300 mb-1'>Favqulotda vaziyatlar bo'limi</span>
                <Link to='tel:+70001234568' className='font-bold text-2xl hover:opacity-70 transition-all duration-200'>+998 94 047 06 41</Link>
              </div>

            </div>

            {/* manzil */}
            <div className='mb-5'>

              <span className='block text-gray-300 mb-1'>Ofis manzili:</span>

              <p className='font-medium text-base'>Moskva, Leninskiy prospekti, uy, <br /> bino, ofis raqami</p>

            </div>

            {/* email */}
            <div className='mb-5'>
              <span className='block text-gray-300 mb-1'>Email:</span>

              <Link className='font-semibold text-base relative border-b-1 border-white/80 hover:border-transparent hover:after:w-0 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-white/80 after:transition-all after:duration-700' to='mailto:login@domain.ru'>login@domain.ru</Link>
            </div>

            {/* ish vaqti */}
            <div className='mb-5'>

              <span className='block text-gray-300 font-semibold mb-3'>Ish vaqti</span>

              <div className='text-base'>
                <p>Dushanba-Jum 9:00 dan 18:00 gacha</p>
                <p>Shanba 10:00 dan 17:00 gacha</p>
                <p>Yakshanba - yopiq</p>
              </div>

            </div>

            {/* onlayn joyi */}
            <div>

              <span className='block font-semibold text-base'>Biz onlaynmiz</span>

              <div className='flex items-center space-x-2'>

                <Link to='https://vk.com/'>
                  <img className='hover:opacity-75 transition-all duration-200 w-14 h-14' src={VKIcon} alt="VKIcon" />
                </Link>

                <Link to='https://www.facebook.com/?roistat_visit=30313990'>
                  <img className='hover:opacity-75 transition-all duration-200 w-10 h-9' src={OKIcon} alt="OKIcon" />
                </Link>

              </div>

            </div>


          </div>

          {/* footer right */}
          <div className='hidden md:inline-block'>

            <div className='relative overflow-hidden'>

              <Link to="https://yandex.uz/maps/213/moscow/?utm_medium=mapframe&utm_source=maps" className='text-[#eee] text-xs absolute top-0'>

              </Link>

              <Link to="https://yandex.uz/maps/geo/moskva/53000094/?ll=37.621966%2C55.750812&utm_medium=mapframe&utm_source=maps&z=12.22" className='text-[#eee] text-xs absolute top-4'>
                Moscow — Yandex Xarita
              </Link>

              <iframe src="https://yandex.uz/map-widget/v1/?ll=37.621966%2C55.750812&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5NBIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg2GeBZCFQEGX0I%2C&z=12.22" className='relative md:w-[450px] lg:w-[710px] 2xl:w-[1070px] h-[594px] rounded-3xl'></iframe>
              {/* frameborder="1" allowfullscreen="true" */}

            </div>

          </div>

        </div>

      </div>


    </footer>
  )
}

export default Footer
