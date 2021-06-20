import React from "react";

import Home from "./component/Home/Home";
import Auth from "./component/Authentication/Auth";
import UploadMusic from "./component/UploadMusic";
import Error from "./component/Error/Error";

import { Switch, Route } from "react-router-dom";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const App = () => {
    return (
        <>
            <ReactNotification />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/auth" component={Auth} exact/>
                <Route path="/upload" component={UploadMusic} exact/>
                <Route component={Error} exact/>
            </Switch>
        </>
    );
};

export default App;