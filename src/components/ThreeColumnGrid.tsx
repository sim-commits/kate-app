import { NavLink } from 'react-router-dom';
import image1 from '../assets/1.png';
import image2 from '../assets/pantsfit1.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/jewel3.png';
import logo1 from '../assets/waiwaolani.png';
import logo2 from '../assets/Lands.png';
import logo3 from '../assets/hui.png';

const ThreeColumnGrid = () => {
    const images = [
        { src: image1, link: '/waiwaolani', logo: logo1, subtitle: 'Fashion Collection Development', role: 'Freelance Designer', year: '2025' },
        { src: image2, link: '/david', title: 'David Delfin Contest Submission', subtitle: 'Independent Collection', role: '', year: '2024' },
        { src: image3, link: '/land', logo: logo2, subtitle: 'Li Fung Group', role: 'Fashion Design Intern', year: '2024' },
        { src: image4, link: '/page3', logo: logo3, title: 'SWAN LAKE', subtitle: 'Seabury Hall', role: 'Studio Assistant', year: '2024' },
        { src: image5, link: '/ballet', logo: logo3, title: 'THE NUTCRACKER', subtitle: 'Maui Arts & Cultural Center', role: 'Studio Assistant', year: '2025' },
        { src: image6, link: '/murder', logo: logo3, title: 'MURDER ON THE ORIENT EXPRESS', subtitle: 'Iao Theater', role: 'Studio Assistant', year: '2025' },
        { src: image7, link: '/jewelry', title: 'Jewelry Design', subtitle: 'Independant Work', year: '2022' },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 mb-4'>
            {images.map((image, index) => (
                <NavLink key={index} to={image.link} className='relative w-full pt-[129.64%] overflow-hidden block group'>
                    <img src={image.src} alt={image.title} className='absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' />

                    {/* Overlay with text and conditional logo */}
                    <div className='absolute inset-0 bg-white bg-opacity-55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-black text-center px-4 font-inknut'>
                        {image.logo && <img src={image.logo} alt='Logo' className='mb-2' />}
                        <h2 className='text-4xl'>{image.title}</h2>
                        <p className='text-2xl'>{image.subtitle}</p>
                        <p className='text-2xl italic'>{image.role}</p>
                        <p className='text-2xl mt-1'>{image.year}</p>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default ThreeColumnGrid;
