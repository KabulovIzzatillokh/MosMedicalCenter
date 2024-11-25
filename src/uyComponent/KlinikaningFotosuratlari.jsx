import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import LightGallery from 'lightgallery/react';
// Import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Rasmlar
import fotosurat1 from '../img/fotosurat1.webp';
import fotosurat2 from '../img/fotosurat2.webp';
import fotosurat3 from '../img/fotosurat3.webp';
import fotosurat4 from '../img/fotosurat4.webp';
import fotosurat5 from '../img/fotosurat5.webp';
import fotosurat6 from '../img/fotosurat6.webp';

// Rasmlar
import lupaIcon from '../img/lupaIcon.png';

const KlinikaningFotosuratlari = () => {

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="App py-5 xl:py-[62px]">

            <h2 className='text-4xl lg:text-[45px] xl:text-[56x] leading-10 font-semibold mb-14 ml-2'>Klinikaning fotosuratlari</h2>

            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="space-y-5 lg:space-y-0 grid lg:grid-cols-2 xl:grid-cols-3 md:gap-x-6 md:gap-y-7"
            >
                {[fotosurat1, fotosurat2, fotosurat3, fotosurat4, fotosurat5, fotosurat6].map((img, index) => (
                    <Link key={index} className="relative group overflow-hidden rounded-3xl" to={img}>
                        <img 
                            alt={`Klinikaning Fotosuratlari - ${index + 1}`} 
                            src={img} 
                            className="w-full h-[308px] object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <img
                            className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            src={lupaIcon}
                            alt="lupaIcon"
                        />
                    </Link>
                ))}
            </LightGallery>
        </div>
    );
};

export default KlinikaningFotosuratlari;
