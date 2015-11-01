import React, {
    Component
} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const history = createBrowserHistory();

const handleLayoutMoulde = function (callback, layoutMoulde) {
    var LayoutComponent = layoutMoulde.LayoutComponent;

    var component = connect(
    	layoutMoulde.mapStateToProps || function () {
    		return {};
    	}, 
    	layoutMoulde.mapDispatchToProps || function (dispatch) {
        	return {actions: bindActionCreators(actions, dispatch)}
        }
    )(LayoutComponent);
    callback(null, component);

};

const RootRouter = (
    <Router history={history}>
        <Route path="/" getComponent={(location, cb) => {
            require.ensure([],  require => {
                handleLayoutMoulde(cb, require('../layout/Home.js'));
            });
        }}>
        </Route>

        <Route path="/about" getComponent={(location, cb) => {
            require.ensure([],  require => {
                handleLayoutMoulde(cb, require('../layout/About.js'));
            });
        }}>
        </Route>

        <Route path="/list" getComponent={(location, cb) => {
            require.ensure([],  require => {
                handleLayoutMoulde(cb, require('../layout/List.js'));
            });
        }}>
        	<Route path="/item/:id" getComponent={(location, cb) => {
	            require.ensure([],  require => {
	                handleLayoutMoulde(cb, require('../layout/Item.js'));
	            });
        	}}>
        	</Route>
        </Route>
    </Router>
);

export default RootRouter;