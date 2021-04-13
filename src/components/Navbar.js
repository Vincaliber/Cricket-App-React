import React from 'react'
import { Link } from 'react-router-dom'
import crickLogo from '../extras/t20-logo.jpg'
import './Navbar.css';
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">
                            <img src={crickLogo} alt="" id="crickLogo" />
                        </Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right" style={{ display: (location.pathname === '/') ? 'block' : 'none' }}>
                        <li>
                            <Link to="/Register" style={{ color: '#fff' }}>Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
