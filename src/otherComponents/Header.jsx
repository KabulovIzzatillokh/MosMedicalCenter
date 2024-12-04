import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

import MedicalCenterLogo from '../img/medicalCenterLogo.webp'
import LocationImage from '../img/locationImg.png';
import borderV from '../img/borderV.png';
import telegramIcon from '../img/telegramIcon.png';
import VKIcon from '../img/VKIcon.png';
import OKIcon from '../img/OKIcon.png';
import phoneICon from '../img/phoneIcon.png'

const Header = () => {

  // modal funsiyalari =============
  const [OpenModal, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isKompaniyaDropdownOpen, setIsKompaniyaDropdownOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const openModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFirstName('')
    setPhone('')
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setFirstName('')
    setPhone('')
  };

  const toggleKompaniyaDropdown = () => {
    setIsKompaniyaDropdownOpen(!isKompaniyaDropdownOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (e) => {
    if (e.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  return (
    <header>
      <div className="w-full max-w-base mx-auto px-5">

        {/* header top */}
        <div>

          <div className='flex items-center justify-between pt-7 pb-4'>
            <button onClick={toggleMobileMenu} className='navBirjaHiddenResp:hidden mr-4 text-[27px] bg-Mos-Purple pt-1 pb-2 px-4 rounded-xl text-white'>
              ☰
            </button>

            <Link className='hidden navBirjaHiddenResp:flex items-center' to='/'>
              <img className='h-[72px] w-[70px] rounded-full mr-4' src={MedicalCenterLogo} alt="MedicalCenterLogo" />

              <div>
                <p className='text-2xl font-bold mb-0.5'>Mos Medical Center</p>
                <p className='text-base font-normal'>Moskvadagi tibbiyot markazi</p>
              </div>
            </Link>

            <div className='hidden md:flex mr-3 items-center'>
              <div className='mr-5 py-1 px-0.5 bg-blue-100 rounded-lg'>
                <img className='w-5 h-5' src={LocationImage} alt="LocationImage" />
              </div>
              <p>Leninskiy prospekti, uy, bino</p>
            </div>

            <div className='flex items-center space-x-7'>
              <div>
                <span className='text-Mos-Purple text-lg md:text-xl font-medium mb-0.5'>+998 99 781 32 81</span>
                <p className='text-sm font-normal'>Dushanba-Yakshanba: 8:00-20:00</p>
              </div>

              {/* more */}
              <div className='hidden moreHiddenResp:inline-block group relative bg-blue-100 py-2 px-1 rounded-2xl cursor-pointer'>
                <img className='w-8 h-6' src={borderV} alt="borderV" />

                <div className='absolute top-full right-0 mt-0.5 w-80 bg-white shadow-lg shadow-gray-600 rounded-lg p-6 space-y-8 hidden group-hover:block z-10'>

                  {/* more of details */}
                  <div className='space-y-8'>

                    <h3 className='font-semibold text-2xl'>Kontaktlar</h3>

                    {/* qong'iroqlar */}
                    <div>

                      <span className='block text-gray-500 mb-1'>24/7 qo'ng'iroqlarni qabul qiling</span>

                      <div>
                        <div className='flex items-center space-x-4'>
                          <Link to='tel:+998949420445' className='font-bold text-lg hover:opacity-70 transition-all duration-200'>+998 94 842 04 45</Link>
                          <Link to='https://telegram.org/?roistat_visit=30313990'>
                            <img className='w-10 h-10 hover:opacity-70 transition-all duration-200' src={telegramIcon} alt="telegramIcon" />
                          </Link>
                        </div>

                        <Link to='tel:+998940470641' className='font-bold text-lg hover:opacity-70 transition-all duration-200'>+998 94 047 06 41</Link>
                      </div>

                    </div>

                    {/* manzil */}
                    <div>

                      <span className='block text-gray-500 mb-1'>Ofis manzili:</span>

                      <p className='font-medium text-base'>Moskva, Leninskiy prospekti, uy, <br /> bino, ofis raqami</p>

                    </div>

                    {/* email */}
                    <div>
                      <span className='block text-gray-500 mb-1'>Email:</span>

                      <Link className='font-semibold text-Mos-Purple relative border-b-1 border-Mos-Purple hover:border-transparent hover:after:w-0 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-Mos-Purple after:transition-all after:duration-700' to='mailto:login@domain.ru'>login@domain.ru</Link>
                    </div>

                    {/* ish vaqti */}
                    <div>

                      <span className='block font-semibold text-lg mb-3'>Ish vaqti</span>

                      <div>
                        <p className='text-black/80'>Dushanba-Jum 9:00 dan 18:00 gacha</p>
                        <p className='text-black/80'>Shanba 10:00 dan 17:00 gacha</p>
                        <p className='text-black/80'>Yakshanba - yopiq</p>
                      </div>

                    </div>

                    {/* onlayn joyi */}
                    <div>

                      <span className='block font-semibold text-lg'>Biz onlaynmiz</span>

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

                </div>


              </div>

              <button onClick={openModal} className='block navBirjaHiddenResp:hidden px-2 py-3 bg-purple-btn-color rounded-2xl'>
                <img height='40' width='40' src={phoneICon} alt="phoneICon" />
              </button>

            </div>
          </div>

          {/* Mobile Sidebar Menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 pr-10 ">
              <div className="bg-white w-full max-w-96 h-full px-8 py-10 relative overflow-y-auto">
                <button onClick={toggleMobileMenu} className="absolute z-50 top-7 right-9 text-Mos-Purple text-4xl font-bold">×</button>
                <nav>
                  <ul className="space-y-7 text-base moreHiddenResp.:text-lg font-semibold font-montserrat">
                    <li className='group'><Link onClick={toggleMobileMenu} className='group-hover:text-cyan-500 group-hover:border-b-2 group-hover:border-Mos-Purple' to="/">Uy</Link></li>
                    <li className="group relative flex justify-between items-center">
                      <Link onClick={toggleMobileMenu} className='group-hover:text-cyan-500 group-hover:border-b-2 group-hover:border-Mos-Purple' to='/Xizmatlar'>Xizmatlar</Link>
                      <button onClick={toggleDropdown} className="flex items-center space-x-2">
                        <span className="text-base font-bold bg-gray-200 px-2 py-1 rounded-full text-Mos-Purple">▼</span>
                      </button>
                      {isDropdownOpen && (
                        <ul className="absolute top-7 z-50 left-0 mt-2 py-4 px-5 w-full bg-white shadow-md shadow-Mos-Purple rounded-lg">
                          <li><Link onClick={toggleMobileMenu} to="/Ginekologiya" className="block px-4 py-2 rounded-lg hover:text-cyan-500 hover:bg-gray-100">Ginekologiya</Link></li>
                          <li><Link onClick={toggleMobileMenu} to="/Nefrologiya" className="block px-4 py-2 rounded-lg hover:text-cyan-500 hover:bg-gray-100">Nefrologiya</Link></li>
                          <li><Link onClick={toggleMobileMenu} to="/Nevrologiya" className="block px-4 py-2 rounded-lg hover:text-cyan-500 hover:bg-gray-100">Nevrologiya</Link></li>
                          <li><Link onClick={toggleMobileMenu} to="/Kardiologiya" className="block px-4 py-2 rounded-lg hover:text-cyan-500 hover:bg-gray-100">Kardiologiya</Link></li>
                          <li><Link onClick={toggleMobileMenu} to="/Gastroenterologiya" className="block px-4 py-2 rounded-lg hover:text-cyan-500 hover:bg-gray-100">Gastroenterologiya</Link></li>
                          <li><Link onClick={toggleMobileMenu} to="/Otorinolaringologiya" className="block px-4 py-2 rounded-lg hover:text-cyan-500 hover:bg-gray-100">Otorinolaringologiya</Link></li>
                        </ul>
                      )}
                    </li>

                    <li className='group'><Link onClick={toggleMobileMenu} className='group-hover:text-cyan-500 group-hover:border-b-2 group-hover:border-Mos-Purple' to="/NarxlarRoyxati">Narxlar Ro'yxati</Link></li>
                    <li className="group relative flex justify-between items-center">
                      <Link onClick={toggleMobileMenu} className='group-hover:text-cyan-500 group-hover:border-b-2 group-hover:border-Mos-Purple' to='/KompaniyaHaqida'>Kompaniya haqida</Link>
                      <button onClick={toggleKompaniyaDropdown} className="flex items-center space-x-2">
                        <span className="text-base font-bold bg-gray-200 px-2 py-1 rounded-full text-Mos-Purple">▼</span>
                      </button>
                      {isKompaniyaDropdownOpen && (
                        <ul className="absolute top-7 z-10 left-0 mt-2 py-4 px-5 w-full bg-white shadow-md shadow-Mos-Purple rounded-lg">
                          <li><Link onClick={toggleMobileMenu} to="/Sertifikatlar" className="block px-4 py-2 rounded-lg hover:text-cyan-500 hover:bg-gray-100">Sertifikatlar</Link></li>
                          <li><Link onClick={toggleMobileMenu} to="/Hamkorlar" className="block px-4 py-2 rounded-lg hover:text-cyan-500 hover:bg-gray-100">Hamkorlar</Link></li>
                          <li><Link onClick={toggleMobileMenu} to="/Fotogalareya" className="block px-4 py-2 rounded-lg hover:text-cyan-500 hover:bg-gray-100">Fotogalareya</Link></li>
                          <li><Link onClick={toggleMobileMenu} to="/Mutaxassislar" className="block px-4 py-2 rounded-lg hover:text-cyan-500 hover:bg-gray-100">Mutaxassislar</Link></li>
                        </ul>
                      )}
                    </li>
                    <li className='group'><Link onClick={toggleMobileMenu} className='group-hover:text-cyan-500 group-hover:border-b-2 group-hover:border-Mos-Purple' to="/birja">Birja</Link></li>
                    <li className='group'><Link onClick={toggleMobileMenu} className='group-hover:text-cyan-500 group-hover:border-b-2 group-hover:border-Mos-Purple' to="/Yangiliklar">Yangiliklar</Link></li>
                    <li className='group'><Link onClick={toggleMobileMenu} className='group-hover:text-cyan-500 group-hover:border-b-2 group-hover:border-Mos-Purple' to="/BizXaqimizdaSharxlar">Biz haqimizda sharhlar</Link></li>
                    <li className='group'><Link onClick={toggleMobileMenu} className='group-hover:text-cyan-500 group-hover:border-b-2 group-hover:border-Mos-Purple' to="/Kontaktlar">Kontaktlar</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          )}

        </div>

        {/* header bottom */}
        <div className={`pb-7 text-white mt-3 w-full z-10`}>

          <Link className='flex items-center navBirjaHiddenResp:hidden text-black' to='/'>
            <img className='h-[72px] w-[70px] rounded-full mr-4' src={MedicalCenterLogo} alt="MedicalCenterLogo" />
            <div>
              <p className='text-xl navHiddenResp:text-2xl font-bold mb-0.5'>Mos Medical Center</p>
              <p className='text-sm navHiddenResp:text-base font-normal'>Moskvadagi tibbiyot markazi</p>
            </div>  
          </Link>

          <div className='bg-Mos-Purple hidden navBirjaHiddenResp:flex items-center justify-between p-4 rounded-[30px]'>

            {/* navigatsiya */}
            <nav>

              <ul className='flex items-center space-x-2'>

                <li className='text-white font-semibold py-1.5 px-5 rounded-2xl border-[3px] border-transparent hover:border-white transition-all duration-300'>
                  <Link to='/'>Uy</Link>
                </li>

                <li className='relative group text-white font-semibold py-1.5 px-5 rounded-2xl border-[3px] border-transparent hover:border-white transition-all duration-300'>
                  <Link to='/Xizmatlar'>Xizmatlar</Link>

                  {/* Xizmatlar details */}
                  <div className='block-hidden-parent-styles'>
                    <Link to='/Ginekologiya' className='block-hidden-child-styles'>Ginekalogiya</Link>
                    <Link to='/Nefrologiya' className='block-hidden-child-styles'>Nefrologiya</Link>
                    <Link to='/Nevrologiya' className='block-hidden-child-styles'>Nevrologiya</Link>
                    <Link to='/Kardiologiya' className='block-hidden-child-styles'>Kardiologiya</Link>
                    <Link to='/Gastroenterologiya' className='block-hidden-child-styles'>Gastroenterologiya</Link>
                    <Link to='/Otorinolaringologiya' className='block-hidden-child-styles'>Otorinolaringologiya (KBB)</Link>
                  </div>

                </li>

                <li className='text-white font-semibold py-1.5 px-5 rounded-2xl border-[3px] border-transparent hover:border-white transition-all duration-300'>
                  <Link to='/NarxlarRoyxati'>Narxlar Ro'yxati</Link>
                </li>

                <li className='relative group text-white font-semibold py-1.5 px-5 rounded-2xl border-[3px] border-transparent hover:border-white transition-all duration-300'>
                  <Link to='/KompaniyaHaqida'>Kompaniya haqida</Link>

                  {/* Kompaniya details */}
                  <div className='block-hidden-parent-styles'>
                    <Link className='block-hidden-child-styles' to='/Sertifikatlar'>Sertifikatlar</Link>
                    <Link className='block-hidden-child-styles' to='/Hamkorlar'>Hamkorlar</Link>
                    <Link className='block-hidden-child-styles' to='/Fotogalareya'>Fotogalareya</Link>
                    <Link className='block-hidden-child-styles' to='/Mutaxassislar'>Mutaxassislar</Link>
                  </div>

                </li>

                <li className='hidden navBirjaHiddenResp:block text-white font-semibold py-1.5 px-5 rounded-2xl border-[3px] border-transparent hover:border-white transition-all duration-300'>
                  <Link to='/birja'>Birja</Link>
                </li>

                <li className='hidden xl:block text-white font-semibold py-1.5 px-5 rounded-2xl border-[3px] border-transparent hover:border-white transition-all duration-300'>
                  <Link to='/Yangiliklar' >Yangiliklar</Link>
                </li>

                <li className='hidden bizhaqdaResp:block text-white font-semibold py-1.5 px-5 rounded-2xl border-[3px] border-transparent hover:border-white transition-all duration-300'>
                  <Link to='/BizXaqimizdaSharxlar'>Biz haqimzda sharhlar</Link>
                </li>

                <div className="relative group hidden md:block">
                  <div className="cursor-pointer inline-block py-1 px-2 bg-indigo-900 rounded-xl">
                    {/* Uch nuqta ikonasi */}
                    <div>•••</div>

                    {/* Drop-down menyu */}
                    <div className="hidden w-60 group-hover:block absolute top-full bg-white shadow-lg px-2 pb-2 z-10 space-y-2 rounded-lg">

                      <Link to="/birja" className="block navBirjaHiddenResp:hidden rounded-lg hover:text-Mos-Purple text-black hover:bg-gray-100 px-4 py-2">Birja</Link>

                      <Link to="/Yangiliklar" className="block xl:hidden rounded-lg hover:text-Mos-Purple text-black hover:bg-gray-100 px-4 py-2">Yangiliklar</Link>

                      <Link to="/BizXaqimizdaSharxlar" className="block bizhaqdaResp:hidden rounded-lg hover:text-Mos-Purple text-black hover:bg-gray-100 px-4 py-2">Biz haqimizda sharhlar</Link>

                      <Link to="/Kontaktlar" className="block rounded-lg hover:text-Mos-Purple text-black hover:bg-gray-100 px-4 py-2">Kontaktlar</Link>
                    </div>
                  </div>
                </div>


              </ul>

            </nav>

            {/* qongiroq talabi */}
            <button onClick={openModal} className='medical-btn white-btn'>Qo'ng'iroqni talab qilish</button>
          </div>

        </div>

      </div>

      {/* Modal oynasi faqat isModalOpen true bo'lganda ko'rsatiladi */}
      {OpenModal && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center px-5 md:pl-0 mr-0 modalResp:pr-5 modalResp:justify-center z-50"
          onClick={handleClickOutside}
        >
          {/* Modal */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              closeModal();
              if (firstName && phone && isChecked) {
                try {
                  const botToken = "7699128704:AAGNXZ_OoWRa8AW_xxAMdzeggVWgPzfWxvY";
                  const chatId = "-1002454081390"; // Masalan: "-1001234567890"
                  const telegramAPI = `https://api.telegram.org/bot${botToken}/sendMessage`;

                  const text = `
🔔 Yangi Qo'ng'iroq Talabi:

👤 Ism: ${firstName}
📞 Telefon: ${phone}
                    `;

                  const response = await fetch(telegramAPI, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      chat_id: chatId,
                      text,
                      parse_mode: "Markdown",
                    }),
                  });
                  if (response.ok) {
                    alert("Murojaatingiz yuborildi!");
                  } else {
                    const error = await response.json();
                    alert("Xatolik yuz berdi: " + (error.description || "Noma'lum xato."));
                  }
                } catch (err) {
                  alert("Xato yuz berdi: " + err.message);
                }
              }
            }}
            className="relative w-[350px] md:w-[610px] py-5 px-6 md:py-6 md:px-10 xl:p-14 bg-white text-black rounded-2xl shadow-lg"
          >
            {/* Chiqish tugmasi (X belgi) */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 font-bold text-xl lg:text-3xl text-purple-btn-color hover:rotate-180 transition-all duration-300"
            >
              X
            </button>

            <h2 className="text-lg sm:text-xl md:text-2xl xl:text-4xl font-bold mb-2 lg:mb-4">Qo'ng'iroqni talab qiling</h2>
            <p className="text-[10px] sm:text-base mb-3 sm:mb-10">
              Menejerimiz siz uchun qulay vaqtda siz bilan bog'lanadi
            </p>

            <div className="flex flex-col">
              <div className="mb-6">
                <label className="block text-base sm:text-lg font-semibold mb-2">Ismingiz:</label>
                <input
                  type="text"
                  placeholder="Ismingiz"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value.trim())}
                  className="w-full border border-gray-300 rounded-xl p-2 lg:px-3 lg:py-5 focus:outline-none focus:ring-1 focus:ring-Mos-Purple"
                  required
                />
                {!firstName && (
                  <p className="text-red-500 text-sm mt-1">Bu qator toʻldirilmagan</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-base sm:text-lg font-semibold mb-2">Telefon:</label>
                <input
                  type="number"
                  placeholder="+ 998 __ (___) __ __"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl p-2 lg:px-3 lg:py-5 focus:outline-none focus:ring-1 focus:ring-Mos-Purple"
                  required
                />
                {!phone && (
                  <p className="text-red-500 text-sm mt-1">Bu qator toʻldirilmagan</p>
                )}
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="userAgreement"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="mr-2"
                />
                <label htmlFor="userAgreement" className="text-[10px] lg:text-base">
                  <Link to='/FoydalanuvchiShartnomasi' className="underline cursor-pointer"><b>Men foydalanuvchi shartnomasini</b></Link> o'qib
                  chiqdim *
                </label>
              </div>

              {/* Submit tugmasi */}
              <button
                type="submit"
                disabled={!firstName || !phone || !isChecked}
                className={`w-28 md:w-36 mt-0 md:mt-7 rounded-xl text-base md:text-lg text-center text-white font-medium py-2 px-4 md:py-5 md:px-4 ${!firstName || !phone || !isChecked
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-purple-btn-color hover:opacity-80 transition-all duration-300'
                  }`}
              >
                Yuborish
              </button>
            </div>
          </form>
        </div>
      )}

    </header>
  );
};

export default Header;
