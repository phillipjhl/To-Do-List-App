import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

import App from './components/App';

//single ReactDOM.render to render App component which
//will conatin the main navigation for whole application
//Renders with the 'root' div in index.html
ReactDOM.render(<App />, document.getElementById('root'));