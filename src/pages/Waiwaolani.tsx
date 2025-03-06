import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/IMG_0049.png';
import image2 from '../assets/IMG_0050.png';
import image3 from '../assets/IMG_0054.png';
import image4 from '../assets/IMG_0057.png';
import image5 from '../assets/IMG_0062.png';
import image6 from '../assets/IMG_0064.png';

const Waiwaolani: React.FC = () => {
    const imagesCol1 = [image1, image2];
    const imagesCol2 = [image3, image5];
    const imagesCol3 = [image4, image6];

    return (
        <div className='flex flex-col min-h-screen'>
            {/* Header Section */}
            <div className='text-left mb-8 ml-8'>
                <h1 className='text-xl md:text-4xl font-inknut tracking-wide uppercase text-gray-900'>Waiwaolani</h1>
                <p className='text-base md:text-2xl font-inknut text-gray-700 mt-2'>Design Assistant to Brand Founder</p>
            </div>

            {/* Three-Column Photo Section */}
            <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3} />
        </div>
    );
};

export default Waiwaolani;
