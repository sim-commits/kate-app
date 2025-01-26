import { NavLink } from 'react-router-dom';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';

const ThreeColumnGrid = () => {
    const images = [
        { src: image1, link: '/page1' },
        { src: image2, link: '/page2' },
        { src: image3, link: '/page3' },
        { src: image4, link: '/ballet' },
        { src: image5, link: '/page5' },
        { src: image6, link: '/page6' },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 mb-4'>
            {images.map((image, index) => (
                <NavLink key={index} to={image.link} className='relative w-full pt-[129.64%] overflow-hidden block'>
                    {/* 129.64% = (538/415) * 100 to maintain the aspect ratio */}
                    <img src={image.src} alt={`Image ${index + 1}`} className='absolute top-0 left-0 w-full h-full object-cover' />
                </NavLink>
            ))}
        </div>
    );
};

export default ThreeColumnGrid;
