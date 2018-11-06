// Jumbotron component

import React from 'react';

import getDate from '../utils/date';

function Jumbotron(props) {

    let date = getDate();

    return (
        <div className="jumbotron jumbotron-fluid bg-dark text-white">
            
                <div className="col-sm-4 pt-2">
                    <h1 className="display-5">Your<br />Tasks</h1>                 
                </div>

                <p className="col-sm-4">
                    {date}
                </p>
        </div>
    );
}

export default Jumbotron;