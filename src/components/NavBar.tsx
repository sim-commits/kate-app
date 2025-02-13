import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className='bg-white text-black'>
                {/* Mobile NavBar*/}
                <div className='flex md:hidden justify-between items-center p-8'>
                    <NavLink to='/'>
                        <div className='font-bodoni tracking-wider text-center text-3xl'>KATE COLBY</div>
                    </NavLink>
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
                            <NavLink to='/' onClick={() => setIsOpen(false)}>
                                <div className='font-bodoni tracking-wider text-center text-3xl'>KATE COLBY</div>
                            </NavLink>
                        </div>
                        <div className='absolute top-3 right-4 m-4'>
                            <button onClick={toggleMenu} className='text-2xl font-bold'>
                                <div className='flex flex-col justify-center items-center w-8 h-8'>
                                    <span className={`block w-full h-1 bg-black transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                    <span className={`block w-full h-1 bg-black transform transition duration-300 ease-in-out  my-1 ${isOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`block w-full h-1 bg-black transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <NavLink to='/illustration' onClick={() => setIsOpen(false)} className={({ isActive }) => `font-bodoni text-center text-3xl mb-4 hover:underline ${isActive ? 'underline decoration-black' : ''} transform transition-transform duration-300 ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}>
                        ILLUSTRATION
                    </NavLink>
                    <NavLink to='/design' onClick={() => setIsOpen(false)} className={({ isActive }) => `font-bodoni text-center text-3xl mb-4 hover:underline ${isActive ? 'underline decoration-black' : ''} transform transition-transform duration-300 ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}>
                        FASHION + COSTUME DESIGN
                    </NavLink>
                    <NavLink to='/styling' onClick={() => setIsOpen(false)} className={({ isActive }) => `font-bodoni text-center text-3xl mb-4 hover:underline ${isActive ? 'underline decoration-black' : ''} transform transition-transform duration-300 ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}>
                        STYLING
                    </NavLink>
                    <NavLink to='/' onClick={() => setIsOpen(false)} className={({ isActive }) => `font-bodoni text-center text-3xl mb-4 hover:underline ${isActive ? 'underline decoration-black' : ''} transform transition-transform duration-300 ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}>
                        HOME
                    </NavLink>
                    <NavLink to='/about' onClick={() => setIsOpen(false)} className={({ isActive }) => `font-bodoni text-center text-3xl mb-4 hover:underline ${isActive ? 'underline decoration-black' : ''} transform transition-transform duration-300 ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}>
                        ABOUT
                    </NavLink>
                    <NavLink to='/contact' onClick={() => setIsOpen(false)} className={({ isActive }) => `font-bodoni text-center text-3xl mb-4 hover:underline ${isActive ? 'underline decoration-black' : ''} transform transition-transform duration-300 ${isOpen ? '-translate-y-0' : 'translate-y-full'}`}>
                        CONTACT
                    </NavLink>
                </div>

                {/* Large Screen Menu*/}
                <div className='hidden md:block'>
                    <div className='flex justify-start items-center p-3 mx-7 space-x-20 mplus font-normal text-base'>
                        <NavLink to='/' className={({ isActive }) => `hover:underline ${isActive ? 'underline decoration-black' : ''}`}>
                            HOME
                        </NavLink>
                        <NavLink to='/about' className={({ isActive }) => `hover:underline ${isActive ? 'underline decoration-black' : ''}`}>
                            ABOUT
                        </NavLink>
                        <NavLink to='/contact' className={({ isActive }) => `hover:underline ${isActive ? 'underline decoration-black' : ''}`}>
                            CONTACT
                        </NavLink>
                    </div>

                    <div className='font-bodoni tracking-wider text-center text-6xl '>
                        <NavLink to='/'>
                            <span className='text-black transition-colors duration-300 hover:text-pink-400'>KATE COLBY</span>
                        </NavLink>
                    </div>

                    <div className='flex justify-center items-center p-7 space-x-32 mplus text-xl'>
                        <NavLink to='/illustration' className={({ isActive }) => `hover:underline ${isActive ? 'underline decoration-black' : ''}`}>
                            ILLUSTRATION
                        </NavLink>
                        <NavLink to='/design' className={({ isActive }) => `hover:underline ${isActive ? 'underline decoration-black' : ''}`}>
                            FASHION + COSTUME DESIGN
                        </NavLink>
                        <NavLink to='/styling' className={({ isActive }) => `hover:underline ${isActive ? 'underline decoration-black' : ''}`}>
                            STYLING
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
