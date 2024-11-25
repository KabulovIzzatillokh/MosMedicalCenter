import React, {useEffect} from 'react'

import Hero from '../uyComponent/Hero'
import Yonalishlar from '../uyComponent/Yonalishlar'
import Diagnostikalar from '../uyComponent/Diagnostikalar'
import KlinikaHaqida from '../uyComponent/KlinikaHaqida'
import KlinikaningFotosuratlari from '../uyComponent/KlinikaningFotosuratlari'
import Mutaxassislar from '../uyComponent/Mutaxassislar'
import Pediatriya from '../uyComponent/Pediatriya'
import BemorlarningSharxi from '../uyComponent/BemorlarningSharxi'

const Uy = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>

      <div className="w-full max-w-base mx-auto px-5">

        <Hero />
        <Yonalishlar />
        <Diagnostikalar />
        <KlinikaHaqida />
        <KlinikaningFotosuratlari />
        <Mutaxassislar />
        <Pediatriya />
        <BemorlarningSharxi />

      </div>
      
    </div>
  )
}

export default Uy