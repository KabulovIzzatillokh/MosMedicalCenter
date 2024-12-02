import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

// from ./ 
import Uy from './pages/Uy'
import MainLayouts from './layouts/MainLayouts'
import Xizmatlar from './pages/Xizmatlar'
import NarxlarRoyxati from './pages/NarxlarRoyxati'
import KompaniyaHaqida from './pages/KompaniyaHaqida'
import Hamkorlar from './pages/Hamkorlar'
import Sertifikatlar from './pages/Sertifikatlar'
import Birja from './pages/Birja'
import BirjaDetail from './pages/BirjaDetail'
import MutaxassislarDetails from './pages/MutaxassislarDetails'
import PediatriyaDetails from './pages/PediatriyaDetails'
import Yangiliklar from './pages/Yangiliklar'
import BizXaqimizdaSharxlar from './pages/BizXaqimizdaSharxlar'
import Kontaktlar from './pages/Kontaktlar'
import PNF from './pages/PNF'
import Fotogalareya from './pages/Fotogalareya'
import FoydalanuvchiShartnomasi from './pages/FoydalanuvchiShartnomasi'
import Ginekologiya from './pages/Ginekologiya'
import Nefrologiya from './pages/Nefrologiya'
import Nevrologiya from './pages/Nevrologiya'
import Kardiologiya from './pages/Kardiologiya'
import Otorinolaringologiya from './pages/Otorinolaringologiya'
import Dermatologiya from './pages/Dermatologiya'
import Travmatologiya from './pages/Travmatologiya'
import Jarrohlik from './pages/Jarrohlik'
import Flebologiya from './pages/Flebologiya'
import Urologiya from './pages/Urologiya'
import Endokrinologiya from './pages/Endokrinologiya'
import Gastroenterologiya from './pages/Gastroenterologiya'
import RentgenNurlari from './pages/RentgenNurlari'
import MRI from './pages/MRI'
import Labaratoriya from './pages/Labaratoriya'
import Ultratovush from './pages/Ultratovush'
import Funktsional from './pages/Funktsional'
import AsalKomissiya from './pages/AsalKomissiya'
import Diagnostikalar from './uyComponent/Diagnostikalar'
import Mutaxassislar from './uyComponent/Mutaxassislar'
import NarxlarRoyxatiDetail from './pages/NarxlarRoyxatiDetail'

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route element={<MainLayouts />}>
                    <Route index element={<Uy />} />
                    <Route path='Xizmatlar' element={<Xizmatlar />} />
                    <Route path='NarxlarRoyxati' element={<NarxlarRoyxati />} />
                    <Route path='NarxlarRoyxati/:name' element={<NarxlarRoyxatiDetail />} />
                    <Route path='KompaniyaHaqida' element={<KompaniyaHaqida />} />
                    <Route path='Sertifikatlar' element={<Sertifikatlar />} />
                    <Route path='Hamkorlar' element={<Hamkorlar />} />
                    <Route path='Fotogalareya' element={<Fotogalareya />} />
                    <Route path='Birja' element={<Birja />} />
                    <Route path='Birja/:name' element={<BirjaDetail />} />
                    <Route path='Yangiliklar' element={<Yangiliklar />} />
                    <Route path='BizXaqimizdaSharxlar' element={<BizXaqimizdaSharxlar />} />
                    <Route path='Kontaktlar' element={<Kontaktlar />} />
                    <Route path='Ginekologiya' element={<Ginekologiya />} />
                    <Route path='Nefrologiya' element={<Nefrologiya />} />
                    <Route path='Nevrologiya' element={<Nevrologiya />} />
                    <Route path='Kardiologiya' element={<Kardiologiya />} />
                    <Route path='Otorinolaringologiya' element={<Otorinolaringologiya />} />
                    <Route path='Dermatologiya' element={<Dermatologiya />} />
                    <Route path='Travmatologiya' element={<Travmatologiya />} />
                    <Route path='Jarrohlik' element={<Jarrohlik />} />
                    <Route path='Flebologiya' element={<Flebologiya />} />
                    <Route path='Urologiya' element={<Urologiya />} />
                    <Route path='Urologiya' element={<Urologiya />} />
                    <Route path='Endokrinologiya' element={<Endokrinologiya />} />
                    <Route path='Gastroenterologiya' element={<Gastroenterologiya />} />
                    <Route path='RentgenNurlari' element={<RentgenNurlari />} />
                    <Route path='MRI' element={<MRI />} />
                    <Route path='Labaratoriya' element={<Labaratoriya />} />
                    <Route path='Ultratovush' element={<Ultratovush />} />
                    <Route path='Funktsional' element={<Funktsional />} />
                    <Route path='AsalKomissiya' element={<AsalKomissiya />} />
                    <Route path='/Mutaxassislar/:name' element={<MutaxassislarDetails />} />
                    <Route path='PediatriyaDetails' element={<PediatriyaDetails />} />
                    <Route path='FoydalanuvchiShartnomasi' element={<FoydalanuvchiShartnomasi />} />
                    <Route path='Diagnostikalar' element={<Diagnostikalar />} />
                    <Route path='Mutaxassislar' element={<Mutaxassislar />} />
                </Route>
                <Route path='*' element={<PNF />} />
            </>
        )
    )

    return (
        <RouterProvider router={router} />
    )
}

export default App