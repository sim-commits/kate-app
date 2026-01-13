import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/ScreenshotPM4.png';
import image2 from '../assets/Ella-Hunt-2.webp';
import image3 from '../assets/Ella-Hunt_Oscar--Party2022.webp';
import image4 from '../assets/Ella-Hunt-4.webp';

const Ella: React.FC = () => {
    const imagesCol1 = [image1, image4];
    const imagesCol2 = [image3];
    const imagesCol3 = [image2];
    return (
        <div className='flex flex-col'>
            {/* Header Section */}
            <div className='text-left mb-8 px-8'>
                <h1 className='text-xl md:text-4xl font-inknut tracking-wide text-gray-900'>Ella Hunt. Assistant to stylist Sarah Slutsky, 2022</h1>
            </div>

            {/* Three-Column Photo Section */}
            <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3} />
        </div>
    );
};

export default Ella;
