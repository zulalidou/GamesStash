import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>

                <Routes>
                    <Route exact path="/" element={<Home/>} />
                </Routes>

                <Footer/>
            </div>
        </Router>
    );
}


export default App;
