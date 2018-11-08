import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export default function OptionsIcon(props) {
    return (

            <span data-toggle="tooltip" data-placement="left" title="Options">
                <FontAwesomeIcon icon={faEllipsisV} size="2x" />
            </span>
        
    );
}