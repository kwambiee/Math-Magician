/* eslint object-curly-newline: ["error", "never"] */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Calculator from "./components/calculator";
import "./App.css";
import Home from "./pages/Home";
import Quote from "./pages/Quote";

function App() {
  const CalcComponent = () => (
    <>
      <div className='calcPage'>
        <h1>Lets do Some Maths!</h1>
        <div className='calcWrapper'>
          <Calculator className='calculate' />
        </div>
      </div>
    </>
  );

  return (
    <div>
      <Router>
        <nav className='navBar'>
          <h1>Math Magicians</h1>
          <div className='navLinks'>
            <NavLink
              to='/'
              className={(navlink) =>
                navlink.isActive ? "active" : "notActive"
              }
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to='/calculator'
              className={(link) => (link.isActive ? "active" : "notActive")}
            >
              <span>Calculator</span>
            </NavLink>
            <NavLink
              to='/quote'
              className={(link) => (link.isActive ? "active" : "notActive")}
            >
              Quotes
            </NavLink>
          </div>
        </nav>
        <div className='navRoutes'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calculator' element={<CalcComponent />} />
            <Route path='/quote' element={<Quote />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
