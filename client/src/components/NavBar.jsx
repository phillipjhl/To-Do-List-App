import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <Link to="/list" className="navbar-brand">Home</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <div className="navbar-nav">
                    <Link to="/list" className="nav-item nav-link">List <span className="sr-only">(current)</span></Link>
                </div>
            </div>

        </nav>
    );
}

export default NavBar;