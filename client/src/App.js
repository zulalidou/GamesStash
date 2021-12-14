import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import GamePage from './components/GamePage';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>

                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/game/:name" element={<GamePage/>} />
                </Routes>

                <Footer/>
            </div>
        </Router>
    );
}


export default App;
