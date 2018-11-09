import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function AddTask(props) {
    return (
        <span className="float-right mx-auto">
            <Link to="/input" className="add-task" alt="Add task">
                <FontAwesomeIcon icon={faPlus} size="2x" />
            </Link>
        </span>
    );
}