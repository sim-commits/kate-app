import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import NavBar from './components/NavBar';

import About from './pages/About';
import Contact from './pages/Contact';
import Design from './pages/FashionCostumeDesign';
import Home from './pages/Home';
import Illustration from './pages/Illustration';
import Styling from './pages/Styling';
import Ballet from './pages/Ballet';
import David from './pages/David';
import Murder from './pages/Murder';
import Waiwaolani from './pages/Waiwaolani';
import Land from './pages/Land';
import Jewelry from './pages/Jewelry';

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
                <Route path='/styling' element={<Styling />} />
                <Route path='/ballet' element={<Ballet />} />
                <Route path='/david' element={<David />} />
                <Route path='/murder' element={<Murder />} />
                <Route path='/waiwaolani' element={<Waiwaolani />} />
                <Route path='/land' element={<Land />} />
                <Route path='/jewelry' element={<Jewelry />} />
            </Routes>
        </Router>
    );
};

export default App;
