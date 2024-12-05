import React from 'react';
import image1 from '../assets/tempImageqr86uX.png';
import image2 from '../assets/tempImageXXMapy.png';
import image3 from '../assets/tempImagePoSIlC.png';

const Triptych: React.FC = () => {
    return (
        <div className='flex flex-col h-[calc(100vh-104px)] md:flex-row md:h-[calc(100vh-192px)] overflow-hidden'>
            {/* First Image */}
            <div className='flex-grow relative group'>
                <img src={image3} alt='Image 1' className='absolute inset-0 w-full h-full object-cover object-[center_20%] md:object-[center_20%] transition-transform duration-500 ease-in-out group-hover:scale-110' />
            </div>
            {/* Second Image */}
            <div className='flex-grow relative group'>
                <img src={image2} alt='Image 2' className='absolute inset-0 w-full h-full object-cover object-[center_10%] md:object-[center_10%] transition-transform duration-500 ease-in-out group-hover:scale-110' />
            </div>
            {/* Third Image */}
            <div className='flex-grow relative group'>
                <img src={image1} alt='Image 3' className='absolute inset-0 w-full h-full object-cover object-[center_10%] md:object-[center_20%] transition-transform duration-500 ease-in-out group-hover:scale-110' />
            </div>
        </div>
    );
};

export default Triptych;
