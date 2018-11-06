// Jumbotron component

import React from 'react';

function Jumbotron(props) {

    return (
        <div className="jumbotron jumbotron-fluid bg-dark text-white">
            
                <div className="col-sm-4">
                    <h1 className="display-5">Your<br />Tasks</h1>                 
                </div>

                <p>
                    {fullDate}
                </p>
        </div>
    );
}

export default Jumbotron;