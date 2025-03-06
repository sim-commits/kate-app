import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/murder1.png';
import image2 from '../assets/murder2.png';
import image3 from '../assets/murder3.png';
import image4 from '../assets/murder4.png';
import image5 from '../assets/murder5.png';
import image6 from '../assets/murder6.png';
import image7 from '../assets/murder7.png';
import image8 from '../assets/murder8.png';
import image9 from '../assets/murder9.png';
import image10 from '../assets/murder10.png';
import image11 from '../assets/murder11.png';

const Murder: React.FC = () => {
    const imagesCol1 = [image1, image2, image3, image10];
    const imagesCol2 = [image4, image5, image6];
    const imagesCol3 = [image7, image8, image9, image11];
    return (
        <div className='flex flex-col min-h-screen'>
            {/* Header Section */}
            <div className='text-left mb-8 ml-8'>
                <h1 className='text-xl md:text-4xl font-inknut tracking-wide text-gray-900'>MURDER ON THE ORIENT EXPRESS, 2024, Iao Theater</h1>
                <p className='text-base md:text-2xl font-inknut text-gray-700 mt-2'>Studio Assistant to Costume Designer Jennifer Oberg</p>
            </div>

            {/* Three-Column Photo Section */}
            <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3} />
        </div>
    );
};

export default Murder;
