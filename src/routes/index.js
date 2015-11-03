import React, {
    Component
} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { Router, Route ,IndexRoute} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import CoreLayout from '../layout/CoreLayout';

import {
    Grid,
    Col,
    Container
} from 'amazeui-react';

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


const components = {
    init: (location, cb)=> {
        require.ensure([], require => {
            handleLayoutMoulde(cb, require('../layout/Home.js'));
        });
    },


    about: (location, cb)=> {
        require.ensure([], require => {
            handleLayoutMoulde(cb, require('../layout/About.js'));
        });
    },


    list: {
        init: (location, cb)=> {
            require.ensure([], require => {
                handleLayoutMoulde(cb, require('../layout/List.js'));
            });
        },
        item: (location, cb) => {
            require.ensure([], require => {
                handleLayoutMoulde(cb, require('../layout/Item.js'));
            });
        }
    }
};


const RootRouter = (
    <Router history={history} onUpdate={()=>setTimeout(() => window.scrollTo(0,0))}>
        <Route path="/" component={CoreLayout} >
            <IndexRoute getComponent={components.init} onEnter={()=>{
                console.log(new Date().getTime());
            }}/>
            <Route path="/about" getComponent={components.about} onEnter={()=>{
                console.log(new Date().getTime());
            }}/>

            <Route path="/list" getComponent={components.list.init}>
                <Route path="/item/:id" getComponent={components.list.item}/>
            </Route>
        </Route>
    </Router>
);

export default RootRouter;