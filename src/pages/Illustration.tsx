import React from 'react';
import LineUp from '../components/LineUp';

import image1 from '../assets/IMG_4380.png';
import image2 from '../assets/IMG_1030.png';
import image3 from '../assets/IMG_4393.png';
import image4 from '../assets/IMG_4385.png';
import image5 from '../assets/IMG_4376.png';
import image6 from '../assets/IMG_4391.png';
import image7 from '../assets/IMG_4377.png';

import image8 from '../assets/fatlineup.png';

const colorImages = [
    { src: image2, alt: 'Image 2', description: '' },
    { src: image4, alt: 'Image 4', description: '' },
    { src: image5, alt: 'Image 5', description: '' },
    { src: image6, alt: 'Image 6', description: '' },
    { src: image7, alt: 'Image 7', description: '' },
];

const blackWhiteImages = [
    { src: image1, alt: 'Image 1', description: '' },
    { src: image3, alt: 'Image 3', description: '' },
];

const fatImages = [{ src: image8, alt: 'Image 1', description: '' }];

const Illustration: React.FC = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='w-full md:w-[50%]'>
                <LineUp images={fatImages} />
            </div>
            <div className='w-full md:w-[35%]'>
                <LineUp images={blackWhiteImages} />
            </div>
            <div className='w-full md:w-[80%]'>
                <LineUp images={colorImages} />
            </div>
        </div>
    );
};

export default Illustration;
