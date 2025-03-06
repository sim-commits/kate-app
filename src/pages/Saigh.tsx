import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/saigh1.avif';
import image2 from '../assets/saigh2.avif';
import image3 from '../assets/saigh3.avif';
import image4 from '../assets/saigh4.avif';
import image5 from '../assets/saigh5.avif';
import image6 from '../assets/saigh6.avif';
import image7 from '../assets/saigh7.avif';
import image8 from '../assets/saigh8.avif';
import image9 from '../assets/saigh9.avif';

const Saigh: React.FC = () => {
    const imagesCol1 = [image1, image2, image3];
    const imagesCol2 = [image4, image5, image6];
    const imagesCol3 = [image7, image8, image9];
    return (
        <div className='flex flex-col min-h-screen'>
            {/* Header Section */}
            <div className='text-left mb-8 ml-8'>
                <h1 className='text-4xl font-inknut tracking-wide text-gray-900'>BLURRED VISION Editorial, 2022</h1>
                <p className='text-2xl font-inknut text-gray-700 mt-2'>Styling by Kate Colby </p>
                <p className='text-xl font-inknut text-gray-700 mt-2'>Photographer: Ariana Saigh @arianasaigh</p>
                <p className='text-xl font-inknut text-gray-700 mt-2'>MUA: Kyra Leigh @kyraaleigh_</p>
                <p className='text-xl font-inknut text-gray-700 mt-2'>Models: Cherry Gong, CÉLIA LEBRUMENT</p>
            </div>

            {/* Three-Column Photo Section */}
            <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3} />
        </div>
    );
};

export default Saigh;
