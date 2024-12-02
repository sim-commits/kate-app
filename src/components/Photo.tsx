import React from 'react';

interface PhotoProps {
    src: string;
    alt: string;
    description: string;
}

const Photo: React.FC<PhotoProps> = ({ src, alt, description }) => {
    return (
        <div className='relative group'>
            <img src={src} alt={alt} className='object-contain' />
            <div className='absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center transition-opacity duration-300'>
                <p className='text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{description}</p>
            </div>
        </div>
    );
};

export default Photo;
