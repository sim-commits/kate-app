import React from 'react';
import image1 from '../assets/tempImageqr86uX.png';
import image2 from '../assets/tempImageXXMapy.png';
import image3 from '../assets/tempImagePoSIlC.png';

const Triptych: React.FC = () => {
    return (
        <div className='flex flex-row h-[calc(100vh-104px)] md:h-[calc(100vh-192px)] overflow-hidden'>
            {/* First Image */}
            <div className='flex-grow relative group'>
                <img src={image1} alt='Image 1' className='absolute inset-0 w-full h-full object-cover md:object-[center_20%] transition-transform duration-500 ease-in-out group-hover:scale-105' loading='lazy' />
            </div>
            {/* Second Image */}
            <div className='flex-grow relative group'>
                <img src={image2} alt='Image 2' className='absolute inset-0 w-full h-full object-cover md:object-[center_10%] transition-transform duration-500 ease-in-out group-hover:scale-105' loading='lazy' />
            </div>
            {/* Third Image */}
            <div className='flex-grow relative group'>
                <img src={image3} alt='Image 3' className='absolute inset-0 w-full h-full object-cover md:object-[center_20%] transition-transform duration-500 ease-in-out group-hover:scale-105' loading='lazy' />
            </div>
        </div>
    );
};

export default Triptych;