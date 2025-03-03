import React from 'react';

interface ThreeColumnPhotoProps {
    imagesCol1: string[];
    imagesCol2: string[];
    imagesCol3: string[];
}

const ThreeColumnPhoto: React.FC<ThreeColumnPhotoProps> = ({ imagesCol1, imagesCol2, imagesCol3 }) => {
    return (
        <div className='flex flex-row h-screen justify-center space-x-4 px-4'>
            <div className='flex flex-col w-1/3 space-y-4'>
                {imagesCol1.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index + 1}`} className='w-full object-contain' loading='lazy' />
                ))}
            </div>

            <div className='flex flex-col w-1/3 space-y-4'>
                {imagesCol2.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index + imagesCol1.length + 1}`} className='w-full object-contain' loading='lazy' />
                ))}
            </div>

            <div className='flex flex-col w-1/3 space-y-4'>
                {imagesCol3.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index + imagesCol1.length + imagesCol2.length + 1}`} className='w-full object-contain' loading='lazy' />
                ))}
            </div>
        </div>
    );
};

export default ThreeColumnPhoto;
