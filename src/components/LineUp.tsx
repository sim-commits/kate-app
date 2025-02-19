import React from 'react';
import Photo from './Photo';

interface LineUpProps {
    images: { src: string; alt: string; description: string }[];
}

const LineUp: React.FC<LineUpProps> = ({ images }) => {
    return (
        <div className='flex flex-col items-center md:flex-row md:justify-between'>
            {images.map((image, index) => (
                <Photo key={index} src={image.src} alt={image.alt} description={image.description} />
            ))}
        </div>
    );
};

export default LineUp;
