import React from 'react';

import image1 from '../assets/Rachel-Zegler1.webp';
import image2 from '../assets/Rachel-Zegler-grammy-awards-2022.webp';
import image3 from '../assets/Rachel-Zegler2.webp';
import image4 from '../assets/rachelzegler3.webp';
import image5 from '../assets/rachelzegler5.webp';
import image6 from '../assets/rachelzegler6.webp';
const Rachel: React.FC = () => {
    const imagesCol1 = [
        { src: image1, caption: 'Rachel Zeglar for BAFTAs, 2022. Assistant to stylist Sarah Slutsky. Vivienne Westwood, Tiffany and Co. Featured on British Vogue’s Best Dressed List.' },
        { src: image4, caption: 'Rachel Zeglar for British Vogue x BAFTA Afterparty, 2022. Assistant to stylist Sarah Slutsky. David Koma, Tiffany and Co. Featured on British Vogue’s Best Dressed List.' },
    ];
    const imagesCol2 = [
        { src: image2, caption: 'Rachel Zeglar for Grammys, 2022. Assistant to stylist Sarah Slutsky. Custom Dior.' }
        { src: image5, caption: 'Rachel Zeglar for Grammys, 2022. Assistant to stylist Sarah Slutsky. Zuhair Murad.' }
    ];
    const imagesCol3 = [
        { src: image3, caption: 'Rachel Zeglar for Critics Choice Awards, 2022. Assistant to stylist Sarah Slutsky. Custom Dior.' }
        { src: image6, caption: 'Rachel Zeglar for Oscars, 2022. Assistant to stylist Sarah Slutsky. Dior.' },
    ];

    return (
        <div className='flex flex-col items-center min-h-screen px-6 py-8'>
            <div className='flex flex-row w-full justify-center space-x-4 px-4'>
                {/* First Column */}
                <div className='flex flex-col w-1/3 space-y-4'>
                    {imagesCol1.map((image, index) => (
                        <div key={index}>
                            <img src={image.src} alt={`Image ${index + 1}`} className='w-full object-contain' loading='lazy' />
                            <p className='text-sm md:text-xl font-inknut text-gray-700 mt-2'>{image.caption}</p> {/* Caption under the image */}
                        </div>
                    ))}
                </div>

                {/* Second Column */}
                <div className='flex flex-col w-1/3 space-y-4'>
                    {imagesCol2.map((image, index) => (
                        <div key={index}>
                            <img src={image.src} alt={`Image ${index + imagesCol1.length + 1}`} className='w-full object-contain' loading='lazy' />
                            <p className='text-sm md:text-xl font-inknut text-gray-700 mt-2'>{image.caption}</p> {/* Caption under the image */}
                        </div>
                    ))}
                </div>

                {/* Third Column */}
                <div className='flex flex-col w-1/3 space-y-4'>
                    {imagesCol3.map((image, index) => (
                        <div key={index}>
                            <img src={image.src} alt={`Image ${index + imagesCol1.length + imagesCol2.length + 1}`} className='w-full object-contain' loading='lazy' />
                            <p className='text-sm md:text-xl font-inknut text-gray-700 mt-2'>{image.caption}</p> {/* Caption under the image */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rachel;
