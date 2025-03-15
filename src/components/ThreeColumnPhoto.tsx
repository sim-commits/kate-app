import React, { useState } from 'react';

interface ThreeColumnPhotoProps {
    imagesCol1: string[];
    imagesCol2: string[];
    imagesCol3: string[];
}

const ThreeColumnPhoto: React.FC<ThreeColumnPhotoProps> = ({ imagesCol1, imagesCol2, imagesCol3 }) => {
    return (
        <div className='flex flex-row h-screen justify-center space-x-4 px-4'>
            <PhotoColumn images={imagesCol1} />
            <PhotoColumn images={imagesCol2} />
            <PhotoColumn images={imagesCol3} />
        </div>
    );
};

const PhotoColumn: React.FC<{ images: string[] }> = ({ images }) => (
    <div className='flex flex-col w-1/3 space-y-4'>
        {images.map((src, index) => (
            <ImageWithSkeleton key={index} src={src} />
        ))}
    </div>
);

const ImageWithSkeleton: React.FC<{ src: string }> = ({ src }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className='relative w-full'>
            {!isLoaded && <div className='w-full h-[100px] md:h-[300px] bg-gray-300 animate-pulse'></div>}
            <img src={src} className={`w-full object-contain transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setIsLoaded(true)} />
        </div>
    );
};

export default ThreeColumnPhoto;
