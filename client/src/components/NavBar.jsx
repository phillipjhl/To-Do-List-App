import React from 'react';
import Link from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav class="navbar fixed-top navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbar">
                <div>
                <Link to="/list" class="navbar-brand">Home</Link>
                </div>
            </div>

        </nav>
    );
}