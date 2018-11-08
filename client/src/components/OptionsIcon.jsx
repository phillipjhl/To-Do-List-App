import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export default function OptionsIcon(props) {
    return (
        <div className="">
            <a>
                <FontAwesomeIcon icon={faEllipsisV} size="2x" />
            </a>

        </div>
    );
}