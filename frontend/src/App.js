import React from 'react';
import './index.css';
import NavbarComponent from './Components/NavbarComponent';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Donate from './Pages/Donate'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div>
        <NavbarComponent/>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
