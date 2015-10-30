import React, {
    Component
} from 'react';
import TextInput from '../components/TextInput.js';
import { Link } from 'react-router';


class Home extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div>
                <h1>欢迎来到美团商超</h1>
                <TextInput text={this.props.text} changeText={this.props.actions.changeText}/>  
                <Link to="/about">去About页</Link>
            </div>
        );
    }
}

export const LayoutComponent = Home;

export function mapStateToProps (state) {
    return {
        text: state.text
    }
}