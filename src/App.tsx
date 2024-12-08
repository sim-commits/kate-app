import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import NavBar from './components/NavBar';

import About from './pages/About';
import Contact from './pages/Contact';
import FashionCostumeDesign from './pages/FashionCostumeDesign';
import Home from './pages/Home';
import Illustration from './pages/Illustration';

const App: React.FC = () => {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
                <Route path='/design' element={<FashionCostumeDesign></FashionCostumeDesign>}></Route>
                <Route path='/illustration' element={<Illustration></Illustration>}></Route>
            </Routes>
        </Router>
    );
};

export default App;
