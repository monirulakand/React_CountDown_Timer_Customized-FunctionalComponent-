import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import MyTimeCountPage from "../page/MyTimeCountPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" render={(props) => <MyTimeCountPage {...props} key={Date.now()} />}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;