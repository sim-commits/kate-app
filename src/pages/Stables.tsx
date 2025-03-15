import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/ind.png';
import image2 from '../assets/stables1.png';
import image3 from '../assets/stables2.png';
import image4 from '../assets/stables3.png';
import image5 from '../assets/stables4.png';

const Stables: React.FC = () => {
    const imagesCol1 = [image1, image3];
    const imagesCol2 = [image4, image2];
    const imagesCol3 = [image5];
    return (
        <div className='flex flex-col'>
            {/* Header Section */}
            <div className='text-left mb-8 px-8'>
                <h1 className='text-xl md:text-4xl font-inknut tracking-wide text-gray-900'> STABLES</h1>
                <p className='text-base md:text-2xl font-inknut text-gray-700 mt-2'>Photography and Styling by Kate Colby</p>
                <p className='text-base md:text-2xl font-inknut text-gray-700 mt-2'>Model: Melody Fu</p>
                <p className='text-base md:text-2xl font-inknut text-gray-700 mt-2'>Assistant: Catherine Heffernanu</p>
            </div>

            {/* Three-Column Photo Section */}
            <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3} />
        </div>
    );
};

export default Stables;
