import React, {
    Component
} from 'react';
import { Link } from 'react-router';

import '../styles/layout/about.scss';

class About extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="layout layout-about">
                <h1>关于美团商超</h1>
                {this.props.text}  
                <div><img src={require("../imgs/2.png")}/></div>
            </div>
        );
    }
}

export const LayoutComponent = About;

export function mapStateToProps (state) {
    return {
        text: state.text
    }
}