import React from 'react';
import Link from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav class="navbar fixed-top navbar-dark bg-dark">
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbar">
                <div className="navbar-nav flex-row">
                <Link to="/list" class="navbar-brand">Home</Link>
                </div>
            </div>

        </nav>
    );
}