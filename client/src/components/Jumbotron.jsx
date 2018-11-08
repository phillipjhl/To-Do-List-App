// Jumbotron component

import React from 'react';

import getDate from '../utils/date';

function Jumbotron(props) {

    let date = getDate();

    return (
        <div className="jumbotron jumbotron-fluid">
            
                <div className="col-sm-4 pt-2">
                    <h1 className="display-5">{props.titleOne}<br />{props.titleTwo}</h1>                 
                </div>

                <p className="col-sm-4">
                    {date}
                </p>
        </div>
    );
}

export default Jumbotron;