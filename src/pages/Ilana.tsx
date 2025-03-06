import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/ScreenshotPM1.png';
import image2 from '../assets/ilana2.png';
import image3 from '../assets/ilona3.png';

const Ilana: React.FC = () => {
    const imagesCol1 = [image1];
    const imagesCol2 = [image2];
    const imagesCol3 = [image3];
    return (
        <div className='flex flex-col min-h-screen'>
            {/* Header Section */}
            <div className='text-left mb-8 ml-8'>
                <h1 className='text-4xl font-inknut tracking-wide text-gray-900'>Ilana Glazer for Parents Magazine, July 2022</h1>
            </div>

            {/* Three-Column Photo Section */}
            <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3} />
        </div>
    );
};

export default Ilana;
