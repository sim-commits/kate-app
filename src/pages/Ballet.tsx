import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

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

const Ballet: React.FC = () => {
    const imagesCol1 = [image1, image2, image3];
    const imagesCol2 = [image4, image5, image6];
    const imagesCol3 = [image7, image8, image9, image10];
    return (
        <div className='flex flex-col min-h-screen'>
            {/* Header Section */}
            <div className='text-left mb-8 px-8'>
                <h1 className='text-xl md:text-4xl font-inknut tracking-wide text-gray-900'>THE NUTCRACKER, 2025, Maui Arts & Cultural Center</h1>
                <p className='text-base md:text-2xl font-inknut text-gray-700 mt-2'>Studio Assistant to Costume Designer Jennifer Oberg</p>
            </div>

            {/* Three-Column Photo Section */}
            <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3} />
        </div>
    );
};

export default Ballet;
