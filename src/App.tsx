import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Illustration from './pages/Illustration';

const App: React.FC = () => {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
                <Route path='/illustration' element={<Illustration></Illustration>}></Route>
            </Routes>
        </Router>
    );
};

export default App;
