import React, { useState } from 'react';

interface PhotoProps {
    src: string;
    alt: string;
    description: string;
}

const Photo: React.FC<PhotoProps> = ({ src, alt, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleImage = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Thumbnail that toggles the modal */}
            <button onClick={toggleImage} className='focus:outline-none'>
                <div className='relative group'>
                    <img src={src} alt={alt} className='object-contain' loading='lazy' />
                    <div className='absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-75 flex items-center justify-center transition-opacity duration-300'>
                        <p className='text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{description}</p>
                    </div>
                </div>
            </button>

            {/* Modal for fullscreen image */}
            {isOpen && (
                <div className='fixed inset-0 flex items-center justify-center bg-[#EEE0CB] bg-opacity-90 z-50 p-8'>
                    {/* Fullscreen image */}
                    <div className='relative'>
                        <img src={src} alt={alt} className='max-w-screen max-h-screen object-contain rounded-md shadow-lg' />
                    </div>

                    {/* Close button */}
                    <button onClick={toggleImage} className='absolute top-4 right-4 bg-white text-black px-3 py-2 rounded shadow-md hover:bg-gray-200 transition'>
                        Close
                    </button>
                </div>
            )}
        </>
    );
};

export default Photo;
