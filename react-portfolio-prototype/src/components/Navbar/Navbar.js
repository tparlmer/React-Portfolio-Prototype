import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss'


function Navbar() {
    // indicates if navbar has been expanded or not
    const [expandNavbar, setExpandNavbar] = useState(false)

    // allows you to see what part of the application you are currently in
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => { setExpandNavbar((prev) => !prev) }}>
                    <div>Expand</div>
                </button>
            </div>
            <div className='links'>
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </div>
    )
}

export default Navbar;