import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-white text-black'>
            {/* Mobile NavBar*/}
            <div className='flex md:hidden justify-between items-center p-8'>
                <div className='font-bodoni tracking-wider text-center text-4xl'>Kate Colby</div>
                <button onClick={toggleMenu} className='focus:outline-none'>
                    <div className='flex flex-col justify-center items-center w-8 h-8'>
                        <span className={`block w-full h-1 bg-black transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-full h-1 bg-black transform transition duration-300 ease-in-out my-1 ${isOpen ? 'rotate+45 translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </div>
            {/* Mobile Menu*/}
            <div className={`fixed inset-0 flex flex-col space-y-8 items-center justify-center bg-[#EEE0CB] z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className='flex justify-between items-center p-8'>
                    <div className='absolute top-4 left-4 m-4'>
                        <div className='font-bodoni tracking-wider text-center text-4xl'>Kate Colby</div>
                    </div>
                    <div className='absolute top-4 right-4 m-4'>
                        <button onClick={toggleMenu} className='text-2xl font-bold'>
                            <div className='flex flex-col justify-center items-center w-8 h-8'>
                                <span className={`block w-full h-1 bg-black transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`block w-full h-1 bg-black transform transition duration-300 ease-in-out  my-1 ${isOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-full h-1 bg-black transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
                <Link to='/illustration' className={`font-bodoni mplus text-3xl mb-4 hover:underline transform transition-transform duration-300 ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}>
                    Illustration
                </Link>
                <Link to='/fashion' className={`font-bodoni mplus text-3xl mb-4 hover:underline transform transition-transform duration-300 ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}>
                    Fasion + Costum Design
                </Link>
                <Link to='/styling' className={`font-bodoni mplus text-3xl mb-4 hover:underline transform transition-transform duration-300 ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}>
                    Styling
                </Link>
                <Link to='/' className={`font-bodoni mplus text-3xl mb-4 hover:underline transform transition-transform duration-300 ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}>
                    Home
                </Link>
                <Link to='/about' className={`font-bodoni mplus text-3xl mb-4 hover:underline transform transition-transform duration-300 ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}>
                    About
                </Link>
                <Link to='/contact' className={`font-bodoni mplus text-3xl mb-4 hover:underline transform transition-transform duration-300 ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}>
                    Contact
                </Link>
            </div>

            {/* Large Screen Menu*/}
            <div className='hidden md:block'>
                <div className='flex justify-start items-center p-3 mx-7 space-x-20 mplus font-normal text-base'>
                    <Link to='/' className='hover:underline'>
                        Home
                    </Link>
                    <Link to='/about' className='hover:underline'>
                        About
                    </Link>
                    <Link to='/contat' className='hover:underline'>
                        contact
                    </Link>
                </div>
                <div className='font-bodoni tracking-wider text-center text-6xl'>Kate Colby</div>
                <div className='flex justify-center items-center p-7 space-x-32 mplus text-xl'>
                    <Link to='/illustration' className='hover:underline'>
                        Illustration
                    </Link>
                    <Link to='/fashion' className='hover:underline'>
                        Fashion + Costume Design
                    </Link>
                    <Link to='/styling' className='hover:underline'>
                        styling
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
