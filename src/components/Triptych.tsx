import React from 'react';
import image1 from '../assets/tempImageqr86uX.png';
import image2 from '../assets/virtual.png';
import image3 from '../assets/SaighAriana_08_26.avif';
import { NavLink } from 'react-router-dom';

const Triptych: React.FC = () => {
    return (
        <div className='flex flex-row h-[calc(100vh-104px)] md:h-[calc(100vh-192px)] overflow-hidden'>
            {/* First Image */}
            <NavLink to='/illustration' className='flex-grow relative group'>
                <img src={image1} alt='Image 1' className='absolute inset-0 w-full h-full object-cover md:object-[center_20%] transition-transform duration-500 ease-in-out group-hover:scale-105' loading='lazy' />
            </NavLink>
            {/* Second Image */}
            <NavLink to='/design' className='flex-grow relative group'>
                <img src={image2} alt='Image 2' className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105' loading='lazy' />
            </NavLink>
            {/* Third Image */}
            <NavLink to='/styling' className='flex-grow relative group'>
                <img src={image3} alt='Image 3' className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105' loading='lazy' />
            </NavLink>
        </div>
    );
};

export default Triptych;
