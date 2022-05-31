import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/calculator';
import './App.css';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  const CalcComponent = () => (
    <>
      <div>
        <h1>Lets do Some Maths</h1>
        <Calculator />
      </div>
    </>
  );

  return (
    <div>
      <Router>
        <nav className="navBar">
          <h1>Math Magicians</h1>
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quote">Quotes</Link>
        </nav>
        <div className="navLinks">
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
