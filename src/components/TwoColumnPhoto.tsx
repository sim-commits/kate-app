import React from 'react';
import { NavLink } from 'react-router-dom';

import image1 from '../assets/ScreenshotPM1.png';
import image2 from '../assets/SaighAriana_08_26.avif';
import image3 from '../assets/ind.png';
import image4 from '../assets/ScreenshotPM4.png';
import image5 from '../assets/rennee.png';
import image6 from '../assets/RachelZegler.png';
import image7 from '../assets/ScreenshotPM9.png';
import image8 from '../assets/styl.png';

const imagesCol1 = [
    { src: image1, title: 'Ilana Glazer for Parents Magazine', subtitle: 'July 2022', link: '/ilana' },
    { src: image2, title: 'BLURRED VISION Editorial', subtitle: '2022', link: '/saigh' },
    { src: image7, title: 'Uma Thurman For Tory Burch Runway NYFW', subtitle: '2022 Assistant to stylist Sarah Slutsky', link: '/styling' },
    { src: image3, title: 'STABLES', subtitle: '2022', link: '/stables' },
];

const imagesCol2 = [
    { src: image8, title: 'Jean Baptiste: Reset, Redefined, Reborn by Mike Ruiz', link: '/jean' },
    { src: image6, title: 'Rachel Zeglar for BAFTAs', subtitle: '2022', link: '/rachel' },
    { src: image4, title: 'Ella Hunt', subtitle: '2022', link: '/ella' },
    { src: image5, title: 'Renee Elise Goldsberry at Met Gala', subtitle: '2022', link: '/styling' },
];

const TwoColumnPhoto: React.FC = () => {
    return (
        <div className='flex flex-row h-screen justify-center space-x-4 mx-4'>
            {/* First Column */}
            <div className='flex flex-col w-1/2 space-y-4'>
                {imagesCol1.map((image, index) => (
                    <NavLink key={index} to={image.link} className='relative'>
                        <img src={image.src} alt={`Image ${index + 1}`} className='w-full object-contain' loading='lazy' />

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-white bg-opacity-55 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-black text-center font-['Inknut_Antiqua'] p-4">
                            <h2 className='text-xl md:text-4xl'>{image.title}</h2>
                            <p className='text-base md:text-2xl mt-2'>{image.subtitle}</p>
                        </div>
                    </NavLink>
                ))}
            </div>

            {/* Second Column */}
            <div className='flex flex-col w-1/2 space-y-4'>
                {imagesCol2.map((image, index) => (
                    <NavLink key={index} to={image.link} className='relative'>
                        <img src={image.src} alt={`Image ${index + 5}`} className='w-full object-contain' loading='lazy' />

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-white bg-opacity-55 opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-black text-center font-['Inknut_Antiqua'] p-4">
                            <h2 className='text-xl md:text-4xl'>{image.title}</h2>
                            <p className='text-base md:text-2xl mt-2'>{image.subtitle}</p>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default TwoColumnPhoto;
