import React, {
    Component
} from 'react';
import { Link } from 'react-router';

class About extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>关于美团商超</h1>
                {this.props.text}               
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