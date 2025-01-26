import React from 'react';

import image1 from '../assets/ballet1.png';
import image2 from '../assets/ballet2.png';
import image3 from '../assets/ballet3.png';
import image4 from '../assets/ballet4.png';
import image5 from '../assets/ballet5.png';
import image6 from '../assets/ballet6.png';
import image7 from '../assets/ballet7.png';
import image8 from '../assets/ballet8.png';
import image9 from '../assets/ballet9.png';
import image10 from '../assets/ballet10.png';
import image11 from '../assets/ballet11.png';

const ThreeColumnPhoto: React.FC = () => {
    const imagesCol1 = [image1, image2, image3, image10];
    const imagesCol2 = [image4, image5, image6, image11];
    const imagesCol3 = [image7, image8, image9];

    return (
        <div className='flex flex-row h-screen justify-center space-x-4 px-4'>
            {/* First Column */}
            <div className='flex flex-col w-1/3 space-y-4'>
                {imagesCol1.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index + 1}`} className='w-full object-contain' loading='lazy' />
                ))}
            </div>

            {/* Second Column */}
            <div className='flex flex-col w-1/3 space-y-4'>
                {imagesCol2.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index + imagesCol1.length + 1}`} className='w-full object-contain' loading='lazy' />
                ))}
            </div>

            {/* Third Column */}
            <div className='flex flex-col w-1/3 space-y-4'>
                {imagesCol3.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index + imagesCol1.length + imagesCol2.length + 1}`} className='w-full object-contain' loading='lazy' />
                ))}
            </div>
        </div>
    );
};

export default ThreeColumnPhoto;
