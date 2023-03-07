import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../views/authUser/components/Login";
import Register from "../views/authUser/components/Register";
import NoMatch from "../core/global/NoMatch/NoMatch";
import Clients from "../views/clients/components/Clients";

const AppRouteNew = () => {
    return (
        <Router>
            <Switch>
                <Route path='/agency/login'>
                    <Login />
                </Route>
                <Route path='/users'>
                    <Register />
                </Route>
                <Route path='/client'>
                    <Clients />
                </Route>

                <Route path='*'>
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
};

export default AppRouteNew;
