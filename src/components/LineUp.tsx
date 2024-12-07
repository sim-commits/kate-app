import React from 'react';
import Photo from './Photo';

import image1 from '../assets/IMG_4380.png';
import image2 from '../assets/IMG_1030.png';
import image3 from '../assets/IMG_4393.png';
import image4 from '../assets/IMG_4385.png';
import image5 from '../assets/IMG_4376.png';
import image6 from '../assets/IMG_4391.png';
import image7 from '../assets/IMG_4377.png';

const LineUp: React.FC = () => {
    return (
        <div className='md:flex md:items-center md:justify-center md:h-[calc(100vh-300px)]'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center md:flex-row md:justify-between md:items-center'>
                    <Photo src={image1} alt='Image 1' description='This is Image 1'></Photo>
                    <Photo src={image2} alt='Image 2' description='This is Image 1'></Photo>
                    <Photo src={image3} alt='Image 3' description='This is Image 1'></Photo>

                    <Photo src={image4} alt='Image 4' description='This is Image 1'></Photo>
                    <Photo src={image5} alt='Image 5' description='This is Image 1'></Photo>

                    <Photo src={image6} alt='Image 6' description='This is Image 1'></Photo>
                    <Photo src={image7} alt='Image 7' description='This is Image 1'></Photo>
                </div>
            </div>
        </div>
    );
};

export default LineUp;
