import React from 'react';
import ThreeColumnPhoto from '../components/ThreeColumnPhoto';

import image1 from '../assets/brown21.png';
import image2 from '../assets/browndress32.png';
import image3 from '../assets/dress21.png';
import image4 from '../assets/hibiscusedited1.png';
import image5 from '../assets/long11.png';
import image6 from '../assets/long31.png';
import image7 from '../assets/pantsfit1.png';
import image8 from '../assets/skirt1.png';
import image9 from '../assets/skirt31.png';

const David: React.FC = () => {
    const imagesCol1 = [image1, image2, image3];
    const imagesCol2 = [image4, image5, image6];
    const imagesCol3 = [image7, image8, image9];
    return (
        <div className='flex flex-col min-h-screen'>
            {/* Header Section */}
            <div className='text-left mb-8 ml-8'>
                <h1 className='text-4xl font-inknut tracking-wide text-gray-900'>Entry for SPAM Fashion Competition + David Delfin Prize, 2024</h1>
                <p className='text-2xl font-inknut text-gray-700 mt-2'>
                    Committed to sustainability, the fabrics I used are either composed of natural fibers or upcycled from deadstock materials. To further reduce waste, I utilized CLO 3D for the initial patterning process, minimizing textile waste during fittings. Additionally, I crafted natural dyes from locally sourced materials, such as hibiscus and annatto from neighborhood gardens, alongside roses, turmeric, paprika, Kona coffee, and cherry. Design studio powered through solar panels.
                </p>
            </div>

            {/* Three-Column Photo Section */}
            <ThreeColumnPhoto imagesCol1={imagesCol1} imagesCol2={imagesCol2} imagesCol3={imagesCol3} />
        </div>
    );
};

export default David;
