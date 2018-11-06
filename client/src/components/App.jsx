import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ListPage from './ListPage';
import NavBar from './NavBar';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/list" component={ListPage} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default Navigation;