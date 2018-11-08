import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ListPage from './ListPage';
import NavBar from './NavBar';
import TaskInputPage from './TaskInputPage';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/list" component={ListPage} />
                        <Route path="/input" component={TaskInputPage} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default Navigation;