import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/ScreenshotPM4.png';
import image2 from '../assets/ella.png';
import image3 from '../assets/ella2.png';

const Ella: React.FC = () => {
    const imagesCol1 = [image1];
    const imagesCol2 = [image3];
    const imagesCol3 = [image2];
    return (
        <div className='flex flex-col min-h-screen'>
            {/* Header Section */}
            <div className='text-left mb-8 ml-8'>
                <h1 className='text-4xl font-inknut tracking-wide text-gray-900'>Ella Hunt. Assistant to stylist Sarah Slutsky, 2022</h1>
            </div>

            {/* Three-Column Photo Section */}
            <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3} />
        </div>
    );
};

export default Ella;
