// Jumbotron component

import React from 'react';

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid bg-dark text-white">
            <div className="container">
                <div className="col-sm-4 inner-cover">
                    <h6>YOUR</h6>
                    <h6>TASKS</h6>                   
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;