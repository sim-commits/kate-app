import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import NavBar from './components/NavBar';

import About from './pages/About';
import Contact from './pages/Contact';
import Design from './pages/FashionCostumeDesign';
import Home from './pages/Home';
import Illustration from './pages/Illustration';

const App: React.FC = () => {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/design' element={<Design />} />
                <Route path='/illustration' element={<Illustration />} />
            </Routes>
        </Router>
    );
};

export default App;
