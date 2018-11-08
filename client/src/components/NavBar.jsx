import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <nav className="navbar fixed-top navbar-light">
            <span></span>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <div className="navbar-nav float-right">
                    <Link to="/list" className="nav-item nav-link ml-auto">List <span className="sr-only">(current)</span></Link>
                    <Link to="/input" className="nav-item nav-link ml-auto">Add Task</Link>
                </div>
            </div>

        </nav>
    );
}

export default NavBar;