import React from 'react';
import { Link } from '@reach/router';

const NavItem = ({ to, children }) => {
    return (
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <Link class="nav-link" to={to}>{children}</Link>
            </li>
        </ul>
    );
};

const Navbar = () => {
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Home</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/about-us">About Us</NavItem>
                    <NavItem to="/error">Error Page</NavItem>
                </div>
            </nav>;
};

export default Navbar;