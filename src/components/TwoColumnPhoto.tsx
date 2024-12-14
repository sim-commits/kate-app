import React from 'react';

import image1 from '../assets/ScreenshotPM1.png';
import image2 from '../assets/ScreenshotPM2.png';
import image3 from '../assets/ScreenshotPM3.png';
import image4 from '../assets/ScreenshotPM4.png';
import image5 from '../assets/ScreenshotPM5.png';
import image6 from '../assets/ScreenshotPM6.png';
import image7 from '../assets/ScreenshotPM7.png';
import image8 from '../assets/ScreenshotPM8.png';
import image9 from '../assets/ScreenshotPM9.png';

const TwoColumnPhoto: React.FC = () => {
    const imagesCol1 = [image1, image2, image3, image4];

    const imagesCol2 = [image5, image6, image7, image8, image9];

    return (
        <div className='flex flex-rox h-screen justify-center space-x-4 mr-4 ml-4'>
            {/* First Column */}
            <div className='flex flex-col w-1/2 space-y-4'>
                {imagesCol1.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index + 1}`} className='w-full object-contain' loading='lazy' />
                ))}
            </div>

            {/* Second Column */}
            <div className='flex flex-col w-1/2 space-y-4'>
                {imagesCol2.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index + 4}`} className='w-full object-contain' loading='lazy' />
                ))}
            </div>
        </div>
    );
};

export default TwoColumnPhoto;
