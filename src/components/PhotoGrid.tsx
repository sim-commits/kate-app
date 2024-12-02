import React from 'react';
import Photo from './Photo';

import image1 from '../assets/IMG_4380.png';
import image2 from '../assets/IMG_1030.png';
import image3 from '../assets/IMG_4393.png';
import image4 from '../assets/IMG_4385.png';
import image5 from '../assets/IMG_4376.png';
import image6 from '../assets/IMG_4391.png';
import image7 from '../assets/IMG_4377.png';

const PhotoGrid: React.FC = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col items-center md:flex-row md:justify-between md:items-start '>
                <Photo src={image1} alt='Image 1' description='This is Image 1'></Photo>
                <Photo src={image2} alt='Image 2' description='This is Image 1'></Photo>
                <Photo src={image3} alt='Image 3' description='This is Image 1'></Photo>
            </div>
            <div className='flex flex-col items-center md:flex-row md:justify-between md:items-start p-16'>
                <Photo src={image4} alt='Image 4' description='This is Image 1'></Photo>
                <Photo src={image5} alt='Image 5' description='This is Image 1'></Photo>
            </div>
            <div className='flex flex-col items-center md:flex-row md:justify-between md:items-start md:p-20'>
                <Photo src={image6} alt='Image 6' description='This is Image 1'></Photo>
                <Photo src={image7} alt='Image 7' description='This is Image 1'></Photo>
            </div>
        </div>
    );
};

export default PhotoGrid;
