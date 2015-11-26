import React, {
    Component
} from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
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

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.getComponents = {
            init: (location, cb)=> this._setLoading(()=> {
                require.ensure([], require=> {
                    this._handleLayoutMoulde(cb, require('../layout/Home.js'));
                })
            }),

            about: {
                init: (location, cb)=>this._setLoading(()=> {
                    require.ensure([], require=> {
                        this._handleLayoutMoulde(cb, require('../layout/About.js'));
                    })
                })
            },
            list: {
                init: (location, cb)=>this._setLoading(()=> {
                    require.ensure([], require=> {
                        this._handleLayoutMoulde(cb, require('../layout/List.js'));
                    })
                }),
                item: (location, cb)=>this._setLoading(()=> {
                    require.ensure([], require=> {
                        this._handleLayoutMoulde(cb, require('../layout/Item.js'));
                    })
                })
            }

        };
    }

    _handleLayoutMoulde(callback, layoutMoulde) {
        var LayoutComponent = layoutMoulde.LayoutComponent;
        this.setState({
            loading: false
        });
        var component = connect(
            layoutMoulde.mapStateToProps || function () {
                return {};
            },
            layoutMoulde.mapDispatchToProps || function (dispatch) {
                return {actions: bindActionCreators(actions, dispatch)}
            }
        )(LayoutComponent);
        callback(null, component);
    }


    _setLoading(cb) {
        this.setState({
            loading: true
        });
        cb();
    }


    _createElement(RouteComponent, props) {
        return (
            <RouteComponent {...props} pageLoading={this.state.loading}/>
        )
    }


    render() {
        return (
            <div>
                <Router history={history} createElement={this._createElement.bind(this)}>
                    <Route path="/" component={CoreLayout}>
                        <IndexRoute getComponents={this.getComponents.init}/>

                        <Route path="about" getComponent={this.getComponents.about.init}/>

                        <Route path="list" getComponent={this.getComponents.list.init}>
                            <Route path="/item/:id" getComponent={this.getComponents.list.item}>
                            </Route>
                        </Route>
                    </Route>
                </Router>
            </div>
        )
    }
}


export default Routes;
