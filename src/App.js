/* eslint object-curly-newline: ["error", "never"] */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/calculator';
import './App.css';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  const CalcComponent = () => (
    <>
      <div className="calcPage">
        <h1>Lets do Some Maths!</h1>
        <div className="calcWrapper">
          <Calculator className="calculate" />
        </div>
      </div>
    </>
  );

  return (
    <div>
      <Router>
        <nav className="navBar">
          <h1>Math Magicians</h1>
          <div className="navLinks">
            <Link to="/" className="navLink">
              <span>Home</span>
            </Link>
            <Link to="/calculator" className="navLink">
              <span>Calculator</span>
            </Link>
            <Link to="/quote" className="navLink">
              Quotes
            </Link>
          </div>
        </nav>
        <div className="navRoutes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<CalcComponent />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
