import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Location from '../Location';

import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Rasmlar
import Fotogalareya1 from '../img/Fotogalareya1.webp';
import Fotogalareya2 from '../img/Fotogalareya2.webp';
import Fotogalareya3 from '../img/Fotogalareya3.webp';
import Fotogalareya4 from '../img/Fotogalareya4.webp';
import Fotogalareya5 from '../img/Fotogalareya5.webp';
import Fotogalareya6 from '../img/Fotogalareya6.webp';


const Fotogalareya = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className='py-5 lg:py-[60px]'>

            <div className="w-full max-w-base mx-auto px-5">
                <Location />

                <h2 className="text-3xl md:[37px] lg:text[45px] xl:text-[50px] font-semibold lg:font-bold mb-8 navHiddenResp:mb-10 lg:mb-[50px]">Fotogalereya</h2>

                <div className="App">
                    <LightGallery
                        onInit={onInit}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        elementClassNames="px-4 navHiddenResp:px-6 xl:px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    >
                        {[Fotogalareya1, Fotogalareya2, Fotogalareya3, Fotogalareya4, Fotogalareya5, Fotogalareya6].map((image, index) => (
                            <Link
                                key={index}
                                className="relative rounded-3xl inline-block overflow-hidden hover:scale-110 transition-all duration-300"
                                to={image}
                            >
                                <img alt={`Fotogalareya${index + 1}`} src={image} className="w-full" />
                            </Link>
                        ))}
                    </LightGallery>
                </div>
            </div>

        </div>
    );
};

export default Fotogalareya;
