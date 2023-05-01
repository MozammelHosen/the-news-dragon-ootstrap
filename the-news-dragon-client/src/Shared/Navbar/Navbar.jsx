import React from 'react';
import { FaBeer } from "react-icons/fa";
// import { FaBeer  } from "@react-icons/all-files/fa/FaBeer";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          
        </div>
        <div className="navbar-center">
         <Link to="/">Home</Link>
         <Link className='px-2' to="/about">About</Link>
         <Link to="/carrer">Carrer</Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
           <FaBeer  />
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <button className='btn btn-secondary'>Login</button>
            </div>
          </button>
        </div>
      </div>
    );
};

export default Navbar;