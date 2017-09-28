import React from 'react';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Auth/LoginPage";
import {PrivateRoute} from "./PrivateRoute";

export default function ({history}) { // eslint-disable-line react/prop-types
    return (
        <BrowserRouter history={history}>
            <Switch>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" name="login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    );
}

