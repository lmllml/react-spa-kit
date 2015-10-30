import React, {
    Component
} from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();

const RootRouter = (
    <Router history={history}>
        <Route path="/" getComponent={(location, cb) => {
            require.ensure([],  require => {
                cb(null, require('../layout/Home.js'));
            });
        }}>
        </Route>
    </Router>
);

export default RootRouter;